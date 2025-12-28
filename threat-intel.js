// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-29T00:21:30.855362+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-29T00:21:30.508293+05:30",
    "lastUpdatedFormatted": "Dec 29, 2025 at 12:21 AM IST",
    "comparisonPeriod": "Dec 28 \u2013 Dec 29, 2025",
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
                "hxxps://shortlink[.]st/Q-z6f1t8",
                "hxxps://roblox[.]com[.]ge/users/8694929173/profile",
                "hxxp://www[.]amazon-clone-peach-eta[.]vercel[.]app/",
                "hxxps://roblox[.]com[.]ge/users/8225787955/profile",
                "hxxps://ledgor-lives-logins-io[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1523,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1523,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b91fa8fad049c5b280e98f1f931d96286a86dddd9d8d7043688676563e443bce",
                " \"c5606dc2a94800b9e5cee08c838b9c3a6ea46218a046a0ffa8939cffa0faae42",
                " \"bf68ef1d8be903ba125a5e9d45fa5b9c13128ebc37fcf38e837b86c81969e43e",
                " \"5f11b62b89f973f6b8c32de47a632f1e7581aaa021dac6206a3d88c6aef75ca2",
                " \"627dc0e4d36c5477a6a9a4642c7743c9241da44046166dfe5319e95b38ee956d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1475,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1475,
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
                "1[.]15[.]135[.]58",
                "1[.]15[.]14[.]29",
                "1[.]15[.]149[.]209",
                "1[.]157[.]99[.]66",
                "1[.]176[.]134[.]251"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5064,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5064,
                "newInLastHour": 5064,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]14[.]95[.]153",
                "1[.]145[.]101[.]122",
                "1[.]197[.]102[.]62",
                "1[.]201[.]164[.]58"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27119,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27119,
                "newInLastHour": 27119,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]193[.]61[.]226:34661/i",
                "hxxp://175[.]174[.]75[.]73:47268/bin[.]sh",
                "hxxp://110[.]37[.]33[.]206:37718/i",
                "hxxp://182[.]126[.]117[.]80:59377/i",
                "hxxp://110[.]37[.]29[.]156:57428/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 795,
                "newInLastHour": 754,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"62[.]1[.]226[.]133:995\"",
                " \"34[.]233[.]93[.]122:443\"",
                " \"185[.]76[.]243[.]139:38027\"",
                " \"163[.]181[.]213[.]114:4506\"",
                " \"13[.]248[.]134[.]220:443\""
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
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8697,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                "12184cf278f7a334418580b93a2459f0358fd9fd",
                "733f676f539126a33ba45b6e2c8d3c9aee267dd8",
                "9e3a099b0392f90a85defa0a590527fc24c856ac",
                "18f6fb081557a654b26c348d6d9e6bffeb064e6f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54754,
            "activeSources": 8,
            "criticalAlerts": 37314,
            "activeCampaigns": 167
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28641,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8673,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 354,
                "trend": "stable",
                "percentage": -1
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 27077,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://uy8h00ja[.]deepc0ve[.]ru/?apikey=NscXFgdBGKzFJhLu&activityId=7672b4e2-02f9-47f6-b15c-8f5d66c7d937&ocid",
                    "hxxp://115[.]63[.]15[.]234:51066/i",
                    "hxxp://87[.]121[.]84[.]191/LOLI/linux[.]arm"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]135[.]58",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]149[.]209"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1475,
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
                "count": 894,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ae2830652e5e3f0b1b68b7b4e5e1c9555109cc4051bc5b3ca7456153cfb9ee4e",
                    " \"6d884331c448c3dfed5c9ef12eac42f2950b1638b6417d9f01d1287efa79bccd",
                    " \"2bf92d70eb2a743dd7157f6ddb25b0280d18f489d53f49aaa6e34b78c4a1dff3"
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
                "name": " \"XWorm",
                "count": 403,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8d9504c5d5d8daabf8729523ea899b42a6cba01c4a0ada144b45068d42d17761",
                    " \"5ffd180ac98664de3927eeb537807250b6b7dd4ecd9bf58d60b4263dc0726adc",
                    " \"bd48f44bdd31045b9615fedf78ab2e5702dcb336e0995a8b898bcaa03ebe8d10"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48265,
        "lastCalculated": "2025-12-29 00:21 IST"
    }
};
