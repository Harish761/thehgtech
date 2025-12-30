// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-31T00:24:56.867538+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-31T00:24:56.521490+05:30",
    "lastUpdatedFormatted": "Dec 31, 2025 at 12:24 AM IST",
    "comparisonPeriod": "Dec 30 \u2013 Dec 31, 2025",
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
                "hxxps://openseaprojectsmint03[.]vercel[.]app/index[.]html",
                "hxxps://openseaprojectsmint05[.]vercel[.]app/index[.]html",
                "hxxps://openseaprojectsmint02[.]vercel[.]app/index[.]html",
                "hxxps://roblox[.]com[.]ly/users/1366519603/profile",
                "hxxps://www[.]roblox[.]com[.]ml/users/2252662082/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1562,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1562,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"bbdc6e25e71ddd0584e4e76ede47b4baaa6638fd5501109972d7bf36b1be2e02",
                " \"fff052883d06b1fe9d1b4761c1a8b983614e905c3459714b91d189687f86346a",
                " \"69263452d89f385d92a0c9641d6038a7394feeb0ef646ab0bc02d700c859fad4",
                " \"9b2b9e919208b2a601565e3fb9f358c551536c08b7ca733cdcd0b0bde37a7688",
                " \"40c6d0202955fdca44101b8ee796757667233528e3ce701d33ec1ff765a6acfa"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1465,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1465,
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66",
                "1[.]177[.]162[.]4"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6115,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6115,
                "newInLastHour": 6115,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]12[.]64[.]80",
                "1[.]13[.]92[.]86",
                "1[.]145[.]101[.]122",
                "1[.]162[.]228[.]28"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25767,
                "newInLastHour": 25767,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]58[.]140[.]41:46151/bin[.]sh",
                "hxxps://ksgwkcii[.]ku6chni8ht[.]ru/?=check&&actmn=NmttqznhRkHkwVpa",
                "hxxps://r1v6tqom[.]ku6chni8ht[.]ru/?=check&&actmn=FOaGjmggwWFcwWYK",
                "hxxp://222[.]136[.]149[.]229:41610/i",
                "hxxp://113[.]221[.]97[.]79:34496/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1035,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1035,
                "newInLastHour": 924,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"83[.]96[.]115[.]133:443\"",
                " \"65[.]153[.]151[.]130:10010\"",
                " \"ksgwkcii[.]ku6chni8ht[.]ru\"",
                " \"r1v6tqom[.]ku6chni8ht[.]ru\"",
                " \"7c8g738b[.]ku6chni8ht[.]ru\""
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
                "137[.]184[.]9[.]29",
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8689,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8689,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ad6e2e21ac68c72c8c702a51c4a6578277c15c0c",
                "3a474c04a2644f781bb3e4609b9f966791e104b5",
                "4b497ae5c83a1f18738d5eca13d3b85e56fffd92",
                "85f0fd986ad4a7955a5ea85764038f3bbb695cba",
                "c2433ae2f074166a3dacd6c8201c89d66a1e0cc1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53925,
            "activeSources": 8,
            "criticalAlerts": 35983,
            "activeCampaigns": 214
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27299,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8684,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 505,
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
                "count": 25719,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]156[.]173[.]102:45906/bin[.]sh",
                    "hxxps://dvq02enh[.]five5kitt1es[.]ru/?=check&&actmn=yJkabPSyFHAGljEz",
                    "hxxps://qj9v9qv3[.]five5kitt1es[.]ru/?=check&&actmn=QpyFkmHgfkIoroZF"
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
                    "1[.]157[.]99[.]66",
                    "1[.]177[.]162[.]4"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1466,
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
                "name": " \"Mirai",
                "count": 746,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"159cda74ceee9e964ac9c1962e209e8ca44f6b08d5796824535e6bfb198cfb9a",
                    " \"003a5dd31ede5ac5eced85099b69b1470257ee0a653c97275dc4d17be042626d",
                    " \"d9396c293403105ecf985e96054050364bb7d1b3b2f2aec9e77b0b37b33ab39f"
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
                "count": 600,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3"
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
        "totalAttacksThisHour": 48128,
        "lastCalculated": "2025-12-31 00:24 IST"
    }
};
