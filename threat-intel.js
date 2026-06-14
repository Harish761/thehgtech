// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-14T19:53:31.679633+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-14T19:53:31.363846+05:30",
    "lastUpdatedFormatted": "Jun 14, 2026 at 07:53 PM IST",
    "comparisonPeriod": "Jun 13 \u2013 Jun 14, 2026",
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
                "hxxps://myjcb-safecjeckpor[.]icu/pages/login/index[.]php/",
                "hxxps://fdis[.]api[.]lifesecretary[.]com/category/product",
                "hxxp://padisahbet1102[.]com/auth/giris?next=%2F",
                "hxxp://padisahbet1102[.]com/",
                "hxxp://m[.]amshopoo[.]com/mobile/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 448,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 448,
                "newInLastHour": 70,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"90b7b2c6f3d05234dc55678243039d7e51f0d54190239e5234a0005533337dc8",
                " \"3bda3b60a10c9016580595c7b4226ede7788df9e6dbafee70d74e0fa73076127",
                " \"ca6c95fc4f633ab46b64d86c2cd0b5decdd23f926065a952a192ca204d153801",
                " \"a013ebdacb8ec16fa1b93adebb2fdcc155aa10dc41408a87b886753e54c6311d",
                " \"27a7feb88976ea733690101d66cc9ded0553054313e2a0abec74175da9cc57e3"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1697,
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
                "1[.]10[.]185[.]224",
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]15[.]35[.]79",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5588,
                "newInLastHour": 5588,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]117[.]229[.]57",
                "1[.]14[.]28[.]29",
                "1[.]15[.]134[.]139",
                "1[.]15[.]221[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17482,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17482,
                "newInLastHour": 17482,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]215[.]124[.]208:49890/i",
                "hxxp://112[.]93[.]139[.]249:41423/bin[.]sh",
                "hxxp://163[.]142[.]93[.]158:45794/bin[.]sh",
                "hxxp://110[.]36[.]86[.]84:44927/i",
                "hxxp://119[.]179[.]39[.]56:57021/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3489,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3489,
                "newInLastHour": 3419,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"206[.]119[.]171[.]212:9999\"",
                " \"101[.]32[.]241[.]197:8084\"",
                " \"106[.]53[.]172[.]234:8123\"",
                " \"lvtimaax[.]usoleamoozesh[.]xyz\"",
                " \"sxzvcen2[.]shansline[.]com\""
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
            "iocCount": 9922,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9922,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a9f2914bb882008d0bb1bd515e4b5b289eba24a0",
                "d3cc58d42356a8c4436ae4c534058891f7aa4704",
                "91277e257db81a1f95bfac515bf69523c78d1274",
                "bebfbdbe08ede143137c80c0e337e686f1698299",
                "e81bedd0d62805a9bcad2b1cd652435cd9a59bcc"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48062,
            "activeSources": 8,
            "criticalAlerts": 27754,
            "activeCampaigns": 223
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17859,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9895,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3002,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 17398,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]168[.]50[.]135:56688/i",
                    "hxxps://raz1eve[.]shop/Girls[.]apk",
                    "hxxps://cryptex-core[.]pw/cryptex1[.]4[.]zip"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]224",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1697,
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
                "count": 1416,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1408,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]67[.]39[.]175:995\"",
                    " \"194[.]38[.]104[.]204:443\"",
                    " \"185[.]190[.]157[.]173:443\""
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
                "count": 684,
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
                "count": 587,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                    "0505fd5b451911f764cd457d591ec4d355e609c8",
                    "a8f5e9a021f8df5a11743cc4ad447ccf81e7c300"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
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
                "count": 420,
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
        "fastestRisingThreat": " \"unknown\"",
        "totalAttacksThisHour": 41878,
        "lastCalculated": "2026-06-14 19:53 IST"
    }
};
