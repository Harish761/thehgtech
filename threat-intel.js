// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-30T14:55:21.603043+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-30T14:55:21.364493+05:30",
    "lastUpdatedFormatted": "Mar 30, 2026 at 02:55 PM IST",
    "comparisonPeriod": "Mar 29 \u2013 Mar 30, 2026",
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
                "hxxps://discord[.]imms[.]top/",
                "hxxps://aumentok[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://pnbahiadecadiz[.]es/contacto/",
                "hxxp://fakewatches[.]es/",
                "hxxp://3rt[.]site/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 393,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 393,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b38c9f871dc4735320464bb80219372a0ffe2b4f8750942b550576ace9b012b8",
                " \"e913b436fe3debd25ed0fa24e84e313f104490be66687a584f9cc15e0b23d9c8",
                " \"b9de8a6dfc4d7d04b31b9ad025430854e0c68e6bbe2e51b7344128d8f4f492f6",
                " \"959cceef4f8294a4b950aa279840954d3568fb196736defd74a844897d15676a",
                " \"f6e7efd22cca156d6ae9c17018b4bd61b2a5f37a93173e23f057fb73c45b52ee"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1549,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1549,
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
                "1[.]10[.]202[.]59",
                "1[.]14[.]3[.]240",
                "1[.]182[.]191[.]117",
                "1[.]188[.]102[.]120",
                "1[.]191[.]127[.]124"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4590,
                "newInLastHour": 4590,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]194[.]219[.]159",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20901,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20901,
                "newInLastHour": 20901,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://riverrefine[.]oakwhisper[.]in[.]net/verification[.]google",
                "hxxps://hyper-4uth[.]oakwhisper[.]in[.]net/verification[.]google",
                "hxxp://123[.]8[.]9[.]140:39071/i",
                "hxxps://filteglob[.]oakwhisper[.]in[.]net/verification[.]google",
                "hxxp://202[.]1[.]26[.]13:58399/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1066,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1066,
                "newInLastHour": 1058,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"riverrefine[.]oakwhisper[.]in[.]net\"",
                " \"hyper-4uth[.]oakwhisper[.]in[.]net\"",
                " \"130[.]12[.]182[.]112:2404\"",
                " \"filteglob[.]oakwhisper[.]in[.]net\"",
                " \"runwaypublic[.]oakwhisper[.]in[.]net\""
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
            "iocCount": 9411,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9411,
                "newInLastHour": 8539,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3a34f580e3626ac9de04604b8d0a4c3abb8682aa",
                "426f482e33309401ce4ecf7958f5ae28e8ff1423",
                "5564b85fb641dbb29c8d4c265b4e41b3476a851d",
                "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                "9a39dd3fec6c66ce980dbc07e4ad5103b2d0b09b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 39867,
            "activeSources": 8,
            "criticalAlerts": 22006,
            "activeCampaigns": 95
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21107,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 899,
                "trend": "down",
                "percentage": -90
            },
            {
                "category": "Botnet",
                "count": 412,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 86
            },
            {
                "name": "Tech",
                "percentage": 13
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20749,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://69[.]173[.]182[.]43:48089/i",
                    "hxxp://45[.]232[.]75[.]59:52767/i",
                    "hxxps://map-anchor[.]territoriallink[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]182[.]191[.]117",
                    "1[.]188[.]102[.]120"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1553,
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
                "name": " \"js.clearfake\"",
                "count": 490,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"map-anchor[.]territoriallink[.]in[.]net\"",
                    " \"site-connect[.]territoriallink[.]in[.]net\"",
                    " \"land-mark[.]territoriallink[.]in[.]net\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 291,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://discord[.]imms[.]top/",
                    "hxxps://aumentok[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                    "hxxps://pnbahiadecadiz[.]es/contacto/"
                ]
            },
            {
                "name": "Vidar",
                "count": 264,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8501fab6623b7b8f968d2b522da81c514918df66",
                    "be1e2e424052ffaf96e10700d5acd79eceba25e4",
                    "cfbf57b8861a2ecb82c130d7815e61aabfa08c84"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 153,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"cd08f3eb5fffff86b21717d458e75b7005331d03849fafe597ced750e3e41b55",
                    " \"23ce78d055be74cfb1e48e0710bbbe7a521a6aad6e7cbc125d6936a216c656a8",
                    " \"09aa60962df24d5047317489edc680baf32469a3cafa528803391434f00b15f6"
                ]
            },
            {
                "name": "OffLoader",
                "count": 128,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cfdefb9b571940cbf746e3ff7a8d159e75c3daad",
                    "f72b15a90b86d3b726a98c4b54b1912ff67f0014",
                    "f9c3b7e52c81b2001740f7fcdb39339549af04dc"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 95,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://www[.]giulioterrinoni[.]it/wps[.]lic\"",
                    " \"hxxps://optimize[.]lat/assets/landings/recaptcha2/\"",
                    " \"hxxps://optimize[.]lat/assets/landings/recaptcha/js/loader[.]js\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 78,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2f2af0029b55190dbcee3cc21a09f04a84b1ab10fb19d558c073dcd2fa158991",
                    " \"a241d95bfbd5998e27297059dc219826aca22c638862dd86d63f68ef33ed1cc6",
                    " \"de5f128ee8537d5bcb1da064cac431b078711c1f23ffc194b3d99af6ad4fd1e2"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 50455,
        "lastCalculated": "2026-03-30 14:55 IST"
    }
};
