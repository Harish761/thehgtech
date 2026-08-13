// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-13T08:09:37.234518+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-13T08:09:36.896179+05:30",
    "lastUpdatedFormatted": "Aug 13, 2026 at 08:09 AM IST",
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
            "iocCount": 1649,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1649,
                "newInLastHour": 95,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"47a24d074131c35a8abccb79a958316165a5827b96d446c5d31f1f7b0efa4c4d",
                " \"a4e82a110c505c1fa42956ad1f7c105d745677148a93f64d5c0a23c6b63e219f",
                " \"391bdcb9558ee696f7ed9f8b45ee25c831ecd103340ca998b68716711e6c429c",
                " \"9f7ef60eca04d7f3153e9226a20ce34c0cb798c0f31dbceb91a58c724445469a",
                " \"ae0049d554db803483b5677a2bf7995c6d2aecb8e036978e6e6169afa88d44ab"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1682,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1682,
                "newInLastHour": 1,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]188[.]5[.]237",
                "1[.]192[.]179[.]82",
                "1[.]202[.]198[.]86"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9958,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9958,
                "newInLastHour": 9958,
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
            "iocCount": 16795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16795,
                "newInLastHour": 16795,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]117[.]68[.]188:46150/i",
                "hxxp://115[.]48[.]136[.]66:59219/i",
                "hxxps://www[.]dropbox[.]com/scl/fi/e8fjth5km9ncp252hrjq5/main[.]exe?rlkey=mmcc5w15uphz2xehyvo3uir3k&st=o3g7rikz&dl=1",
                "hxxps://www[.]dropbox[.]com/scl/fi/tpt9bauil4qjjmlp7zb67/Miner[.]exe?rlkey=uoovuvjd5i98iwns8q603dnu8&st=us1vcqua&dl=1",
                "hxxp://115[.]48[.]136[.]66:59219/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4766,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4766,
                "newInLastHour": 4472,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"138[.]226[.]236[.]52:80\"",
                " \"site-unblock[.]com\"",
                " \"akxzgu[.]shop-theslimsplitsmethod[.]us\"",
                " \"wp-nlions[.]fr\"",
                " \"aplikasibandung[.]com\""
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
            "iocCount": 10412,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10412,
                "newInLastHour": 68,
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
            "totalIndicators": 50879,
            "activeSources": 8,
            "criticalAlerts": 29154,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18832,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10322,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3799,
                "trend": "stable",
                "percentage": 1
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
                "count": 17108,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]146[.]6[.]50:52389/i",
                    "hxxp://123[.]14[.]73[.]174:46201/i",
                    "hxxp://80[.]67[.]33[.]209:34699/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]180[.]190[.]250",
                    "1[.]181[.]200[.]22",
                    "1[.]188[.]5[.]237"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1685,
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
                "count": 1430,
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
                "count": 1317,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"140[.]143[.]239[.]224:1099\"",
                    " \"140[.]143[.]239[.]224:8080\"",
                    " \"140[.]143[.]239[.]224:123\""
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
                "count": 693,
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
                "name": "Vidar",
                "count": 672,
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
                "count": 515,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"5cfa6583cd9e509108240188caa996f4707dc57765a96c49ca68771f791f1b89",
                    " \"cb938eeafd41a95adefbe4711e0ed136cca6f5704b5d4727ecaf6a0933bcde42",
                    " \"b53ec7962041720c29f54d290734e6a8fe1e619753814de356b202251f9bbc3b"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46694,
        "lastCalculated": "2026-08-13 08:09 IST"
    }
};
