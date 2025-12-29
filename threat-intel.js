// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-30T02:04:21.784402+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-30T02:04:21.440713+05:30",
    "lastUpdatedFormatted": "Dec 30, 2025 at 02:04 AM IST",
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
                "hxxps://dhlcanada[.]com/",
                "hxxps://bancolombiaprestamosonline[.]zeabur[.]app/",
                "hxxps://wgdxf[.]vip/",
                "hxxps://allegrolokalnie[.]pl-smart8124122[.]cfd/oferta/47949270/kierownica-logitech-g920-shifter",
                "hxxps://allegrolokalnie[.]pl-smart8124122[.]cfd/oferta/47949270/kierownica"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1489,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1489,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"32fa92f358341a7479df8eadec27c7a11ba40225fc1d2c59c17712e4767b4a67",
                " \"a03f0946e0bec52b4960803a7f9d278881a4add6fb7a56e554971737f392210b",
                " \"cd76ec47568102c823705ef88935024922fbb344a9947de96a83a7a30a65f72c",
                " \"7f4fbf13a3be2e8b78ca4f6ecfab38b97120d56cb0fb06bb734a61eb86b1ae39",
                " \"a3ed9b55c0cae326ba1e493ca5d7080974996632894070846a4dc8699ca27e3e"
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
                "1[.]15[.]14[.]29",
                "1[.]157[.]99[.]66",
                "1[.]177[.]162[.]2",
                "1[.]177[.]63[.]16"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6237,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6237,
                "newInLastHour": 6237,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]14[.]95[.]153",
                "1[.]145[.]101[.]122",
                "1[.]194[.]219[.]159",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26724,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26724,
                "newInLastHour": 26724,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]112[.]7[.]198:33220/i",
                "hxxp://130[.]12[.]180[.]43/files/6749237131/aDYDMDL[.]exe",
                "hxxp://42[.]176[.]124[.]48:57084/i",
                "hxxps://3bvphmwg[.]wind5tone[.]ru/?apikey=moNsJEQTzweDlytU&activityId=2e000015-17a7-4c66-95ff-a00450f41076&ocid",
                "hxxps://1xucln9y[.]wind5tone[.]ru/?apikey=vAtdvyejngqOqGiK&activityId=dd68c311-1a53-45c3-897c-c1f883baf8d5&ocid"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 925,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 925,
                "newInLastHour": 725,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"5o8vbjbm[.]cl0udv1sta[.]ru\"",
                " \"zb5c8o44[.]cl0udv1sta[.]ru\"",
                " \"q9c6enqm[.]cl0udv1sta[.]ru\"",
                " \"3zqouc0q[.]cl0udv1sta[.]ru\"",
                " \"143[.]110[.]235[.]189:443\""
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
            "iocCount": 8696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8696,
                "newInLastHour": 1,
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
            "totalIndicators": 54568,
            "activeSources": 8,
            "criticalAlerts": 36893,
            "activeCampaigns": 206
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28215,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8678,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 413,
                "trend": "stable",
                "percentage": -2
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
                "count": 26682,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://10zseo44[.]5kylight[.]ru/?apikey=gEntuHSGjQqNnVij&activityId=aa66df82-fca4-44d9-bfd2-229a748dd476&ocid",
                    "hxxp://27[.]207[.]204[.]242:32932/i",
                    "hxxp://60[.]23[.]236[.]28:51122/i"
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
                    "1[.]15[.]14[.]29",
                    "1[.]157[.]99[.]66"
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
                "count": 912,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e8a62867cc3b81c76da55d53406e1a59b0cf26ec66f23819af54c4ac7cec8c27",
                    " \"9f9dfe5240e1c6986a4a8c87aed607cbccc5e72a435f4c5713c3c320c97b0d2a",
                    " \"5270d354612e8ff5e67eff5ec1e153fc397934fc53cab4c38832fc43f5c10103"
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
        "totalAttacksThisHour": 49015,
        "lastCalculated": "2025-12-30 02:04 IST"
    }
};
