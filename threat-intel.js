// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-12T22:09:57.705237+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-12T22:09:57.411655+05:30",
    "lastUpdatedFormatted": "Jan 12, 2026 at 10:09 PM IST",
    "comparisonPeriod": "Jan 11 \u2013 Jan 12, 2026",
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
                "hxxps://web-wallet-trezurr-faq[.]typedream[.]app/",
                "hxxps://desktop-io-trezor-cloud[.]typedream[.]app/",
                "hxxps://cloud-tre-zor-io-strt-us[.]typedream[.]app/",
                "hxxps://help-us-public-trzr[.]typedream[.]app/",
                "hxxps://32501-reembolso-forma[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1054,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1054,
                "newInLastHour": 137,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"990efe0fc1a620150945117317430a7965f760935c71b1537e73cf210eecfef8",
                " \"f8947dfc8bb7e7f32fee16ade1a9c2d1503d092c2961660774cbfc3e7d7a847d",
                " \"0c250b04c0aa5d0fcbaedc4c58bed45a7553f4129fa160c507bd457ad443a4e5",
                " \"18f4a45fb6764953201c9f0eed0d5aa3e0ccf81496a8442fb32b761465528fff",
                " \"cd561fe79daa037e7fa4449a69ed45f42f3756624c9165e9853e563ac17a201d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1455,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1455,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66",
                "1[.]170[.]47[.]115",
                "1[.]172[.]141[.]41"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6450,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6450,
                "newInLastHour": 6450,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]90[.]220",
                "1[.]159[.]145[.]162",
                "1[.]194[.]219[.]159",
                "1[.]196[.]177[.]49",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24190,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24190,
                "newInLastHour": 24190,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://104[.]193[.]63[.]208:43389/bin[.]sh",
                "hxxp://46[.]163[.]184[.]136:60314/i",
                "hxxp://42[.]59[.]91[.]227:57359/bin[.]sh",
                "hxxp://115[.]55[.]193[.]214:42663/i",
                "hxxp://46[.]163[.]184[.]136:60314/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 891,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 891,
                "newInLastHour": 534,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"topshop[.]in[.]net\"",
                " \"springdesignpartners[.]us[.]com\"",
                " \"gordonsmitharchitect[.]co[.]uk\"",
                " \"arasida[.]sa[.]com\"",
                " \"178[.]16[.]55[.]39:8080\""
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
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8767,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8c03dadea265fd3a083ceb6610d6a89411d635ea",
                "c5dd75a59ccf69e1112a3e5667d0975a242fbc4a",
                "9655effafe3c6c663b4e64c12e41c9495e4fdfee",
                "f5ceb2552024990dc2a9057b8938c4a0c1ea9fe3",
                "5e6df62e5a421a7fa1c932f0a12ea21ad308f5d9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51600,
            "activeSources": 8,
            "criticalAlerts": 33954,
            "activeCampaigns": 210
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25221,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 8733,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 487,
                "trend": "stable",
                "percentage": 6
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
                "count": 24131,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]227[.]187[.]165:43536/bin[.]sh",
                    "hxxp://37[.]52[.]139[.]145:57678/i",
                    "hxxps://github[.]com/Chromew/Chrome/raw/refs/heads/main/thezonestream[.]apk"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]51[.]236",
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1457,
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
                "count": 1368,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e0ea6068f391170ab5ed0eec7f81183d6b9597e0",
                    "8fa8b4de2a18dbf3bb43585b71891faf4c3ca8fc",
                    "7be9dbcc29554dd70c69f108d7763a35d7128ab1"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 838,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"44148927bfd4351f8a35a016679fe287a6cc295fb5320f5ebaa9ce83636df8d8",
                    " \"033b791c7d077d40e9b8077befbd80b5a25f7d99f964f38439f7d453cc0c0295",
                    " \"028642531e4dbd31814ad2d724062c45efeb40e800225f33f1ff19e96aebda28"
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
                "count": 603,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa",
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0",
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46633,
        "lastCalculated": "2026-01-12 22:09 IST"
    }
};
