// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-28T02:08:02.876975+05:30 IST (2026-10-27 20:38 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-28T02:08:02.003424+05:30",
    "lastUpdatedFormatted": "Oct 28, 2026 at 02:08 AM IST",
    "lastUpdatedUtc": "2026-10-27 20:38 UTC",
    "comparisonPeriod": "Oct 27 \u2013 Oct 28, 2026",
    "stats": {
        "totalIOCs": 109647,
        "byType": {
            "url": 40170,
            "ip": 53090,
            "hash": 1560,
            "domain": 2258,
            "ssl-cert": 10924,
            "ip-range": 1645
        },
        "byVendor": {
            "OpenPhish": 3932,
            "Malware Bazaar": 872,
            "Spamhaus DROP": 1645,
            "CINS Army": 39583,
            "Blocklist.de": 10854,
            "URLhaus": 34822,
            "ThreatFox": 7010,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10924
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1858,
                "types": [
                    "url",
                    "ssl-cert",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1628,
                "types": [
                    "ssl-cert",
                    "hash",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1188,
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
                "count": 724,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "IClickFix",
                "count": 709,
                "types": [
                    "url",
                    "domain"
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
                "name": "ConnectWise",
                "count": 550,
                "types": [
                    "ssl-cert",
                    "hash"
                ]
            },
            {
                "name": "OffLoader",
                "count": 537,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "PureRAT",
                "count": 433,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Malware",
                "count": 413,
                "types": [
                    "ssl-cert"
                ]
            },
            {
                "name": "Mirai",
                "count": 411,
                "types": [
                    "hash",
                    "ip",
                    "domain"
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
                "count": 350,
                "types": [
                    "ssl-cert",
                    "ip"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "e5eefcb70e310314c73361c957aa2a1f970fbd65",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-27 06:31:58",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a54ad395d86f7e564d4c23c150ce28359538d64d",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-27 06:27:02",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9aa781171a4918d3e4069dd810fb846797806db7",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-27 06:24:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ba95841b4146ce72ee532c53be1651bc97d73388",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-27 06:23:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "109f3ba748ac0f3a080d01039cfd0de392b83b30",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-10-27 06:23:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4500afbacb26f57137b330589027e0560957267f",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-10-27 06:22:57",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4d319fb9760ff822c5079e3ddbda8304de89f565",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-27 06:22:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4269a895d221ce05070c61672e42fc549739137e",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-27 06:20:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5570df9517e8673cf294c4ae0314ff1e95e10c7a",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-27 06:20:10",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "629700c6fb58a48ce5c34e9e830225fad3e62634",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-10-12 07:35:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6ae4974b641caa8b6aae8d3392e7fb4f8c7e3577",
                "description": "Malicious SSL certificate - DCAgentRMM C&C",
                "timestamp": "2026-10-12 07:35:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "DCAgentRMM",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "245f189a60a8b20a5dc562134b3d55d6539ac186",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-12 06:13:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ab1d61a4f4692b105daa345a7185119f0d29cb79",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-12 06:13:40",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0db74536080bbf99f4e8e8b53efd477d1ccaf3e0",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-09-20 09:46:58",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8daac8268eaa54e2c2d1aef6108fba9ba29eaa36",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-20 08:21:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "372b91c0d31a75b4e1765af998d984881e34dab1",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-09-20 06:37:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-20 06:34:44",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-20 06:31:38",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cc50b31d95b1d87ac2b597a84544d9368780978a",
                "description": "Malicious SSL certificate - OrcusRAT C&C",
                "timestamp": "2026-09-20 06:31:03",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "OrcusRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ca488616709ba9b2d92517094a073d4b6c6849f1",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-20 06:30:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-27 19:51 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-27T19:51:45.517296+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-28T02:08:02.003424+05:30",
        "lastUpdatedFormatted": "Oct 28, 2026 at 02:08 AM IST",
        "lastUpdatedUtc": "2026-10-27 20:38 UTC"
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
                "lastUpdate": "2026-10-27 20:37 UTC"
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
            "iocCount": 737,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 737,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-27 20:37 UTC"
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
            "iocCount": 1754,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1754,
                "newInLastHour": 114,
                "lastUpdate": "2026-10-27 20:37 UTC"
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
            "iocCount": 40131,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 40131,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-27 20:37 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]145[.]89[.]105",
                "1[.]15[.]14[.]29",
                "1[.]193[.]57[.]144",
                "1[.]220[.]119[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11012,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11012,
                "newInLastHour": 5580,
                "lastUpdate": "2026-10-27 20:37 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]12[.]55[.]80",
                "1[.]14[.]149[.]30",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247"
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
                "lastUpdate": "2026-10-27 20:37 UTC"
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
            "iocCount": 6607,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6607,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-27 20:37 UTC"
            },
            "types": [
                "url",
                "hash",
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
                "lastUpdate": "2026-10-27 20:37 UTC"
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
            "iocCount": 11064,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 11064,
                "newInLastHour": 153,
                "lastUpdate": "2026-10-27 20:38 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b3419f377a0765d386af3f3a61bede653db873f7",
                "891b265025da1fe909b4792dfe0f3df462694bef",
                "d8d068667512bafa6720747c23266764f70638a9",
                "f7c6d6e9767952571df5b177956e71f6e664711d",
                "9c1e389a6cea4a7eb32b2e1d89acedfd5b7a52f9"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "e5eefcb70e310314c73361c957aa2a1f970fbd65",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-27 06:31:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a54ad395d86f7e564d4c23c150ce28359538d64d",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-27 06:27:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9aa781171a4918d3e4069dd810fb846797806db7",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-27 06:24:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ba95841b4146ce72ee532c53be1651bc97d73388",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-27 06:23:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "109f3ba748ac0f3a080d01039cfd0de392b83b30",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-10-27 06:23:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4500afbacb26f57137b330589027e0560957267f",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-10-27 06:22:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4d319fb9760ff822c5079e3ddbda8304de89f565",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-27 06:22:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4269a895d221ce05070c61672e42fc549739137e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-27 06:20:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5570df9517e8673cf294c4ae0314ff1e95e10c7a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-27 06:20:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "629700c6fb58a48ce5c34e9e830225fad3e62634",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-12 07:35:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6ae4974b641caa8b6aae8d3392e7fb4f8c7e3577",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-10-12 07:35:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "245f189a60a8b20a5dc562134b3d55d6539ac186",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-12 06:13:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ab1d61a4f4692b105daa345a7185119f0d29cb79",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-12 06:13:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0db74536080bbf99f4e8e8b53efd477d1ccaf3e0",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-20 09:46:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8daac8268eaa54e2c2d1aef6108fba9ba29eaa36",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-20 08:21:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "372b91c0d31a75b4e1765af998d984881e34dab1",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-20 06:37:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-20 06:34:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-20 06:31:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cc50b31d95b1d87ac2b597a84544d9368780978a",
            "description": "Malicious SSL certificate - OrcusRAT C&C",
            "timestamp": "2026-09-20 06:31:03",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OrcusRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ca488616709ba9b2d92517094a073d4b6c6849f1",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-20 06:30:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ed64fe5bf9ba187fb8b7a54fce4a986d6681f4f2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-20 06:30:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "15a05c644b5ec4ed5c0ba785992c3a4410fbef2a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-20 06:29:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "efdc9593038f9c5962ec9529b7dd02ce4b40f6c9",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-20 06:29:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a91a4aef42d019cf22e2f7a7ee737cff41012cf",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-20 06:29:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7704ef9bd99fb57c8f194fdf7fdc950d4bcd26af",
            "description": "Malicious SSL certificate - DCAgentRMM C&C",
            "timestamp": "2026-09-20 06:28:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "DCAgentRMM",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c0a9291be46e42b67835dff9e6c767fd6660287",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-22 11:04:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "19cf66baa4727b080e283d10284993170c9b462b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-22 11:00:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "150e9fffc913a1c87bf94e7f2ad0354d4b6afea1",
            "description": "Malicious SSL certificate - Malware distribution",
            "timestamp": "2026-08-22 10:32:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "01162aa2c2be7f9d16f646b94a1245726c68b110",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-22 10:29:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d8bdc29b8e9cdd5a849185ca6042d9c6f90d12e7",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-08-22 10:25:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8d8f084ddf2729d1f4747f2a428dd8d9b13e1cfa",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-08-22 10:22:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "adfc8dd0c5e99a8e33b1df7d5c10fc9653342491",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-22 10:20:40",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0c587f31dc58c33ef2e3632bb161f4d52231b7c1",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-08-22 10:20:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a6df6eca49e13a8c5ebba1f86ca4c5766b1c1b97",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-17 13:34:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3cf6a282d22b606bce0ba5ad74526257eff4cf81",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-17 10:53:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3fb1dbcabe3bab0eb06fefe295821bff1007fb25",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-07-17 10:53:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "50cad154b9d5fdd19c3f67162257de03d3a6afcd",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-07-17 10:52:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f9a55e7a59b0fcbd7df9f5a445475480368598ce",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-07-17 10:52:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c31650da58712771ad83fd5c6cef97905a255cc5",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-07-17 10:52:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "573ff46149f8feb36cd0dbf80427b88aa156ed7b",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-07-17 06:43:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "35f7eb4f519f8878beb88a02587ce4d82df24ce6",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-25 19:05:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "070ad9d359151a2de5af7cd41295758bf1f4227a",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-06-18 13:20:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7125469fa26c30ae4d89eb2a8bec1c7a382dcd7d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-18 13:17:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a23f624eee7847ff3939994ff8922ba8eb645e26",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-06-18 13:16:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "61102ef78d52d044b8ded80e2ad0471c68e6f962",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-06-18 13:15:59",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "49aa56f946089804e2bc8ae77a7b2fbaa5860e50",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-06-18 13:15:47",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a4d0044eed173808eb2c6b86c70d1121318adf0",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-06-18 13:15:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8bdc28b1562f5fafe51224d11d54f1196bfa884e",
            "description": "Malicious SSL certificate - KongTuke C&C",
            "timestamp": "2026-06-18 12:36:29",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "KongTuke",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0e5e7e69a3b202c3bcbe3ad00778738ac17b337a",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-05-27 08:39:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0f2238bc817a0980aad4917bfe0d50f2b722a917",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-27 08:13:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d97825d45bfc538a5d364592bedc811585f20599",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-27 08:10:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5ee1e0ab5f0782e83d62722e9a7ee91062102652",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-05 14:07:57",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c56ac80a032ff319463850125369cc514e83ed59",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-05 13:39:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cce12866188dc393f3c4e151caf38e32543a9c65",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-05-05 13:38:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-05 13:38:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "47fd399c8f9f2074b6d16aaa853cd6eaacecd1ed",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-05 13:38:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9833a3a7e27800d994a2924baf7a664dfff96e8c",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-05-05 13:37:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "06e08670cd781e40cee3c93163c7d29ea73d4acb",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-05-05 13:34:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a08099ae4318bfc81af69fd382081262cc4e9487",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-05-05 13:34:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "77a62d508af0ee7022457ef5c65fd44db69a008e",
            "description": "Malicious SSL certificate - NetSupport C&C",
            "timestamp": "2026-04-14 06:04:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "NetSupport",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "14728567db9ecd6e5f46c9e884f99d29c70788e2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-04-14 06:04:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3f47e7722a1bf5a9228b96c634ad54cf66fbbe18",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-04-14 06:04:17",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-04-14 06:04:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8e8d2629ca6f5b6750c69e687fa4c08e5a53616d",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-04-14 06:02:51",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f91937b78dc36f7f7b9ff70f0f53afeefe7ad31d",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-04-14 06:02:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3c04424fca43ca40617cd9176b41d17db89903c8",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-04-14 06:01:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3b156fe2530903bc8e21ee5d719c63a917619490",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-04-14 05:58:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a7e8d4159dfd1d4de048b6751d0e125ca7721d63",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-30 17:29:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e979e3166f481b4ed06d057f555ca41fc47de33e",
            "description": "Malicious SSL certificate - Socks5Systemz C&C",
            "timestamp": "2026-03-30 17:28:38",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Socks5Systemz",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4a5d44ecbf4ac6ace7339e80b02052aa12f5001b",
            "description": "Malicious SSL certificate - Socks5Systemz C&C",
            "timestamp": "2026-03-30 17:28:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Socks5Systemz",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "df2ff49d860e2451ff42c0206afee446364b52f0",
            "description": "Malicious SSL certificate - Socks5Systemz C&C",
            "timestamp": "2026-03-30 17:28:35",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Socks5Systemz",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8b6050f589d432c56f05de438e4ec606926c97df",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-30 17:28:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "3a34f580e3626ac9de04604b8d0a4c3abb8682aa",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-03-30 07:27:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "426f482e33309401ce4ecf7958f5ae28e8ff1423",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-30 06:54:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5564b85fb641dbb29c8d4c265b4e41b3476a851d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-30 06:54:22",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e1305a89f7c83c0204edeae7bb063f73c4a80612",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-30 06:47:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9a39dd3fec6c66ce980dbc07e4ad5103b2d0b09b",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-30 06:47:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f978cf56a838e9821b699784c9650a0baacdb528",
            "description": "Malicious SSL certificate - njrat C&C",
            "timestamp": "2026-03-30 06:46:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "njrat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "80bcab6a0fbe3162130168bd93efc26fd3ec6490",
            "description": "Malicious SSL certificate - njrat C&C",
            "timestamp": "2026-03-30 06:46:10",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "njrat",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f2fec8875975bbc52993dea783327c6096c9b285",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-30 06:45:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "4fb81998ac697ab9e998f1c69d89e7ea606850ed",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-30 06:45:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0602e06d475378201ce6813d28db192d0ba16eb0",
            "description": "Malicious SSL certificate - CobaltStrike C&C",
            "timestamp": "2026-03-30 06:45:02",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "CobaltStrike",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "33510aca342fd05d8d74aa957e95477aeb2e7ed7",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-30 06:44:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5974d97ad02dbc6f3e491da71af7ca1fb8459d42",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-03-30 06:44:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7a9aca4a6fba1458f60de6080031427689654cfe",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-30 06:44:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "20d6dac19c714dd2102038eb700f10283940d822",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-30 06:42:44",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0b0dc82e3c43d6527d2e2d4e19195817d9731387",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-03-23 15:09:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "7da0a76b514869395da864dff3444a294c5bc73b",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-03-23 09:03:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "dd9055d19cf441e17d7a0f8d4f3cd8a78712993d",
            "description": "Malicious SSL certificate - PureHVNC C&C",
            "timestamp": "2026-03-23 09:00:49",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "PureHVNC",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "30f1bac7bb98fdf0215cdf023bac1112f5d35f99",
            "description": "Malicious SSL certificate - Arechclient2 C&C",
            "timestamp": "2026-03-23 07:37:46",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Arechclient2",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "055a435dbca9b6c9f14de1735be3c2f4b3b84274",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:35:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "855df27eb0c93652f8fc54190698c15bcb86373d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:34:50",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "82421e4efd6b2091710c28a342954061228f8512",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-23 07:31:18",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5854bcdd3f88acbf00bf32990f0ef0cbb3905a57",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:30:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8f2ea97e92648473ca2a6d2f1607e1e36ac55346",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-03-23 07:30:12",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "798cdfed3b45cec0654b935770881f40163a2a83",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-23 07:29:58",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "efbe0dd6d523076ea471430038a5c7b402596adf",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:29:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "32de1e4607fee3ba5523ed8c10b97949b3fe381d",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-03-23 07:26:01",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "042d6ef11b394a9c9d4193b2929aade616528c7c",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-23 07:18:16",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "46ad99383c2807272b1a31658af546be2a7a9141",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-03-23 07:18:06",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-27 19:51 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-27T19:51:45.517296+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 109647,
            "activeSources": 9,
            "criticalAlerts": 47743,
            "activeCampaigns": 228
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 36574,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 11169,
                "trend": "up",
                "percentage": 313
            },
            {
                "category": "Botnet",
                "count": 4659,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "Phishing",
                "count": 3935,
                "trend": "stable",
                "percentage": 8
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
                "count": 39583,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]236[.]254[.]202",
                    "1[.]24[.]16[.]117"
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
                "count": 10854,
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
                "count": 3902,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://make-troll-318071[.]framer[.]app/",
                    "hxxp://avdveulfdasxf[.]square[.]site/",
                    "hxxp://himorhis[.]square[.]site/"
                ]
            },
            {
                "name": "Vidar",
                "count": 1858,
                "types": [
                    "url",
                    "ssl-cert",
                    "hash",
                    "domain"
                ],
                "sampleIndicators": [
                    "963c8d952db068f9cd6b76e2313e69296ca6124f57755eeaa8c008ee05d349be",
                    "99b335ac5caf5249edc3223b100517d72f4fec0c6012955e3efc8d56c96880ef",
                    "6f38c0aedf5d1163cca3bf5721acb71cb54bf387a69827c8ccdc59064a19d6ed"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1645,
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
                "count": 1628,
                "types": [
                    "ssl-cert",
                    "hash",
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
                "name": "Cobalt Strike",
                "count": 1188,
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
                "count": 724,
                "types": [
                    "ssl-cert",
                    "hash"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "7f97451f3eb454915ff6a6f897910565bf30e0aefbf4408f997c87854ef9a492",
                    "ad14500239f169e7bfc73631801f630103f10ed7c93c066e268b46ee557231b8"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 21152,
        "lastCalculated": "2026-10-28 02:08 IST"
    }
};
