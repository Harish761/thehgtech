// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-26T09:51:39.215730+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-26T09:51:38.906966+05:30",
    "lastUpdatedFormatted": "May 26, 2026 at 09:51 AM IST",
    "comparisonPeriod": "May 25 \u2013 May 26, 2026",
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
                "hxxp://www[.]71782[.]xyz/",
                "hxxps://pt-shopee7557[.]blogspot[.]com/?m=1",
                "hxxp://1165nnn[.]com/",
                "hxxps://aumentoja30[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://fricktransfer[.]com/wp-admin/includes/docs"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 592,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 592,
                "newInLastHour": 172,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c4ac74268abff27a68f363c4d64cdbb4f743ce5b3dcb1551bf83f4d974ec2326",
                " \"cc6155c1a3d90100e62c6dfce63089b23527aace541809c29f32a08e9e63479f",
                " \"a81b4478f1d7d49a83d9e38dabc32b5e761a690215cf6e3019c388615c26e22b",
                " \"745401979abe0927afb529af9c37c86cc2b357a717685ab962f19ecc4e815c58",
                " \"e315dcde7eafda86084fd24beb16cdabd3af1f2ed8edcb9f18495ffd84e002b1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1607,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1607,
                "newInLastHour": 2,
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
                "1[.]162[.]145[.]107",
                "1[.]162[.]93[.]188",
                "1[.]176[.]118[.]246",
                "1[.]180[.]153[.]254"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5251,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5251,
                "newInLastHour": 5251,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]51[.]198",
                "1[.]14[.]105[.]179",
                "1[.]214[.]214[.]114",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21526,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21526,
                "newInLastHour": 21526,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]12[.]29[.]220:44672/i",
                "hxxp://219[.]71[.]131[.]225:49112/i",
                "hxxp://222[.]140[.]195[.]35:60992/i",
                "hxxp://123[.]12[.]29[.]220:44672/bin[.]sh",
                "hxxp://175[.]165[.]45[.]125:60018/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3165,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3165,
                "newInLastHour": 3152,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mrwqb[.]bartaenergetika[.]com\"",
                " \"vvuto[.]bartaenergetika[.]com\"",
                " \"mahcr[.]banhidileadershipacademy[.]hu\"",
                " \"ckszd[.]banhidileadershipacademy[.]hu\"",
                " \"dynhc[.]balintpiroska[.]hu\""
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
            "iocCount": 9759,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9759,
                "newInLastHour": 0,
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
            "totalIndicators": 52520,
            "activeSources": 8,
            "criticalAlerts": 32397,
            "activeCampaigns": 213
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22651,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9746,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2849,
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
                "count": 22144,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]230[.]39[.]169:54023/bin[.]sh",
                    "hxxps://oazd[.]olcsongepet[.]hu/0b9ddb80-1e61-48ac-a257-4e207a2240fd",
                    "hxxp://125[.]40[.]83[.]241:38958/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]162[.]93[.]188",
                    "1[.]176[.]118[.]246"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1607,
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
                "count": 1450,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"194[.]58[.]93[.]75:443\"",
                    " \"45[.]67[.]230[.]81:443\"",
                    " \"194[.]58[.]76[.]12:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
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
                "count": 681,
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
                "count": 554,
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
                "count": 549,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "37873872b4ee0938065d51f7571aaf09b5aad19c",
                    "42898c24435acf8ba2bf7fa0428f28a64d49be69",
                    "42f80c30ad7ca9a272453baabf7c7c8857b5970a"
                ]
            },
            {
                "name": "OffLoader",
                "count": 419,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9364c682044d04a298c3fdbfa767aaea8fe8d58d",
                    "b6f3f71f5af8c7ead92da17e9c952910ce4466cd",
                    "c6bb2e2f4e409954b0be643121db126c99c768b4"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 45408,
        "lastCalculated": "2026-05-26 09:51 IST"
    }
};
