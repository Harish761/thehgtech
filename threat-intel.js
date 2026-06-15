// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-15T20:02:30.286151+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-15T20:02:29.929625+05:30",
    "lastUpdatedFormatted": "Jun 15, 2026 at 08:02 PM IST",
    "comparisonPeriod": "Jun 14 \u2013 Jun 15, 2026",
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
                "hxxps://dardsaaz[.]com/docusign/Mac/utility[.]php/download/download/index[.]php/",
                "hxxp://www[.]gov-parkingrw[.]top/com/",
                "hxxp://www[.]matesanto[.]com/dbnspa/dbnspa[.]htm",
                "hxxps://www[.]site-4hencvzd9[.]godaddysites[.]com/",
                "hxxp://www[.]gov-parkingrq[.]cyou/com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 596,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 596,
                "newInLastHour": 247,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"97d38f358fcd1829bd281b8218e7ee32cd2ea0b0e649adea2dc25ecf168751a8",
                " \"a63e7dcefe717a6748bb223c17593b13918677dc82cd06468cd58bc891cd53bd",
                " \"002bf42d8594e9bf7fdcfd2bc9a0a9ddff495f8289a589946ce421afcc3d30d6",
                " \"b877bed6f3da4342e590bfc7ae22b35f4eef2c6a744e1874bcfca33f161528ae",
                " \"4639fcd85a803917e16ca0f830c14f9321e767696e0e9693d6ac11404ee7995c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1695,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1695,
                "newInLastHour": 30,
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
                "1[.]15[.]82[.]219",
                "1[.]159[.]13[.]9",
                "1[.]164[.]107[.]152",
                "1[.]164[.]110[.]70",
                "1[.]172[.]245[.]166"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5411,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5411,
                "newInLastHour": 5411,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]14[.]28[.]29",
                "1[.]14[.]49[.]40",
                "1[.]15[.]134[.]139",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17483,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17483,
                "newInLastHour": 17483,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://paqyqptu[.]hugugtejarat4[.]xyz/52e01f9a-41be-40fc-b2f4-09436c906305",
                "hxxp://123[.]12[.]226[.]141:33244/bin[.]sh",
                "hxxp://123[.]129[.]128[.]215:60027/i",
                "hxxp://123[.]188[.]175[.]97:52901/i",
                "hxxps://www[.]basefile[.]click/babyfacexload[.]png"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3570,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3570,
                "newInLastHour": 3481,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"paqyqptu[.]hugugtejarat4[.]xyz\"",
                " \"yuehqazj[.]hugugtejarat4[.]xyz\"",
                " \"eminley[.]ydns[.]eu\"",
                " \"202[.]162[.]106[.]233:18082\"",
                " \"79[.]175[.]189[.]207:443\""
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
            "iocCount": 9932,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9932,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "328e281764aa6dec153e574ec0193af3c62b04e2",
                "a9f2914bb882008d0bb1bd515e4b5b289eba24a0",
                "d3cc58d42356a8c4436ae4c534058891f7aa4704",
                "91277e257db81a1f95bfac515bf69523c78d1274",
                "bebfbdbe08ede143137c80c0e337e686f1698299"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47881,
            "activeSources": 8,
            "criticalAlerts": 27449,
            "activeCampaigns": 213
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17601,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9848,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3062,
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
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
                "count": 17163,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]229[.]220[.]76:44022/bin[.]sh",
                    "hxxp://110[.]36[.]4[.]114:41307/i",
                    "hxxps://qilapvvt[.]ganuneasasi[.]xyz/?ublib=03634b15-1e50-421f-b0fb-c7c1f5242acd"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]35[.]79",
                    "1[.]15[.]36[.]31",
                    "1[.]164[.]107[.]152"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1668,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1451,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]152[.]2[.]86:8889\"",
                    " \"124[.]222[.]218[.]12:18443\"",
                    " \"103[.]47[.]83[.]115:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1410,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
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
                "count": 682,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 571,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d3cc58d42356a8c4436ae4c534058891f7aa4704",
                    "91277e257db81a1f95bfac515bf69523c78d1274",
                    "bebfbdbe08ede143137c80c0e337e686f1698299"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "OffLoader",
                "count": 418,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "736a1766d64ab37f96483dcbcd159c86fc49834e",
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42019,
        "lastCalculated": "2026-06-15 20:02 IST"
    }
};
