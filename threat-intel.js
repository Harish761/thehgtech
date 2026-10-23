// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-24T03:05:05.306532+05:30 IST (2026-10-23 21:35 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-24T03:05:04.212130+05:30",
    "lastUpdatedFormatted": "Oct 24, 2026 at 03:05 AM IST",
    "lastUpdatedUtc": "2026-10-23 21:35 UTC",
    "comparisonPeriod": "Oct 23 \u2013 Oct 24, 2026",
    "stats": {
        "totalIOCs": 120248,
        "byType": {
            "url": 47839,
            "ip": 49828,
            "hash": 6464,
            "domain": 3563,
            "ssl-cert": 10882,
            "ip-range": 1672
        },
        "byVendor": {
            "OpenPhish": 2934,
            "Malware Bazaar": 3936,
            "Spamhaus DROP": 1672,
            "CINS Army": 37035,
            "Blocklist.de": 9751,
            "URLhaus": 35628,
            "ThreatFox": 18405,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10882
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2419,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "hash",
                    "domain",
                    "ip",
                    "url"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1659,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ssl-cert",
                    "ip"
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
                    "hash",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "AMOS",
                "count": 763,
                "types": [
                    "hash",
                    "domain",
                    "url"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 739,
                "types": [
                    "hash",
                    "ssl-cert"
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
                "name": "Unknown Loader",
                "count": 707,
                "types": [
                    "hash",
                    "ip",
                    "domain",
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
                "count": 592,
                "types": [
                    "url"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 562,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 556,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 528,
                "types": [
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-24 13:01:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-24T01:25:41.426246+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "aca5d4a8d82ba3feb8e85cd90158efba0d02f03f",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-09-24 12:54:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-24T01:25:41.426246+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "fd081cbaf79596b443b9d591f9dd1390268db7f0",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-24 05:45:33",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-24T01:25:41.426246+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9780ed18b0a63e77e19611e7f46f640a64c1ad5e",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-24 05:23:20",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-24T01:25:41.426246+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cadf6b3f7ceb64de2253e8c0734b867a2762987a",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-24 05:23:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-24T01:25:41.426246+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e0fdfb5fb34b59f3d9d4999eecec5cdfdd47be13",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-24 05:18:54",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-24T01:25:41.426246+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0ce212056f34e68b2912a643dc8488d63512b4a5",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-24 05:15:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-24T01:25:41.426246+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9c6bff6fdc543dd366ea35f536945acd7177853a",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-09-24 05:14:33",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-24T01:25:41.426246+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "75fa04b2a1f77a646a0839d5239fe330a41cd551",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-24 05:14:18",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-24T01:25:41.426246+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-24T01:25:40.252544+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-24T01:25:40.252544+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "27[.]133[.]154[.]218",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-24T01:25:40.252544+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "34[.]204[.]119[.]63",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-24T01:25:40.252544+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "50[.]16[.]16[.]211",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-24T01:25:40.252544+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "1[.]117[.]72[.]220",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-24T01:25:35.823004+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]117[.]73[.]220",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-24T01:25:35.823004+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]12[.]70[.]212",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-24T01:25:35.823004+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]240[.]247",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-24T01:25:35.823004+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]14[.]97[.]120",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-24T01:25:35.823004+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            },
            {
                "type": "ip",
                "indicator": "1[.]15[.]106[.]134",
                "description": "SSH brute-force attacker",
                "timestamp": "2026-10-24 01:25 UTC",
                "source": "Blocklist.de",
                "sourceUrl": "https://www.blocklist.de/",
                "analysisTime": "2026-10-24 01:25 IST",
                "tags": [
                    "ssh",
                    "brute-force"
                ],
                "addedAt": "2026-10-24T01:25:35.823004+05:30",
                "campaign": "SSH Attacks",
                "confidence": "Medium (Automated Report)"
            }
        ],
        "lastUpdated": "2026-10-24T03:05:04.212130+05:30",
        "lastUpdatedFormatted": "Oct 24, 2026 at 03:05 AM IST",
        "lastUpdatedUtc": "2026-10-23 21:35 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 2934,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 2934,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-23 21:34 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://www[.]in-patrika[.]vercel[.]app/",
                "hxxps://amiable-someone-703260[.]framer[.]app/",
                "hxxps://9ervp-qmf-k9yx8-d15udr-omxlc[.]pages[.]dev/",
                "hxxp://sp28ct-gurem-biz-qazel-zotek[.]pages[.]dev/",
                "hxxps://hopeful-package-333853[.]framer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3936,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3936,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-23 21:34 UTC"
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
            "iocCount": 1689,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1689,
                "newInLastHour": 17,
                "lastUpdate": "2026-10-23 21:34 UTC"
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
            "iocCount": 37189,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 37189,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-23 21:34 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]168[.]172[.]140",
                "1[.]183[.]41[.]170",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]224"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9775,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9775,
                "newInLastHour": 4855,
                "lastUpdate": "2026-10-23 21:34 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]117[.]73[.]220",
                "1[.]12[.]70[.]212",
                "1[.]14[.]240[.]247",
                "1[.]14[.]97[.]120"
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
                "lastUpdate": "2026-10-23 21:34 UTC"
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
            "iocCount": 18405,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 18405,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-23 21:34 UTC"
            },
            "types": [
                "hash",
                "domain",
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
            "stats": {
                "total": 5,
                "newInLastHour": 5,
                "lastUpdate": "2026-10-23 21:35 UTC"
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
            "iocCount": 11036,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11036,
                "newInLastHour": 154,
                "lastUpdate": "2026-10-23 21:35 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f8ac3547b3ec163234ebcb90d325eec86069a42f",
                "3c99c5d67f2afafad06b3da29af5d1ab97bf5273",
                "4bba6041d3bd00dd1eb5d436f7d17c7e786eb5ee",
                "e8e1ee53a4b01fe4d284f3edf82c0dfd5b6c63cf",
                "d0cbe76e7158ac0762ebaf34f37e8a357cdfb6b2"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-24 13:01:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-24T01:25:41.426246+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aca5d4a8d82ba3feb8e85cd90158efba0d02f03f",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-24 12:54:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-24T01:25:41.426246+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fd081cbaf79596b443b9d591f9dd1390268db7f0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-24 05:45:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-24T01:25:41.426246+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9780ed18b0a63e77e19611e7f46f640a64c1ad5e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-24 05:23:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-24T01:25:41.426246+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cadf6b3f7ceb64de2253e8c0734b867a2762987a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-24 05:23:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-24T01:25:41.426246+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e0fdfb5fb34b59f3d9d4999eecec5cdfdd47be13",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-24 05:18:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-24T01:25:41.426246+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0ce212056f34e68b2912a643dc8488d63512b4a5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-24 05:15:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-24T01:25:41.426246+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c6bff6fdc543dd366ea35f536945acd7177853a",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-24 05:14:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-24T01:25:41.426246+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "75fa04b2a1f77a646a0839d5239fe330a41cd551",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-24 05:14:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-24T01:25:41.426246+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-24T01:25:40.252544+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-24T01:25:40.252544+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-24T01:25:40.252544+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-24T01:25:40.252544+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-24T01:25:40.252544+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]72[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]73[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]70[.]212",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]97[.]120",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]221[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]186[.]47",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]115[.]20",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]34[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]236[.]176",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]218[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]220[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]34[.]59[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]102[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]114[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]227[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]248[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]105[.]50",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]109",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]109[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]149",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]204",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]158[.]179",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]1[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]53[.]236[.]155",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]67[.]137[.]42",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]182[.]189",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]4",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]199[.]69",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]203[.]141",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]205[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]206[.]202",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]209[.]234",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]212[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]214[.]116",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]221[.]200",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]224[.]241",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]225[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]229[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]231[.]98",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-24 01:25 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-24 01:25 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-24T01:25:35.823004+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 120248,
            "activeSources": 9,
            "criticalAlerts": 53667,
            "activeCampaigns": 397
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 42532,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11135,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 10564,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 2937,
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
                "count": 37035,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]168[.]172[.]140"
                ]
            },
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
                "name": "SSH Attacks",
                "count": 9751,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]72[.]220",
                    "1[.]117[.]73[.]220",
                    "1[.]12[.]70[.]212"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 2921,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://www[.]in-patrika[.]vercel[.]app/",
                    "hxxps://amiable-someone-703260[.]framer[.]app/",
                    "hxxps://9ervp-qmf-k9yx8-d15udr-omxlc[.]pages[.]dev/"
                ]
            },
            {
                "name": "Vidar",
                "count": 2419,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ssl-cert",
                    "ip"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "hash",
                    "domain",
                    "ip",
                    "url"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1672,
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
                "count": 1659,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ssl-cert",
                    "ip"
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
        "totalAttacksThisHour": 20331,
        "lastCalculated": "2026-10-24 03:05 IST"
    }
};
