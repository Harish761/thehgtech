// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-11T14:40:43.766615+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-11T14:40:43.398612+05:30",
    "lastUpdatedFormatted": "Aug 11, 2026 at 02:40 PM IST",
    "comparisonPeriod": "Aug 10 \u2013 Aug 11, 2026",
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
                "hxxps://www[.]xfinityrefunds[.]com/TokenLogin",
                "hxxps://www[.]xfinityrefunds[.]com/token/75BF4A363A50427CA6DF470D95E223BB",
                "hxxp://www[.]h5-app[.]top/",
                "hxxps://www[.]roblox[.]com[.]mu/users/9512649433/profile",
                "hxxps://83f7ab[.]icefactory[.]cl/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1644,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1644,
                "newInLastHour": 100,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1c1f3997a9df6206fcf39949fb719b46a06497f7ef633c16075622e9c92acd0a",
                " \"650215d97a5138564ba998ae002ab104851241a349046783bd5a844986b412a9",
                " \"ce2f2b6b93185c00e21074f3c9b5ad3a1025ce62dd7468787481217baf7f1421",
                " \"4f705ad781aa77ee8fc380faf902ae19a6368d0fcdee76904619e2b2c2f1ef46",
                " \"fd76dc535baa6306eed8c25524dcd19b27d4b453278d4b0d3c100b2ba71a5589"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 513,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 513,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.57.17.0/24",
                "2.58.56.0/24",
                "2.59.152.0/24"
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
                "1[.]119[.]194[.]226",
                "1[.]120[.]123[.]117",
                "1[.]140[.]3[.]11",
                "1[.]159[.]3[.]151"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 10385,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 10385,
                "newInLastHour": 10385,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]106[.]163",
                "1[.]14[.]165[.]193",
                "1[.]14[.]64[.]225",
                "1[.]14[.]77[.]186"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16128,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16128,
                "newInLastHour": 16128,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://suavasua[.]vn/wp-includes/Text/fxuqicg/qvbudog/bstwneo/vv/cryptted[.]ps1",
                "hxxp://wp[.]ameyiando[.]com:8888/web/office365com[.]dat",
                "hxxp://185[.]29[.]9[.]101/MnuuOvukjaufYr227[.]bin",
                "hxxp://185[.]29[.]9[.]101/vSmLoKx110[.]bin",
                "hxxp://185[.]29[.]9[.]101/Standardpakke[.]toc"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4098,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4098,
                "newInLastHour": 4044,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"106[.]75[.]139[.]193:8080\"",
                " \"106[.]75[.]139[.]193:443\"",
                " \"mail[.]outlook-office365[.]com\"",
                " \"195[.]250[.]27[.]46:21\"",
                " \"tagmentos[.]bingbaochow[.]cam\""
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
            "iocCount": 10211,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10211,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "cc7d79ea8261997821ca3c8ad44b61023ad5af89",
                "19d7b8b5842177ba762fb0b30fd1368e953e73e9",
                "aec890965f808398c124d16d25255ac4ed1ce6ca",
                "99e8e296eae361f7ddeb6ce7cc6d4bd521ee24b3",
                "4672fba181056b9df706573af71ad6462ea3df67"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48904,
            "activeSources": 8,
            "criticalAlerts": 27893,
            "activeCampaigns": 236
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17542,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10351,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3557,
                "trend": "stable",
                "percentage": 1
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
                "count": 15953,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://server[.]servermsn[.]life/Bin/ScreenConnect[.]ClientSetup[.]msi?e=Access&y=Guest",
                    "hxxps://myissuereport[.]live/i/PDF-ticket/download[.]php",
                    "hxxp://140[.]237[.]36[.]213:34302/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]120[.]123[.]117",
                    "1[.]159[.]3[.]151"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1686,
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
                "count": 1435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1290,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]254[.]166[.]41:8080\"",
                    " \"43[.]254[.]166[.]41:80\"",
                    " \"43[.]254[.]166[.]41:443\""
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
                "count": 696,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae",
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1"
                ]
            },
            {
                "name": "Vidar",
                "count": 672,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3e3c44169f96771a93af70cef73772afc6530f39",
                    "5b0334a2bc768aa1fef1eb0d10bf52edb071bf1c",
                    "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 454,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "55828dc9278fe7cc50514d9e95e64422804a0b84",
                    "11a907f87c27b67e87f201281797b95f53508752",
                    "aaaa57850472f7c23d75d9470b1f98655d5c3655"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45974,
        "lastCalculated": "2026-08-11 14:40 IST"
    }
};
