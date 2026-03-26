// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-26T22:46:01.263132+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-26T22:46:00.974340+05:30",
    "lastUpdatedFormatted": "Mar 26, 2026 at 10:46 PM IST",
    "comparisonPeriod": "Mar 25 \u2013 Mar 26, 2026",
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
            "iocCount": 836,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 836,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"87f393e6155babb226874505e76e0cbaa8d4586b163beb386d698e4bb858ca55",
                " \"106656f95a7eb003ce1e9e9a669dbd2626d508fbdb0bda91f651feaf223d8b86",
                " \"c77690cda510333a6bb64e4f6ed874be5aab65286931b84f992fb28e3145045d",
                " \"a444096cf3248f9bc5a5e3203ac27b44041e24eb43f19de31740730237bcd710",
                " \"758b341edf06ad509aa5d54af495951135f65e72aaa70b2d30838c50ec31de42"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1550,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1550,
                "newInLastHour": 18,
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
            "iocCount": 5599,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5599,
                "newInLastHour": 5599,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]123[.]72",
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]189[.]21[.]20",
                "1[.]192[.]189[.]251"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21009,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21009,
                "newInLastHour": 21009,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://svc3edge[.]frozenleafnetwork[.]in[.]net/verification[.]google",
                "hxxps://svc2data[.]frozenleafnetwork[.]in[.]net/verification[.]google",
                "hxxp://115[.]48[.]238[.]231:59807/bin[.]sh",
                "hxxp://59[.]182[.]76[.]26:41892/i",
                "hxxp://42[.]230[.]47[.]89:57803/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1798,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1798,
                "newInLastHour": 1788,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"svc3edge[.]frozenleafnetwork[.]in[.]net\"",
                " \"svc2data[.]frozenleafnetwork[.]in[.]net\"",
                " \"svc1sync[.]frozenleafnetwork[.]in[.]net\"",
                " \"gu4r2-field[.]cl0verbyte[.]in[.]net\"",
                " \"91[.]219[.]238[.]140:7000\""
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
            "iocCount": 9364,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9364,
                "newInLastHour": 14,
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
            "totalIndicators": 49676,
            "activeSources": 8,
            "criticalAlerts": 31083,
            "activeCampaigns": 222
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21717,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9366,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1206,
                "trend": "stable",
                "percentage": -2
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
                "count": 20803,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]39[.]225[.]173:56535/i",
                    "hxxps://velcrest4is[.]z7hire[.]in[.]net/verification[.]google",
                    "hxxps://r1ch-node[.]z7hire[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]177[.]63[.]21",
                    "1[.]182[.]191[.]117"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1535,
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
                "count": 651,
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
                "count": 548,
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
                "name": "Vidar",
                "count": 444,
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
                "name": " \"js.clearfake\"",
                "count": 441,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"velcrest4is[.]z7hire[.]in[.]net\"",
                    " \"r1ch-node[.]z7hire[.]in[.]net\"",
                    " \"torship[.]velorune[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 366,
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
        "totalAttacksThisHour": 43780,
        "lastCalculated": "2026-03-26 22:46 IST"
    }
};
