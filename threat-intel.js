// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-30T10:45:14.593479+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-30T10:45:14.246681+05:30",
    "lastUpdatedFormatted": "Aug 30, 2026 at 10:45 AM IST",
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
                "hxxp://xelnor-plovik-c82fa1-hfht-r2406adw[.]pages[.]dev/",
                "hxxps://s4w[.]in/roblox-com-users-222162092017-profile",
                "hxxps://www[.]roblox[.]com[.]ml/users/222162092017/profile",
                "hxxps://php-web-server--uniteceduc[.]replit[.]app/",
                "hxxps://i[.]gal/p3ZK8"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 874,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 874,
                "newInLastHour": 79,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f756ef6bd84e0156a2cd972dec3edcd0af4f7e415a617a4c5f14cb3eaea4ae28",
                " \"2d4bd384f2fac0e4bdcf51b6c704e3caeaff73f25b361cd8f9cb8c65cb5619cd",
                " \"a6abd3ff1ea476a9d9d5c6410bc962aa1b49c450d7dd07509b345bfd170c1456",
                " \"087231bd4a63f6a11a57198a76805d877646352ab35e539efd32a8399b2d0d25",
                " \"12389289c4ca25508a58e514edc7efb8cabf10aec0caf8b4bdb5d84f4dc751ce"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1704,
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
                "1[.]12[.]229[.]231",
                "1[.]183[.]160[.]23",
                "1[.]192[.]129[.]106",
                "1[.]24[.]16[.]112",
                "1[.]24[.]16[.]120"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13073,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13073,
                "newInLastHour": 13073,
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
            "iocCount": 15359,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15359,
                "newInLastHour": 15359,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]41[.]2[.]240:38275/i",
                "hxxp://115[.]59[.]226[.]41:37592/i",
                "hxxp://125[.]41[.]8[.]191:33647/bin[.]sh",
                "hxxp://202[.]107[.]89[.]51:58307/i",
                "hxxp://42[.]56[.]161[.]38:49976/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6955,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6955,
                "newInLastHour": 6752,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"waducako[.]workers[.]dev\"",
                " \"89[.]126[.]249[.]219:7443\"",
                " \"raspberryhillsshop[.]com\"",
                " \"jbyn0h7d[.]shop-abundancegoddess[.]us\"",
                " \"shop-abundancegoddess[.]us\""
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
            "iocCount": 10571,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10571,
                "newInLastHour": 0,
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
            "totalIndicators": 51091,
            "activeSources": 7,
            "criticalAlerts": 27113,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16556,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10557,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4240,
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
                "count": 15683,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]47[.]57[.]60:60017/i",
                    "hxxp://42[.]230[.]34[.]241:57422/bin[.]sh",
                    "hxxp://125[.]47[.]57[.]60:60017/bin[.]sh"
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
                "count": 1705,
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
                "count": 1497,
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
                "count": 1440,
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
                "name": "Vidar",
                "count": 744,
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
                "count": 700,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 50563,
        "lastCalculated": "2026-08-30 10:45 IST"
    }
};
