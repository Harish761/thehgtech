// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-12T10:27:53.451730+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-12T10:27:53.130666+05:30",
    "lastUpdatedFormatted": "Jun 12, 2026 at 10:27 AM IST",
    "comparisonPeriod": "Jun 11 \u2013 Jun 12, 2026",
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
                "hxxps://noticias[.]almacen[.]nodo12c[.]radiosnet[.]com[.]ar/Office/",
                "hxxps://store[.]communitysectionsgames[.]shop/workshop/AK47-EternalDecay/",
                "hxxps://pub-11d577e12813445bad862b39ec2c7cb4[.]r2[.]dev/index[.]html?id=dulc9hk0w5",
                "hxxp://app[.]adskin[.]vip/",
                "hxxp://aktiffkan-paylater[.]vdd[.]my[.]id/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 956,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 956,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2f2e6e45945ef45dc34f4b9d513a4739ef5427b0f32c7929513eaae552ac80cc",
                " \"36f9dc2c9550610e0835de0653b9ba633e6770d280065b0c3f1a438079d421bf",
                " \"b3351653da1f1dc3006b0e44d4620e812ddc9ef6b6d916e5f6ed8bfdf24b595e",
                " \"9db5aa647700dd9b1e154e47fccc69eac570325566dfb530516f5989a59afcf7",
                " \"5f618d11c54161b66dbfe1a83cf6b52fe94f023d1f7ef6b3aa8328d68608d987"
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
                "1[.]0[.]203[.]197",
                "1[.]15[.]35[.]79",
                "1[.]15[.]36[.]31",
                "1[.]159[.]65[.]249",
                "1[.]159[.]87[.]163"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7662,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7662,
                "newInLastHour": 7662,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]116[.]110[.]170",
                "1[.]116[.]61[.]217",
                "1[.]15[.]227[.]58",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17607,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17607,
                "newInLastHour": 17607,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]4[.]238[.]163:59516/bin[.]sh",
                "hxxp://112[.]114[.]32[.]50:37377/i",
                "hxxp://115[.]61[.]18[.]82:53559/bin[.]sh",
                "hxxps://0saw15fk[.]activereading[.]xyz/?ublib=ee0ca37b-5e14-45e7-8a50-168fe4838e8b",
                "hxxp://61[.]52[.]212[.]177:51970/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6381,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6381,
                "newInLastHour": 6297,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"0saw15fk[.]activereading[.]xyz\"",
                " \"6azbm23o[.]sazehayefooladi[.]xyz\"",
                " \"scrbsmf[.]activebook[.]xyz\"",
                " \"lvzqrradp[.]mabanieslami2[.]xyz\"",
                " \"156[.]238[.]235[.]199:8888\""
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
            "iocCount": 9923,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9923,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "48cf152a0f547ca2ee9668e57c7136e157ec96f5",
                "78e36aa21e77cf60799204d1fb0bac1f063aec42",
                "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                "a4f368e4e4c305b60212c016a4f1fa3a3a96a3de",
                "0505fd5b451911f764cd457d591ec4d355e609c8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51853,
            "activeSources": 8,
            "criticalAlerts": 28473,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18569,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9904,
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
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 17558,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://lrvizgxp[.]lincoplus[.]xyz/8a688702-f713-4b7b-9b47-d8ff26a0835d",
                    "hxxp://62[.]60[.]226[.]140/files/8587665743/JENzVPg[.]exe",
                    "hxxp://64[.]89[.]162[.]139/bins/zoryn[.]spc"
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
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 2258,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"lrvizgxp[.]lincoplus[.]xyz\"",
                    " \"kn46xsmt[.]readthisintro[.]xyz\"",
                    " \"bjuo48bq[.]ravanroshd[.]shop\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1698,
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
                "count": 1441,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]132[.]89[.]132:8080\"",
                    " \"114[.]132[.]89[.]132:443\"",
                    " \"114[.]132[.]89[.]132:80\""
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
                "count": 589,
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46901,
        "lastCalculated": "2026-06-12 10:27 IST"
    }
};
