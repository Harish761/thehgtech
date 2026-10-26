// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-27T04:19:55.854973+05:30 IST (2026-10-26 22:49 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-27T04:19:55.153133+05:30",
    "lastUpdatedFormatted": "Oct 27, 2026 at 04:19 AM IST",
    "lastUpdatedUtc": "2026-10-26 22:49 UTC",
    "comparisonPeriod": "Oct 26 \u2013 Oct 27, 2026",
    "stats": {
        "totalIOCs": 112959,
        "byType": {
            "url": 40998,
            "ip": 53509,
            "hash": 2785,
            "domain": 2924,
            "ssl-cert": 11056,
            "ip-range": 1687
        },
        "byVendor": {
            "OpenPhish": 3866,
            "Malware Bazaar": 1606,
            "Spamhaus DROP": 1687,
            "CINS Army": 39705,
            "Blocklist.de": 10939,
            "URLhaus": 35227,
            "ThreatFox": 8868,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11056
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2217,
                "types": [
                    "ssl-cert",
                    "url",
                    "domain",
                    "hash"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1641,
                "types": [
                    "hash",
                    "ip",
                    "url",
                    "ssl-cert",
                    "domain"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1202,
                "types": [
                    "domain",
                    "hash",
                    "ip"
                ]
            },
            {
                "name": "IClickFix",
                "count": 939,
                "types": [
                    "url",
                    "domain"
                ]
            },
            {
                "name": "Mirai",
                "count": 801,
                "types": [
                    "url",
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
                "count": 732,
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
                "name": "OffLoader",
                "count": 554,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 553,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "Unknown Loader",
                "count": 538,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ip"
                ]
            },
            {
                "name": "PureRAT",
                "count": 454,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "AMOS",
                "count": 423,
                "types": [
                    "url",
                    "domain",
                    "hash"
                ]
            },
            {
                "name": "Malware",
                "count": 418,
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
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "b59fc9b78f8adfb12404d606d32f189309dcffdb",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-26 15:23:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "92ebef95bba7efc76f713e8b4aa8d40d45478645",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-26 12:56:12",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "72551f187ace5de0909186afdfea0756e9e3cd6d",
                "description": "Malicious SSL certificate - XoriumStealer C&C",
                "timestamp": "2026-10-26 09:43:57",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "XoriumStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bd8eb13b5f944ac4c4a03a22d8c1b574bd02ee4f",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-26 07:31:08",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a41e8528d9b464b9620f4cc5900c444f291366e7",
                "description": "Malicious SSL certificate - BridgeAgent C&C",
                "timestamp": "2026-10-26 07:28:10",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "BridgeAgent",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e6500b535b03160f06f2ca5c663ae180275dbb3b",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-26 07:24:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "52c7bf8fd5f6312e161c6fe20c68edfa90e137eb",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-26 07:24:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9769dce57ee77a6da94da9c824cd923cb9599892",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-11 15:39:00",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d621cfc19f287afe3b53ee95f4463732d2de342f",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-11 15:26:17",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1c14689e58ebc09098f7c23eec08a314eb17ec76",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-11 14:58:59",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4a0c5885230b991333569023a767f7cc3a773baf",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-11 14:53:57",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-11 14:53:50",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "64d01c8e86e0a3b51c270743879a1fe966af0db4",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-11 14:53:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "06fc4c98539ff52b4e4db8c2a69ba0b755d96bf9",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-11 14:51:28",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-10-11 14:51:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b90f2ec81722662f2f7650e521c362cfe29f8f57",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-10-11 14:51:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2d22783f272d8fb12ff94ac13466fcd9a9a2ccc2",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-10-04 08:00:22",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "fec72b31ad1f9e2e080c83f3964b34fe81e4a8e4",
                "description": "Malicious SSL certificate - NyxarStealer C&C",
                "timestamp": "2026-10-04 07:55:56",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "NyxarStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "bfc3decb728fc2becb887cc23c6cf46a2fdcbb8d",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-04 07:48:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "1c04120f29c25a1e06b4f48651fc9eaaecd45eaa",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-04 07:47:53",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 02:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T02:29:22.014249+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-27T04:19:55.153133+05:30",
        "lastUpdatedFormatted": "Oct 27, 2026 at 04:19 AM IST",
        "lastUpdatedUtc": "2026-10-26 22:49 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 3640,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-26 22:49 UTC"
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
            "iocCount": 1375,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1375,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-26 22:49 UTC"
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
            "iocCount": 1632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1632,
                "newInLastHour": 1,
                "lastUpdate": "2026-10-26 22:49 UTC"
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
            "iocCount": 38447,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 38447,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-26 22:49 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]177[.]162[.]4",
                "1[.]192[.]129[.]106",
                "1[.]193[.]57[.]144",
                "1[.]193[.]63[.]224",
                "1[.]214[.]29[.]155"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10713,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10713,
                "newInLastHour": 5145,
                "lastUpdate": "2026-10-26 22:49 UTC"
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
            "iocCount": 34822,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34822,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-26 22:49 UTC"
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
            "iocCount": 8511,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8511,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-26 22:49 UTC"
            },
            "types": [
                "url",
                "domain",
                "hash",
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
                "lastUpdate": "2026-10-26 22:49 UTC"
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
            "iocCount": 2428,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 2428,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-26 22:49 UTC"
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
            "type": "ssl-cert",
            "indicator": "b59fc9b78f8adfb12404d606d32f189309dcffdb",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-26 15:23:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "92ebef95bba7efc76f713e8b4aa8d40d45478645",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-26 12:56:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "72551f187ace5de0909186afdfea0756e9e3cd6d",
            "description": "Malicious SSL certificate - XoriumStealer C&C",
            "timestamp": "2026-10-26 09:43:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "XoriumStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bd8eb13b5f944ac4c4a03a22d8c1b574bd02ee4f",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-26 07:31:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a41e8528d9b464b9620f4cc5900c444f291366e7",
            "description": "Malicious SSL certificate - BridgeAgent C&C",
            "timestamp": "2026-10-26 07:28:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "BridgeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e6500b535b03160f06f2ca5c663ae180275dbb3b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-26 07:24:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "52c7bf8fd5f6312e161c6fe20c68edfa90e137eb",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-26 07:24:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9769dce57ee77a6da94da9c824cd923cb9599892",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-11 15:39:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d621cfc19f287afe3b53ee95f4463732d2de342f",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-11 15:26:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1c14689e58ebc09098f7c23eec08a314eb17ec76",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-11 14:58:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4a0c5885230b991333569023a767f7cc3a773baf",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-11 14:53:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-11 14:53:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "64d01c8e86e0a3b51c270743879a1fe966af0db4",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-11 14:53:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "06fc4c98539ff52b4e4db8c2a69ba0b755d96bf9",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-11 14:51:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-11 14:51:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b90f2ec81722662f2f7650e521c362cfe29f8f57",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-11 14:51:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2d22783f272d8fb12ff94ac13466fcd9a9a2ccc2",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-10-04 08:00:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fec72b31ad1f9e2e080c83f3964b34fe81e4a8e4",
            "description": "Malicious SSL certificate - NyxarStealer C&C",
            "timestamp": "2026-10-04 07:55:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "NyxarStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bfc3decb728fc2becb887cc23c6cf46a2fdcbb8d",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-04 07:48:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1c04120f29c25a1e06b4f48651fc9eaaecd45eaa",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-04 07:47:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "07fa3f9a48cdbe0d045c16a741f09237aacf2c3d",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-04 07:43:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "eceadbc9a65119bf8542ba54648dbfd4c46d86ff",
            "description": "Malicious SSL certificate - ParallaxRAT C&C",
            "timestamp": "2026-10-04 07:41:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ParallaxRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "80a11d8978c116516b3e6e0dabdcd381bc3511a1",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-04 07:37:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "465359e97babc5c4e5729e628664281dbc8f1297",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-04 07:23:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "30cc75ff5ee466fba938458513d89d8270a5b882",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-04 07:22:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b292d5884328be709c0c79ffd7c82c3fe9846417",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-04 07:22:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "60fd7f114b0a4015ad7f634223491259bc50ab7d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-04 07:22:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-10-04 07:21:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "db7000ad8c148580941840ce41d8efb95f478854",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-12 15:04:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "60d55d4ff506bc654814ba6b26308f999766054a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-12 15:03:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "93edc2f5b2504b5700af766157b2aa96d1edd20f",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-12 15:02:11",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c78af78d930e82506823c8ececf1140c7035d8ef",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-12 15:01:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "74afa65e38769e7e58835fd799e353c2fea3a209",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-12 14:35:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f567b9fc86b00e059bdfea261466360804fbdb38",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-12 13:18:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "be12aa485facf3375cc2416e1f8fb28541136b83",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-29 10:34:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d43c9f366658adf98f67c12dd8fcb3bca52db900",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-29 10:34:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b34240912bc1f09b2e2342363647616b1088a1b0",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-29 06:37:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-08-29 06:37:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ddfdf0aa1923b91144b9886e63430e063ad115a8",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-29 06:27:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e481c58f5012d5d8a5177bf84b055fc93c06e32e",
            "description": "Malicious SSL certificate - NetSupport C&C",
            "timestamp": "2026-08-29 06:26:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "NetSupport",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ef5c2a4999763064e2213dbe1c8ed696c0e8914b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-29 06:25:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "de7567aa2ce367cb0915ffd8eb55b1e320e726c9",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-21 08:57:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b95285b6b061fd0acf6a5ae95433d703f52d1872",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-21 08:55:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dfde6725130631a83b3d0dc221736bad3db16918",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-14 07:36:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a45080c92a0b2314966517a4643ebf280e88a11b",
            "description": "Malicious SSL certificate - LummaStealer C&C",
            "timestamp": "2026-08-14 07:35:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "LummaStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3141245c066d71ef08936296ffea7ea15082f7fd",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-14 07:34:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "46a2a90c5813eda22263c058742902faf1def5a6",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-14 07:33:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "183d02c077142b8701d1a719cc8cee3f8fb76072",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-14 07:33:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d18f8b968bd5981971d6699bdc4ed7b96a3e7248",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-14 07:29:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "95a5eea4198c93663802a9ea047164b5497ea27f",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-14 07:27:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d0944e5765a9b5767d3cf02e3bdd9f466c5391b7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-14 07:25:32",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4ee6cf96fce286a8e41faa52626ccf484c72a772",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-14 07:25:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2b05666e08e41d03ae03a5f282434e36229ea962",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-14 07:24:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "14333675b09013c7299af764816b152b90d29952",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-14 07:24:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-08-14 07:23:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "94c2c17d919e1560dca7d4980e7f9c6eb5a402a0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-14 06:53:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8bdf129211692888e48d0970e49a8559450974dc",
            "description": "Malicious SSL certificate - AdaptixC2 C&C",
            "timestamp": "2026-08-07 11:00:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "AdaptixC2",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d7d3f678f9b63334375db11eecc81be2db4db6f0",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-07 09:36:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cede10451532b072c7017c49ef4fcd273301a826",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-07 09:35:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "769a6310d3d9533c1b3e0ddee3c1b6ebbda60891",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-07 09:35:20",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e63b53c2c26b9bff8f20e018efe7c166ec3c4acd",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-07 09:33:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "131e6cb931dd908cdf9fc5bdd6f8245c9b399ea9",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-07 09:32:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "971af46c861e6f88e60b7c07a4850e76423c5c4a",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-07 09:31:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7bdeed30f5501a30f6aecc3f3cc372f7e52d6ce0",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-07 09:30:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "441b920d869b1e83fe18a2d86d4b6be20099c145",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-07 09:29:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c7abcfeba6d01d0b78b8c690ab1d8d06078ddf11",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-07 09:29:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "147ca23505c924119036d7e4942ddc0737f39adf",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-07 09:04:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ad3cd2a04112f9ffec395649d537dc68bceb3754",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-07 07:56:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "014d51d79c5a5c80042abedb35231581ff07c2e7",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-30 19:52:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-30 19:50:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7767913e33fac1ed9c448460267ca0e6cbe627b4",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-30 19:36:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fe50e363165e3e8d789daf4dc378f50a70f35a8a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-30 19:36:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "16fbb45457a2d8e67c556db46e051893917e2104",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-30 16:35:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1727143583fd38bc4b6b5986f5c7b2c919f885af",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-30 16:34:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7b5604ee44715ba0b4e92c2281f30c5a3416ca41",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-24 06:41:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d08e16884011f6910fe8087a74dac507ff7d2a6a",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-24 06:40:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8f0de55e89d97b4f3581f77805955a2b719563b8",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-23 19:10:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d447d27a879fe80420dc54244870f3f7d25993bb",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-23 18:53:31",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "472239fd43cdfe3b960245672b183c4be200ed7a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-23 18:53:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cd07a2a4c9a93703dc8d1d4e72a12e1cec7f41c7",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-23 18:53:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "73202d8d2ac9a9e04c2bdefa6ea8db2860d779a9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-23 18:52:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "80c36e681125d92c8edfbf7adce71d3bda48d1f9",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-07-23 18:52:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "12b3a868314cd43aa8d304a7e529bbd498ee74ee",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-23 18:50:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "742d693a2a83e70088711c99db5db56b1aa4b9da",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-07-23 18:50:00",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "67044f9079f804d4a6217093c679897fec1f90e2",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-23 18:46:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "bdf0b04d7bb20782260ab2c2340da6b85e9f63c0",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-23 18:43:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c0cd4ac67f8a4febf1c340eb0c914252e8ebf881",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-23 18:43:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "820cd09994b3e76f6e89926a4b94ec0ccacd888c",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-23 18:42:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-23 18:36:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "096f890e1d8d4220a1c0501a50fd6037804412c4",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-23 17:32:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "de7a6af567763e1b73a97ed52a1b2166807d8ffc",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-07-23 14:36:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "16508580f31edaaf4cbe08f9c417840fa4f918d0",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-23 09:01:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "544c1e86e02e5ac18fabe17fff152e4c7e370990",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-07-23 08:58:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6ca71f241dad148aaee6ea4a345e1ef1adaa0ffb",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-23 05:31:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d490abc2eba705abb1b6391b9be0a12f1e75331b",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-16 07:15:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e86cb30b97c8af13b305fa5cdc7357e23f633447",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-16 06:49:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-16 06:46:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "83424f01b8b7262f3a3cd61048d3337afdcca58a",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-16 06:45:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "1db0412338ca7c2407e54aeb6791beeedd146c4c",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-16 06:43:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4264b1c47eac055ce604ef3509d23cd7e3bd584b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-07-16 06:42:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 02:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T02:29:22.014249+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 112959,
            "activeSources": 9,
            "criticalAlerts": 49689,
            "activeCampaigns": 255
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 38385,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 11304,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 5196,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Phishing",
                "count": 3869,
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
                "count": 39705,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]145[.]89[.]105",
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
                "count": 10939,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]73[.]220",
                    "1[.]12[.]55[.]80",
                    "1[.]14[.]192[.]95"
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
                "count": 2217,
                "types": [
                    "ssl-cert",
                    "url",
                    "domain",
                    "hash"
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
                "name": "AsyncRAT",
                "count": 1641,
                "types": [
                    "hash",
                    "ip",
                    "url",
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
                "count": 1202,
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
                "count": 939,
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
                "name": "Unknown malware",
                "count": 843,
                "types": [
                    "url",
                    "domain",
                    "hash",
                    "ip"
                ],
                "sampleIndicators": [
                    "hxxps://washinweb[.]com/",
                    "198[.]44[.]46[.]58",
                    "130[.]94[.]3[.]67"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "No significant changes",
        "totalAttacksThisHour": 20451,
        "lastCalculated": "2026-10-27 04:19 IST"
    }
};
