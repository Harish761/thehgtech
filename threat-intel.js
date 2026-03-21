// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-21T08:14:34.397219+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-21T08:14:34.108445+05:30",
    "lastUpdatedFormatted": "Mar 21, 2026 at 08:14 AM IST",
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
            "iocCount": 819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 819,
                "newInLastHour": 245,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8f6015c8cedda99de6ee8e11ac39ce4ada2dbb722f6ed3349a95c5d2c05a7944",
                " \"93a2fe494017319e1b6ecd78a28db3d349f762e71e59a1a81bae5aea361f358b",
                " \"21dedc8dbeed3426d6b80adf0ce50090daf472c8fd23f9f69fb5accac22a687d",
                " \"010f51f6fc725a5648fc303aa9793e7399546bd6e47fe1618eafe7b6bfcaeea7",
                " \"42971c5adb3f6ddece9ecfc9e58865c339fd04c0e98ed7ea8e329f61bb310330"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1520,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1520,
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
                "1[.]10[.]154[.]89",
                "1[.]10[.]165[.]207",
                "1[.]15[.]118[.]23",
                "1[.]174[.]37[.]137",
                "1[.]189[.]229[.]231"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4963,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4963,
                "newInLastHour": 4963,
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
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19894,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19894,
                "newInLastHour": 19894,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]38[.]192[.]30:56363/i",
                "hxxp://115[.]63[.]201[.]44:47196/bin[.]sh",
                "hxxp://221[.]203[.]147[.]241:39678/i",
                "hxxps://rt4sync[.]integritychecker[.]in[.]net/verification[.]google",
                "hxxps://rt3gate[.]integritychecker[.]in[.]net/verification[.]google"
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
                " \"rt4sync[.]integritychecker[.]in[.]net\"",
                " \"rt3gate[.]integritychecker[.]in[.]net\"",
                " \"rt2proc[.]integritychecker[.]in[.]net\"",
                " \"rt1meta[.]integritychecker[.]in[.]net\"",
                " \"msk4static[.]distributedledger[.]in[.]net\""
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
            "iocCount": 9331,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9331,
                "newInLastHour": 0,
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
            "totalIndicators": 49062,
            "activeSources": 8,
            "criticalAlerts": 30590,
            "activeCampaigns": 217
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21276,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9314,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 848,
                "trend": "stable",
                "percentage": -1
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
                "count": 20617,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://res4path[.]operationalgateway[.]in[.]net/verification[.]google",
                    "hxxp://46[.]163[.]134[.]250:42543/i",
                    "hxxp://182[.]116[.]118[.]124:48559/i"
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
                "count": 1534,
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
                "count": 1391,
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
                "count": 465,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"pnt1proc[.]connectivitybuffer[.]in[.]net\"",
                    " \"res4path[.]operationalgateway[.]in[.]net\"",
                    " \"res3view[.]operationalgateway[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "23d713f791bed5fda6646d195fe7402cbb5ba95b",
                    "e57c93f657e5054142f985327fdff4eb50b349f0",
                    "a4ba61d5a30556326740600fd04ad5dfa7664c4f"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 387,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://144[.]31[.]47[.]76/webdav/HelloForSquiblydoo[.]ps1\"",
                    " \"hxxp://144[.]31[.]47[.]76/webdav/script[.]ps1\"",
                    " \"hxxp://144[.]31[.]47[.]76/webdav\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42032,
        "lastCalculated": "2026-03-21 08:14 IST"
    }
};
