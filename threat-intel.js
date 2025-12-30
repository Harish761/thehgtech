// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-30T14:11:15.868497+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-30T14:11:15.559898+05:30",
    "lastUpdatedFormatted": "Dec 30, 2025 at 02:11 PM IST",
    "comparisonPeriod": "Dec 29 \u2013 Dec 30, 2025",
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
                "hxxps://pack-king[.]nl/wp-content/plugins/astra-sites/admin/bsf-analytics/modules/deactivation-survey/classes/de/info[.]php",
                "hxxps://pack-king[.]nl/wp-content/plugins/astra-sites/admin/bsf-analytics/modules/deactivation-survey/classes/de/index[.]php",
                "hxxps://robiox[.]com[.]af/games/109983668079237/SKIBIDI-Steal-a-Brainrot?privateServerLinkCode=60290768689256836349005291940369",
                "hxxp://www[.]ilerisideniz[.]ooguy[.]com/",
                "hxxps://ilerisideniz[.]ooguy[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1372,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1372,
                "newInLastHour": 46,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"25d072e9eaea6369c210422bb438740671a54d2aa54efd9bbb828b20cac4d69d",
                " \"e88410a025cea6b65211d330e20cab54aed7adc0ac0d8ac72d0ab70f464d377d",
                " \"a7161c9a7c54a47d27459655725d2ade242d0931d6272c75a36f07df45220b08",
                " \"da7cdc7ebe8f9f6f8e1a6b31e63a7ff718c31758bb14418369c4864a7408230a",
                " \"51103d3168f7546fb18184e8fddadf1e1ddcf1b1f9d9d30e404dd613821bcd6c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1466,
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
                "1[.]177[.]162[.]4",
                "1[.]181[.]69[.]174",
                "1[.]193[.]63[.]66",
                "1[.]194[.]253[.]173"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6589,
                "newInLastHour": 6589,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]12[.]64[.]80",
                "1[.]13[.]92[.]86",
                "1[.]14[.]95[.]153",
                "1[.]145[.]101[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25466,
                "newInLastHour": 25466,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]168[.]195[.]82:57771/i",
                "hxxps://tdebwovt[.]pu7eer0d[.]ru/?apikey=LXKeSUdyuFlMHKgX&activityId=5dadb2c6-0a55-4e16-a3f7-8f82a0df00b3&ocid",
                "hxxp://117[.]209[.]31[.]193:58130/bin[.]sh",
                "hxxp://110[.]37[.]61[.]27:41748/i",
                "hxxp://182[.]120[.]92[.]13:52275/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 936,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 936,
                "newInLastHour": 777,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tdebwovt[.]pu7eer0d[.]ru\"",
                " \"783oz4we[.]pu7eer0d[.]ru\"",
                " \"spn38una[.]pu7eer0d[.]ru\"",
                " \"za9l40ec[.]pu7eer0d[.]ru\"",
                " \"q7hqh19r[.]r2nkteh2[.]ru\""
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
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8702,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8702,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c2433ae2f074166a3dacd6c8201c89d66a1e0cc1",
                "2f063e428f33595352b99ddca86ee7845e398bc0",
                "1448fc1d6a288c02919d44f74ba722c92f460f49",
                "af0d2418e9e8e5a7057f5d1a9b5604137b6acde4",
                "596a2c1bbef5e3603cc907b652162cec9a10c496"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53168,
            "activeSources": 8,
            "criticalAlerts": 35514,
            "activeCampaigns": 207
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26837,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8677,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 406,
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
                "count": 25370,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://220[.]201[.]145[.]18:44157/i",
                    "hxxp://219[.]155[.]15[.]135:50954/bin[.]sh",
                    "hxxp://115[.]56[.]152[.]192:36769/i"
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
                    "1[.]177[.]162[.]4",
                    "1[.]177[.]63[.]16"
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
                "count": 835,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1f34ea5e03d6c57487ced7f8c916e00856bd1150ceff6f0452c768e42bbced08",
                    " \"77cf2c8ef01571966fad52939d07121a0150142e291b341330d593625334fc50",
                    " \"1f8b1dceebabba139bbf9ec3314168fad5f3b7c2e9c8e2f4b7be15d30cf73d91"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48184,
        "lastCalculated": "2025-12-30 14:11 IST"
    }
};
