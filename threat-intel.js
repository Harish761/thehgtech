// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-31T02:03:33.036610+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-31T02:03:32.726942+05:30",
    "lastUpdatedFormatted": "Dec 31, 2025 at 02:03 AM IST",
    "comparisonPeriod": "Dec 30 \u2013 Dec 31, 2025",
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
                "hxxps://openseaprojectsmint03[.]vercel[.]app/index[.]html",
                "hxxps://openseaprojectsmint05[.]vercel[.]app/index[.]html",
                "hxxps://openseaprojectsmint02[.]vercel[.]app/index[.]html",
                "hxxps://roblox[.]com[.]ly/users/1366519603/profile",
                "hxxps://www[.]roblox[.]com[.]ml/users/2252662082/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1572,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1572,
                "newInLastHour": 76,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"72ec924fe32eea6d166796ef0a60be7e829938379ace537f703be2beee761a88",
                " \"779efedd31e4652aea09736beb70b89d0cacf7338916f77f47c514fb6bd58d53",
                " \"d2ae2ceb86ad6135cc88278c405bba3a91a55866e2e54c152a1a93e9589a5582",
                " \"e84f3a7b0cb5e01a9368f7cc416f69a44d6790a0e416abd7dd622017ef75418c",
                " \"d93adab1ae603b49f2d829d70f759073bee0720dfaa239cdc0fa277fab6a4f29"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1466,
                "newInLastHour": 1,
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]157[.]99[.]66",
                "1[.]177[.]162[.]2",
                "1[.]177[.]162[.]4"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6344,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6344,
                "newInLastHour": 6344,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]12[.]64[.]80",
                "1[.]13[.]92[.]86",
                "1[.]145[.]101[.]122",
                "1[.]162[.]228[.]28"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25820,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25820,
                "newInLastHour": 25820,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ukocpmma[.]offe7sawmi1[.]ru/?=check&&actmn=KRqtumBfBKTBnAOG",
                "hxxps://ibn00ky3[.]offe7sawmi1[.]ru/?=check&&actmn=VduWajDfwWxGVGkc",
                "hxxp://115[.]48[.]151[.]171:38760/i",
                "hxxp://110[.]37[.]98[.]100:53494/i",
                "hxxp://115[.]55[.]50[.]169:46023/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1054,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1054,
                "newInLastHour": 943,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ukocpmma[.]offe7sawmi1[.]ru\"",
                " \"rs9b4h2k[.]offe7sawmi1[.]ru\"",
                " \"ibn00ky3[.]offe7sawmi1[.]ru\"",
                " \"z71buske[.]offe7sawmi1[.]ru\"",
                " \"13[.]213[.]189[.]252:443\""
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
                "137[.]184[.]9[.]29",
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8704,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ad6e2e21ac68c72c8c702a51c4a6578277c15c0c",
                "3a474c04a2644f781bb3e4609b9f966791e104b5",
                "4b497ae5c83a1f18738d5eca13d3b85e56fffd92",
                "85f0fd986ad4a7955a5ea85764038f3bbb695cba",
                "c2433ae2f074166a3dacd6c8201c89d66a1e0cc1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53823,
            "activeSources": 8,
            "criticalAlerts": 36022,
            "activeCampaigns": 200
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27355,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8667,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 497,
                "trend": "stable",
                "percentage": -1
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
                "count": 25767,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]58[.]140[.]41:46151/bin[.]sh",
                    "hxxps://ksgwkcii[.]ku6chni8ht[.]ru/?=check&&actmn=NmttqznhRkHkwVpa",
                    "hxxps://r1v6tqom[.]ku6chni8ht[.]ru/?=check&&actmn=FOaGjmggwWFcwWYK"
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
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1465,
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
                "count": 1362,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1a5aa767c2675014c5c0a10b2d9f4c63844a84f8",
                    "47800989ef4eda671b2a76a0cd9123ec7b0bc324",
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 759,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"bbdc6e25e71ddd0584e4e76ede47b4baaa6638fd5501109972d7bf36b1be2e02",
                    " \"fff052883d06b1fe9d1b4761c1a8b983614e905c3459714b91d189687f86346a",
                    " \"69263452d89f385d92a0c9641d6038a7394feeb0ef646ab0bc02d700c859fad4"
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
                "count": 599,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2be6327a2b03aed6322898941f4e6c7ca29de8e5",
                    "be3b160ebe83bfc2e609bf912b36096e8dd2ffa3",
                    "243253f396aa30124e62cdd95a58cf8a3353fd88"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 359,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ksgwkcii[.]ku6chni8ht[.]ru\"",
                    " \"r1v6tqom[.]ku6chni8ht[.]ru\"",
                    " \"7c8g738b[.]ku6chni8ht[.]ru\""
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48506,
        "lastCalculated": "2025-12-31 02:03 IST"
    }
};
