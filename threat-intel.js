// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-16T10:55:35.670231+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-16T10:55:35.355321+05:30",
    "lastUpdatedFormatted": "Jun 16, 2026 at 10:55 AM IST",
    "comparisonPeriod": "Jun 15 \u2013 Jun 16, 2026",
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
                "hxxps://imagorad[.]com[.]br/prot/",
                "hxxps://klausfhepp[.]com/ino",
                "hxxps://www[.]robiox[.]com[.]gr/users/6541002943/profile",
                "hxxps://starting-trezo-docs[.]square[.]site/",
                "hxxps://bloki-logn[.]zapier[.]app/en-us"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 757,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 757,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f11f1db40e6d644e44c8a7037e13535fcd9b0b796593e7d1080c76d32195ff5e",
                " \"34a73cb9e6b1fe0332c59ce38608c729b37f58653840a2e67ae082910d64b8cd",
                " \"b32425dba354fb2ab5c58d17d2cdde3b3a85105f009dfc48ec02beb2bc4056a4",
                " \"e331d5e830c8b8195ddd4192ef3b971312002385d841a1acb015677c0606f6f2",
                " \"86272cdb72e9278138b740b069d41023c05c68b9aedb0eeb016f37f90bf2e9cb"
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
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]15[.]35[.]79",
                "1[.]159[.]13[.]9",
                "1[.]164[.]107[.]152",
                "1[.]181[.]114[.]38",
                "1[.]188[.]101[.]124"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5348,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5348,
                "newInLastHour": 5348,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]117[.]150[.]44",
                "1[.]14[.]28[.]29",
                "1[.]14[.]49[.]40",
                "1[.]15[.]134[.]139"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16859,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16859,
                "newInLastHour": 16859,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://103[.]44[.]136[.]115:54824/i",
                "hxxps://82a3dcwt[.]sazehayefooladi[.]xyz/?ublib=b07c0f25-c56c-4039-a605-0459346a69b3",
                "hxxp://103[.]44[.]136[.]115:54824/bin[.]sh",
                "hxxp://222[.]140[.]217[.]85:45558/bin[.]sh",
                "hxxps://vtulyasw[.]leaguejazire[.]com/a365ac5d-80d6-4874-be4f-f7776010717e"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3595,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3595,
                "newInLastHour": 3547,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://coquinalawgroup[.]com/\"",
                " \"82a3dcwt[.]sazehayefooladi[.]xyz\"",
                " \"117[.]72[.]189[.]142:60000\"",
                " \"118[.]107[.]9[.]190:80\"",
                " \"192[.]109[.]139[.]139:80\""
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
            "iocCount": 9897,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9897,
                "newInLastHour": 51,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "22e028ce259e7584f4573e44594eced4214e6606",
                "eb96b9eb03a776f21ad2937432c58fbc72efbabc",
                "c29edff70ee75b8d341d6d13dbcd40e63f30cfbe",
                "cc2c6a3d1b7c955eeff33e6ae387dae90bce02b6",
                "b6f62f51d751b564304a7dfddc1eefa21af87459"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48956,
            "activeSources": 8,
            "criticalAlerts": 28340,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18439,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9901,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3175,
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
                "count": 17652,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]12[.]226[.]141:33244/i",
                    "hxxp://221[.]15[.]95[.]168:50119/i",
                    "hxxp://110[.]39[.]226[.]207:39681/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1705,
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
                "count": 1462,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]120[.]20[.]86:8989\"",
                    " \"103[.]181[.]34[.]161:443\"",
                    " \"23[.]95[.]170[.]223:18443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1411,
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
                "count": 577,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb96b9eb03a776f21ad2937432c58fbc72efbabc",
                    "9e21649650307360f41b165d054d97889620c3fa",
                    "fad1aa4c3f36fab0335108ddc93772f10758e780"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 417,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "031af28814511239c0172b71c2c5092660676632",
                    "736a1766d64ab37f96483dcbcd159c86fc49834e",
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41140,
        "lastCalculated": "2026-06-16 10:55 IST"
    }
};
