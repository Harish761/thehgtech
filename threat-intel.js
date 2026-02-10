// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-10T08:54:25.861112+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-10T08:54:25.587525+05:30",
    "lastUpdatedFormatted": "Feb 10, 2026 at 08:54 AM IST",
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
                "hxxps://informacionrelevantereconect[.]fwh[.]is/",
                "hxxp://www[.]facebook-clone-neon-ten[.]vercel[.]app/",
                "hxxps://highmacks[.]com/",
                "hxxps://approve-pending202[.]com/69BQDKEKO",
                "hxxps://approve-pending202[.]com/DV5GOPM7S"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 706,
                "newInLastHour": 53,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"051aa68a30bf13fbb60039872123ee120e89b23e656badc41141d9a5163ea475",
                " \"1fc13bbbccc065511c05659d294e530996d2b307dee1ea044d747059970ccf1b",
                " \"bea34d0c06cfdac15cf00a6caa1d7a445928f61f2093eaa90228f1dd276fc017",
                " \"1146d4e237f11dfee4394a797800c40f43cf64d59f7a59924bc9432f3151fd6a",
                " \"8408280ed0ea2c437c19450847ba3209263f2cec14ed3803dd41ab4f74ddd566"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1479,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1479,
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
                "1[.]15[.]116[.]189",
                "1[.]157[.]80[.]72",
                "1[.]170[.]37[.]181",
                "1[.]170[.]7[.]241",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6483,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6483,
                "newInLastHour": 6483,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]15[.]77[.]170",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]234[.]83[.]55"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19602,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19602,
                "newInLastHour": 19602,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]163[.]145[.]234:36753/i",
                "hxxp://42[.]231[.]89[.]221:46865/i",
                "hxxp://115[.]50[.]221[.]115:51481/i",
                "hxxp://123[.]133[.]211[.]66:58350/i",
                "hxxp://45[.]83[.]207[.]188///arm5"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 843,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 843,
                "newInLastHour": 659,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"118[.]178[.]242[.]184:10001\"",
                " \"189[.]38[.]176[.]62:8081\"",
                " \"157[.]15[.]125[.]137:53012\"",
                " \"176[.]65[.]132[.]128:8808\"",
                " \"154[.]86[.]19[.]33:14994\""
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
            "totalIndicators": 47398,
            "activeSources": 8,
            "criticalAlerts": 29802,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20882,
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
                "count": 597,
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
                "count": 20145,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]36[.]65[.]9:59612/i",
                    "hxxp://182[.]124[.]221[.]223:57217/i",
                    "hxxp://123[.]5[.]168[.]73:47101/i"
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
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1481,
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
                "name": " \"Mirai",
                "count": 369,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ebcd1afb7c4450857f504077537efa5d5864b3649a35fc15146e25a80419e981",
                    " \"8d78814ce0d0a80bdb74e459f9611dea2985db8d1bd5e6d8a510d3e26e31697c",
                    " \"f66cd21389c4ea7ae1f2dd63d69c715a0b26dfbdbea1c610183c1794fd61b675"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 42100,
        "lastCalculated": "2026-02-10 08:54 IST"
    }
};
