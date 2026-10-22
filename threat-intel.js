// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-23T03:21:43.656702+05:30 IST (2026-10-22 21:51 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-23T03:21:42.694913+05:30",
    "lastUpdatedFormatted": "Oct 23, 2026 at 03:21 AM IST",
    "lastUpdatedUtc": "2026-10-22 21:51 UTC",
    "comparisonPeriod": "Oct 22 \u2013 Oct 23, 2026",
    "stats": {
        "totalIOCs": 115528,
        "byType": {
            "url": 47675,
            "ip": 46391,
            "hash": 6537,
            "domain": 3563,
            "ssl-cert": 10817,
            "ip-range": 545
        },
        "byVendor": {
            "OpenPhish": 2334,
            "Malware Bazaar": 4009,
            "Spamhaus DROP": 545,
            "CINS Army": 34248,
            "Blocklist.de": 9101,
            "URLhaus": 35628,
            "ThreatFox": 18841,
            "Feodo Tracker": 5,
            "SSL Blacklist": 10817
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2390,
                "types": [
                    "hash",
                    "domain",
                    "url",
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "hash",
                    "domain",
                    "url",
                    "ip"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1657,
                "types": [
                    "hash",
                    "domain",
                    "url",
                    "ip",
                    "ssl-cert"
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
                    "domain",
                    "url"
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
                    "hash",
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
                "count": 560,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 544,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "d1f8cdf29e82994d89dfda8a9dcb541be63e83b3",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-30 15:34:39",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c38737bf4c111f6be0d2f75ab9dc922cd8d5c7e3",
                "description": "Malicious SSL certificate - ConnectWise C&C",
                "timestamp": "2026-09-30 15:27:36",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "ConnectWise",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "843de70648251c376b18fe872f7b5f4517a0e940",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-30 15:26:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-09-23 09:49:42",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "95688000a5176c85f77eb00ba69faef202ae6c24",
                "description": "Malicious SSL certificate - SeroRAT C&C",
                "timestamp": "2026-09-23 09:29:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "SeroRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2c718d1d6454ad663cf963baecf3a1c81495716a",
                "description": "Malicious SSL certificate - SeroRAT C&C",
                "timestamp": "2026-09-23 09:29:37",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "SeroRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "5f1f3725db5f77872c27b2d4b1a6c8c32e4ee257",
                "description": "Malicious SSL certificate - SeroRAT C&C",
                "timestamp": "2026-09-23 09:28:53",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "SeroRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b29e88da94c7ec5eac25efc49b444efcfb61b7de",
                "description": "Malicious SSL certificate - SeroRAT C&C",
                "timestamp": "2026-09-23 09:26:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "SeroRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9c041662f67bfc6c80fb45353b0d8689858eac3c",
                "description": "Malicious SSL certificate - SeroRAT C&C",
                "timestamp": "2026-09-23 09:26:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "SeroRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2d55d1a98da553c64dca5168488b90de1ac2b6dc",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-23 09:10:45",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "35a0137a8428cd4eed7271f69f576e22389c2718",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-09-23 08:37:34",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8ebcb44e692f32d2a4894ada4a06079a48bdf1a6",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-23 08:02:55",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0217bf61b7498d77ca6ba321aefd3cd7b47310c0",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-09-23 08:01:54",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-09-23 08:00:33",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e368d5f28111dd2b577e949c59b254f7de1dae2b",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-23 07:59:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                "description": "Malicious SSL certificate - AsyncRAT C&C",
                "timestamp": "2026-09-23 07:58:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "AsyncRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "ca37313c6e61b15e4027fe2609233851a70e572e",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-23 07:57:26",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "b85ab05112c6848ccf2dd6889903e1268cdc6a75",
                "description": "Malicious SSL certificate - QuasarRAT C&C",
                "timestamp": "2026-09-23 07:57:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-23T01:29:18.773327+05:30",
                "campaign": "QuasarRAT",
                "confidence": "High"
            },
            {
                "type": "ip",
                "indicator": "162[.]243[.]103[.]246",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-23 01:29 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-23T01:29:17.689935+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            },
            {
                "type": "ip",
                "indicator": "178[.]62[.]3[.]223",
                "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
                "timestamp": "2026-10-23 01:29 UTC",
                "source": "Feodo Tracker",
                "sourceUrl": "https://feodotracker.abuse.ch/",
                "analysisTime": "2026-10-23 01:29 IST",
                "tags": [
                    "botnet",
                    "c2",
                    "banking-trojan"
                ],
                "addedAt": "2026-10-23T01:29:17.689935+05:30",
                "campaign": "Banking Malware C2",
                "confidence": "High (Active C2)"
            }
        ],
        "lastUpdated": "2026-10-23T03:21:42.694913+05:30",
        "lastUpdatedFormatted": "Oct 23, 2026 at 03:21 AM IST",
        "lastUpdatedUtc": "2026-10-22 21:51 UTC"
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
                "lastUpdate": "2026-10-22 21:51 UTC"
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
                "lastUpdate": "2026-10-22 21:51 UTC"
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
            "iocCount": 1686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1686,
                "newInLastHour": 1143,
                "lastUpdate": "2026-10-22 21:51 UTC"
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
            "iocCount": 34678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 34678,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-22 21:51 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]193[.]57[.]156",
                "1[.]215[.]138[.]43",
                "1[.]221[.]65[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9186,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9186,
                "newInLastHour": 5171,
                "lastUpdate": "2026-10-22 21:51 UTC"
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
                "lastUpdate": "2026-10-22 21:51 UTC"
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
                "lastUpdate": "2026-10-22 21:51 UTC"
            },
            "types": [
                "hash",
                "domain",
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
                "lastUpdate": "2026-10-22 21:51 UTC"
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
            "iocCount": 10805,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10805,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-22 21:51 UTC"
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
            "indicator": "d1f8cdf29e82994d89dfda8a9dcb541be63e83b3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-30 15:34:39",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c38737bf4c111f6be0d2f75ab9dc922cd8d5c7e3",
            "description": "Malicious SSL certificate - ConnectWise C&C",
            "timestamp": "2026-09-30 15:27:36",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "ConnectWise",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "843de70648251c376b18fe872f7b5f4517a0e940",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-30 15:26:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-23 09:49:42",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "95688000a5176c85f77eb00ba69faef202ae6c24",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:29:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2c718d1d6454ad663cf963baecf3a1c81495716a",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:29:37",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "5f1f3725db5f77872c27b2d4b1a6c8c32e4ee257",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:28:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b29e88da94c7ec5eac25efc49b444efcfb61b7de",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:26:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9c041662f67bfc6c80fb45353b0d8689858eac3c",
            "description": "Malicious SSL certificate - SeroRAT C&C",
            "timestamp": "2026-09-23 09:26:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "SeroRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2d55d1a98da553c64dca5168488b90de1ac2b6dc",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-23 09:10:45",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "35a0137a8428cd4eed7271f69f576e22389c2718",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-09-23 08:37:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8ebcb44e692f32d2a4894ada4a06079a48bdf1a6",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-23 08:02:55",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0217bf61b7498d77ca6ba321aefd3cd7b47310c0",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-23 08:01:54",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-23 08:00:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e368d5f28111dd2b577e949c59b254f7de1dae2b",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-23 07:59:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
            "description": "Malicious SSL certificate - AsyncRAT C&C",
            "timestamp": "2026-09-23 07:58:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "AsyncRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "ca37313c6e61b15e4027fe2609233851a70e572e",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-23 07:57:26",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "b85ab05112c6848ccf2dd6889903e1268cdc6a75",
            "description": "Malicious SSL certificate - QuasarRAT C&C",
            "timestamp": "2026-09-23 07:57:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-23T01:29:18.773327+05:30",
            "campaign": "QuasarRAT",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T01:29:17.689935+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T01:29:17.689935+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T01:29:17.689935+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T01:29:17.689935+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-23T01:29:17.689935+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]72[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]36[.]175",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]70[.]212",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]94[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]97[.]120",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]30[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]52[.]112[.]91",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]95[.]115[.]20",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]34[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]236[.]176",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]218[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]220[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]66[.]58",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]114[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]227[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]248[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]105[.]50",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]186",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]109[.]219",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]110[.]8",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]158[.]179",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]34[.]130",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]1[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]118[.]120",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]152[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]25[.]87",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]53[.]236[.]155",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]67[.]137[.]42",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]109[.]241",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]182[.]189",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]76[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]126[.]150",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]231",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]131",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-23 01:29 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-23 01:29 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-23T01:29:13.531695+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 115528,
            "activeSources": 9,
            "criticalAlerts": 53675,
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
                "count": 11070,
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
                "count": 34248,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]145[.]89[.]105"
                ]
            },
            {
                "name": "SSH Attacks",
                "count": 9101,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]72[.]220",
                    "1[.]12[.]36[.]175",
                    "1[.]12[.]55[.]80"
                ]
            },
            {
                "name": "Vidar",
                "count": 2390,
                "types": [
                    "hash",
                    "domain",
                    "url",
                    "ip",
                    "ssl-cert"
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
                    "url",
                    "ip"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1657,
                "types": [
                    "hash",
                    "domain",
                    "url",
                    "ip",
                    "ssl-cert"
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
            },
            {
                "name": "Cobalt Strike",
                "count": 1219,
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 21619,
        "lastCalculated": "2026-10-23 03:21 IST"
    }
};
