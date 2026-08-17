// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-18T00:37:51.259230+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-18T00:37:50.903864+05:30",
    "lastUpdatedFormatted": "Aug 18, 2026 at 12:37 AM IST",
    "comparisonPeriod": "Aug 17 \u2013 Aug 18, 2026",
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
                "hxxps://qnkxz71mjwy-mtvljren-6j5j7g-zl299a[.]pages[.]dev/welcome_aboard?welcome=1000968689063090&token248=1000968689063090&name_token136=Debbie%20Anderson%20for%20School%20Board",
                "hxxps://prime-video[.]app/?token=2a0e3d50",
                "hxxp://www[.]ozatak[.]com/office/",
                "hxxps://abaxmt-v6e0unyq[.]vercel[.]app/landing[.]html",
                "hxxps://www[.]roblox[.]com[.]mu/users/126763005/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 691,
                "newInLastHour": 42,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a4f22cc6acdcae73a96562b2e371d298f44033bf74681f28c8ea39cbef0e3194",
                " \"ff79c5f9755f672027e442901df90a3ba2da04dce1151b034faf7979019235c3",
                " \"b6f4e866faa39925863efbd15904a5fc85a5c08b555965211cf95edc26fe42a1",
                " \"6248c63535b3c2c1233bcfba24e38264b9a1912c9f582dd91065ce22ec817a11",
                " \"a6c7b4280347d031a950a5f7b619c6e93ee296afb10d5ef628f868377aaeb1db"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1672,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1672,
                "newInLastHour": 6,
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
                "1[.]119[.]194[.]226",
                "1[.]165[.]27[.]71",
                "1[.]180[.]190[.]250",
                "1[.]181[.]200[.]22",
                "1[.]190[.]139[.]156"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4829,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4829,
                "newInLastHour": 4829,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]2[.]226[.]1",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]220[.]233[.]171",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17098,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17098,
                "newInLastHour": 17098,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]230[.]30[.]16:36416/bin[.]sh",
                "hxxp://176[.]65[.]139[.]233/a[.]sh",
                "hxxp://176[.]65[.]139[.]233/daredevil[.]i486",
                "hxxp://176[.]65[.]139[.]233/daredevil[.]mipsrouter",
                "hxxp://176[.]65[.]139[.]233/daredevil[.]arc"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4840,
                "newInLastHour": 4700,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"comprehensivetranslator[.]com\"",
                " \"52[.]141[.]2[.]68:443\"",
                " \"52[.]141[.]2[.]68:80\"",
                " \"149[.]88[.]66[.]234:888\"",
                " \"149[.]88[.]66[.]234:3306\""
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
            "iocCount": 10410,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10410,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "abe57abc8722c69494113060260ba340cd897744",
                "89bbec947a91917d4676037abb417ceb72770851",
                "b26d3f583556acab11cbfa864f596c143b15f32d",
                "fc5d9dddb01c263a67e7c485e04277afa82fbabf",
                "a6268e092f3de555c67dac2f9e52eae979b3d8e3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50144,
            "activeSources": 8,
            "criticalAlerts": 28184,
            "activeCampaigns": 235
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17759,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10425,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3784,
                "trend": "stable",
                "percentage": -1
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
                "count": 17060,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]237[.]71[.]75:38677/i",
                    "hxxp://113[.]237[.]71[.]75:38677/bin[.]sh",
                    "hxxp://182[.]114[.]196[.]132:39255/i"
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
                    "1[.]140[.]210[.]242",
                    "1[.]165[.]27[.]71"
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
                "count": 1437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1308,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"149[.]88[.]66[.]234:9999\"",
                    " \"149[.]88[.]66[.]234:22\"",
                    " \"149[.]88[.]66[.]234:8088\""
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
                "count": 713,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "89bbec947a91917d4676037abb417ceb72770851",
                    "b26d3f583556acab11cbfa864f596c143b15f32d",
                    "fc5d9dddb01c263a67e7c485e04277afa82fbabf"
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
            },
            {
                "name": "OffLoader",
                "count": 460,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dfde6725130631a83b3d0dc221736bad3db16918",
                    "183d02c077142b8701d1a719cc8cee3f8fb76072",
                    "05b215b1710e56a14f4742b10586af2750da866a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 41981,
        "lastCalculated": "2026-08-18 00:37 IST"
    }
};
