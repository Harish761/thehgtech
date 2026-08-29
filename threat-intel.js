// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-30T04:07:21.672558+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-30T04:07:21.338012+05:30",
    "lastUpdatedFormatted": "Aug 30, 2026 at 04:07 AM IST",
    "comparisonPeriod": "Aug 29 \u2013 Aug 30, 2026",
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
                "hxxps://cancelcardiffbahora[.]vercel[.]app/",
                "hxxps://qg77-ljfe-7fsc[.]chris-titanbooths-com-s-account[.]workers[.]dev/",
                "hxxps://facebook-qa[.]blogspot[.]com/",
                "hxxp://reoahf6k11-0920c60ff6[.]vercel[.]app/meta-support-3251713518098735[.]html",
                "hxxp://5jjen4v70c-d10b33caf0[.]vercel[.]app/meta-request-0004002080754887[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 846,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 846,
                "newInLastHour": 52,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a1d1d77408b0f885e83953e9e73a64f59333997c1a352739903381d6adf9d6b2",
                " \"3100d0767cc791b6b83a87efdf0b1c45c7bc9f2a5107449f48631cd0b50467b9",
                " \"1f2e4e6ca760efe31ce90a1fb75d886cbc88d6f57fcd868649f5712b761be8ac",
                " \"707a0a8e815cc25a627070089409d0d53da58d08d9a262d0d1e4268d0b15a728",
                " \"902e17c1e8292d15500660547495fe040d8413c92a0376b6e398d6c42fef0a31"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1705,
                "newInLastHour": 78,
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
                "1[.]120[.]123[.]117",
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4",
                "1[.]183[.]160[.]23",
                "1[.]189[.]125[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13143,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13143,
                "newInLastHour": 13143,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]198[.]126",
                "1[.]162[.]247[.]182",
                "1[.]171[.]123[.]41"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15683,
                "newInLastHour": 15683,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]47[.]57[.]60:60017/i",
                "hxxp://42[.]230[.]34[.]241:57422/bin[.]sh",
                "hxxp://125[.]47[.]57[.]60:60017/bin[.]sh",
                "hxxp://78[.]187[.]104[.]169:43205/i",
                "hxxp://42[.]239[.]188[.]14:35282/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6973,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6973,
                "newInLastHour": 6695,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"arohr77201[.]workers[.]dev\"",
                " \"mwr6ykxb[.]thegvgalleryy[.]com\"",
                " \"miwyti[.]workers[.]dev\"",
                " \"thegvgalleryy[.]com\"",
                " \"gyjuha[.]workers[.]dev\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 10584,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10584,
                "newInLastHour": 73,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "be12aa485facf3375cc2416e1f8fb28541136b83",
                "d43c9f366658adf98f67c12dd8fcb3bca52db900",
                "b34240912bc1f09b2e2342363647616b1088a1b0",
                "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                "ddfdf0aa1923b91144b9886e63430e063ad115a8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50920,
            "activeSources": 7,
            "criticalAlerts": 27016,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16532,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10484,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4244,
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
                "count": 15675,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]226[.]76[.]23:50496/bin[.]sh",
                    "hxxp://115[.]61[.]115[.]133:57897/bin[.]sh",
                    "hxxp://78[.]187[.]104[.]169:43205/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]120[.]123[.]117",
                    "1[.]15[.]14[.]29",
                    "1[.]177[.]162[.]4"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1627,
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
                "name": " \"js.iclickfix\"",
                "count": 1498,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://clickzona[.]net/embed/\"",
                    " \"tin[.]tokyo77hit[.]com\"",
                    " \"piomilokao[.]icu\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1438,
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
                "count": 1349,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]163[.]88[.]35:445\"",
                    " \"43[.]163[.]88[.]35:139\"",
                    " \"43[.]163[.]88[.]35:8443\""
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
                "count": 719,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d43c9f366658adf98f67c12dd8fcb3bca52db900",
                    "ef5c2a4999763064e2213dbe1c8ed696c0e8914b",
                    "8508e14457ad7de321edddf3688e124d5f1d652c"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 696,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"forecast-chaos[.]com\"",
                    " \"sound-obstacle[.]com\"",
                    " \"embersummit[.]cfd\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 51024,
        "lastCalculated": "2026-08-30 04:07 IST"
    }
};
