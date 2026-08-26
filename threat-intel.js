// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-26T14:26:04.091961+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-26T14:26:03.748057+05:30",
    "lastUpdatedFormatted": "Aug 26, 2026 at 02:26 PM IST",
    "comparisonPeriod": "Aug 25 \u2013 Aug 26, 2026",
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
                "hxxp://gjk43[.]vercel[.]app/",
                "hxxps://axe-et-formation[.]com/",
                "hxxps://www[.]imtoken-market[.]com/",
                "hxxp://m[.]imtoken-market[.]com/",
                "hxxps://accounts-413d9d96[.]decorgqcom[.]workers[.]dev/413d9d9637464250?sid=uxW8MSsB5nMxjA1lzambKkikc8hT4buQ65bKfAGRVwVWgXWZTVG7ThJBmGE3a9x42mYYhRi9AP7rBERbotqsU0kHgsR9MOKZ1XxJxzUTom2wYtQN5iwEoJY6oefP3ALVIDvVNbRErHWTTP0u8wW8UaJ1gr31WzATqVPwfBDDOjrsQlvWU21pU6AZoAEO3150fkxK6ASynHMVj7VA5wZIGem96jvC0QVr0kR8y4lkrWLRrIq6cNKAPckcVn8XXMYuA5YySJzdeBRSHMMM4CELAyJPdHwR9iiR41Vme0ms90aXqNmrI7D9YiTZ6lLUpkrVD9yEyU7WFYoj9lezsWp7gzgxYkDMmRUC3PqpFkBF7etsTkUYz1Qr4QetWNWkw6f2kMiw993ZWIL8B7qZWNyqIgHXJLb8O5OMlLjfzZAN5AzAj1Ro81l7GLWXHX0o0OYDj2pWgNHWWt2NXKXwz8Ft25aePqWiZBsK1JjDQmKhhSHTOaKLTJIrcao2Bri5p5GBJNZfq9exBNpw6EqqTUvDLrmyM7A7yLvsPCef7oKZTcskntdYfikXbmdNTWqHSckR9HxH7kfP7GJmyii2OgEeq3dRwmFFWXiptI5ikbcRgdIaDgP4oeDFkyHOrMNSj4qyhytHoYa9sp"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 772,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 772,
                "newInLastHour": 105,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ea3cc28c4ab73cceb9f0bb36267cb6ed4eb4bfe56cb31968b456e09fb82c3495",
                " \"0669b9ad84baa8d57aa8bcf57de66608edc685cb9917f704218e9eb8c76b68b9",
                " \"f0d9b7b035a8d7606b88358b17c73f2a96a3ed43b74902c7608a81ee2969d22e",
                " \"3d0db3409971a5ce4c5fad5aa41971f5c6d6f403d44c894dbf1d199ca430dc4a",
                " \"d0fa86f851ec545ca33e4bd6f51c2df462aa0b19266218a9f4ae146575b398e0"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1700,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]12[.]229[.]231",
                "1[.]159[.]23[.]21",
                "1[.]177[.]162[.]4",
                "1[.]183[.]148[.]62",
                "1[.]183[.]161[.]214"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5282,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5282,
                "newInLastHour": 5282,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]218[.]28",
                "1[.]14[.]64[.]225",
                "1[.]2[.]174[.]204",
                "1[.]20[.]150[.]200"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15853,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15853,
                "newInLastHour": 15853,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]116[.]21[.]199:52171/i",
                "hxxp://42[.]239[.]226[.]189:50511/bin[.]sh",
                "hxxp://210[.]208[.]110[.]4:52722/bin[.]sh",
                "hxxp://181[.]79[.]85[.]69:11861/bin[.]sh",
                "hxxp://185[.]9[.]139[.]117:44288/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6332,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6332,
                "newInLastHour": 6091,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pumula[.]workers[.]dev\"",
                " \"tj2ay0gm[.]en-us--mindvault[.]com\"",
                " \"en-us--mindvault[.]com\"",
                " \"pibutyva[.]workers[.]dev\"",
                " \"68[.]221[.]168[.]156:80\""
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
            "iocCount": 10503,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10503,
                "newInLastHour": 87,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a4a31d169043dc65fd2b36a0352564244c820b1d",
                "aaf31b3f7acfe6dc859d1b6269c7e17337a61fd7",
                "b0dfb9c6353dc65a3b503bcb2258db457c5b5947",
                "674a11078348ede85c2e978063a1eb6ea1dbfd81",
                "efed7c2a381b7d580caf89354c93991ac2de65b3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50113,
            "activeSources": 8,
            "criticalAlerts": 26885,
            "activeCampaigns": 251
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16448,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10437,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4640,
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
                "name": "malware_download",
                "count": 15733,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]52[.]74[.]252:43436/i",
                    "hxxp://200[.]115[.]102[.]2:40835/i",
                    "hxxp://103[.]203[.]210[.]102:57289/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]23[.]21"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1690,
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
                "count": 1436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1301,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"119[.]45[.]225[.]53:8889\"",
                    " \"ck[.]erloro[.]com\"",
                    " \"101[.]42[.]255[.]92:9999\""
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
                "name": "Vidar",
                "count": 707,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d801efeb2e22aa0da901ffbce45db05a80a7b0b",
                    "64e6fe29e84ea3ecaaef08920d8ceb9567240166",
                    "7a9be497f84c09e7591ba7c7d69539a6e0468302"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 646,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"176[.]65[.]144[.]177:7443\"",
                    " \"hxxps://binsrbuddies[.]com/\"",
                    " \"213[.]35[.]118[.]205:4322\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42735,
        "lastCalculated": "2026-08-26 14:26 IST"
    }
};
