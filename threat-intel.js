// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-07T19:45:30.370140+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-07T19:45:30.034393+05:30",
    "lastUpdatedFormatted": "Jun 07, 2026 at 07:45 PM IST",
    "comparisonPeriod": "Jun 06 \u2013 Jun 07, 2026",
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
                "hxxps://programundianshopee11[.]blogspot[.]com/?m=1",
                "hxxps://comfy-bet365[.]com[.]cn/",
                "hxxps://update-billing-netflix[.]shekinahglory[.]co[.]zw/[.][.][.]",
                "hxxp://www[.]is[.]gd/wcKNA1/",
                "hxxps://vsilex[.]com/docusign/Mac/utility[.]php/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 696,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e0646d7307c96469bb0cdd2a8b46c674c9445c889e60361364deb31d0b8b6529",
                " \"88c5bb230ece26b21792c82beff015c8896377acc948b871f3c1eec8c4defdf4",
                " \"07312d5913b1bc94423008ac0dcf743fcb8d8b21ad3222870e3ec2c26a4ac92b",
                " \"b64490ff12417cf3595978ea76328b998af879af52ed02c7340bb7e568c00205",
                " \"d9a473b50763e0ea450ff2ab42f70acd389394380c430487bb0a19eb3f6132f8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1639,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1639,
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
                "1[.]0[.]203[.]197",
                "1[.]11[.]228[.]4",
                "1[.]119[.]194[.]226",
                "1[.]141[.]159[.]176",
                "1[.]15[.]170[.]24"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4841,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4841,
                "newInLastHour": 4841,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]110[.]170",
                "1[.]14[.]192[.]95",
                "1[.]201[.]123[.]182",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18697,
                "newInLastHour": 18697,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]113[.]40[.]176:40273/i",
                "hxxp://42[.]237[.]101[.]217:49179/i",
                "hxxps://rwnkdep[.]penality[.]casino/e59b61aa-0941-4d51-b81c-15807c76567b",
                "hxxp://182[.]121[.]47[.]132:42249/bin[.]sh",
                "hxxp://115[.]48[.]152[.]95:32815/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3294,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3294,
                "newInLastHour": 3287,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"54[.]179[.]134[.]249:8084\"",
                " \"204[.]152[.]221[.]185:80\"",
                " \"38[.]55[.]194[.]135:11013\"",
                " \"47[.]83[.]145[.]123:8084\"",
                " \"14[.]103[.]181[.]103:10088\""
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
            "iocCount": 9851,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9851,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "454a92d16f440ad8f180e21da8ee6552b151c25c",
                "a01bd4e7cb1064b5af288d0fbc48a06314f4c9af",
                "e88df6fa5cbae7002d552047f52594c7dbe46baa",
                "1826e244059546f2728d9dca86494828c95d0313",
                "44d317f1bdfcf7670d288c912cecd0737bc4cc1b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49483,
            "activeSources": 8,
            "criticalAlerts": 29205,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19360,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9845,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2999,
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
                "percentage": 96
            },
            {
                "name": "Tech",
                "percentage": 3
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18635,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://g2z2cnlz[.]pascal[.]casino/?ublib=c599276e-21f7-45c6-beb6-e969c5387732",
                    "hxxp://183[.]214[.]149[.]164:56071/bin[.]sh",
                    "hxxp://42[.]180[.]39[.]77:49590/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]203[.]197",
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1642,
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
                "count": 1392,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"165[.]154[.]227[.]66:8080\"",
                    " \"165[.]154[.]227[.]66:443\"",
                    " \"120[.]55[.]246[.]213:8443\""
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
                "count": 687,
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
                "count": 570,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "454a92d16f440ad8f180e21da8ee6552b151c25c",
                    "44d317f1bdfcf7670d288c912cecd0737bc4cc1b",
                    "7cf0a3e58ceb76c0839efdd4adf64dd64fa6f6f2"
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
                "count": 423,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42168,
        "lastCalculated": "2026-06-07 19:45 IST"
    }
};
