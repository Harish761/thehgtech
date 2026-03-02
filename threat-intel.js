// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-03T02:19:44.401757+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-03T02:19:44.118074+05:30",
    "lastUpdatedFormatted": "Mar 03, 2026 at 02:19 AM IST",
    "comparisonPeriod": "Mar 02 \u2013 Mar 03, 2026",
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
                "hxxp://airbnb-nextjs-prahladtimalsina7-gmailcom[.]vercel[.]app/",
                "hxxp://netflix-clone-zeta-two[.]vercel[.]app/",
                "hxxp://craftopiacraftandart-beep[.]github[.]io/paypage",
                "hxxps://wilfriedngounnou75-byte[.]github[.]io/YT-github[.]video/",
                "hxxp://wilfriedngounnou75-byte[.]github[.]io/YT-github[.]video"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 744,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 744,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1b6bf7991b2126158de51b8a798da5d0d3b5f169a09cfb4b0f3a9a1d2efe9c63",
                " \"ceceb10c620a2efe287eaa517bca67b770fcdafe22eea5459d91b2e010f70d5d",
                " \"2e3e8e4694c056508944a04e471e943718ba9a02289687536d712e32df58d9bb",
                " \"19566cf37f02560342499306c175fc85c5d8e95ed7d0b813410f51e4a99df995",
                " \"de0e0e528886830ef37fdd97352113523ba4e5f2eb03efeee9c68f983f45d32f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1532,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1532,
                "newInLastHour": 2,
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
                "1[.]15[.]116[.]189",
                "1[.]170[.]61[.]110",
                "1[.]176[.]134[.]230",
                "1[.]176[.]134[.]238",
                "1[.]188[.]101[.]101"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9585,
                "newInLastHour": 9585,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]145[.]98[.]105",
                "1[.]164[.]174[.]157",
                "1[.]214[.]117[.]218",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22194,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22194,
                "newInLastHour": 22194,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]142[.]249[.]58:43252/i",
                "hxxp://61[.]1[.]53[.]92:46581/i",
                "hxxp://110[.]39[.]246[.]84:38029/i",
                "hxxp://110[.]39[.]249[.]140:49026/bin[.]sh",
                "hxxp://42[.]230[.]54[.]250:34912/i"
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
                " \"lunkenbuilding[.]com\"",
                " \"23[.]26[.]129[.]38:24045\"",
                " \"15[.]216[.]14[.]131:43\"",
                " \"147[.]45[.]69[.]34:4443\"",
                " \"43[.]134[.]52[.]221:22443\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9075,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9075,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6f7f3607d11da6dbc7600245f36591f578272be3",
                "dff569d6ba32c29ce4fcec5666e78ada9acbe9f0",
                "dd1f8bbdf08eedbfdc5518f707f5009721d778a1",
                "a321c9ecc998ce4ed63d0613f7bf6bfccc466595",
                "6ba132e66f2c8ec720b58e4be1d7c9d16752dafb"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50054,
            "activeSources": 8,
            "criticalAlerts": 32030,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22927,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9103,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 918,
                "trend": "stable",
                "percentage": 2
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
                "percentage": 99
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 22173,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]56[.]170[.]33:42372/i",
                    "hxxp://114[.]226[.]201[.]118:8517/[.]i",
                    "hxxp://59[.]97[.]176[.]255:59357/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]116[.]189",
                    "1[.]170[.]61[.]110",
                    "1[.]176[.]134[.]230"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1533,
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
                "count": 1387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603",
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289",
                    "41fe5784b1b9003fee99a449d0d7b6fa0ce038fe"
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
                "count": 627,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6f7f3607d11da6dbc7600245f36591f578272be3",
                    "7e54f4e1e1eaeeeaf7e1afe331c7307c96e04182",
                    "1489745b5c5f066b8beaec7181567513ca9eafd2"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": "Vidar",
                "count": 385,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dd1f8bbdf08eedbfdc5518f707f5009721d778a1",
                    "a321c9ecc998ce4ed63d0613f7bf6bfccc466595",
                    "bea057ecfd3d04cb7bae097f1ac0eccb5027261b"
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48212,
        "lastCalculated": "2026-03-03 02:19 IST"
    }
};
