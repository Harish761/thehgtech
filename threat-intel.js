// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-23T19:08:33.260858+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-23T19:08:32.987687+05:30",
    "lastUpdatedFormatted": "Feb 23, 2026 at 07:08 PM IST",
    "comparisonPeriod": "Feb 22 \u2013 Feb 23, 2026",
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
                "hxxps://mypost[.]ycaskp[.]help/au/service/22/",
                "hxxp://www[.]bduedu[.]in/pay-fees/",
                "hxxps://geminibalance[.]520131401[.]xyz/",
                "hxxps://robloxr[.]com[.]es/users/1140465374/profile",
                "hxxps://www[.]robiox[.]com[.]py/users/225612695322/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1309,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1309,
                "newInLastHour": 191,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d81df7fb144d48b80492ee597ba5b1806e8bf6b90b5788739c07657a4c463442",
                " \"3f05216f892f0da182788e7cd6b9aa352a79fdcc6de6b284be2e5f434df057ce",
                " \"ec6f3c57c707b2605372c5365708f5c21fd1d3a61482a63fe36d516600bf771b",
                " \"0e8fc9abf1965fc8e870f5a752f1af31b9e9cdef0684779bf037dfacd24f9126",
                " \"7a1c78e23cb132eb1fedd7cdaf117c9e00800b7de24b358dce108def5f2b7cce"
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
                "1[.]10[.]211[.]66",
                "1[.]1[.]176[.]58",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7365,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7365,
                "newInLastHour": 7365,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]15[.]136[.]28",
                "1[.]165[.]130[.]37",
                "1[.]194[.]219[.]159",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21459,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21459,
                "newInLastHour": 21459,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://github[.]com/crminfos/png/raw/refs/heads/main/ifmrosh[.]zip",
                "hxxps://github[.]com/crminfos/yos/raw/refs/heads/main/Factura-pendiente-01182026[.]zip",
                "hxxps://github[.]com/crminfos/yos/raw/refs/heads/main/Document%238QzzExFsPNOwL45Ri9[.]zip",
                "hxxps://github[.]com/crminfos/2ing/raw/refs/heads/main/4Package[.]zip",
                "hxxps://github[.]com/crminfos/yos/raw/refs/heads/main/gfplkger%2098ni43gnm%2098[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1929,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1929,
                "newInLastHour": 1752,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rockfeather[.]sparrowinrock[.]in[.]net\"",
                " \"45[.]156[.]25[.]5:443\"",
                " \"stonewing[.]sparrowinrock[.]in[.]net\"",
                " \"aidiyet[.]esb[.]org[.]tr\"",
                " \"bloomshift[.]takeoverspring[.]in[.]net\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9039,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9039,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5f4b5f4de96defcd268ae0de8c7fdc935edb33c2",
                "12a4f0cd772ac3e926a0d9251953b322d0e92f26",
                "0d28fb719a09fea8fd85113a0b14dd2a101d310c",
                "a9376a357aebf80af91a289f9fcb916ee1c04384",
                "e13939e3e2c815267f9c09966fac089211bd22e1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49903,
            "activeSources": 8,
            "criticalAlerts": 31380,
            "activeCampaigns": 211
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22379,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9001,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1258,
                "trend": "up",
                "percentage": 98
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
                "count": 21224,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]63[.]50[.]138:43731/bin[.]sh",
                    "hxxp://182[.]114[.]255[.]106:59432/i",
                    "hxxps://water-network-node[.]rapidbrook[.]ru/service/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]211[.]66",
                    "1[.]11[.]132[.]194",
                    "1[.]15[.]116[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1483,
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
                "count": 623,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c96e7c1cbfdcff64e90557779edd3af8a1b6a6c4",
                    "682a5d662e691f728b8279c889f9d70dafc8bbc4",
                    "313aa465da1c887d1189e74be08d3e79306192c2"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 570,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bennettarbitration[.]com\"",
                    " \"eventocontaduriafce[.]viajandoalcielo[.]com\"",
                    " \"gconfisur[.]com\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 495,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"05daeda7c9faa3f05514ebd4f51963e726180883a26fe14313fc13b14d9bc2e5",
                    " \"736f43d55eb1d8c59630c9077ae28f03c2430ec1398165514214f0fb5b9aa26c",
                    " \"c1f6e0c2823e27d39d2f79c55ece6bfaa4034cbcdb4e3e9e337cc3f34e8e5541"
                ]
            },
            {
                "name": " \"n/a",
                "count": 448,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a9e26e5f2c3a9f5dbcd068150438c88efcb77571e0aa24fc15878271ad1cb482",
                    " \"045fe33a6e30046fb1a902c69d41c4e51ef1ed43cd51d51abd4ebb1e0ab1f542",
                    " \"baee2503fdc06c69ec000275bcd7c4d3f79977cd7864f17b2d797c26d8ab8f9c"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46082,
        "lastCalculated": "2026-02-23 19:08 IST"
    }
};
