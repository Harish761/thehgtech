// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-11T14:32:06.850533+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-11T14:32:06.586076+05:30",
    "lastUpdatedFormatted": "Feb 11, 2026 at 02:32 PM IST",
    "comparisonPeriod": "Feb 10 \u2013 Feb 11, 2026",
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
                "hxxp://blokfil0ginz[.]webflow[.]io/",
                "hxxps://roblox[.]com[.]ge/communities/9513516219/",
                "hxxps://divyanshisaluja[.]github[.]io/Task-Submission---Netflix-Clone/",
                "hxxp://bitmart-login[.]webflow[.]io/",
                "hxxp://fa-etbx-saasfaprod1[.]fa[.]ocs[.]oraclecloud[.]com/hcmUI/CandidateExperience/en/sites/nfcu/pages/working-at-navy-federal/?source=Zippia"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 535,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 535,
                "newInLastHour": 85,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"339a56c0748ebfd8124ecddcf76b0f3684a0e6476040914a8a80347b0d5f4841",
                " \"ef5853338daf570b6f627c41f8f80e07c083e0a44c1d93ab5006102538ff4773",
                " \"92f96ffd125f997d8003913d849604724bdc18b24f8afce035e096b78b226613",
                " \"6bb3744eea075770fbcb8dfe024ead506e02f232333e1470f55fd501f2efbd17",
                " \"3f086a8f38bc7c2ec689c7c454d9fab8363eb5e9da325632c3b64d1a90261e53"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1482,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1482,
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
                "1[.]119[.]209[.]130",
                "1[.]15[.]116[.]189",
                "1[.]157[.]80[.]72",
                "1[.]170[.]37[.]181",
                "1[.]170[.]7[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6256,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6256,
                "newInLastHour": 6256,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]194[.]219[.]159",
                "1[.]214[.]197[.]163",
                "1[.]234[.]83[.]55",
                "1[.]248[.]227[.]206"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19297,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19297,
                "newInLastHour": 19297,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://adobeappsxpyrf-update[.]click/files/Adobe_Reader928097[.]zip",
                "hxxps://summit[.]dealfinder[.]coupons/EdgeGameAssist",
                "hxxp://221[.]15[.]142[.]230:39318/bin[.]sh",
                "hxxp://42[.]235[.]37[.]24:34036/i",
                "hxxp://222[.]142[.]197[.]6:56042/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 863,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 863,
                "newInLastHour": 679,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"elqfbcx5nofwtqfookqml7ltx2g6q6tmddys6e25vgu3al2meim6cbqd[.]onion\"",
                " \"zfytizegsze6uiswodhbaalyy5rawaytv2nzyzdkt3susbewviqqh7yd[.]onion\"",
                " \"ocwjy4ynmpbbzhumh2ama2vl3bc77lf5auqf7nf4k45lbmzoep2rbyid[.]onion\"",
                " \"warlock4fagqhnfuxtcmncfepe3jc33e33dmj2jsk64svxaerm5zhaqd[.]onion\"",
                " \"warlock6d4etw5gwwaakh6auh6cwkinhk2bx7bbldu4m5axlcwmbuuyd[.]onion\""
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
            "iocCount": 8937,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8937,
                "newInLastHour": 4,
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
            "totalIndicators": 46279,
            "activeSources": 8,
            "criticalAlerts": 28633,
            "activeCampaigns": 208
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19717,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8916,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 618,
                "trend": "stable",
                "percentage": 6
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19191,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://163[.]245[.]209[.]150/mush/bin[.]x86_64",
                    "hxxp://163[.]245[.]209[.]150/mush/bin[.]m68k",
                    "hxxp://163[.]245[.]209[.]150/mush/bin[.]powerpc-440fp"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]209[.]130",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1482,
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
                "count": 356,
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41625,
        "lastCalculated": "2026-02-11 14:32 IST"
    }
};
