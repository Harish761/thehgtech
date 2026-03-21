// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-21T10:40:54.265661+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-21T10:40:53.979739+05:30",
    "lastUpdatedFormatted": "Mar 21, 2026 at 10:40 AM IST",
    "comparisonPeriod": "Mar 20 \u2013 Mar 21, 2026",
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
                "hxxp://web-blockfi-auth[.]webflow[.]io/",
                "hxxp://www[.]itau-landing[.]vercel[.]app/",
                "hxxps://www[.]manuelperujo[.]com/tabs/Y88WE98376[.]php?yem=am9fYW5uZV93ZWxlc2NodWtAaG90bWFpbC5jb20=&c08b638defbcc2f1294531d40678cef4fa2397047286c39d75f2bfad3755acaeba818a0bb144a9ec6ac50b68e3fa1dd49a891e45fc7435c24f332bd4c862ef76961071013e783c092deaa6f3e705e2bd7f57b6050bd289ddb014",
                "hxxp://kurekeans_usa_loagginis[.]godaddysites[.]com/",
                "hxxp://swiissborglogen[.]webflow[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 785,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 785,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c65fec25ba99dafc58dbb0a42836950638da6b3bf535ff8b6d69187f0409ec87",
                " \"2ef9973e259a0959f19ec1307928cc237945179226e8606b386d60cebca4143f",
                " \"ca5dfdcf9fc3bbe9e3e937e89870aa01f2354717561229b37b22bb41d125d9f5",
                " \"e4c42c652679d6a1547f1cd275e4026d326c81bf6acd776450319f3d4bd8b955",
                " \"a3688d896f3b237d49f5e0d9584a48ef63320ef38b3c7a14a3d257c1fd8deddc"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1501,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1501,
                "newInLastHour": 14,
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
                "1[.]10[.]154[.]89",
                "1[.]10[.]165[.]207",
                "1[.]15[.]118[.]23",
                "1[.]188[.]100[.]103",
                "1[.]189[.]229[.]231"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5089,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5089,
                "newInLastHour": 5089,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]14[.]149",
                "1[.]164[.]175[.]121",
                "1[.]189[.]21[.]20",
                "1[.]214[.]197[.]163",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19956,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19956,
                "newInLastHour": 19956,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]140[.]196[.]214:50177/bin[.]sh",
                "hxxps://cfg1proc[.]networkoptimizer[.]in[.]net/verification[.]google",
                "hxxps://rt4space[.]terminalobserver[.]in[.]net/verification[.]google",
                "hxxp://27[.]153[.]152[.]117:41069/bin[.]sh",
                "hxxps://rt3field[.]terminalobserver[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1796,
                "newInLastHour": 1625,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cfg2steel[.]networkoptimizer[.]in[.]net\"",
                " \"cfg1proc[.]networkoptimizer[.]in[.]net\"",
                " \"rt4space[.]terminalobserver[.]in[.]net\"",
                " \"rt3field[.]terminalobserver[.]in[.]net\"",
                " \"rt2outer[.]terminalobserver[.]in[.]net\""
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
            "iocCount": 9293,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9293,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c1bf3f2892eca45233b47a9e7ca46f4719cd6700",
                "23d713f791bed5fda6646d195fe7402cbb5ba95b",
                "e57c93f657e5054142f985327fdff4eb50b349f0",
                "c783a24f93905bfe4aac11a466a70c6454a67d1d",
                "ff792e74745c791376163915b18d340d305def87"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48665,
            "activeSources": 8,
            "criticalAlerts": 30046,
            "activeCampaigns": 214
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20737,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9309,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 852,
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
                "percentage": 93
            },
            {
                "name": "Tech",
                "percentage": 6
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19894,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]38[.]192[.]30:56363/i",
                    "hxxp://115[.]63[.]201[.]44:47196/bin[.]sh",
                    "hxxp://221[.]203[.]147[.]241:39678/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]154[.]89",
                    "1[.]10[.]165[.]207",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1520,
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
                "count": 1390,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868",
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980"
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
                "count": 644,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c1bf3f2892eca45233b47a9e7ca46f4719cd6700",
                    "634e580a85c375140b9a7f5972559dfd4f02033d",
                    "126fb0c3c98f6c3f9e359774e9b174a810eb9871"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 548,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]212[.]170[.]35:80\"",
                    " \"zaparovani[.]com\"",
                    " \"yourquranjourney[.]com\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 543,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0211433cfdfedfc7352c1228fc58d9d2f9d49032",
                    "8ebe0d48a1178a816162ca9b034b7b653d0fc12b",
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rt4sync[.]integritychecker[.]in[.]net\"",
                    " \"rt3gate[.]integritychecker[.]in[.]net\"",
                    " \"rt2proc[.]integritychecker[.]in[.]net\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 460,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8f6015c8cedda99de6ee8e11ac39ce4ada2dbb722f6ed3349a95c5d2c05a7944",
                    " \"93a2fe494017319e1b6ecd78a28db3d349f762e71e59a1a81bae5aea361f358b",
                    " \"21dedc8dbeed3426d6b80adf0ce50090daf472c8fd23f9f69fb5accac22a687d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42004,
        "lastCalculated": "2026-03-21 10:40 IST"
    }
};
