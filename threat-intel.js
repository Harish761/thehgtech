// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-21T00:18:05.201074+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-21T00:18:04.907992+05:30",
    "lastUpdatedFormatted": "Dec 21, 2025 at 12:18 AM IST",
    "comparisonPeriod": "Dec 20 \u2013 Dec 21, 2025",
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
                "hxxps://steamcommunitty[.]cc/gift26",
                "hxxp://am40[.]1[.]com[.]ar/",
                "hxxps://buruanikutan[.]hadiahhhterkini[.]my[.]id/",
                "hxxps://www[.]bjyc6vng[.]top/mobile[.]html",
                "hxxp://uk[.]parking-yd[.]vip/i/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 604,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 604,
                "newInLastHour": 34,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7e370c8d16a920984f55456dad8b8dc94ab441fcc0de9e8534d33842876b8cdc",
                " \"916746c949b22bf302f611e2309f1bc6296b42f6687826dade74edb37c11e769",
                " \"0521d57d084530fec9359fd3b2a07dd784f04c5367b8d94e20019e535c37dd5b",
                " \"4646218a45f88177a9d221680deaf9cfbb876a092494a8aafc4a61bbcfd0123e",
                " \"b5d7ad2514e1a8ddd0dd6f4339dda8a4fa7eed5d923026029b025f750c6dec68"
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
                "1[.]10[.]223[.]148",
                "1[.]10[.]247[.]85",
                "1[.]1[.]179[.]25",
                "1[.]14[.]120[.]196",
                "1[.]14[.]3[.]240"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5159,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5159,
                "newInLastHour": 5159,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]14[.]95[.]153",
                "1[.]15[.]114[.]102",
                "1[.]171[.]34[.]59",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26070,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26070,
                "newInLastHour": 26070,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]39[.]255[.]44:36869/i",
                "hxxp://42[.]178[.]152[.]7:57084/bin[.]sh",
                "hxxps://uy[.]cloudb1rd[.]ru/p9cn6wps",
                "hxxp://115[.]55[.]116[.]231:38123/i",
                "hxxp://119[.]179[.]237[.]200:35044/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 910,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 910,
                "newInLastHour": 738,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"uy[.]cloudb1rd[.]ru\"",
                " \"rain[.]cloudb1rd[.]ru\"",
                " \"135y[.]clearb1te[.]ru\"",
                " \"rc[.]clearb1te[.]ru\"",
                " \"ampz4[.]clearb1te[.]ru\""
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
            "iocCount": 8659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8659,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "bb69bc0904d3300cc556bb5775e549677aeac371",
                "8a542e015117f2254f098cce2b471b592d4f56e8",
                "cb789c5fc5dfd28c4ca174e1569f00fb985c2751",
                "ce45edd9833acf5ed64d6c16acb355c3b71459a6",
                "42865538586255fae2d0a07ca739c92ce188c475"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52757,
            "activeSources": 8,
            "criticalAlerts": 35065,
            "activeCampaigns": 197
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26429,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8636,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 429,
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
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 25816,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]14[.]120[.]144:37657/bin[.]sh",
                    "hxxp://200[.]59[.]83[.]32:48758/bin[.]sh",
                    "hxxp://61[.]52[.]222[.]131:57766/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]223[.]148",
                    "1[.]10[.]247[.]85",
                    "1[.]1[.]179[.]25"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1469,
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
                "count": 1361,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324",
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35"
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
                "count": 595,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "acfae6aa71276bdaa0f8f7046e4aa9254f080c2c",
                    "69b032a3fbc6d20d24fb410b437e1a31fb7619c8",
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9"
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
                "count": 355,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e187cf4314d300dcfc6092d57df1052f0a11ee0f8fa5aeec49c34cd772a42ffc",
                    " \"1d676fd511ac21e7e97cf0a2b72f87aa2639f470a67dda5f09bc51f336ea98e3",
                    " \"8b3c30d0ed0bcdede43b842168792bb18877ac71d840fee814e765b9e1e3853b"
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
        "totalAttacksThisHour": 47305,
        "lastCalculated": "2025-12-21 00:18 IST"
    }
};
