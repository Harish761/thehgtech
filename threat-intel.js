// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-02T17:43:28.817411+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-02T17:43:28.607351+05:30",
    "lastUpdatedFormatted": "Jun 02, 2026 at 05:43 PM IST",
    "comparisonPeriod": "Jun 01 \u2013 Jun 02, 2026",
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
                "hxxp://galeripemenangshopee012[.]blogspot[.]com/",
                "hxxp://galeri-promo2021[.]blogspot[.]com/",
                "hxxps://bafkreiegbqbcfv3bye424hhdqirq2wqiftdkjywtxlivtmx4zyhzkotcta[.]ipfs[.]dweb[.]link/",
                "hxxp://t-mobile[.]rxomdi[.]top/pay",
                "hxxp://t-mobile[.]cvnghb[.]top/pay"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 690,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1b5fdc0a2fafb0320c5f4c20727b37719bf334651942e7d1ff9b67a2d299f710",
                " \"75a7143599bc7154f6290dac048a9a9f75065b435080e44a3cdee74b87933439",
                " \"5b860bc85d95cdf0b70e6b5909507a12f541b8dbac7a7225f2e93df3ae110dbb",
                " \"650d61d299e7b1b22f072344253d5282f9218037d7a215c7242a1aa81336818a",
                " \"a1435b46d9f4089dc92b0bc156f8a2cadfefbebb361e725b42b416f5f0746f49"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1597,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1597,
                "newInLastHour": 6,
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
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6176,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6176,
                "newInLastHour": 6176,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]176[.]139",
                "1[.]14[.]180[.]163",
                "1[.]14[.]192[.]95",
                "1[.]15[.]22[.]22"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20016,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20016,
                "newInLastHour": 20016,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://kuyquso[.]akharinbama[.]ir/9ebf6775-3b11-4bb4-88d2-f072482839bc",
                "hxxps://ps10z3qz[.]eutoor[.]com/?ublib=8aa7fe04-5688-4b9d-8abe-bb2ac9914a29",
                "hxxp://42[.]227[.]243[.]1:59062/bin[.]sh",
                "hxxp://125[.]45[.]48[.]199:46378/i",
                "hxxps://anxstwt[.]akharinbama[.]ir/52c72b8e-06a8-4118-b17e-0cbe50f3e9c8"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3192,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3192,
                "newInLastHour": 3185,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"kuyquso[.]akharinbama[.]ir\"",
                " \"ps10z3qz[.]eutoor[.]com\"",
                " \"eazcu9o7[.]eutoor[.]com\"",
                " \"anxstwt[.]akharinbama[.]ir\"",
                " \"xavytub[.]alternatifdekorasyon[.]com\""
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
            "iocCount": 9830,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9830,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                "b733673f2c221400c4e14bb6cea0f528a5dff337",
                "3b8b88139678299948bf1ccc9c0fbb2b4cb5e861",
                "e4f7e7830ac3c9b8f1bbdaa32294eab9a8d105c8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 35592,
            "activeSources": 7,
            "criticalAlerts": 30462,
            "activeCampaigns": 205
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20654,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9808,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2899,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 93
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19895,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]91[.]177:53235/i",
                    "hxxp://42[.]224[.]254[.]210:40228/bin[.]sh",
                    "hxxps://zxzhjlk[.]artenadigital[.]com/8024e52b-8ee8-4053-ae82-90315513d3c0"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1605,
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
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1374,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]240[.]127:443\"",
                    " \"43[.]138[.]165[.]203:443\"",
                    " \"43[.]138[.]165[.]203:80\""
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
                "count": 683,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8e733b34e95a7b98ada40292b8d35e9040016e65",
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "493f6dbb48806992e524df2a3a0fa0348cef243b"
                ]
            },
            {
                "name": "Vidar",
                "count": 567,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                    "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                    "b733673f2c221400c4e14bb6cea0f528a5dff337"
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
                "name": "OffLoader",
                "count": 422,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 412,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2ac9c102f6730babda06b52a51199d3985545c327c3e5fb401d5dd660ae7f193",
                    " \"33043651e74a6c8c8e8beb0f584de871b618151e3ba43a06aa81542605662b8e",
                    " \"b68f1fb991f1adc4749ad091d9115dc29b2d8445e9ae0b981b5984aa10499123"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 29751,
        "lastCalculated": "2026-06-02 17:43 IST"
    }
};
