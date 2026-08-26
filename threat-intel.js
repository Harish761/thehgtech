// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-26T07:22:47.212707+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-26T07:22:46.964769+05:30",
    "lastUpdatedFormatted": "Aug 26, 2026 at 07:22 AM IST",
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
            "iocCount": 705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 705,
                "newInLastHour": 109,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"736e842dca761175a060d3351f71edb076bf8b2067d2070542258782ba5c84da",
                " \"d1d9597444b95eaeb30845f08763a9eb4fd3d34be13ba9e1b0795c9fd7ec391a",
                " \"4bbaa96f250b623409f6f7ee921a6558725fe86a7a9ca6535696dca17fdc6f62",
                " \"cae7bbc30857ad80290fb669a27bec6061a05fc6c9211d97ada2d505b06dc96a",
                " \"ebbb9c3cc42ab9028336da01176293ede39a3f611829728d1a86e4b08d67263d"
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
                "1[.]119[.]158[.]77",
                "1[.]192[.]177[.]135",
                "1[.]193[.]59[.]172",
                "1[.]193[.]63[.]197",
                "1[.]197[.]139[.]151"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5306,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5306,
                "newInLastHour": 5306,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]218[.]28",
                "1[.]14[.]64[.]225",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15717,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15717,
                "newInLastHour": 15717,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]146[.]244[.]227:57019/bin[.]sh",
                "hxxp://150[.]241[.]65[.]250:889/venv/lib/python3[.]12/site-packages/pip/_vendor/urllib3/fields[.]py",
                "hxxp://175[.]148[.]76[.]63:43235/i",
                "hxxp://27[.]37[.]100[.]83:50864/i",
                "hxxp://27[.]37[.]100[.]83:50864/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6245,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6245,
                "newInLastHour": 6014,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://telegram[.]me/s11yne\"",
                " \"uf3hzwgi[.]enus-glucore[.]com\"",
                " \"enus-glucore[.]com\"",
                " \"is79oi37[.]en-us-glucotrustt-bites[.]com\"",
                " \"en-us-glucotrustt-bites[.]com\""
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
            "iocCount": 10527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10527,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f1ed4a13d8a2ba6e690ecaf66a9dfa42dd8d9d1",
                "edd934290c1a24e425d4d6f6c82a08ebc392b89f",
                "b0cf2650da454ed5cc67102d95f8b9ba00602ead",
                "25042ea148aa7ccb23ebabb701cacca1d2fbd1d4",
                "5d801efeb2e22aa0da901ffbce45db05a80a7b0b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51155,
            "activeSources": 8,
            "criticalAlerts": 27638,
            "activeCampaigns": 252
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17148,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10490,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4655,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16396,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://183[.]23[.]135[.]203:54790/i",
                    "hxxp://112[.]198[.]186[.]249:60485/bin[.]sh",
                    "hxxp://180[.]115[.]74[.]175:32843/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]227[.]58"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1702,
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
                "count": 1439,
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
                "count": 1299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]42[.]255[.]92:9999\"",
                    " \"149[.]88[.]66[.]234:3000\"",
                    " \"177[.]3[.]89[.]54:22\""
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
                "count": 734,
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
                "count": 698,
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
                "count": 661,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"213[.]35[.]118[.]205:4322\"",
                    " \"104[.]143[.]204[.]239:52310\"",
                    " \"hxxps://institutovitoria[.]com/\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
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
        "fastestRisingThreat": " \"RemusStealer",
        "totalAttacksThisHour": 42477,
        "lastCalculated": "2026-08-26 07:22 IST"
    }
};
