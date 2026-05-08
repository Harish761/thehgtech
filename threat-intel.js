// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-08T15:18:18.436121+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-08T15:18:18.075569+05:30",
    "lastUpdatedFormatted": "May 08, 2026 at 03:18 PM IST",
    "comparisonPeriod": "May 07 \u2013 May 08, 2026",
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
                "hxxps://www[.]roblox[.]et/users/425500866/profile",
                "hxxps://ntirety[.]it-admincenter[.]com/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxp://member437[.]meta-agency-center[.]com/",
                "hxxp://mitrra-pgn-gas[.]lyanan-mrkt[.]shop/",
                "hxxp://xlayaanid-paylternewz[.]tiaoxsid[.]my[.]id/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 474,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b7e18d6227ed641061b9e7a24ddfe3002f4c449b6107a5ff8a3976ef4e20c05a",
                " \"f2b8c4a2fecff279b85fc64dd930203e56cb695f620f65fa7a3f89df82a7459b",
                " \"8a3a1f3ba4f23572de3c13783bcd50142cc33933f5d17be646eb221c36430b33",
                " \"60afdd784796754f4c91bdd26b72157cc62692fa7134bc91bee694fbb2b0e057",
                " \"8b8ca853a36d772f8fc6aa0ae71ee1f780d772d19d2ef1a24752ceae14d0fc29"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1626,
                "newInLastHour": 3,
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
                "1[.]180[.]183[.]158",
                "1[.]191[.]146[.]96",
                "1[.]192[.]251[.]154",
                "1[.]193[.]63[.]50",
                "1[.]196[.]79[.]126"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4200,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4200,
                "newInLastHour": 4200,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]13[.]22[.]203",
                "1[.]162[.]225[.]162",
                "1[.]162[.]247[.]201",
                "1[.]20[.]186[.]129"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27903,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27903,
                "newInLastHour": 27903,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://62[.]60[.]226[.]159/uploads/RIuBqY6b3GgC[.]exe",
                "hxxps://68uvag[.]qen8vorel[.]lat/sh1ne-logs-neppy-upd8335-www3/get123c[.]camp",
                "hxxp://id89652[.]cfd/uploads/4WYz1GcVBwZd[.]exe",
                "hxxp://62[.]60[.]226[.]159/uploads/V2BIqXDFGxz4[.]exe",
                "hxxp://62[.]60[.]226[.]159/uploads/XvQVQruNPnzM[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1089,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1089,
                "newInLastHour": 1089,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"crestdeliv[.]qen8vorel[.]lat\"",
                " \"94[.]26[.]90[.]190:5000\"",
                " \"68uvag[.]qen8vorel[.]lat\"",
                " \"hxxp://129[.]204[.]224[.]81:14226/visit[.]js\"",
                " \"hxxp://129[.]204[.]224[.]81:14226/Peo9\""
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
                "lastUpdate": "just now"
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
            "iocCount": 9682,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9682,
                "newInLastHour": 61,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "cf08f1d2e3da9567cd2398ecb5f8df0503ce857f",
                "d30376a0f461e6cc126e18beb023e71c703912c0",
                "12adb13f09a921ef558cd28c50ac4de81e1b8ad3",
                "646821885b9e966ba8bb62c511f6b90a0b8d58c8",
                "693673f31128d9637630776f2989b5c29c77b04d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55691,
            "activeSources": 8,
            "criticalAlerts": 37808,
            "activeCampaigns": 185
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28209,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9599,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 153,
                "trend": "down",
                "percentage": -19
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 85
            },
            {
                "name": "Tech",
                "percentage": 14
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
                "count": 27759,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://tcpcons[.]lorex7in[.]lat/kl0n-green-excel-yy3775-get65/gett3[.]verification",
                    "hxxps://skyvpns[.]modeall[.]lat/sh1ne-logs-neppy-upd8335-www3/get123c[.]camp",
                    "hxxps://sshpros[.]lorex7in[.]lat/kl0n-green-excel-yy3775-get65/gett3[.]verification"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]180[.]183[.]158",
                    "1[.]192[.]179[.]247",
                    "1[.]192[.]251[.]154"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1623,
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
                "count": 1406,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c",
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d"
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
                "name": " \"js.clearfake\"",
                "count": 697,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"netmans[.]lorex7in[.]lat\"",
                    " \"dbinsts[.]modeall[.]lat\"",
                    " \"tcpcons[.]lorex7in[.]lat\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 676,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487",
                    "bb085af0610557f877683616d87b7345b59c4f54"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 509,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "275d98e8ac40fa51490a1982fd621954d6ffe4c1",
                    "82f19aac31fa0b5c38858af039bc9b0133424046",
                    "fcf4598502929f58a832dd6aa1fba567340e504a"
                ]
            },
            {
                "name": "OffLoader",
                "count": 399,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48591,
        "lastCalculated": "2026-05-08 15:18 IST"
    }
};
