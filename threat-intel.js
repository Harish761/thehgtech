// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-14T22:16:05.280477+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-14T22:16:04.807885+05:30",
    "lastUpdatedFormatted": "Jan 14, 2026 at 10:16 PM IST",
    "comparisonPeriod": "Jan 13 \u2013 Jan 14, 2026",
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
                "hxxps://roblox[.]com[.]ge/games/920587237/DAY-16-Adopt-Me?privateServerLinkCode=62824827491820618435381397230697",
                "hxxps://final-kimchi-072485[.]framer[.]app/",
                "hxxps://public-exoduswallt[.]framer[.]media/",
                "hxxps://consistent-play-637903[.]framer[.]app/",
                "hxxps://broader-presentations-469008[.]framer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 511,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 511,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"85d0ed0e885b9e123e9057589207bcd85fc72f0c39326547d43db111ce40b251",
                " \"f59b2a70d53bc4319aa5efc56d9eb3b169a674a906cea9ce4a03a2ddc793731b",
                " \"4d3c21b0b02ad7664be9df6ed3a85c08be4af8ca7a7ac31dc373a8c09971feca",
                " \"0e7aa42d81a35200a205b426dd88c0c487b785851a081bedd9978ced12fb09de",
                " \"f9b643684eada908f25b2a04acec3dd31b47f9e4b744c76db474d268d1e01d07"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1459,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1459,
                "newInLastHour": 1375,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]15[.]14[.]29",
                "1[.]157[.]99[.]66",
                "1[.]170[.]47[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5408,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5408,
                "newInLastHour": 5408,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]162[.]249[.]243",
                "1[.]178[.]38[.]103",
                "1[.]194[.]233[.]49",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24127,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24127,
                "newInLastHour": 24127,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]63[.]188[.]129:40760/i",
                "hxxp://173[.]28[.]101[.]7:52287/i",
                "hxxp://123[.]5[.]188[.]19:40314/i",
                "hxxp://175[.]147[.]111[.]116:49120/i",
                "hxxp://115[.]63[.]188[.]129:40760/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 30915,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 30915,
                "newInLastHour": 30687,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://116[.]202[.]213[.]222\"",
                " \"176[.]65[.]132[.]11:443\"",
                " \"45[.]156[.]87[.]57:443\"",
                " \"45[.]153[.]34[.]117:443\"",
                " \"172[.]201[.]216[.]161:445\""
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
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8771,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8771,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1a7a89a6ee2a284e574d92f0033efc0a37a66a72",
                "6b965254f0991e2c19ba17ce4ba589dd6c2f2fda",
                "bee0ff91f5800361e8e470af7c0a12f06b8fdcf8",
                "15640ab78d74431d1643b4eb62ae3d9153666ae8",
                "8c03dadea265fd3a083ceb6610d6a89411d635ea"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 79797,
            "activeSources": 8,
            "criticalAlerts": 33465,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Botnet",
                "count": 30244,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Malware",
                "count": 24717,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8748,
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
                "name": " \"unknown\"",
                "count": 29902,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"185[.]196[.]9[.]60:5555\"",
                    " \"hxxps://thiruvallur[.]in/\"",
                    " \"hxxps://test[.]admin[.]topliefer[.]com/\""
                ]
            },
            {
                "name": "malware_download",
                "count": 24080,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]7[.]222[.]18:37688/bin[.]sh",
                    "hxxp://60[.]23[.]207[.]99:51727/i",
                    "hxxp://182[.]127[.]55[.]197:51884/bin[.]sh"
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
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1371,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9655effafe3c6c663b4e64c12e41c9495e4fdfee",
                    "f5ceb2552024990dc2a9057b8938c4a0c1ea9fe3",
                    "d8c4d1a95c17efd9c3d51ddcbe2010d5f1b0de14"
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
                "count": 604,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d3d8dc6a9d41a817b319484d943d3c86be823650",
                    "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa",
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 533,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1d28cc6dca52e95f859739c39a04d794671f66d9",
                    "7b7c48a7d10c11ab988801fec68db41f6935ecf4",
                    "b57cc0f34294222d350c45d62c735547c8882195"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 363,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zabaikalsk[.]logomebel[.]ru\"",
                    " \"walta[.]zergaw[.]et\"",
                    " \"yatagarasu1123[.]com\""
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
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 76934,
        "lastCalculated": "2026-01-14 22:16 IST"
    }
};
