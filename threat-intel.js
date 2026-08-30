// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-31T02:54:34.058485+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-31T02:54:33.630118+05:30",
    "lastUpdatedFormatted": "Aug 31, 2026 at 02:54 AM IST",
    "comparisonPeriod": "Aug 30 \u2013 Aug 31, 2026",
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
                "hxxps://pc[.]ioo-gate[.]cn/",
                "hxxps://get-ladgrehelp[.]zapier[.]app/",
                "hxxps://rroll[.]derlin[.]ch/t1/fE3B620b6e0fFdA",
                "hxxp://apple-khf[.]bvyqr[.]xyz/en/main",
                "hxxps://www[.]roblox-login[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 798,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 798,
                "newInLastHour": 65,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"bdbcb94265f715c4e044499b7f18a9193972117c06daf9097f91afe812de6207",
                " \"e2fbf3748c008a631272cef2a2841acdc5423c70d6eac6136ae403ece27da452",
                " \"c61aafe2b00ae629a033335ebd4a93dbc7f8309a7a4e8f4393a35dcfa52a17db",
                " \"f09d525e110ac823c70c45330364a1f777c05a3ca83beff317e9dba4501b436b",
                " \"f2b85e7c81f8a02f297f90b3b9d7b2cdbb8dd001120d5bb7da6e64af35e56fdb"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1705,
                "newInLastHour": 112,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4",
                "1[.]188[.]5[.]46",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7506,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7506,
                "newInLastHour": 7506,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]212[.]190",
                "1[.]193[.]63[.]184",
                "1[.]2[.]174[.]204",
                "1[.]20[.]150[.]200"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15666,
                "newInLastHour": 15666,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]154[.]174[.]39:60220/i",
                "hxxp://182[.]113[.]27[.]187:49881/i",
                "hxxp://120[.]84[.]213[.]26:48371/i",
                "hxxp://59[.]97[.]249[.]68:48169/i",
                "hxxp://182[.]121[.]181[.]105:36990/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4531,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4531,
                "newInLastHour": 4394,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"zqjoz45628[.]workers[.]dev\"",
                " \"0qa0xgkt[.]retinaclr[.]com\"",
                " \"retinaclr[.]com\"",
                " \"mail[.]ded7845[.]inmotionhosting[.]com\"",
                " \"104[.]168[.]102[.]116:22\""
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
            "iocCount": 10591,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10591,
                "newInLastHour": 392,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a974b9d90161d8c5221961c65a975d81959cdb40",
                "ca8a5bbb1e6b22fa9ad9757c50f1bdaf2c22011d",
                "bfbcd2802186b6c5707f7ff6341b87c12b97f4a4",
                "a7fa6117a38135c4d9c26ec7e37f15b361535edf",
                "711c3a7bd15ae5377f4c395e23b3d8b8f1327ced"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48111,
            "activeSources": 8,
            "criticalAlerts": 26691,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16514,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10177,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 4149,
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
                "count": 15653,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://163[.]142[.]92[.]157:40373/bin[.]sh",
                    "hxxp://125[.]47[.]228[.]36:48346/i",
                    "hxxp://125[.]47[.]228[.]36:48346/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]120[.]123[.]117",
                    "1[.]15[.]14[.]29",
                    "1[.]183[.]160[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1593,
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
                "count": 1432,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1275,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"172[.]245[.]91[.]44:22\"",
                    " \"185[.]195[.]65[.]180:443\"",
                    " \"172[.]245[.]91[.]44:80\""
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
                "count": 676,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7"
                ]
            },
            {
                "name": "Vidar",
                "count": 661,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a974b9d90161d8c5221961c65a975d81959cdb40",
                    "a7fa6117a38135c4d9c26ec7e37f15b361535edf",
                    "711c3a7bd15ae5377f4c395e23b3d8b8f1327ced"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 528,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]156[.]87[.]215:1111\"",
                    " \"31[.]57[.]38[.]7:443\"",
                    " \"217[.]60[.]195[.]109:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 43440,
        "lastCalculated": "2026-08-31 02:54 IST"
    }
};
