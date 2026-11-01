// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-11-01T11:20:54.518301+05:30 IST (2026-11-01 05:50 UTC)
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-11-01T11:20:53.721312+05:30",
    "lastUpdatedFormatted": "Nov 01, 2026 at 11:20 AM IST",
    "lastUpdatedUtc": "2026-11-01 05:50 UTC",
    "comparisonPeriod": "Oct 31 \u2013 Nov 01, 2026",
    "stats": {
        "totalIOCs": 103460,
        "byType": {
            "url": 38938,
            "ip": 48919,
            "hash": 641,
            "domain": 2158,
            "ssl-cert": 11106,
            "ip-range": 1698
        },
        "byVendor": {
            "OpenPhish": 3251,
            "Malware Bazaar": 476,
            "Spamhaus DROP": 1698,
            "CINS Army": 35741,
            "Blocklist.de": 10628,
            "URLhaus": 34528,
            "ThreatFox": 6027,
            "Feodo Tracker": 5,
            "SSL Blacklist": 11106
        },
        "topMalware": [
            {
                "name": "Vidar",
                "count": 1702,
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
                    "domain",
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "Cobalt Strike",
                "count": 1183,
                "types": [
                    "ip",
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
                "count": 728,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "IClickFix",
                "count": 708,
                "types": [
                    "domain",
                    "url"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 559,
                "types": [
                    "hash",
                    "ssl-cert"
                ]
            },
            {
                "name": "OffLoader",
                "count": 559,
                "types": [
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
                "count": 443,
                "types": [
                    "ip",
                    "ssl-cert"
                ]
            },
            {
                "name": "Malware",
                "count": 421,
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
                "type": "ssl-cert",
                "indicator": "35661619ef7eb0f46354d9b8a6354a1115e338eb",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-24 08:49:53",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f74cfb538bdbd89cd3fbfccd91e6530561d87310",
                "description": "Malicious SSL certificate - WARDENStealer C&C",
                "timestamp": "2026-10-24 08:45:24",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "WARDENStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "f1943fdd37320ad09ea8985e9b86ae33aee4525d",
                "description": "Malicious SSL certificate - RevStealer C&C",
                "timestamp": "2026-10-24 08:45:13",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "RevStealer",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "842b7c6b2ac561e7155bfdae757689f50ff6c634",
                "description": "Malicious SSL certificate - NetSupport RAT malware distribution",
                "timestamp": "2026-10-24 08:44:52",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "NetSupport",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "84abb61ca68f4b6b4a7f421516b188dae0516d0f",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-24 08:36:14",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "49ee355c74a19712c68535feccf60156ff4055f3",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-24 08:36:09",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "0922f0b5df139ddc07c5f43fea6d84c885ecc833",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-10-17 11:06:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "Vidar",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "c8f25096d3b14521a804d30fb8d618f4f0b33950",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-18 05:54:25",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "d260d414670f40733184875b60bb353632e73fcc",
                "description": "Malicious SSL certificate - OffLoader C&C",
                "timestamp": "2026-09-18 05:54:05",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "OffLoader",
                "confidence": "High"
            },
            {
                "type": "ssl-cert",
                "indicator": "6e35a76a571969f0e27a8c8c1c11c8aa21330887",
                "description": "Malicious SSL certificate - Vidar C&C",
                "timestamp": "2026-09-18 05:48:23",
                "source": "SSL Blacklist",
                "sourceUrl": "https://sslbl.abuse.ch/",
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
                "analysisTime": "2026-11-01 04:47 IST",
                "tags": [
                    "ssl",
                    "certificate",
                    "c2"
                ],
                "addedAt": "2026-11-01T04:47:59.514104+05:30",
                "campaign": "Koadic",
                "confidence": "High"
            }
        ],
        "lastUpdated": "2026-11-01T11:20:53.721312+05:30",
        "lastUpdatedFormatted": "Nov 01, 2026 at 11:20 AM IST",
        "lastUpdatedUtc": "2026-11-01 05:50 UTC"
    },
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 3312,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 3312,
                "newInLastHour": 300,
                "lastUpdate": "2026-11-01 05:50 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://ta[.]gdffuy[.]xyz/",
                "hxxps://sharemyhtml[.]com/p/M1yBCNzLRG",
                "hxxps://cl[.]realizarconsultaco[.]com/",
                "hxxps://jisooooo0201[.]github[.]io/Instagram[.]html",
                "hxxps://start-re-trresezer[.]gitbook[.]io/"
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
                "lastUpdate": "2026-11-01 05:50 UTC",
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
            "iocCount": 1728,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 1728,
                "newInLastHour": 58,
                "lastUpdate": "2026-11-01 05:50 UTC",
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
            "iocCount": 35919,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 35919,
                "newInLastHour": 15000,
                "lastUpdate": "2026-11-01 05:50 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]170[.]196[.]186",
                "1[.]2[.]252[.]192",
                "1[.]24[.]16[.]134",
                "1[.]24[.]16[.]135",
                "1[.]24[.]16[.]155"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10578,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10578,
                "newInLastHour": 4914,
                "lastUpdate": "2026-11-01 05:50 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]160[.]127",
                "1[.]13[.]181[.]113",
                "1[.]14[.]240[.]247",
                "1[.]14[.]64[.]144",
                "1[.]15[.]42[.]91"
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
                "lastUpdate": "2026-11-01 05:50 UTC",
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
                "lastUpdate": "2026-11-01 05:50 UTC",
                "isStale": true,
                "feedStatus": "stale"
            },
            "types": [
                "ip",
                "domain",
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
                "lastUpdate": "2026-11-01 05:50 UTC",
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
            "iocCount": 10685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "isStale": false,
            "feedStatus": "active",
            "stats": {
                "total": 10685,
                "newInLastHour": 0,
                "lastUpdate": "2026-11-01 05:50 UTC",
                "isStale": false,
                "feedStatus": "active"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f9542c3038dc3632d71c1e3735408c8577e8568a",
                "3b1a9b1ca40319bdd405d0dd09923c58d250baa0",
                "44c6ec85d52ecb270148701bc655e2af697e010f",
                "9d47db624532e58342c036323af03246682b8535",
                "d22e586d60cc68c0488c7ede7b46ebc0341cd3ce"
            ]
        }
    },
    "overview": [
        {
            "type": "ssl-cert",
            "indicator": "35661619ef7eb0f46354d9b8a6354a1115e338eb",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-24 08:49:53",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f74cfb538bdbd89cd3fbfccd91e6530561d87310",
            "description": "Malicious SSL certificate - WARDENStealer C&C",
            "timestamp": "2026-10-24 08:45:24",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "WARDENStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "f1943fdd37320ad09ea8985e9b86ae33aee4525d",
            "description": "Malicious SSL certificate - RevStealer C&C",
            "timestamp": "2026-10-24 08:45:13",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "RevStealer",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "842b7c6b2ac561e7155bfdae757689f50ff6c634",
            "description": "Malicious SSL certificate - NetSupport RAT malware distribution",
            "timestamp": "2026-10-24 08:44:52",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "NetSupport",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "84abb61ca68f4b6b4a7f421516b188dae0516d0f",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-24 08:36:14",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "49ee355c74a19712c68535feccf60156ff4055f3",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-24 08:36:09",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "0922f0b5df139ddc07c5f43fea6d84c885ecc833",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-10-17 11:06:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "c8f25096d3b14521a804d30fb8d618f4f0b33950",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-18 05:54:25",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "d260d414670f40733184875b60bb353632e73fcc",
            "description": "Malicious SSL certificate - OffLoader C&C",
            "timestamp": "2026-09-18 05:54:05",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "OffLoader",
            "confidence": "High"
        },
        {
            "type": "ssl-cert",
            "indicator": "6e35a76a571969f0e27a8c8c1c11c8aa21330887",
            "description": "Malicious SSL certificate - Vidar C&C",
            "timestamp": "2026-09-18 05:48:23",
            "source": "SSL Blacklist",
            "sourceUrl": "https://sslbl.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
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
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssl",
                "certificate",
                "c2"
            ],
            "addedAt": "2026-11-01T04:47:59.514104+05:30",
            "campaign": "Vidar",
            "confidence": "High"
        },
        {
            "type": "ip",
            "indicator": "162[.]243[.]103[.]246",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-01T04:47:58.193221+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "178[.]62[.]3[.]223",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-01T04:47:58.193221+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "27[.]133[.]154[.]218",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-01T04:47:58.193221+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "34[.]204[.]119[.]63",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-01T04:47:58.193221+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "50[.]16[.]16[.]211",
            "description": "Botnet C2 server (Dridex/Emotet/TrickBot/QakBot/BazarLoader)",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Feodo Tracker",
            "sourceUrl": "https://feodotracker.abuse.ch/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "botnet",
                "c2",
                "banking-trojan"
            ],
            "addedAt": "2026-11-01T04:47:58.193221+05:30",
            "campaign": "Banking Malware C2",
            "confidence": "High (Active C2)"
        },
        {
            "type": "ip",
            "indicator": "1[.]13[.]181[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]240[.]247",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]14[.]64[.]144",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]221[.]192",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]15[.]42[.]91",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]162[.]226[.]183",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]214[.]214[.]114",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]222[.]42[.]237",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]27[.]159",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]234[.]80[.]94",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]238[.]106[.]229",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]27[.]251[.]252",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "1[.]94[.]239[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]31[.]87[.]143",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]49[.]117[.]77",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "100[.]58[.]116[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]100[.]194[.]181",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]129[.]127",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]141[.]163",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]153[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]71",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]24[.]74",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]35[.]232",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]4[.]215",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]53[.]14",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]64[.]76",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]66[.]30",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]67[.]70",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]69[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]126[.]70[.]177",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]132[.]85[.]130",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]200[.]243[.]197",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]233[.]222",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]201[.]234[.]37",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]206[.]210[.]3",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]227[.]203[.]162",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]32[.]240[.]31",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]33[.]213[.]67",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]102[.]166",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]35[.]248[.]174",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]107[.]233",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]160",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]202",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]108[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]116[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]119[.]203",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]125[.]72",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]36[.]228[.]201",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]42[.]158[.]179",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]175[.]238",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]43[.]77[.]85",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]152[.]216",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]156[.]170",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]156[.]21",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]158[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]159[.]125",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]20[.]56",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]28[.]226",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]5[.]149",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]113",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]47[.]8[.]188",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]53[.]236[.]155",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        },
        {
            "type": "ip",
            "indicator": "101[.]66[.]165[.]103",
            "description": "SSH brute-force attacker",
            "timestamp": "2026-11-01 04:47 UTC",
            "source": "Blocklist.de",
            "sourceUrl": "https://www.blocklist.de/",
            "analysisTime": "2026-11-01 04:47 IST",
            "tags": [
                "ssh",
                "brute-force"
            ],
            "addedAt": "2026-11-01T04:47:56.254481+05:30",
            "campaign": "SSH Attacks",
            "confidence": "Medium (Automated Report)"
        }
    ],
    "dailySummary": {
        "stats": {
            "totalIndicators": 103460,
            "activeSources": 9,
            "criticalAlerts": 46701,
            "activeCampaigns": 219
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
                "count": 11351,
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
                "count": 3254,
                "trend": "stable",
                "percentage": -5
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
                "count": 35741,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]64[.]144",
                    "1[.]145[.]89[.]105",
                    "1[.]15[.]14[.]29"
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
                "count": 10628,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]13[.]181[.]113",
                    "1[.]14[.]240[.]247",
                    "1[.]14[.]64[.]144"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 3235,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://facebook[.]webmau[.]vn/",
                    "hxxps://www[.]roblox[.]com[.]kz/users/137614935/profile",
                    "hxxp://xmqrb724nhw-zdcynfyn-2d9e0f-pj388a[.]pages[.]dev/"
                ]
            },
            {
                "name": "Vidar",
                "count": 1702,
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
                "count": 1698,
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
                    "ip",
                    "domain",
                    "hash",
                    "ssl-cert"
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
                    "domain",
                    "hash"
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
                "count": 728,
                "types": [
                    "hash",
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "898a138ef42c7846cd641bd8406a9ec940991b26113389bbc847648a76cf104c",
                    "875a92bb886a52699413fb2e4370adc03c1eda37",
                    "bd8eb13b5f944ac4c4a03a22d8c1b574bd02ee4f"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "CINS Threat List",
        "totalAttacksThisHour": 20277,
        "lastCalculated": "2026-11-01 11:20 IST"
    }
};
