// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-17T00:25:42.044553+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-17T00:25:41.745320+05:30",
    "lastUpdatedFormatted": "Dec 17, 2025 at 12:25 AM IST",
    "comparisonPeriod": "Dec 16 \u2013 Dec 17, 2025",
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
                "hxxp://trezo-io-start[.]framer[.]ai/",
                "hxxp://uk[.]paying-ha[.]vip/i/",
                "hxxp://pinbo3656d[.]com/",
                "hxxp://demo[.]alertas-de-viaje[.]mx/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxps://www[.]eduskunta[.]fi/FI/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1666,
                "newInLastHour": 49,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"61b5d23f69ced0009d9e4ae80247f49a67879d10e2d97bbb49d89f1da53947f5",
                " \"8b4016a05a91dcf18c929a80092ab621a45447078faf91758e35e4a9f862a8d6",
                " \"485c72adfc4641b73adde7c3e9c998cedb18871710aeadfe561eb7625cb6dece",
                " \"83c82305868e05db274e6c5a937233bf42de50803ce0f8abddc0ed650b4520f6",
                " \"a571d65234e0953bf5cffce93394130c4f5e06ca4bb148727bdf1af81895c015"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 49,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 49,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "5.101.82.0/24",
                "23.147.52.0/24",
                "23.147.148.0/24",
                "23.147.156.0/24",
                "23.147.164.0/24"
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
                "1[.]161[.]61[.]55",
                "1[.]192[.]157[.]51",
                "1[.]194[.]253[.]173",
                "1[.]212[.]90[.]61"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6052,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6052,
                "newInLastHour": 6052,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]179[.]25",
                "1[.]13[.]79[.]144",
                "1[.]214[.]197[.]163",
                "1[.]214[.]29[.]155",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25163,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25163,
                "newInLastHour": 25163,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://nsd1[.]indig5pir1t[.]ru/co31iw9i",
                "hxxps://nsd1[.]indig5pir1t[.]ru/ob4khwfd",
                "hxxps://39nb1[.]indig5pir1t[.]ru/1rb5vmay",
                "hxxps://39nb1[.]indig5pir1t[.]ru/2z167b0y",
                "hxxps://y7[.]indig5pir1t[.]ru/s3qavnaw"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1296,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1296,
                "newInLastHour": 1148,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"xgclb[.]indig5pir1t[.]ru\"",
                " \"76[.]29[.]173[.]227:8096\"",
                " \"219[.]246[.]21[.]239:8860\"",
                " \"221[.]204[.]216[.]18:10250\"",
                " \"2[.]241[.]216[.]70:7443\""
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
            "iocCount": 8640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8640,
                "newInLastHour": 7,
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
            "totalIndicators": 53559,
            "activeSources": 8,
            "criticalAlerts": 35493,
            "activeCampaigns": 217
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26883,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8610,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 762,
                "trend": "stable",
                "percentage": 3
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
                "count": 25137,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://8whb[.]de1iainal0s[.]ru/d50tq3mu",
                    "hxxps://odgb[.]de1iainal0s[.]ru/2okwt5j4",
                    "hxxps://fizz[.]de1iainal0s[.]ru/tdboyg9l"
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
                    "1[.]161[.]61[.]55",
                    "1[.]192[.]157[.]51"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1493,
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
                "count": 1360,
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
                "name": "QuasarRAT",
                "count": 594,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69b032a3fbc6d20d24fb410b437e1a31fb7619c8",
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 585,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"118b4d58661e693fb5b5f3601ec81efbfea27c42e9060107c657b68c2c690044",
                    " \"11719bd1cd80df1782d42e5dfb9e06a7c8ad2dfdec34cdc32b8432a74c616073",
                    " \"f2a1b78a2d11e3b6358deccd95e5bf74e8c14323f3b6f5ca27d32a203fffa1b0"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 533,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1d28cc6dca52e95f859739c39a04d794671f66d9",
                    "7b7c48a7d10c11ab988801fec68db41f6935ecf4",
                    "b57cc0f34294222d350c45d62c735547c8882195"
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
        "totalAttacksThisHour": 47723,
        "lastCalculated": "2025-12-17 00:25 IST"
    }
};
