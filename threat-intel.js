// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-18T10:12:11.187326+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-18T10:12:10.889138+05:30",
    "lastUpdatedFormatted": "Dec 18, 2025 at 10:12 AM IST",
    "comparisonPeriod": "Dec 17 \u2013 Dec 18, 2025",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 300,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 300,
                "newInLastHour": 300,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://bet73rr[.]com/",
                "hxxp://b45070[.]com/",
                "hxxps://smec-workshops[.]cloudevents[.]ai/ms-az-events/ev%20portal-smec[.]cloudevents[.]ai",
                "hxxps://gift-marathon[.]cfd/id=5162802847",
                "hxxps://cbscorp[.]sbs/?a=3mail@a[.]b[.]c0"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1086,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1086,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"91e467b2b509422032dda3fc68e10e1919aac75a0ad66c018267307e133d6f6a",
                " \"1d550c75442fb16775f062e703f09937e2ea03e28140f968f55fab198a1d2a89",
                " \"4589612e0bcf2e254096bf56850fc6668220a885c3e84ccf4dcae13c63309952",
                " \"223c7cd13aea8fc9294d7c70ceab0b47e7943a539c0aa4d6b813fdc6204146ae",
                " \"63e46d79684b1b4bd8b270b566466f330ba07fe8486140377b510f9cd8425e3f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1464,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1464,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
            ]
        },
        "CINS Army": {
            "description": "Malicious IPs from CINS Army threat intelligence. Fast-updating list of confirmed attackers.",
            "website": "http://cinsscore.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 15000,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 15000,
                "newInLastHour": 15000,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]179[.]25",
                "1[.]117[.]17[.]128",
                "1[.]162[.]193[.]245",
                "1[.]171[.]19[.]69",
                "1[.]176[.]134[.]230"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5959,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5959,
                "newInLastHour": 5959,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]84[.]143",
                "1[.]171[.]19[.]69",
                "1[.]194[.]200[.]251",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25053,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25053,
                "newInLastHour": 25053,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://194[.]106[.]197[.]80:49207/i",
                "hxxps://prion5[.]ent0molobo1t[.]ru/9lkcec6r",
                "hxxp://39[.]74[.]246[.]35:35826/i",
                "hxxp://37[.]55[.]197[.]206:38606/bin[.]sh",
                "hxxps://prion5[.]ent0molobo1t[.]ru/br7hqtkv"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1183,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1183,
                "newInLastHour": 1182,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"prion5[.]ent0molobo1t[.]ru\"",
                " \"thorax[.]ent0molobo1t[.]ru\"",
                " \"9x[.]windl1nk[.]ru\"",
                " \"puf0[.]windl1nk[.]ru\"",
                " \"100[.]42[.]180[.]19:443\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8635,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8635,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "61c106b455763479993736bd9605bd3503d083ad",
                "6c3ecd6d81bf00e4610f3fd0f77d922a4e00139a",
                "4b1edb0875427c553bf5d42681e7a9fa8f93a35e",
                "c294112c931ab5f7a0f0195b65ed59679442ccea",
                "34d7f089684ee3ab9faf204b7d0a3a6d88826497"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52661,
            "activeSources": 8,
            "criticalAlerts": 34700,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26105,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 8595,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 872,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24974,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]39[.]129:52891/bin[.]sh",
                    "hxxp://125[.]44[.]211[.]123:41552/bin[.]sh",
                    "hxxp://42[.]226[.]217[.]126:43707/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]179[.]25",
                    "1[.]162[.]193[.]245",
                    "1[.]171[.]19[.]69"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1465,
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
                "count": 1359,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195"
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
                "name": " \"Mirai",
                "count": 633,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"94dd15d82ac65d44524561126e61947bdd66f5076f83433e30e1369b63c32d90",
                    " \"80b58c0755f836525d933ab9100ec5a22de371c32ac6d0932ee80b4ce9138f0e",
                    " \"bed2f7b466829dd41842fd3fdaf619bec9b4edd63d6b63d65512dce903237f5d"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 591,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69b032a3fbc6d20d24fb410b437e1a31fb7619c8",
                    "3100a40b0b16050f4befdffd447a5a16c7bb23de",
                    "ec1ed7b8bd2ed1362b76197ba2c662c51b8761de"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47528,
        "lastCalculated": "2025-12-18 10:12 IST"
    }
};
