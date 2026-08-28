// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-28T07:47:08.358003+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-28T07:47:08.022133+05:30",
    "lastUpdatedFormatted": "Aug 28, 2026 at 07:47 AM IST",
    "comparisonPeriod": "Aug 27 \u2013 Aug 28, 2026",
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
                "hxxps://fls-a29a4b5f-2260-41e5-bea0-4308d9f12fa6[.]laravel[.]cloud/telegram123[.]html",
                "hxxp://brantal[.]vercel[.]app/",
                "hxxp://canpoly[.]vercel[.]app/",
                "hxxp://barracudaservicesinc[.]vercel[.]app/",
                "hxxp://nufloorspenticton[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 970,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 970,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"30cb25122bca4c471c18cf6771a4663c39745460ba6d37b32d372e00657e66eb",
                " \"4e20a6ab95b60f31d9e926a62800d03c2af89b2efd96c782aa022dca6ffa4a59",
                " \"db4a45d88c943be3f60bf216bb6ac8a2d3b70dfa13e9669e402f11e2aaea1b74",
                " \"94cba66e8937b1b065e55b8174f5c349eab9a170cc41dd1aa3c5d96a620e09a2",
                " \"b078582be2c3464848f3f891f249d7a9ae7317cf4405d78e99ea2fa43354bd1f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1645,
                "newInLastHour": 22,
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
                "1[.]189[.]125[.]236",
                "1[.]189[.]45[.]59",
                "1[.]192[.]177[.]135",
                "1[.]197[.]139[.]151"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6799,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6799,
                "newInLastHour": 6799,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]242[.]233",
                "1[.]162[.]198[.]126",
                "1[.]180[.]246[.]242",
                "1[.]2[.]174[.]204"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15763,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15763,
                "newInLastHour": 15763,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://220[.]201[.]29[.]161:55723/i",
                "hxxp://182[.]113[.]41[.]227:46418/bin[.]sh",
                "hxxp://182[.]113[.]41[.]227:46418/i",
                "hxxp://219[.]155[.]19[.]6:48542/i",
                "hxxp://219[.]155[.]203[.]92:60427/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6170,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6170,
                "newInLastHour": 6014,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jasmin-shaudeen[.]de\"",
                " \"38[.]55[.]194[.]135:9980\"",
                " \"121[.]4[.]38[.]18:8080\"",
                " \"121[.]4[.]38[.]18:80\"",
                " \"les-genets[.]net\""
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
            "iocCount": 10544,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10544,
                "newInLastHour": 114,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f111c69f42266b474927156f103d70843e7f82b",
                "ddac606a1cf89b62cad44ca59ae7986378f191e7",
                "77b9903c538d045e266bd4d6cf40ede0b040b403",
                "969b40a4fd2fb579a29aed9b2f81a7cf5cc0b1db",
                "2125bebc5912c9fb523a668daf7d116999488493"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50762,
            "activeSources": 8,
            "criticalAlerts": 27603,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17175,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10428,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4481,
                "trend": "stable",
                "percentage": -7
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
                "count": 16146,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]46[.]131[.]9:49040/bin[.]sh",
                    "hxxp://27[.]215[.]54[.]219:55163/i",
                    "hxxp://182[.]121[.]177[.]176:36990/i"
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
                    "1[.]15[.]14[.]29",
                    "1[.]188[.]5[.]46"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1682,
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
                "count": 1434,
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
                "count": 1332,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"193[.]160[.]32[.]138:8082\"",
                    " \"85[.]17[.]180[.]206:8080\"",
                    " \"85[.]17[.]180[.]206:443\""
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
                "count": 715,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fd78e771cab22c3afad8a5d5c448ff05268f20dd",
                    "8b41b8741c4d2a24de0aba241f742f043f1014d1",
                    "db787c8625b794b3d2385274bfdf8f34d731d7d9"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 693,
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
                "name": " \"js.iclickfix\"",
                "count": 634,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"royalensemble[.]com\"",
                    " \"85[.]239[.]149[.]16:443\"",
                    " \"robbywoj321[.]life\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 555,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44058,
        "lastCalculated": "2026-08-28 07:47 IST"
    }
};
