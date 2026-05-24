// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-24T22:44:01.984447+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-24T22:44:01.689012+05:30",
    "lastUpdatedFormatted": "May 24, 2026 at 10:44 PM IST",
    "comparisonPeriod": "May 23 \u2013 May 24, 2026",
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
                "hxxps://ig[.]do/robloxcom-users334614924-profile",
                "hxxps://kartik-sharma-dev[.]github[.]io/Netflix-clone-",
                "hxxps://duttaprithviraj2007-debug[.]github[.]io/Netflix-clone",
                "hxxps://insightfulconsultants[.]co[.]uk/ram/pages/login[.]php",
                "hxxps://mandtromainthus[.]wasmer[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 591,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 591,
                "newInLastHour": 55,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"58d5a28284eb08f76f5a1480909f6720734876444563d83706c43dfec42d7476",
                " \"c180ed9ad8c431fb5698b41c359004b6d306d679720d6045432f4c105d11c891",
                " \"7501070b323e75b0666989771701e5fc6e9afbca90ac0e23bb04ab1d49fc2463",
                " \"ccb01eef8ad7e2b93d27aebf8361b67d82bbac5ed5b8e8bab3bf0e96cc5e23ac",
                " \"c3ed983f7eac919a931f629ed0fb14bbbc7144ce0e306182f4e283133ca95f06"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1599,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1599,
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
                "1[.]1[.]223[.]16",
                "1[.]15[.]14[.]29",
                "1[.]162[.]93[.]188",
                "1[.]177[.]162[.]4",
                "1[.]180[.]183[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5862,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5862,
                "newInLastHour": 5862,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]12[.]51[.]198",
                "1[.]14[.]105[.]179",
                "1[.]14[.]70[.]12"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22498,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22498,
                "newInLastHour": 22498,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]50[.]220[.]230:50692/bin[.]sh",
                "hxxp://182[.]119[.]94[.]176:38895/bin[.]sh",
                "hxxp://123[.]12[.]82[.]204:51678/bin[.]sh",
                "hxxp://61[.]163[.]149[.]229:46285/i",
                "hxxp://125[.]40[.]121[.]239:33189/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3203,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3203,
                "newInLastHour": 3202,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"fkmrx4nm[.]signal-meridian[.]digital\"",
                " \"nre4rjrs[.]signal-meridian[.]digital\"",
                " \"fujxga[.]fluss[.]hu\"",
                " \"fluss[.]hu\"",
                " \"hxxp://rfidassist[.]com:5321\""
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
            "iocCount": 9707,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9707,
                "newInLastHour": 28,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "37873872b4ee0938065d51f7571aaf09b5aad19c",
                "5a1971fb973e2175e2e76bbbc265794cb03ce094",
                "db67f6cdddbc0b12c1dcbd97099176ac883b27e1",
                "9364c682044d04a298c3fdbfa767aaea8fe8d58d",
                "a6822dd585e4b37d1d6196cb2dba01ac95830f0c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52926,
            "activeSources": 8,
            "criticalAlerts": 32767,
            "activeCampaigns": 211
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23049,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9718,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2901,
                "trend": "stable",
                "percentage": 3
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 22437,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]113[.]38[.]82:49108/i",
                    "hxxp://182[.]113[.]38[.]82:49108/bin[.]sh",
                    "hxxp://27[.]206[.]90[.]87:49734/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]15[.]51[.]236",
                    "1[.]162[.]93[.]188"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1617,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1418,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"119[.]91[.]254[.]26:80\"",
                    " \"156[.]239[.]238[.]95:8888\"",
                    " \"43[.]138[.]192[.]16:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1413,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a"
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
                "count": 680,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "493f6dbb48806992e524df2a3a0fa0348cef243b",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 541,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "036412e8a035cfe5f745119f8cdebd44e76fafe7",
                    "3a6285ad40dcaa74c1346806f74913fa0c3c9540",
                    "22062c516829eb0d968dd41a3141f4780c63796b"
                ]
            },
            {
                "name": "OffLoader",
                "count": 417,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b6f3f71f5af8c7ead92da17e9c952910ce4466cd",
                    "c6bb2e2f4e409954b0be643121db126c99c768b4",
                    "53c0f0608e2d03a10eab7e3a98d1de6c4ff534e6"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46964,
        "lastCalculated": "2026-05-24 22:44 IST"
    }
};
