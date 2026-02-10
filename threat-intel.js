// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-10T22:45:29.051560+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-10T22:45:28.774535+05:30",
    "lastUpdatedFormatted": "Feb 10, 2026 at 10:45 PM IST",
    "comparisonPeriod": "Feb 09 \u2013 Feb 10, 2026",
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
                "hxxps://prohomeguides[.]top/k36rUr2hPdko8tBGia9D1VsU136Ynn0cxpa5VRbmWnPtDw/CuZtw8F4XiqIi5L0Cx%20GJVGUqJXi+PKcz+pC6PM/KtiqnThtF0gBvVzsuPivAMXyzzuek2YytxDz/?eml=",
                "hxxp://pub-e2f6341451ca4b26ac23c6bea7b95d1d[.]r2[.]dev/index[.]html",
                "hxxps://clickmints-here6[.]vercel[.]app/",
                "hxxps://www[.]clickmints-here6[.]vercel[.]app/",
                "hxxp://clickmints-here8[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 602,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 602,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"64d41873376ba2ab7b69615667fd3de31038b93399e88536ea6efb8f3b1a83e6",
                " \"5299c946157ea403cf57c24d23ced9fb95fc0ddd349ce1c37613df9abc4e3522",
                " \"5e99311e08775c742b4f8b765210a4a36d655483500c570a232cc6d495e2cc06",
                " \"56f35a4201834e7515c583ef4ef88efb39c2c26209f28154172e05d16cf25389",
                " \"cb6107c4531b230c31244db28ca307058384a7ae968e0f0e41991f35a77b2e72"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1483,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1483,
                "newInLastHour": 3,
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
                "1[.]15[.]116[.]189",
                "1[.]157[.]80[.]72",
                "1[.]157[.]9[.]5",
                "1[.]170[.]37[.]181",
                "1[.]170[.]7[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5619,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5619,
                "newInLastHour": 5619,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]234[.]83[.]55",
                "1[.]238[.]106[.]229",
                "1[.]248[.]227[.]206"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19807,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19807,
                "newInLastHour": 19807,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]254[.]105[.]46:54427/i",
                "hxxp://118[.]232[.]137[.]101:45665/i",
                "hxxp://175[.]173[.]104[.]224:54104/bin[.]sh",
                "hxxp://222[.]141[.]12[.]81:53286/bin[.]sh",
                "hxxp://152[.]89[.]170[.]85/bins/sora[.]mips"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 769,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 769,
                "newInLastHour": 585,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"events[.]youranokacounty[.]com\"",
                " \"assistant[.]praiselimollc[.]com\"",
                " \"hrc[.]emiraride[.]com\"",
                " \"hrc[.]megaexdistribuidora[.]com[.]br\"",
                " \"hxxps://hrc[.]emiraride[.]com/\""
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
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8944,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8944,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6c6fcbd08c8130664b80e2282843d693d849f3aa",
                "d12dacaac4984d29ac317f8bc026dfb1187e8aa0",
                "895da3c451b3cf3c9f5f824b0d54af72cbb2b0e8",
                "f7b6ed231ee6c9dc773697ae24f09c559fbee477",
                "71f4fecadb5ed6289cca27ffaedd2ec02f4450e0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47005,
            "activeSources": 8,
            "criticalAlerts": 29371,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20451,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8920,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 635,
                "trend": "stable",
                "percentage": -4
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
                "count": 19754,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://svclsc[.]com/ms/Plugins/vnc[.]exe",
                    "hxxp://110[.]37[.]8[.]198:35062/i",
                    "hxxp://110[.]37[.]0[.]190:35024/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]116[.]189",
                    "1[.]157[.]80[.]72",
                    "1[.]157[.]9[.]5"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1480,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 619,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477",
                    "71f4fecadb5ed6289cca27ffaedd2ec02f4450e0",
                    "1ea8ec48d9f0b8873db62ceb0d56bc89bd5b326e"
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
                "name": "Vidar",
                "count": 358,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6c6fcbd08c8130664b80e2282843d693d849f3aa",
                    "d12dacaac4984d29ac317f8bc026dfb1187e8aa0",
                    "ed9b5c0b41dcbeb6e74b9ee386ffa01af1085566"
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
        "totalAttacksThisHour": 41347,
        "lastCalculated": "2026-02-10 22:45 IST"
    }
};
