// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-27T02:18:00.926940+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-27T02:18:00.621254+05:30",
    "lastUpdatedFormatted": "Mar 27, 2026 at 02:18 AM IST",
    "comparisonPeriod": "Mar 26 \u2013 Mar 27, 2026",
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
                "hxxps://snapchat-login-clone[.]pages[.]dev/",
                "hxxp://gemiieniilogin[.]webflow[.]io/",
                "hxxps://ofertasenmayopost[.]pages[.]dev/points/PSE/falabella",
                "hxxp://program-resmi029[.]blogspot[.]com/",
                "hxxp://shopee75789[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 835,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 835,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7a82977d10ccefa9fc5fbd9b5e20159317b68403183d137717b96e57a230563d",
                " \"0fbc7664bfc893f983376909f8df30b964d4b8b78934aa42e8e966670d3cf391",
                " \"f2a7140be14522fd4c92ab2931e29355f0fdeb6fa16043181149e9a4f053baf9",
                " \"de0cac07e9485b14d817953615515d37dafea9a80f29efa7c5d8e723ce789976",
                " \"354e468df70da9079cf308cc630be4ac1769863038d4e4c1c3f1329d6018553a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1553,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1553,
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
                "1[.]177[.]63[.]21",
                "1[.]182[.]191[.]117",
                "1[.]191[.]127[.]124",
                "1[.]191[.]147[.]229",
                "1[.]191[.]162[.]55"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4283,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4283,
                "newInLastHour": 4283,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]123[.]72",
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21092,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21092,
                "newInLastHour": 21092,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://60[.]20[.]51[.]232:42223/bin[.]sh",
                "hxxp://120[.]28[.]219[.]64:52993/bin[.]sh",
                "hxxps://ext4point[.]bluepointterminal[.]in[.]net/verification[.]google",
                "hxxp://59[.]88[.]4[.]199:58139/i",
                "hxxps://ext3data[.]bluepointterminal[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1814,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1814,
                "newInLastHour": 1802,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ext4point[.]bluepointterminal[.]in[.]net\"",
                " \"ext3data[.]bluepointterminal[.]in[.]net\"",
                " \"lichtermanlaw[.]com\"",
                " \"143[.]198[.]52[.]66:1177\"",
                " \"ext2proxy[.]bluepointterminal[.]in[.]net\""
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
            "iocCount": 9402,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9402,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "be269f8ead3a0b0603dfb229617307426ecb5102",
                "bfb00181d113469c1bfa7c591625ea5e80a02d71",
                "01fca6410fefef1530ac71c5e34d6985a6e23643",
                "4b1e26306f87b52a186829f27e64af12633a8f3f",
                "36ab4c53471d9071a08c916360e6b9e44b7bcf51"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49990,
            "activeSources": 8,
            "criticalAlerts": 31294,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21926,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9368,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1246,
                "trend": "stable",
                "percentage": 2
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
                "percentage": 90
            },
            {
                "name": "Tech",
                "percentage": 9
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21066,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://dev1proc[.]ironrootprocessor[.]in[.]net/verification[.]google",
                    "hxxps://cl4path[.]wildbranchcluster[.]in[.]net/verification[.]google",
                    "hxxps://cl3view[.]wildbranchcluster[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]177[.]63[.]21",
                    "1[.]182[.]191[.]117",
                    "1[.]191[.]127[.]124"
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
                "name": "AsyncRAT",
                "count": 1394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06",
                    "51f20540cd77caa36702bb359c8c06949aecea02"
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
                "count": 650,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "01fca6410fefef1530ac71c5e34d6985a6e23643",
                    "aa61baea020e30d4e9279369359932319ca0d2ec",
                    "3892e7a2c8bd6e4755701c9d1d6af34795a75b5a"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 549,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a",
                    "7f065e37b5c0112620f7c97d3cd761e626e0faf4"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 456,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cl4path[.]wildbranchcluster[.]in[.]net\"",
                    " \"cl3view[.]wildbranchcluster[.]in[.]net\"",
                    " \"cl2point[.]wildbranchcluster[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 453,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "36ab4c53471d9071a08c916360e6b9e44b7bcf51",
                    "9413d052ea89e6c879e577b62e5a55436f55dd8d",
                    "60fb7400edece2b09a17663e06efdb9badde8e2e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 365,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4b1e26306f87b52a186829f27e64af12633a8f3f",
                    "d59f81b85fcc5e75eddaea46f9fedaa93aa45e6f",
                    "0b0dc82e3c43d6527d2e2d4e19195817d9731387"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42501,
        "lastCalculated": "2026-03-27 02:18 IST"
    }
};
