// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-25T02:35:49.812244+05:30 IST (2026-10-24 21:05 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-25T02:35:48.877784+05:30",
    "lastUpdatedFormatted": "Oct 25, 2026 at 02:35 AM IST",
    "lastUpdatedUtc": "2026-10-24 21:05 UTC",
    "comparisonPeriod": "Oct 24 \u2013 Oct 25, 2026",
    "stats": {
        "totalIOCs": 121697,
        "byType": {
            "url": 47642,
            "ip": 51786,
            "hash": 5979,
            "domain": 3563,
            "ssl-cert": 11039,
            "ip-range": 1688
        },
        "byVendor": {
            "OpenPhish": 3492,
            "Malware Bazaar": 3451,
            "Spamhaus DROP": 1688,
            "CINS Army": 38424,
            "Blocklist.de": 10320,
            "URLhaus": 35628,
            "ThreatFox": 17650,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11039
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 2464,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1667,
                "types": [
                    "url",
                    "hash",
                    "domain",
                    "ip",
                    "ssl-cert"
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
                    "url",
                    "hash",
                    "domain"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 742,
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
                    "url",
                    "hash",
                    "ip",
                    "domain"
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
                "count": 574,
                "types": [
                    "url"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 563,
                "types": [
                    "hash",
                    "ssl-cert"
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
                "count": 552,
                "types": [
                    "ssl-cert"
                ]
            }
        ],
        "recentIOCs": [
            {
                "type": "ssl-cert",
                "indicator": "0922f0b5df139ddc07c5f43fea6d84c885ecc833",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-17 11:06:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8c4c2867daf5d6ef1cc9d304fb4c6be488cd645a",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-10-02 16:02:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6769e788ce8fb4744dfb2ca047f4aa428ed075d5",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-09-25 08:11:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "638b07a5521bc5b2de50dbed49e7eedcf451d838",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-25 07:59:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8130921b7ab8a3ed5d7df7dbedd7a583a7e55b8f",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-25 07:58:56",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "389be5fc932b66d82d59d3b499a37cb540fdb62c",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-25 07:58:48",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "9f25b7b257319fcbba26fb666fb9fb139e6b1100",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-09-25 07:56:34",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a4138cfc3c588247705c5cba498d35324463dfa2",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-25 07:49:27",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "e85536b156e0cd96f57d1925fb4f9fadaf825b9a",
                "description": "Malicious SSL certificate - Malware C&C",
                "timestamp": "2026-09-03 13:40:41",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "Malware",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "969b40a4fd2fb579a29aed9b2f81a7cf5cc0b1db",
                "description": "Malicious SSL certificate - PureLogsStealer C&C",
                "timestamp": "2026-08-27 09:05:28",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "PureLogsStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "2125bebc5912c9fb523a668daf7d116999488493",
                "description": "Malicious SSL certificate - Koadic C&C",
                "timestamp": "2026-08-27 08:49:43",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "Koadic",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "be5b37f69a9cf825cca6d9b0e27e3aeaf0903721",
                "description": "Malicious SSL certificate - ACRStealer C&C",
                "timestamp": "2026-08-27 08:12:04",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "ACRStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "42412a6aee2a4ff0234fc0afe142d5a2bf8f1e92",
                "description": "Malicious SSL certificate - HypeAgent C&C",
                "timestamp": "2026-08-27 08:08:15",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "HypeAgent",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "fd78e771cab22c3afad8a5d5c448ff05268f20dd",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-08-27 08:00:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "53e5a73e14b16d4140421466795a2196a53e2bbc",
                "description": "Malicious SSL certificate - PureRAT C&C",
                "timestamp": "2026-08-27 07:57:19",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "PureRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "8b41b8741c4d2a24de0aba241f742f043f1014d1",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-08-27 07:55:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "240ce6287e5ee63adc65bde38ca08a7132f5b08b",
                "description": "Malicious SSL certificate - RatonRAT C&C",
                "timestamp": "2026-08-27 07:54:53",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "RatonRAT",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "450a46fca2ded0fb7231080b7ec1fef089aa6abe",
                "description": "Malicious SSL certificate - Stealc C&C",
                "timestamp": "2026-08-27 07:46:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "Stealc",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "db787c8625b794b3d2385274bfdf8f34d731d7d9",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-08-27 07:42:21",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "a5d4974f89b3751853ea918b1dea7564c7cb8185",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-08-27 07:41:07",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-10-25 00:14 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-10-25T00:14:43.160080+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-10-25T02:35:48.877784+05:30",
        "lastUpdatedFormatted": "Oct 25, 2026 at 02:35 AM IST",
        "lastUpdatedUtc": "2026-10-24 21:05 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3492,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 3492,
                "newInLastHour": 300,
                "lastUpdate": "2026-10-24 21:05 UTC"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://www[.]indesx-mauve[.]vercel[.]app/",
                "hxxp://bellsouth-att-sign-in-99dd87[.]webflow[.]io/",
                "hxxps://instagram[.]82[.]165[.]110[.]7[.]backname[.]io/accounts/login/",
                "hxxps://lnstagrarn-reel-paoa2oajo[.]vercel[.]app/",
                "hxxps://instagram[.]82[.]165[.]110[.]7[.]backname[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3423,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 3423,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-24 21:05 UTC"
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
            "iocCount": 1629,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1629,
                "newInLastHour": 1,
                "lastUpdate": "2026-10-24 21:05 UTC"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.27.62.0/24",
                "2.56.192.0/22"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 38546,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 38546,
                "newInLastHour": 15000,
                "lastUpdate": "2026-10-24 21:05 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]229[.]231",
                "1[.]168[.]172[.]140",
                "1[.]177[.]162[.]4",
                "1[.]192[.]129[.]106",
                "1[.]215[.]138[.]43"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10384,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10384,
                "newInLastHour": 4637,
                "lastUpdate": "2026-10-24 21:05 UTC"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]73[.]220",
                "1[.]12[.]55[.]80",
                "1[.]14[.]240[.]247",
                "1[.]14[.]97[.]120",
                "1[.]15[.]179[.]199"
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
                "lastUpdate": "2026-10-24 21:05 UTC"
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
            "iocCount": 17630,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 17630,
                "newInLastHour": 0,
                "lastUpdate": "2026-10-24 21:05 UTC"
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
                "lastUpdate": "2026-10-24 21:05 UTC"
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
            "iocCount": 10746,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10746,
                "newInLastHour": 3,
                "lastUpdate": "2026-10-24 21:05 UTC"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "35661619ef7eb0f46354d9b8a6354a1115e338eb",
                "f74cfb538bdbd89cd3fbfccd91e6530561d87310",
                "f1943fdd37320ad09ea8985e9b86ae33aee4525d",
                "842b7c6b2ac561e7155bfdae757689f50ff6c634",
                "84abb61ca68f4b6b4a7f421516b188dae0516d0f"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "0922f0b5df139ddc07c5f43fea6d84c885ecc833",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-17 11:06:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8c4c2867daf5d6ef1cc9d304fb4c6be488cd645a",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-10-02 16:02:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6769e788ce8fb4744dfb2ca047f4aa428ed075d5",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-09-25 08:11:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "638b07a5521bc5b2de50dbed49e7eedcf451d838",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-25 07:59:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8130921b7ab8a3ed5d7df7dbedd7a583a7e55b8f",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-25 07:58:56",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "389be5fc932b66d82d59d3b499a37cb540fdb62c",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-25 07:58:48",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "9f25b7b257319fcbba26fb666fb9fb139e6b1100",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-09-25 07:56:34",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a4138cfc3c588247705c5cba498d35324463dfa2",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-25 07:49:27",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "e85536b156e0cd96f57d1925fb4f9fadaf825b9a",
            "description": "Malicious SSL certificate - Malware C&C",
            "timestamp": "2026-09-03 13:40:41",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Malware",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "969b40a4fd2fb579a29aed9b2f81a7cf5cc0b1db",
            "description": "Malicious SSL certificate - PureLogsStealer C&C",
            "timestamp": "2026-08-27 09:05:28",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "PureLogsStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "2125bebc5912c9fb523a668daf7d116999488493",
            "description": "Malicious SSL certificate - Koadic C&C",
            "timestamp": "2026-08-27 08:49:43",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Koadic",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "be5b37f69a9cf825cca6d9b0e27e3aeaf0903721",
            "description": "Malicious SSL certificate - ACRStealer C&C",
            "timestamp": "2026-08-27 08:12:04",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "ACRStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "42412a6aee2a4ff0234fc0afe142d5a2bf8f1e92",
            "description": "Malicious SSL certificate - HypeAgent C&C",
            "timestamp": "2026-08-27 08:08:15",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "HypeAgent",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "fd78e771cab22c3afad8a5d5c448ff05268f20dd",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-27 08:00:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "53e5a73e14b16d4140421466795a2196a53e2bbc",
            "description": "Malicious SSL certificate - PureRAT C&C",
            "timestamp": "2026-08-27 07:57:19",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "PureRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "8b41b8741c4d2a24de0aba241f742f043f1014d1",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-27 07:55:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "240ce6287e5ee63adc65bde38ca08a7132f5b08b",
            "description": "Malicious SSL certificate - RatonRAT C&C",
            "timestamp": "2026-08-27 07:54:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "RatonRAT",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "450a46fca2ded0fb7231080b7ec1fef089aa6abe",
            "description": "Malicious SSL certificate - Stealc C&C",
            "timestamp": "2026-08-27 07:46:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Stealc",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "db787c8625b794b3d2385274bfdf8f34d731d7d9",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-27 07:42:21",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "a5d4974f89b3751853ea918b1dea7564c7cb8185",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-27 07:41:07",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "06c6a1e29b1948ac47c0fee2e8652a07fcde1f9e",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-27 07:40:33",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "655b8a9e32dd444d708ab21eb8604f89332db8ab",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-08-27 07:39:08",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-10-25T00:14:43.160080+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-25T00:14:42.057575+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-25T00:14:42.057575+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-25T00:14:42.057575+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-25T00:14:42.057575+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-10-25T00:14:42.057575+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]117[.]73[.]220",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]12[.]55[.]80",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]97[.]120",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]106[.]134",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]179[.]199",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]221[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]203[.]186[.]47",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]242[.]33[.]13",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]11[.]137",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]26[.]93",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]236[.]176",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]245[.]96[.]27",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]220[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]34[.]59[.]249",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]102[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]114[.]193",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]95[.]146",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]106[.]109",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]133",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]111[.]86",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]112[.]205",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]113[.]149",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]204",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]2",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]158[.]179",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]133[.]255",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]134[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]51[.]134[.]39",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]75[.]224[.]26",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]76[.]244[.]135",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]79[.]165[.]43",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]89[.]141[.]184",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]91[.]114[.]194",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]198",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]192[.]45",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]193[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]17",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]253",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]195[.]62",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]243",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]196[.]4",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]197[.]182",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]199[.]69",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]202[.]48",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]96[.]205[.]145",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-10-25 00:14 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-10-25 00:14 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-10-25T00:14:37.965624+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 121697,
            "activeSources": 9,
            "criticalAlerts": 53339,
            "activeCampaigns": 381
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 42047,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 11292,
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
                "count": 3495,
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
                "count": 38424,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]89[.]105",
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
                "count": 10320,
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
                "count": 3474,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://www[.]indesx-mauve[.]vercel[.]app/",
                    "hxxp://bellsouth-att-sign-in-99dd87[.]webflow[.]io/",
                    "hxxps://instagram[.]82[.]165[.]110[.]7[.]backname[.]io/accounts/login/"
                ]
            },
            {
                "name": "Vidar",
                "count": 2464,
                "types": [
                    "url",
                    "hash",
                    "domain",
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
                "name": "Mirai",
                "count": 1950,
                "types": [
                    "url",
                    "hash",
                    "ip",
                    "domain"
                ],
                "sampleIndicators": [
                    "5c9904bb290ca8b4581ca5337feaf8dc0262630e704faee10052b2385c5979fb",
                    "56530393263a80c470417364da8bcabbc8b819172866cb741304266a246fc639",
                    "1fcf6489f59dc37ee33fe8d772b95a8cb55051295b24f237b0aa9ebd05647b51"
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
                "count": 1667,
                "types": [
                    "url",
                    "hash",
                    "domain",
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
        "totalAttacksThisHour": 19946,
        "lastCalculated": "2026-10-25 02:35 IST"
    }
};
