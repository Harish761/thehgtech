// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-26T00:22:24.198287+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-26T00:22:23.841394+05:30",
    "lastUpdatedFormatted": "Dec 26, 2025 at 12:22 AM IST",
    "comparisonPeriod": "Dec 25 \u2013 Dec 26, 2025",
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
            "iocCount": 941,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 941,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a855721cb3d14f941717af95f8e83bb1d9b30f039b77088fd83f0d8bb39e88ed",
                " \"dd58f87adbb86e94761d4a7828bd92e560e26f0c1a37edfa386514d7763ffe5c",
                " \"d6812aabf1ea090f8f2e10ad67db1476c88d3a44126834b83d4f670397773eba",
                " \"f3d0cba26ea9f9102d62c0985ad56818052334f08479be4536adeccd2b584be9",
                " \"811d1d9cba14e96d732945b0ccefed770f8f330427708306a3b6f8b6dd284e6a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1468,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1468,
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
            "iocCount": 5319,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5319,
                "newInLastHour": 5319,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]95[.]153",
                "1[.]145[.]64[.]133",
                "1[.]145[.]66[.]82",
                "1[.]161[.]62[.]69",
                "1[.]171[.]20[.]54"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27418,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27418,
                "newInLastHour": 27418,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://2hedr[.]rainsh1eld[.]ru/ozz64zhv",
                "hxxp://116[.]138[.]34[.]189:43304/bin[.]sh",
                "hxxp://119[.]117[.]156[.]98:44157/i",
                "hxxp://42[.]87[.]140[.]180:53795/bin[.]sh",
                "hxxps://6dr[.]rainsh1eld[.]ru/f7kuttun"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 820,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 820,
                "newInLastHour": 817,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"155[.]102[.]62[.]60:4506\"",
                " \"m7[.]shadowm1st[.]ru\"",
                " \"119[.]36[.]33[.]35:10250\"",
                " \"104[.]140[.]154[.]49:30129\"",
                " \"104[.]140[.]154[.]59:30186\""
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
            "iocCount": 8686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8686,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8e22e996d0215c4e2cb73e5621cb9de904b861cf",
                "8b31dc2519edfe1fdac0ab790b3eae4bcb7ac4b3",
                "5afb5e6087c16b75b0bcf2a8aa2f1a530d333563",
                "46d2b4f1f4f2badc2f587f68386945a0c835c4ba",
                "156578689662f3a0d71a36352f92c42f87a8eb90"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54648,
            "activeSources": 8,
            "criticalAlerts": 37041,
            "activeCampaigns": 185
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28386,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8655,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 393,
                "trend": "stable",
                "percentage": -3
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 27373,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://1f[.]deepc0rest[.]ru/r086tk6k",
                    "hxxp://120[.]28[.]192[.]114:58071/i",
                    "hxxp://60[.]23[.]233[.]242:42153/i"
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
                    "1[.]171[.]20[.]54"
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
                "count": 1362,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "3a56a66eb43b679afa1edb58e0fddcadf74bb2a4",
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f"
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
                "count": 579,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"bcb05b54551930647a2a004bbc33895146c3600ba07d15dc6a7a440033371b4b",
                    " \"71c01dc2b31d88b1c608b099d991d9ddc103ed193240b6838c4c0e9bf8c880e5",
                    " \"96cd03433987ef3831951a12aa2ac7036814e82f4344b764309b7b7ba2764e5c"
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
                "count": 421,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"kbn[.]deepc0rest[.]ru\"",
                    " \"1f[.]deepc0rest[.]ru\"",
                    " \"aq9[.]deepc0rest[.]ru\""
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
        "totalAttacksThisHour": 48880,
        "lastCalculated": "2025-12-26 00:22 IST"
    }
};
