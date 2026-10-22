// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-23T04:45:37.667857+05:30 IST (2026-10-22 23:15 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-23T04:45:36.830546+05:30",
    "lastUpdatedFormatted": "Oct 23, 2026 at 04:45 AM IST",
    "lastUpdatedUtc": "2026-10-22 23:15 UTC",
    "comparisonPeriod": "Oct 22 \u2013 Oct 23, 2026",
    "stats": {
        "totalIOCs": 117172,
        "byType": {
            "url": 47675,
            "ip": 46906,
            "hash": 6537,
            "domain": 3563,
            "ssl-cert": 10805,
            "ip-range": 1686
        },
        "byVendor": {
            "OpenPhish": 2334,
            "Malware Bazaar": 4009,
            "Spamhaus DROP": 1686,
            "CINS Army": 34678,
            "Blocklist.de": 9186,
            "URLhaus": 35628,
            "ThreatFox": 18841,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10805
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2388,
                "types": [
                    "domain",
                    "ssl-cert",
                    "ip",
                    "hash",
                    "url"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "url",
                    "domain",
                    "ip",
                    "hash"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1657,
                "types": [
                    "domain",
                    "ssl-cert",
                    "ip",
                    "hash",
                    "url"
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
                    "domain",
                    "ip",
                    "hash"
                ]
            },
            {
                "name": "AMOS",
                "count": 763,
                "types": [
                    "url",
                    "domain",
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
                "count": 729,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "Unknown Loader",
                "count": 707,
                "types": [
                    "url",
                    "domain",
                    "ip",
                    "hash"
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
                "name": "LummaStealer",
                "count": 560,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 544,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-23T03:21:24.647926+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-23T03:21:24.647926+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-23T03:21:24.647926+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-23T03:21:24.647926+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-23T03:21:24.647926+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]117[.]72[.]220",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]117[.]73[.]220",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]12[.]36[.]175",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]12[.]55[.]80",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]12[.]70[.]212",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]240[.]247",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]94[.]193",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]97[.]120",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]15[.]106[.]134",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]15[.]30[.]237",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]214[.]214[.]114",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]222[.]42[.]237",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]238[.]106[.]229",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]27[.]251[.]252",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]52[.]112[.]91",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-23 03:21 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-23 03:21 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-23T03:21:20.242906+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-10-23T04:45:36.830546+05:30",
        "lastUpdatedFormatted": "Oct 23, 2026 at 04:45 AM IST",
        "lastUpdatedUtc": "2026-10-22 23:15 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 2334,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 2334,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-22 23:15 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://my-top-juno-webmail-site[.]webflow[.]io/",
                "hxxps://g5[.]lu/tyc4k",
                "hxxp://bridge-browser[.]framer[.]website/",
                "hxxp://new-indexproject[.]vercel[.]app/",
                "hxxps://sp25ct-zunelo-biz-mareku-vorik[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4009,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 4009,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-22 23:15 UTC"
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
                "newInLastHour": 2,
                "lastUpdate": "2026-10-22 23:15 UTC"
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
            "iocCount": 35033,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 35033,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-22 23:15 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]177[.]162[.]2",
                "1[.]183[.]41[.]171",
                "1[.]188[.]100[.]173"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9250,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9250,
                "newInLastHour": 5113,
                "lastUpdate": "2026-10-22 23:15 UTC"
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
                "lastUpdate": "2026-10-22 23:15 UTC"
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
            "iocCount": 18841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 18841,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-22 23:15 UTC"
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
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-22 23:15 UTC"
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
            "iocCount": 10975,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10975,
                "newInLastHour": 222,
                "lastUpdate": "2026-10-22 23:15 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "79928c5b3aaa3ea9d05750ba6b2af2aa6cbea154",
                "7a5cbff9325f0ca3de3f020b3ba02e51390807cf",
                "7ed29169b508169575d0d26850aca8a93044067c",
                "082cdbff4a21322dcf87bbc200976465f072ae6e",
                "a546ecee7425b15ec2b0b63cd012b897d627cdc9"
            ]
        }
    },
    "overview": [
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T03:21:24.647926+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T03:21:24.647926+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T03:21:24.647926+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T03:21:24.647926+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T03:21:24.647926+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]72[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]73[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]36[.]175",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]70[.]212",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]94[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]97[.]120",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]30[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]52[.]112[.]91",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]115[.]20",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]34[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]236[.]176",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]218[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]220[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]66[.]58",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]114[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]227[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]248[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]105[.]50",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]186",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]109[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]110[.]8",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]158[.]179",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]34[.]130",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]1[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]118[.]120",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]152[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]25[.]87",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]53[.]236[.]155",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]67[.]137[.]42",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]109[.]241",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]182[.]189",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]4",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]199[.]69",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]203[.]141",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]205[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]209[.]234",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]212[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]116",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]98",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]221[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]225[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]229[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]230[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 03:21 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 03:21 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T03:21:20.242906+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 117172,
            "activeSources": 9,
            "criticalAlerts": 53663,
            "activeCampaigns": 403
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
                "count": 11058,
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
                "count": 2337,
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
                "name": "CINS Threat List",
                "count": 34678,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]193[.]57[.]156"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 9186,
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
                "name": "Vidar",
                "count": 2388,
                "types": [
                    "domain",
                    "ssl-cert",
                    "ip",
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
                "name": "Generic Phishing",
                "count": 2327,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://my-top-juno-webmail-site[.]webflow[.]io/",
                    "hxxps://g5[.]lu/tyc4k",
                    "hxxp://bridge-browser[.]framer[.]website/"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "url",
                    "domain",
                    "ip",
                    "hash"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1686,
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
                "count": 1657,
                "types": [
                    "domain",
                    "ssl-cert",
                    "ip",
                    "hash",
                    "url"
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
        "totalAttacksThisHour": 20642,
        "lastCalculated": "2026-10-23 04:45 IST"
    }
};
