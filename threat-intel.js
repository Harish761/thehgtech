// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-06T10:44:03.623198+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-06T10:44:03.352596+05:30",
    "lastUpdatedFormatted": "Mar 06, 2026 at 10:44 AM IST",
    "comparisonPeriod": "Mar 05 \u2013 Mar 06, 2026",
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
                "hxxp://rentrise[.]vercel[.]app/",
                "hxxps://zellepayyhelplinenumber[.]webflow[.]io/",
                "hxxp://bafybeifpqhyzn73oe4u5fepceonr6hbpvffuxj7vikwnwh3wkrp2v3blei[.]ipfs[.]infura-ipfs[.]io/",
                "hxxps://www[.]robiox[.]com[.]gr/communities/4745828544/idk-cz-sk-rivals",
                "hxxps://www[.]roblox[.]com[.]gl/games/77747658251236/2x-Luck-Sailor-Piece?privateServerLinkCode=897636487139464501064701149477"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 759,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 759,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2967f78d71dc4c0f29f1a4b8c2dd40cb0a2db03ed09e4fb0c577e7f5ea0299ae",
                " \"126bb7fe59f613f236a4e007a19b4952241162b3af3f8a41e1b2faefd6746f67",
                " \"7fc132b9b986683ae456c4d31b98427008584d9b0ff05684804419c7bb5ae585",
                " \"0675fbff70f3a74eb40e1434e0e9550aa98393d529692946db1bf9b2529fb8ce",
                " \"bac8eaae693e2d7b18b917d8c52e00eeefdc9bf1014b324a0b1ab16b7f3e13ef"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1531,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1531,
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
                "1[.]170[.]22[.]164",
                "1[.]170[.]60[.]81",
                "1[.]170[.]61[.]110",
                "1[.]177[.]63[.]24",
                "1[.]188[.]101[.]189"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5424,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5424,
                "newInLastHour": 5424,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]12[.]45[.]226",
                "1[.]13[.]6[.]145",
                "1[.]192[.]202[.]4",
                "1[.]192[.]203[.]244"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18441,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18441,
                "newInLastHour": 18441,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]8[.]5[.]188:46066/bin[.]sh",
                "hxxps://stre-v9[.]aquastream[.]in[.]net/verification[.]google",
                "hxxp://190[.]55[.]22[.]176:45197/bin[.]sh",
                "hxxp://190[.]55[.]22[.]176:45197/i",
                "hxxp://110[.]37[.]103[.]207:34864/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1205,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1205,
                "newInLastHour": 1201,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"stre-v9[.]aquastream[.]in[.]net\"",
                " \"hydro-run[.]aquastream[.]in[.]net\"",
                " \"vant05[.]trailvantage[.]in[.]net\"",
                " \"168[.]245[.]203[.]143:3790\"",
                " \"44[.]246[.]33[.]190:53307\""
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
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "27[.]133[.]154[.]218",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9166,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9166,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "55079857bbb8b752780408b8f5ab6e0b6d41b96f",
                "ce5d858d667d8ff8b7368054839cb9861c6dcfac",
                "bdcaabf46794dc1cddf8c619938430fcfad5d281",
                "b242cf8e0628b8a1804d04399e9170fb5ca86d64",
                "a77c21fc104c979fa3ce6b6d8627f25a4356712f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46356,
            "activeSources": 8,
            "criticalAlerts": 28322,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19169,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "C2",
                "count": 9153,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 736,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Phishing",
                "count": 303,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18408,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]56[.]175[.]128:38295/i",
                    "hxxp://124[.]6[.]168[.]74:37678/bin[.]sh",
                    "hxxp://115[.]63[.]49[.]179:52589/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]22[.]164",
                    "1[.]170[.]61[.]110"
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
                "count": 1388,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603",
                    "08ed72afb9e65a6b0c216c2f47dfea81d64c9289"
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
                "count": 633,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
                    "58d0977e2eb2f58b80c1441ac8a77c7da332b266",
                    "f856334cbdfb8b6d59158085280f3b830fab2fba"
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
                "count": 389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "55079857bbb8b752780408b8f5ab6e0b6d41b96f",
                    "b242cf8e0628b8a1804d04399e9170fb5ca86d64",
                    "c6c5cbb14fe2839ef4ece10f4b65bf92808f8440"
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
                "name": "OffLoader",
                "count": 350,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "98b1d9de3cd15e6a607f163684bd85263a6807a8",
                    "61eacd4eb1faabb22d2789c13d6c23f06e77b124",
                    "badc8a27ad79d6a5d2ee9c006acb231efd88a90e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40393,
        "lastCalculated": "2026-03-06 10:44 IST"
    }
};
