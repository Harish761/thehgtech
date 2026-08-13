// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-13T11:15:35.153123+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-13T11:15:34.788293+05:30",
    "lastUpdatedFormatted": "Aug 13, 2026 at 11:15 AM IST",
    "comparisonPeriod": "Aug 12 \u2013 Aug 13, 2026",
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
                "hxxps://g5[.]lu/r6ap4",
                "hxxps://cardiffsegurogrupoamigo360[.]vercel[.]app/",
                "hxxps://g5[.]lu/vgcss",
                "hxxps://content-dpcbrw03871s[.]edgeone[.]dev/",
                "hxxps://goo[.]su/vxSMx"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1626,
                "newInLastHour": 46,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d146b9c9ce59b59ad77ec063ec613d7ab96dc0b099861c8f79f4e9ff0c1aa8fd",
                " \"6c6b11bd7a1efffc4de087e89bf657934ba0f3592a7ad06e750bd85333e19466",
                " \"e4b77208eb26ae411c0cc7b8a146b680309b60cd75d419b1f4abe312f503ae4c",
                " \"811bc350ee4a5fb2609c6fa61297ef33b6c088381737b0d8a0c9292ca02dcb53",
                " \"c3fca60b40fdc23ec5eb965dd516cd0ab44c7c21150670506690084257f54d6d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1675,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1675,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]1[.]252[.]216",
                "1[.]119[.]194[.]226",
                "1[.]140[.]3[.]11",
                "1[.]15[.]14[.]29",
                "1[.]180[.]190[.]250"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9327,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9327,
                "newInLastHour": 9327,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]12[.]233[.]51",
                "1[.]14[.]106[.]163",
                "1[.]14[.]184[.]80"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16808,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16808,
                "newInLastHour": 16808,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://196[.]189[.]35[.]172:48818/i",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_19e674e25adc5a91[.]exe",
                "hxxp://123[.]8[.]54[.]39:38510/bin[.]sh",
                "hxxp://178[.]16[.]54[.]109/rvn[.]exe",
                "hxxp://42[.]225[.]56[.]37:44489/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4733,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4733,
                "newInLastHour": 4439,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tjdmkxi[.]eng-usa-sightfresh[.]com\"",
                " \"ugkcnf[.]slimsplits[.]us\"",
                " \"qqn5ukah[.]usen-slimsounds[.]com\"",
                " \"156[.]239[.]47[.]245:22\"",
                " \"51[.]38[.]39[.]19:443\""
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
            "iocCount": 10326,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10326,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d8614f6c4127ebeaf66a898a8e7ce3801cf03c30",
                "08d8ee8314ace61bcc0481fe9c0e2bfaaccf34e0",
                "793ccba0eaedcd1a87bb5200cde5a1c9f21ad4ad",
                "8c798a5e27290e239890509e6b0c08c214664a87",
                "c0b1920e3d73babea5c2ef2af7ba72977e65586b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50609,
            "activeSources": 8,
            "criticalAlerts": 28861,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18471,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10390,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3812,
                "trend": "stable",
                "percentage": 0
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
                "count": 16795,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]117[.]68[.]188:46150/i",
                    "hxxp://115[.]48[.]136[.]66:59219/i",
                    "hxxps://www[.]dropbox[.]com/scl/fi/e8fjth5km9ncp252hrjq5/main[.]exe?rlkey=mmcc5w15uphz2xehyvo3uir3k&st=o3g7rikz&dl=1"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]188[.]5[.]237"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1682,
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
                "count": 1436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1321,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"120[.]55[.]93[.]58:10092\"",
                    " \"119[.]45[.]231[.]164:4433\"",
                    " \"140[.]143[.]239[.]224:443\""
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
                "name": "Vidar",
                "count": 696,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "08d8ee8314ace61bcc0481fe9c0e2bfaaccf34e0",
                    "793ccba0eaedcd1a87bb5200cde5a1c9f21ad4ad",
                    "8c798a5e27290e239890509e6b0c08c214664a87"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 696,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae",
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 510,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a4e82a110c505c1fa42956ad1f7c105d745677148a93f64d5c0a23c6b63e219f",
                    " \"391bdcb9558ee696f7ed9f8b45ee25c831ecd103340ca998b68716711e6c429c",
                    " \"9f7ef60eca04d7f3153e9226a20ce34c0cb798c0f31dbceb91a58c724445469a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 45929,
        "lastCalculated": "2026-08-13 11:15 IST"
    }
};
