// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-11T07:51:21.171998+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-11T07:51:20.821698+05:30",
    "lastUpdatedFormatted": "Dec 11, 2025 at 07:51 AM IST",
    "comparisonPeriod": "Dec 10 \u2013 Dec 11, 2025",
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
                "hxxps://exodus-backup-network-recovery-authkey-servicemember[.]codeanyapp[.]com/network/auto",
                "hxxp://macquariecapitalcentral[.]073202[.]com/education_redirect_second?8c5781c2-7b1e-4035-b1d7-990e269e5380",
                "hxxp://macquariecapitalcentral[.]073202[.]com/education_redirect_second/8c5781c2-7b1e-4035-b1d7-990e269e5380",
                "hxxp://m[.]venture-surveys[.]com/education_redirect_second?8c5781c2-7b1e-4035-b1d7-990e269e5380",
                "hxxp://m[.]venture-surveys[.]com/education_redirect_second/8c5781c2-7b1e-4035-b1d7-990e269e5380"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 897,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 897,
                "newInLastHour": 174,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0df4f9f8972f4fac1b7f355c9d3beeb0b00733a5dd72c66535886f0228c9912e",
                " \"fcee0cb2db35f6578e63aad748f29598c2163c530ae6d6d351602b37e5758d5c",
                " \"1eb0b41eac6ce02d97a41159eea7418996721e214086ef7e3ced76ac301f0ec2",
                " \"c98f948bc2965c741c08290a8bdc81e16c8f28f267ad17eb0c42fb9a472fa1cc",
                " \"f2d673ffe87078d6a30d7b2e0dde19dba5b8bd2cbb7b7ccf8ca25400ceacdbb4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1497,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1497,
                "newInLastHour": 9,
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
                "1[.]1[.]176[.]58",
                "1[.]15[.]118[.]23",
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6009,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6009,
                "newInLastHour": 6009,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]13[.]79[.]144",
                "1[.]161[.]49[.]186",
                "1[.]162[.]231[.]97",
                "1[.]162[.]251[.]28"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28649,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28649,
                "newInLastHour": 28649,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://41[.]231[.]37[.]153/rondo[.]lol",
                "hxxps://nova[.]quartzkip[.]ru/0imwhftd",
                "hxxp://89[.]145[.]160[.]158/001010101010010110101011101010101101010111010101/nwfaiehg4ewijfgriehgirehaughrarg[.]mpsl",
                "hxxp://kronicxleopard[.]win/bins/Labelloperc80[.]arm5",
                "hxxp://89[.]145[.]160[.]158/001010101010010110101011101010101101010111010101/nwfaiehg4ewijfgriehgirehaughrarg[.]i686"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2527,
                "newInLastHour": 2332,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jc2s[.]m0tivecrib[.]ru\"",
                " \"95[.]quartz-kip[.]ru\"",
                " \"snip[.]quartz-kip[.]ru\"",
                " \"etalon[.]quartz-kip[.]ru\"",
                " \"weird[.]quartz-kip[.]ru\""
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
            "iocCount": 8610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8610,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d7e0a3afe5bc152da922505aacd1a84489eb737d",
                "8374aa1e49eb8fbc2e7ba4ee5aff54591f4d6b6d",
                "d1f7fd94b5fdc4a570d49ff0e3891ce80c27e4ec",
                "ec6031f63b6551e10f61276781c325e6028cb1bf",
                "48f665e237042042432ae4d2aba268d6b091e2af"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 58240,
            "activeSources": 8,
            "criticalAlerts": 38854,
            "activeCampaigns": 214
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30272,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8582,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1768,
                "trend": "stable",
                "percentage": -1
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
                "count": 29476,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://github[.]com/rawwyh/FiveM-Spoofer/raw/refs/heads/main/CFXBypass[.]exe",
                    "hxxps://github[.]com/ssten1/Temp-Spoofer-LifeTime/raw/refs/heads/main/TempSpoofer[.]exe",
                    "hxxps://github[.]com/tgak1s/Monotone-HWID-Spoofer/raw/refs/heads/main/Monotone[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]15[.]118[.]23",
                    "1[.]176[.]134[.]251"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1488,
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
                "count": 1360,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195"
                ]
            },
            {
                "name": " \"win.dcrat\"",
                "count": 766,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"87[.]120[.]107[.]24:5050\"",
                    " \"sex[.]55clubx[.]net\"",
                    " \"sex[.]servicecenters[.]in[.]net\""
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
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 52482,
        "lastCalculated": "2025-12-11 07:51 IST"
    }
};
