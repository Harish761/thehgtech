// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-27T14:34:49.427741+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-27T14:34:49.137006+05:30",
    "lastUpdatedFormatted": "Mar 27, 2026 at 02:34 PM IST",
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
                "hxxps://ipfs[.]io/ipfs/bafkreigqs4tzaw2xdqq2vqnsugqm35e5udbtaj6rkdbh7cbb4gfdhgvrqe?alt=media&token=271e95bf-d723-44a5-b87a-04324d148e8b",
                "hxxps://roblox[.]com[.]ge/users/9928529756/profile",
                "hxxps://amalkrishnakp[.]github[.]io/Clone_Netflix/",
                "hxxps://harshiiii18[.]github[.]io/Netflix-clone/",
                "hxxps://miss-kniz[.]github[.]io/Amazon/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 850,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 850,
                "newInLastHour": 86,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"992d92455d35d56a2e2d1afa7f0f2642461a5ffdc5d3e582f1d87db3accd2704",
                " \"9c664dc162ce5912e4b53efdccc4499d2c0127428675569658f4182667f1716e",
                " \"be38bb3d0febd6cfca7fee8eae103ac9f3cd7396c69312309ae36261766e3e17",
                " \"a06d2f622eb4e0403f8a8198898d2ae1d26b5f897cedadcb68cc95b888dc7525",
                " \"0be7cfe55f250b4503eaddc969fcc9b9c81d6a29cba5e7f55fae47dc1279d5fe"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 256,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 256,
                "newInLastHour": 54,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "5.101.82.0/24",
                "23.146.241.0/24",
                "23.147.52.0/24",
                "23.147.148.0/24",
                "23.147.156.0/24"
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
                "1[.]191[.]127[.]124",
                "1[.]192[.]177[.]194",
                "1[.]193[.]63[.]139",
                "1[.]193[.]63[.]249",
                "1[.]193[.]63[.]84"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3918,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3918,
                "newInLastHour": 3918,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]192[.]202[.]92",
                "1[.]204[.]166[.]3",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20831,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20831,
                "newInLastHour": 20831,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]215[.]52[.]78:47877/i",
                "hxxp://103[.]160[.]62[.]234/lemperluvkurayami/kurayami[.]i686",
                "hxxp://103[.]160[.]62[.]234/lemperluvkurayami/kurayami[.]arc",
                "hxxp://103[.]160[.]62[.]234/lemperluvkurayami/kurayami[.]arm6",
                "hxxp://103[.]160[.]62[.]234/lemperluvkurayami/kurayami[.]x86_64"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1785,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1785,
                "newInLastHour": 1775,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"oszk[.]apexprospera[.]in[.]net\"",
                " \"t48qdsn[.]apexprospera[.]in[.]net\"",
                " \"5pn9[.]apexprospera[.]in[.]net\"",
                " \"d4rk5-line[.]apexprospera[.]in[.]net\"",
                " \"ajxyrdaq[.]apexprospera[.]in[.]net\""
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
            "iocCount": 9354,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9354,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0a95355a64c3fe3f52695f97595037481ca11c4d",
                "be269f8ead3a0b0603dfb229617307426ecb5102",
                "bfb00181d113469c1bfa7c591625ea5e80a02d71",
                "01fca6410fefef1530ac71c5e34d6985a6e23643",
                "4b1e26306f87b52a186829f27e64af12633a8f3f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49554,
            "activeSources": 8,
            "criticalAlerts": 30923,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21564,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9359,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1222,
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
                "count": 20660,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]116[.]37[.]62:51427/bin[.]sh",
                    "hxxp://192[.]177[.]26[.]196/files/8316621590/ioyFcJU[.]exe",
                    "hxxps://mi5t-mount[.]x7lora[.]in[.]net/verification[.]google"
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
                    "1[.]191[.]127[.]124",
                    "1[.]192[.]177[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1499,
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
                "count": 649,
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
                "name": "Vidar",
                "count": 451,
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
                "count": 449,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"givs1[.]fabledock[.]in[.]net\"",
                    " \"mi5t-mount[.]x7lora[.]in[.]net\"",
                    " \"golbyte[.]ra8gera[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 362,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41991,
        "lastCalculated": "2026-03-27 14:34 IST"
    }
};
