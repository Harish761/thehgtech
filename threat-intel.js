// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-12T11:13:13.774873+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-12T11:13:13.437974+05:30",
    "lastUpdatedFormatted": "Aug 12, 2026 at 11:13 AM IST",
    "comparisonPeriod": "Aug 11 \u2013 Aug 12, 2026",
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
                "hxxps://firststepfloors[.]com/",
                "hxxps://headshotsandcorporate[.]com/",
                "hxxp://researchsquare[.]cfd/kr/dmlkorea[.]html",
                "hxxps://31e2f6[.]arcadejafet[.]cl/",
                "hxxps://59f990[.]arcadejafet[.]cl/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2295,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2295,
                "newInLastHour": 120,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b47388d22151e585b1df5daaa085c7bce422fb4741090c54138eb74e847e80a6",
                " \"6fc1a755028e6cf2d7e30daff9fde36bed33bf0aa58ecf2c2172e1f4726888b8",
                " \"22ef34056565ee2b894e77884d2d8abc160035e8be205beb0c9bcd627a6e5ee4",
                " \"3d07d921b00676d9fbb42130d30aa697917edfab1108e91c935abf11e7194302",
                " \"fd977ee7a791e0145dbbda2063bed367ab71645e8778d7411a5df87f72342a32"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1686,
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
                "1[.]180[.]190[.]250",
                "1[.]181[.]200[.]22",
                "1[.]183[.]161[.]31",
                "1[.]192[.]179[.]82",
                "1[.]193[.]63[.]61"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8974,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8974,
                "newInLastHour": 8974,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]233[.]51",
                "1[.]14[.]106[.]163",
                "1[.]14[.]165[.]193",
                "1[.]14[.]64[.]225"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16797,
                "newInLastHour": 16797,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://31[.]77[.]227[.]121/bins/pmpsl",
                "hxxp://31[.]77[.]227[.]121/bins/parm7",
                "hxxp://31[.]77[.]227[.]121/bins/pspc",
                "hxxp://31[.]77[.]227[.]121/bins/parm6",
                "hxxp://31[.]77[.]227[.]121/bins/px86"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4422,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4422,
                "newInLastHour": 4343,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"kqwogog[.]vongquay8k[.]com\"",
                " \"vongquay8k[.]com\"",
                " \"cu3bm1vz[.]shop-sightfresh[.]com\"",
                " \"46[.]246[.]14[.]7:7044\"",
                " \"cl1yte93[.]en-us-goldaligns[.]com\""
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
            "iocCount": 10385,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10385,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "64ba3430f767ced74b2828509a653187e9553971",
                "940df23eebede1e1e33a4c521ba05b4b37d04d68",
                "ffc71a7ba96b8801333ea2b9e7cd05d4cc2f718d",
                "95fcb5ff7bd5e1d06b1e585af4ba3ceb95f01164",
                "1674f349ec288a75ac123a1752d433a21ceddcef"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50578,
            "activeSources": 8,
            "criticalAlerts": 29215,
            "activeCampaigns": 251
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18844,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10371,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3796,
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
                "count": 16587,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]53[.]25:34437/i",
                    "hxxp://182[.]117[.]10[.]162:46177/bin[.]sh",
                    "hxxp://123[.]129[.]2[.]24:55703/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]188[.]5[.]237",
                    "1[.]192[.]179[.]82"
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
                "count": 1436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1322,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"159[.]75[.]123[.]199:443\"",
                    " \"159[.]75[.]123[.]199:80\"",
                    " \"159[.]75[.]123[.]199:8080\""
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
                "count": 683,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "64ba3430f767ced74b2828509a653187e9553971",
                    "940df23eebede1e1e33a4c521ba05b4b37d04d68",
                    "95fcb5ff7bd5e1d06b1e585af4ba3ceb95f01164"
                ]
            },
            {
                "name": " \"n/a",
                "count": 641,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a5d5bd497eda2289310c6559d89caaa2013485fd2c19a06b3c03ef507607fdd6",
                    " \"4dfba261e914d206c8417ea0fd93a8a760ffef744fabe799ae25f52b0deca527",
                    " \"42a0c075c468870f9c705a605d49de7d4c2f3faad9783f54c5b589e9495bbedc"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45540,
        "lastCalculated": "2026-08-12 11:13 IST"
    }
};
