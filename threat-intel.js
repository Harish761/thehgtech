// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-05T18:36:14.460627+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-05T18:36:14.177438+05:30",
    "lastUpdatedFormatted": "Jan 05, 2026 at 06:36 PM IST",
    "comparisonPeriod": "Jan 04 \u2013 Jan 05, 2026",
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
                "hxxps://roblox[.]com[.]py/communities/3257277946/",
                "hxxps://roblox[.]com[.]py/users/7355825186/profile",
                "hxxps://ex-od-us-en[.]framer[.]ai/web3-en",
                "hxxps://kurir[.]pengiriman[.]eventpromo[.]my[.]id/tiktok/",
                "hxxps://roblox[.]com[.]ge/communities/3074127570/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1141,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1141,
                "newInLastHour": 244,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"25abad54f17538f761a029c0028ee39f50b67ae913c0b0790a03750669565927",
                " \"809b34d42da4c0b6cbd18acde982ed2a3893f37e9191e043ed52e5dec7cfd1df",
                " \"1aeb9d42be3b50bf9996472ea81ce088389866c364a0dd4929766e046e5e11fc",
                " \"4eed9b8640cc9e9baf157b954763cab3116164a54bba48d8c57ee9359a9407ac",
                " \"ae738a422ac69d4be161942b97eb4bcf7063c2edaa44f49988b270ccd4e4a209"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1462,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1462,
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
                "1[.]10[.]219[.]161",
                "1[.]15[.]14[.]29",
                "1[.]157[.]99[.]66",
                "1[.]176[.]134[.]250",
                "1[.]20[.]248[.]217"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6008,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6008,
                "newInLastHour": 6008,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]14[.]95[.]153",
                "1[.]162[.]246[.]79",
                "1[.]171[.]29[.]244",
                "1[.]171[.]31[.]156"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23862,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23862,
                "newInLastHour": 23862,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]224[.]90[.]137:48268/bin[.]sh",
                "hxxp://182[.]121[.]231[.]77:34514/i",
                "hxxp://59[.]98[.]228[.]166:38590/bin[.]sh",
                "hxxp://182[.]121[.]231[.]77:34514/bin[.]sh",
                "hxxp://130[.]12[.]180[.]28/Fantazy[.]mips"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 753,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 753,
                "newInLastHour": 591,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"18[.]119[.]212[.]249:80\"",
                " \"199[.]101[.]111[.]240:3790\"",
                " \"Clawless-42512[.]portmap[.]host\"",
                " \"3[.]80[.]48[.]2:3333\"",
                " \"20[.]196[.]109[.]183:8443\""
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
            "iocCount": 8704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8704,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6bd23ff65ef66b7c0589133e5a3119f2d91ab3f1",
                "c8aad9c5f82a60570499842e439e5853a2a4fcf1",
                "6159992b2c6d63eb26c215499bba43316b6c91f7",
                "7cf99ff9b35a8f0a7307c92e3b1feeca96179038",
                "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50765,
            "activeSources": 8,
            "criticalAlerts": 33433,
            "activeCampaigns": 193
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24751,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8682,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 277,
                "trend": "up",
                "percentage": 25
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
                "count": 23707,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://124[.]29[.]225[.]50:52013/i",
                    "hxxp://182[.]117[.]78[.]183:43059/bin[.]sh",
                    "hxxp://123[.]190[.]29[.]84:49059/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]219[.]161",
                    "1[.]15[.]14[.]29",
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1468,
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
                "count": 1363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324"
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
                "count": 601,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4",
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4"
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
                "name": " \"Mirai",
                "count": 491,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"0614fba74b502cc69626d43706c481362093d9e7e332e8f3821143b05870bce6",
                    " \"0a640b8d7602c72f6ba9f00c1e64f6849b38f4aaf1505a94e26db8e47f7fe952",
                    " \"c3cb105a7ffe98533890d15cea4ce9caaa2d984ceca518f52b9143eab083e69c"
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
        "totalAttacksThisHour": 46015,
        "lastCalculated": "2026-01-05 18:36 IST"
    }
};
