// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-17T07:42:12.069189+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-17T07:42:11.771221+05:30",
    "lastUpdatedFormatted": "Dec 17, 2025 at 07:42 AM IST",
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
                "hxxp://b45038[.]com/egame/221",
                "hxxp://bet73018[.]com/egame/91",
                "hxxp://bet73069[.]com/egame/210",
                "hxxps://discord[.]flawing[.]top/jobs",
                "hxxp://b45038[.]com/egame/284"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1736,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1736,
                "newInLastHour": 110,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"67b2a98f9c82c6905607ddb0f3fd8be66fcaae5f476f1f72bde2f2ca3602a138",
                " \"0b618834ba4ff7fde4289778d923faae2be792103ea3da3a3f42cb25eb96112b",
                " \"54462fc8d29d0c7571f7137bf44aa099e89611745c4abd1ee28109fd0ea08936",
                " \"008e89778e9a47b18b90386ca83325739c488231811e08af088315a6ea4431dc",
                " \"f43e3602afc7424afe5aa04e34f5a6603a220696cf9954afc849bd16d17fe54a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1480,
                "newInLastHour": 0,
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
                "1[.]161[.]61[.]55",
                "1[.]194[.]253[.]173",
                "1[.]212[.]90[.]61",
                "1[.]213[.]196[.]20"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6125,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6125,
                "newInLastHour": 6125,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]145[.]84[.]143",
                "1[.]171[.]19[.]69",
                "1[.]214[.]197[.]163",
                "1[.]214[.]29[.]155"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24749,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24749,
                "newInLastHour": 24749,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://canon[.]con5epr0phet[.]ru/vk5fb7r5",
                "hxxps://augur3[.]con5epr0phet[.]ru/8qtpbsjd",
                "hxxps://augur3[.]con5epr0phet[.]ru/dzxy8yas",
                "hxxp://176[.]65[.]132[.]139/hiddenbin/boatnet[.]arc",
                "hxxp://176[.]65[.]132[.]139/hiddenbin/boatnet[.]sh4"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1348,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1348,
                "newInLastHour": 1201,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"canon[.]con5epr0phet[.]ru\"",
                " \"augur3[.]con5epr0phet[.]ru\"",
                " \"oracle[.]con5epr0phet[.]ru\"",
                " \"delta5[.]h0dikim2n[.]ru\"",
                " \"summa[.]h0dikim2n[.]ru\""
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
                "newInLastHour": 0,
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
            "totalIndicators": 53655,
            "activeSources": 8,
            "criticalAlerts": 35530,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26913,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8617,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 830,
                "trend": "stable",
                "percentage": 5
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
                "count": 25203,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://atmk[.]ba1dostr0g[.]ru/efxe1nmr",
                    "hxxps://se9m[.]ba1dostr0g[.]ru/mxwr100t",
                    "hxxps://se9m[.]ba1dostr0g[.]ru/1foziwx8"
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
                "count": 1480,
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
                "count": 569,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8aa15f89ee036a0bedfe039927aa4a347052998537aa45a788d9fb156d0c912b",
                    " \"1d302106d0a8a218e9c715fcd3cc2104f372f03cd3948fc17f3621b9d7a721d0",
                    " \"4d3d2c9f46dac581c4925d1efc92b87ff0f98a5eaf87bf15309f3f1263648b34"
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
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 47489,
        "lastCalculated": "2025-12-17 07:42 IST"
    }
};
