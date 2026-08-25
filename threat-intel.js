// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-26T00:39:06.863660+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-26T00:39:06.504880+05:30",
    "lastUpdatedFormatted": "Aug 26, 2026 at 12:39 AM IST",
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
                "hxxps://www[.]roblox[.]com[.]mu/users/8294879321/profile",
                "hxxp://royalbau[.]hu/msn/",
                "hxxp://connect-ledgerr-live[.]pages[.]dev/",
                "hxxp://en-ledgre[.]pages[.]dev/",
                "hxxp://usg-23up4-mcea1t-2e7cp-g6tdd6[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 717,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 717,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ca4bbbca55ad78274956ae4851dc2eb2c3c6f381e60fe73963d279d32eaaabba",
                " \"51f95c0019b36f11423bc9cd7f3fc652f7d331ff819cb9410095b27f4b0acc58",
                " \"f721dc04dd61504ef2940d2d430369fbb069f1551e99ea7f947214d7eda8b0de",
                " \"cedce92ee7e0710c7621fe4950246db39e9321f5fb29acc6c919780be92d1a68",
                " \"cd0657110e84c0787254f2a7fc2e9871da7433eacafed1503a298258866dec83"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 531,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 531,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.27.62.0/24",
                "2.57.17.0/24",
                "2.58.56.0/24"
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
                "1[.]15[.]14[.]29",
                "1[.]15[.]227[.]58",
                "1[.]180[.]190[.]250",
                "1[.]183[.]227[.]151",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5329,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5329,
                "newInLastHour": 5329,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]218[.]28",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16383,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16383,
                "newInLastHour": 16383,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]248[.]188[.]197:43330/bin[.]sh",
                "hxxp://42[.]233[.]138[.]140:60584/i",
                "hxxp://196[.]189[.]35[.]172:34687/bin[.]sh",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_2dedd67a4922be21[.]exe",
                "hxxp://210[.]208[.]111[.]100:60334/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6348,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6348,
                "newInLastHour": 6299,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"43[.]143[.]206[.]225:3307\"",
                " \"208[.]167[.]245[.]124:9993\"",
                " \"149[.]88[.]66[.]234:3000\"",
                " \"k6h4y9sw[.]en-us-americaneaglependant[.]com\"",
                " \"en-us-americaneaglependant[.]com\""
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
            "iocCount": 10358,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10358,
                "newInLastHour": 18,
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
            "totalIndicators": 51745,
            "activeSources": 8,
            "criticalAlerts": 27649,
            "activeCampaigns": 225
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17151,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10498,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4733,
                "trend": "stable",
                "percentage": 4
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
                "count": 16366,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]57[.]60[.]24:40928/i",
                    "hxxp://115[.]55[.]54[.]253:54557/i",
                    "hxxp://42[.]231[.]64[.]103:58110/bin[.]sh"
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
                    "1[.]15[.]227[.]58",
                    "1[.]183[.]227[.]151"
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
                "count": 1437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"177[.]3[.]89[.]54:22\"",
                    " \"177[.]3[.]89[.]54:8080\"",
                    " \"177[.]3[.]89[.]54:80\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1114,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"sbs-b2m[.]com\"",
                    " \"serracontabil[.]com[.]br\"",
                    " \"smartinches[.]com\""
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
                "count": 728,
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
                "count": 678,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://szallas[.]net/\"",
                    " \"7t3zi3e7ki6iseun77ofqtr6wmbpgnpc2ada6gstcxp54lw6q2zb7jad[.]onion\"",
                    " \"eazk7las3xsvsyxgww3jgzammqjevso2ydnmlopdhl3u2muyrmmilrqd[.]onion\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43351,
        "lastCalculated": "2026-08-26 00:39 IST"
    }
};
