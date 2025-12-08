// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-09T00:22:38.935812+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-09T00:22:38.560467+05:30",
    "lastUpdatedFormatted": "Dec 09, 2025 at 12:22 AM IST",
    "comparisonPeriod": "Dec 08 \u2013 Dec 09, 2025",
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
                "hxxps://tiktok[.]mall-soq[.]shop/",
                "hxxp://amazon-clone-cyan-nine[.]vercel[.]app/",
                "hxxps://rnicrosoft-auth[.]com/9jkm87d1efmfkoot",
                "hxxp://ntcoinshome[.]framer[.]ai/",
                "hxxps://tiktok[.]mall-iik[.]shop/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1700,
                "newInLastHour": 630,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"bed0d15d8fdecc0f9ef6d51cf68e2bbe494ff77ac87d9e0315728268a8676488",
                " \"eefbb8cfb3107d81df0cc28b5af62df42907386b771e818efc2b8d9851b24b84",
                " \"86ec5713088b743c128f6ed8969b13f5b4b7986ed661dc358fc68f5d820344b6",
                " \"0afd54e64d99cfa5e607f13576861b0e5f999953dcedc3fcdf26c08d12b2c4fd",
                " \"9553807a9fb8f3cf3eabf9f1b9492a1fa582f62bcc496d26096fbda0f0c1b010"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1492,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1492,
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
                "1[.]176[.]134[.]242",
                "1[.]176[.]134[.]253",
                "1[.]177[.]22[.]68",
                "1[.]177[.]63[.]18"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6033,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6033,
                "newInLastHour": 6033,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]24[.]14",
                "1[.]162[.]251[.]28",
                "1[.]194[.]200[.]251",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30172,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 30172,
                "newInLastHour": 30172,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]226[.]66[.]148:41795/bin[.]sh",
                "hxxps://range[.]s0ckthorn[.]ru/24bjds1c",
                "hxxp://110[.]37[.]100[.]152:41745/i",
                "hxxp://125[.]44[.]30[.]30:50423/bin[.]sh",
                "hxxps://range[.]s0ckthorn[.]ru/do97d6f1"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2358,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2358,
                "newInLastHour": 2145,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"range[.]s0ckthorn[.]ru\"",
                " \"2avp8[.]s0ckthorn[.]ru\"",
                " \"9w[.]s0ckthorn[.]ru\"",
                " \"fqusx[.]s0ckthorn[.]ru\"",
                " \"185[.]222[.]57[.]87:55615\""
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
                "152[.]89[.]239[.]34",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8588,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2950f06bceb099cbdacb8e5b896807d4b46cc4bd",
                "c344524aea265b1f791b3516b4b73eaccd84c49c",
                "7f17a71a98e559a597aa779ded721a1efa3eb82d",
                "cacb2adb56672828e9d356706d449160097a0f33",
                "44d0f031924ffd9dfa42ca651bfd01135b57a9ab"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 59065,
            "activeSources": 8,
            "criticalAlerts": 39937,
            "activeCampaigns": 201
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 31371,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 8566,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 844,
                "trend": "up",
                "percentage": 11
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
                "count": 30102,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://ykpb[.]cherl1ber7y[.]ru/yp79pdyu",
                    "hxxp://110[.]37[.]19[.]208:46570/bin[.]sh",
                    "hxxps://1bhn[.]cherl1ber7y[.]ru/kd40ycls"
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
                    "1[.]176[.]134[.]242",
                    "1[.]176[.]134[.]251"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1492,
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
                "count": 1359,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195",
                    "463d2faa6b38a16140bc5dc7cfbffc6c5d30761c"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 1113,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"melissaallenochrely[.]com\"",
                    " \"pontchamplainpalimpsest[.]com\"",
                    " \"rozecreekpilotgauge[.]com\""
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 533,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1d28cc6dca52e95f859739c39a04d794671f66d9",
                    "7b7c48a7d10c11ab988801fec68db41f6935ecf4",
                    "b57cc0f34294222d350c45d62c735547c8882195"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 478,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"d97d29a44fb9fd2c27a745a00d494182214db9a35a15060a3a9fba389f96057d",
                    " \"dea2fd20b061113f162beb5dc204b77a1fab359321b010b1f4c0a5606af6de55",
                    " \"459effeb8b743b021e180f917156e37de9b65c37752aa3590818dcd62ccd35ab"
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
        "totalAttacksThisHour": 54284,
        "lastCalculated": "2025-12-09 00:22 IST"
    }
};
