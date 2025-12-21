// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-22T02:01:33.436256+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-22T02:01:33.139997+05:30",
    "lastUpdatedFormatted": "Dec 22, 2025 at 02:01 AM IST",
    "comparisonPeriod": "Dec 21 \u2013 Dec 22, 2025",
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
                "hxxp://preciousejiro30[.]wixstudio[.]com/my-site",
                "hxxps://walinkr[.]cc/KBvEepVW/?weihnachtsgeschenke-amazon-2025[.]html",
                "hxxp://morelloinc1[.]wixstudio[.]com/my-site",
                "hxxp://ipfs[.]io/ipfs/bafkreiactbutah6ouhve7v5kanftcawvm46zxov7oucjlchzvm7sbedjxe",
                "hxxp://www[.]mobile-legends[.]net/contact-us/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 797,
                "newInLastHour": 58,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f411482e1e187d0b85c4be62459159ef83874b6bb19d88de38e70e530c6178b6",
                " \"3f3cff1e0db15b2e530dc9dc36553fe765f57f1a527089c96856b058bf1aabb0",
                " \"b8a8d8bc1b9f20487d6964df0a311e47fb2954328258c25246b1de909577dc0d",
                " \"b5555015c3fab31248c83cf8078081558887d3cf2d5982cffd3b896161ef3680",
                " \"c8e65ae106bc331b57d6fe1b1d07ae10221b658f627f2cba1f16955da01c7f93"
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]157[.]99[.]66",
                "1[.]171[.]34[.]59",
                "1[.]176[.]134[.]251"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5461,
                "newInLastHour": 5461,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]14[.]95[.]153",
                "1[.]15[.]114[.]102",
                "1[.]171[.]34[.]59",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26485,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26485,
                "newInLastHour": 26485,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://178[.]16[.]55[.]189/files/380743829/affa9En[.]exe",
                "hxxp://39[.]81[.]177[.]155:39641/i",
                "hxxp://119[.]185[.]242[.]108:36234/i",
                "hxxp://41[.]216[.]189[.]188/Fantazy[.]x86_64",
                "hxxp://39[.]75[.]129[.]223:35333/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 507,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 507,
                "newInLastHour": 507,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rucgev[.]fi7erup2ca[.]ru\"",
                " \"zvmdi3[.]fi7erup2ca[.]ru\"",
                " \"34[.]224[.]67[.]51:1723\"",
                " \"114[.]66[.]59[.]216:4499\"",
                " \"13[.]48[.]43[.]92:7443\""
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
            "iocCount": 8658,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8658,
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
            "totalIndicators": 53013,
            "activeSources": 8,
            "criticalAlerts": 35735,
            "activeCampaigns": 159
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27099,
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
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 211,
                "trend": "stable",
                "percentage": -5
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
                "count": 26327,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]156[.]32[.]162:59263/bin[.]sh",
                    "hxxps://fytqon[.]bed0kur5noop[.]ru/4jq6b58g",
                    "hxxp://186[.]120[.]127[.]53:57011/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]118[.]23",
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
                "count": 491,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b8f119e084f2d7b1a8f51134b54afc2bbcca63f5d57b5e3a2962082c1902c09f",
                    " \"ae478b010850cbb4b6fb48f4e234a98ce18d19f537780950d2a5c6bf51b118e0",
                    " \"575852130762a0dac8ffad73a9fd28f0e7c0a31be75cf71ac4c7640b9ec06225"
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
        "totalAttacksThisHour": 47815,
        "lastCalculated": "2025-12-22 02:01 IST"
    }
};
