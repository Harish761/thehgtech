// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-23T10:06:33.685175+05:30 IST (2026-10-23 04:36 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-23T10:06:32.750921+05:30",
    "lastUpdatedFormatted": "Oct 23, 2026 at 10:06 AM IST",
    "lastUpdatedUtc": "2026-10-23 04:36 UTC",
    "comparisonPeriod": "Oct 22 \u2013 Oct 23, 2026",
    "stats": {
        "totalIOCs": 117762,
        "byType": {
            "url": 47675,
            "ip": 47325,
            "hash": 6537,
            "domain": 3563,
            "ssl-cert": 10975,
            "ip-range": 1687
        },
        "byVendor": {
            "OpenPhish": 2334,
            "Malware Bazaar": 4009,
            "Spamhaus DROP": 1687,
            "CINS Army": 35033,
            "Blocklist.de": 9250,
            "URLhaus": 35628,
            "ThreatFox": 18841,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10975
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2453,
                "types": [
                    "ssl-cert",
                    "hash",
                    "url",
                    "ip",
                    "domain"
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
                "count": 1664,
                "types": [
                    "ssl-cert",
                    "hash",
                    "url",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "IClickFix",
                "count": 1280,
                "types": [
                    "domain",
                    "url"
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
                    "domain",
                    "ip"
                ]
            },
            {
                "name": "AMOS",
                "count": 763,
                "types": [
                    "hash",
                    "url",
                    "domain"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 740,
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
                    "domain",
                    "url",
                    "ip"
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
                "count": 563,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 548,
                "types": [
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "1ccf99a4deb337e800230280e82782da64384694",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-08 14:34:06",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0916fba7d3ffe7cf2d7f6803f098cdc96077a842",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-08 09:02:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "de58e571469c72f26cfb59884e06e2aa5db7d6ff",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-23 15:11:06",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "180512bde178c27cef6b8597f301558d88f853e2",
                "description": "Malicious SSL certificate - SeroRAT C&C",
                "timestamp": "2026-09-23 15:11:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "SeroRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-09 11:16:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "077be211823898ed4eb3d3faf920781321f7ca5c",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-09 11:12:55",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8d2a3d5cb72fac2e04ef51b3e056ab6b75e3f408",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-09 11:12:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "629ea8772f7b1e8bf216dfc3b2170eb903ee8faa",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-09 11:11:48",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d359f356ed88b04089b7afe53f13a913382bd4da",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-09 08:57:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2be2964d2711f536de55aa929fa612ba69ebc405",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-09 08:54:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ba98762c6eadc76480a1a97ec9c8b54a3002bc10",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-09 08:39:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "401d739effc60f0ddbfc096d8b7a64625744824a",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-09 08:39:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3a62153757fc44e7a948a9c289a08798ea8e8487",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-09 08:39:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9f7f53410f881c40adf0d4e16a67fd8c4446452a",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-09 08:38:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "7f1ed4a13d8a2ba6e690ecaf66a9dfa42dd8d9d1",
                "description": "Malicious SSL certificate - ValleyRAT C&C",
                "timestamp": "2026-08-25 14:43:34",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "ValleyRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "edd934290c1a24e425d4d6f6c82a08ebc392b89f",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-08-25 14:38:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b0cf2650da454ed5cc67102d95f8b9ba00602ead",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-08-25 14:38:35",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "25042ea148aa7ccb23ebabb701cacca1d2fbd1d4",
                "description": "Malicious SSL certificate - HypeAgent C&C",
                "timestamp": "2026-08-25 14:37:51",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "HypeAgent",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5d801efeb2e22aa0da901ffbce45db05a80a7b0b",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-08-25 14:36:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "3595cb507d47314a6749679e4217ec993c5c3691",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-08-25 14:35:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 04:45 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T04:45:33.916307+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-23T10:06:32.750921+05:30",
        "lastUpdatedFormatted": "Oct 23, 2026 at 10:06 AM IST",
        "lastUpdatedUtc": "2026-10-23 04:36 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 2634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 2634,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-23 04:36 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://system-update-account-ilpro[.]vercel[.]app/account-center-support",
                "hxxps://www[.]roblox[.]com[.]et/users/1654175985/profile",
                "hxxp://bc23[.]primus[.]rcassocies[.]com/W_PRIMUS_WINE_PROD/SignIn?ReturnUrl=%2FW_PRIMUS_WINE_PROD%2F",
                "hxxp://accueilboitear24seconnecte77[.]jimdofree[.]com/",
                "hxxps://accueilsurlespacear24-8744[.]jimdofree[.]com/"
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
                "lastUpdate": "2026-10-23 04:36 UTC"
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
            "iocCount": 1688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1688,
                "newInLastHour": 1,
                "lastUpdate": "2026-10-23 04:36 UTC"
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
            "iocCount": 35961,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 35961,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-23 04:36 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]149[.]30",
                "1[.]168[.]172[.]140",
                "1[.]193[.]57[.]156",
                "1[.]214[.]29[.]155",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9390,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9390,
                "newInLastHour": 5102,
                "lastUpdate": "2026-10-23 04:36 UTC"
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
                "lastUpdate": "2026-10-23 04:36 UTC"
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
                "lastUpdate": "2026-10-23 04:36 UTC"
            },
            "types": [
                "hash",
                "url",
                "ip",
                "domain"
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
                "lastUpdate": "2026-10-23 04:36 UTC"
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
            "iocCount": 11027,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11027,
                "newInLastHour": 52,
                "lastUpdate": "2026-10-23 04:36 UTC"
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
            "type": "ssl-cert",
            "indicator": "1ccf99a4deb337e800230280e82782da64384694",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-08 14:34:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0916fba7d3ffe7cf2d7f6803f098cdc96077a842",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-08 09:02:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "de58e571469c72f26cfb59884e06e2aa5db7d6ff",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-23 15:11:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "180512bde178c27cef6b8597f301558d88f853e2",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 15:11:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-09 11:16:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "077be211823898ed4eb3d3faf920781321f7ca5c",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-09 11:12:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8d2a3d5cb72fac2e04ef51b3e056ab6b75e3f408",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-09 11:12:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "629ea8772f7b1e8bf216dfc3b2170eb903ee8faa",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-09 11:11:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d359f356ed88b04089b7afe53f13a913382bd4da",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-09 08:57:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2be2964d2711f536de55aa929fa612ba69ebc405",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-09 08:54:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ba98762c6eadc76480a1a97ec9c8b54a3002bc10",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-09 08:39:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "401d739effc60f0ddbfc096d8b7a64625744824a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-09 08:39:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a62153757fc44e7a948a9c289a08798ea8e8487",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-09 08:39:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f7f53410f881c40adf0d4e16a67fd8c4446452a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-09 08:38:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7f1ed4a13d8a2ba6e690ecaf66a9dfa42dd8d9d1",
            "description": "Malicious SSL certificate - ValleyRAT C&C",
            "timestamp": "2026-08-25 14:43:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "ValleyRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "edd934290c1a24e425d4d6f6c82a08ebc392b89f",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-25 14:38:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b0cf2650da454ed5cc67102d95f8b9ba00602ead",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-25 14:38:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "25042ea148aa7ccb23ebabb701cacca1d2fbd1d4",
            "description": "Malicious SSL certificate - HypeAgent C&C",
            "timestamp": "2026-08-25 14:37:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "HypeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5d801efeb2e22aa0da901ffbce45db05a80a7b0b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-25 14:36:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3595cb507d47314a6749679e4217ec993c5c3691",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-08-25 14:35:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dbb503055e3d10fa9d7c07f445e1cf6e5959f038",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-25 14:32:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f351f7dbe9c583f75758b39cd307f5359d110c73",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-18 16:07:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-18 16:07:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "edbd45e54859ad7082efb79465ba938bb2581132",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-18 16:04:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-18 16:02:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ffa6be04fe2e9c6b79776dcfc7ad3f41a403a64d",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-18 15:59:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "952bcdeea03ea702626a30069c949581bf2d1b05",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-18 15:49:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b00aa24dc7459e8a0a8f5fbb3d2a27bd646de1e3",
            "description": "Malicious SSL certificate - HypeAgent C&C",
            "timestamp": "2026-08-18 09:27:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "HypeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a52e17fe607d1e562e0cb67c6f2342e6b4dbf191",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-18 09:12:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8d6fdff168340e954aad4f0f924276cd5b6e31b2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-18 09:05:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "95fcb5ff7bd5e1d06b1e585af4ba3ceb95f01164",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:31:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1674f349ec288a75ac123a1752d433a21ceddcef",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:30:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "664729bef77ee9c9f2f523fc1305ef65fa05dbae",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:29:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e11c9cfa144ec7da0f1b77838fd02cfb7e897eaa",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:28:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1b48b0bd62383ba8f49d25e8584a290016730f3d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 12:28:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dd7323e5437c503d3b0f4bc1d268dfffd58b80ab",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-11 09:52:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cc7d79ea8261997821ca3c8ad44b61023ad5af89",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 08:10:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "19d7b8b5842177ba762fb0b30fd1368e953e73e9",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-11 08:06:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "aec890965f808398c124d16d25255ac4ed1ce6ca",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 07:50:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "99e8e296eae361f7ddeb6ce7cc6d4bd521ee24b3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 06:48:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4672fba181056b9df706573af71ad6462ea3df67",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-11 06:43:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a0b782d798a48e117c995c9deb013c5cffb0ac58",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-11 06:41:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b5f071dd28b511f0b4b067507602a779feb4301f",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-11 06:41:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7c3a6c14032bce06d59bd68a7b61a8b88fe222ac",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-11 06:41:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f3a38c4fa9a59b250a0a2d351af061fce6a21995",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-11 06:23:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ae2744e9ad9fb574cb79ceff176cbfc982e4fddb",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-11 06:22:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8a6a82fdb53374bd62b62120a007ceb19d4ad827",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-11 06:22:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8befa0033eaaa1693777be12aa7d9236a9caf188",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-11 06:16:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4bd9fa1c2cefa0f68b276923d33e9989e2fd0031",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-04 06:24:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b14379b3743c37a26289499aca921c99998649f1",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-08-04 06:23:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "369b439f1afec9b1ae1d5de29a603f6ba34a3039",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-04 06:23:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "61042420cd71b5edcdd9ef7ff070deef7398a725",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-04 06:02:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b2e42b1a036329fa6fef4477d35887b1d357711e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-04 05:39:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "58243e4728cadacb308dfa0b964571e374ac3c1c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-04 05:27:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "659379b480f2d3448f8946b0961115e00bfdbce0",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-13 17:07:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-13 17:06:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4ab5197c559d38f2d4886d00f7140b09318bc5ca",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-13 17:06:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "11079f607edb45c25b11a2106e6ba510a055b98f",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-13 17:04:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "df82e74fbb5bc5ae778b1cc4012b097f1f9a133d",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-13 13:54:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "501d817bb1780acfe5e47082c43472bda8068e4d",
            "description": "Malicious SSL certificate - LummaStealer C&C",
            "timestamp": "2026-07-13 13:54:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "LummaStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c19f09bd89b19cd3223d0c039c41a5baa7307178",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-13 13:53:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8f000dbd7cc73e8857d42a3c7c15676305af6889",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-13 13:53:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "12518c4545d6d6d57f43040cdd2dc966cd5ea6c4",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-07-13 13:51:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cd1f1ffdd1055c9540758327ff1d7698068c9a93",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-13 10:08:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "85f5e4e0d8c608a11c4e493eb349a7a4c8c4bc9d",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-13 10:07:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4c67471be88dd63db2466621fe9e2a2d848f5b79",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-07-13 10:07:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d85fb33f78921ec5ce0a2c2a9e9f2b0e8281bfc9",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-13 10:06:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "38d23ac7c8e3f29dc51158a77665811f6a5e1341",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-13 10:06:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "745edb7835e0a1ef871d1c027651ed4dfbfd406c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-13 09:57:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "94eea408b8c901de2367e36bf291ba947b368ee5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-13 09:57:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "59658d5b08a31b31941b598ef4287fecf26a5e54",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-06 08:54:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6cd9f5c15b172c39fd51e13d36d39c73a4d1395a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-06 08:26:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ec452c3c30499a1a6983877a2d881c1a8f2955ea",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-06 08:20:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e553bfd006337f4cb3a3acf5a681980d184b79e6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-06 08:20:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c19f8a859e5635a3601eb27c9ac59c88dcf91be1",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-06 08:20:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d65481efc375fcd9390ace11d51556734efd3676",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-06 08:19:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8680ee5519b665906679e979e8b2c949dac26fa9",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-06 08:19:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "51addb0b10ea11992e4a7dcc168fe8c6eaddf0be",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-06 08:18:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "faef3e27e526f960dcf92e0865f82081ecbfbe2d",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-06 08:17:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "83ff65960d2df4b29e78d6fd0342dcd5f053eb13",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-07-06 08:15:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4525d76a2086fb71cddff33816f107dd8a57564c",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-06 08:15:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "41cbe997a63cc9211fd19593cfcf27602d10bcd8",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-06 08:14:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d4611858ce65e847598f70af1a9b98ee96cc20f8",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-06 08:14:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "080078d32e98e5a1a475bd3c1aafde78293734d1",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-06 08:14:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4e11bfd54a27de8b3338b42301ccdf02a21d92a5",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-06 08:14:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ecb3aee37c800e726dc0c52a11ea76718bd3e767",
            "description": "Malicious SSL certificate - RCSBotnet C&C",
            "timestamp": "2026-07-06 08:13:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "RCSBotnet",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a9f2914bb882008d0bb1bd515e4b5b289eba24a0",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-14 12:20:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d3cc58d42356a8c4436ae4c534058891f7aa4704",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-14 11:28:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "91277e257db81a1f95bfac515bf69523c78d1274",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-14 11:25:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bebfbdbe08ede143137c80c0e337e686f1698299",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-14 11:02:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "454a92d16f440ad8f180e21da8ee6552b151c25c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-07 07:24:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bfc93167d1f9c356979db538f40440513ebd88d1",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-02 07:01:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "80bd0d28db71c8bb7c56055d2894594f55054be6",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-05-02 06:48:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dfbc430daf40f0448ed30170103e9d829ee6b2e2",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-05-02 06:46:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a41f3065955b7a428985483c22176fe4e53776ce",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-02 06:46:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5eae97dda45d2d2e5f056a5490cf31d7c8c6d10c",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-04-17 19:17:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "143869dfe5d39a552b1960012a6efb89821b7b39",
            "description": "Malicious SSL certificate - SantaStealer C&C",
            "timestamp": "2026-04-17 18:57:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "SantaStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f78be258c92a94888f2e283ddb807dcc22689c86",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-04-17 18:43:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ba27d3fc47d6aa4c0760bb0df84ba2fbb222a7e1",
            "description": "Malicious SSL certificate - SimpleHelp C&C",
            "timestamp": "2026-04-17 18:39:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "SimpleHelp",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "38e6803834672d7669a414b41a68a80800041309",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-27 15:29:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 04:45 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T04:45:33.916307+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 117762,
            "activeSources": 9,
            "criticalAlerts": 53833,
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
                "count": 11228,
                "trend": "stable",
                "percentage": 1
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
                "count": 35033,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]177[.]162[.]2"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 9250,
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
                "count": 2453,
                "types": [
                    "ssl-cert",
                    "hash",
                    "url",
                    "ip",
                    "domain"
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
                "name": "AsyncRAT",
                "count": 1664,
                "types": [
                    "ssl-cert",
                    "hash",
                    "url",
                    "ip",
                    "domain"
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
        "totalAttacksThisHour": 20460,
        "lastCalculated": "2026-10-23 10:06 IST"
    }
};
