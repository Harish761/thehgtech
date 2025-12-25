// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-25T18:29:44.125661+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-25T18:29:43.782977+05:30",
    "lastUpdatedFormatted": "Dec 25, 2025 at 06:29 PM IST",
    "comparisonPeriod": "Dec 24 \u2013 Dec 25, 2025",
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
                "hxxps://netfimarketing[.]com/f8b8fd110v28c048dfb9887e074sc84878d3[.]html",
                "hxxps://instagram-clone-web[.]vercel[.]app/",
                "hxxp://www[.]instagram-clone-web[.]vercel[.]app/",
                "hxxp://pub-7286888a4a30420ca43a0a3961b944c0[.]r2[.]dev/index[.]html",
                "hxxp://pub-8158cb1b195f47398f4878c3c89aee2d[.]r2[.]dev/index[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 948,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 948,
                "newInLastHour": 68,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4d0db806ed1ba6f9ec11872486a646c56bf3de33c8ad21581071c9d0962721f7",
                " \"485a1d42ca44e8c524f23dbf3fb1c06378340caf2100a45e69ba86144e7a3d3c",
                " \"7e938110c3e4158818ed547159cddd4ba70ebf6bd0ee471e5877c2cd00df417f",
                " \"c4780e33d7ab1bcd6304daede805b5ae0270c4aa8cea8823467e22697dd2f39b",
                " \"c7ae3ef1f6321bbee623fc191d7708ed7d4208537ac76fffc925c997be3064fe"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1469,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1469,
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
                "1[.]15[.]149[.]209",
                "1[.]157[.]99[.]66",
                "1[.]171[.]20[.]54",
                "1[.]171[.]34[.]122",
                "1[.]176[.]134[.]253"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5756,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5756,
                "newInLastHour": 5756,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]144",
                "1[.]14[.]95[.]153",
                "1[.]145[.]64[.]133",
                "1[.]145[.]66[.]82",
                "1[.]161[.]62[.]69"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27232,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27232,
                "newInLastHour": 27232,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://106[.]54[.]220[.]107:8080/Photo[.]scr",
                "hxxps://37[.]100[.]94[.]220:8443/sda1/Video[.]scr",
                "hxxps://37[.]100[.]94[.]220:8443/sda1/Photo[.]scr",
                "hxxps://37[.]100[.]94[.]220:8443/sda1/Video[.]lnk",
                "hxxps://37[.]100[.]94[.]220:8443/sda1/AV[.]lnk"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 843,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 843,
                "newInLastHour": 840,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"194[.]14[.]217[.]158:443\"",
                " \"util[.]advertising-platform[.]top\"",
                " \"zym[.]windf0x[.]ru\"",
                " \"gj2[.]cloudsh1ft[.]ru\"",
                " \"pj[.]cloudsh1ft[.]ru\""
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
            "iocCount": 8673,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8673,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "46d2b4f1f4f2badc2f587f68386945a0c835c4ba",
                "156578689662f3a0d71a36352f92c42f87a8eb90",
                "4cb2614dfeccc27e90b40f1422750626bbf2eb3f",
                "93b9c85725b9f19295be8a265e241e56e777fc04",
                "263ba9c3bdeb2b09c8108913060a355361a1424c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54342,
            "activeSources": 8,
            "criticalAlerts": 36748,
            "activeCampaigns": 184
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28090,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8658,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 393,
                "trend": "stable",
                "percentage": 8
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
                "percentage": 0
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
                "count": 27007,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]188[.]60[.]13:39286/bin[.]sh",
                    "hxxps://beta[.]s1ogan5timul[.]ru/6eibax5s",
                    "hxxps://storm[.]s1ogan5timul[.]ru/1o0g6wfc"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]149[.]209",
                    "1[.]157[.]99[.]66",
                    "1[.]171[.]34[.]122"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                "count": 599,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "69affd6a91e38229fb655a62a52eb2b7af9fdfb4",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3",
                    "243253f396aa30124e62cdd95a58cf8a3353fd88"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 563,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"bf6af0360bf6e5c401b8b666c2bd2ee8581bb0d17ad9e69590a6bd4b885c556c",
                    " \"24985f557fdc3839d349cab74690c98f26a93d1f9adb74cacac415104f6580e6",
                    " \"8c88bab565e4897fa8d74594e05db8c1f856d70a5d42e5619d10415c6c6c071e"
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
                "name": " \"js.clearfake\"",
                "count": 393,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"beta[.]s1ogan5timul[.]ru\"",
                    " \"abd0r[.]s1ogan5timul[.]ru\"",
                    " \"storm[.]s1ogan5timul[.]ru\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 49205,
        "lastCalculated": "2025-12-25 18:29 IST"
    }
};
