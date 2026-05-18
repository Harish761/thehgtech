// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-18T17:22:12.105916+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-18T17:22:11.789124+05:30",
    "lastUpdatedFormatted": "May 18, 2026 at 05:22 PM IST",
    "comparisonPeriod": "May 17 \u2013 May 18, 2026",
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
                "hxxps://survey[.]refassured[.]com/mbMO6z3K",
                "hxxps://survey[.]refassured[.]com/mbMO6z3K/snooze-reminder/2",
                "hxxps://survey[.]refassured[.]com/mbMO6z3K/snooze-reminder/4",
                "hxxps://survey[.]refassured[.]com/mbMO6z3K/snooze-reminder/3",
                "hxxps://fndmy-support[.]com/app/webroot/script/navigation_compass_find_devices_login_b4_passcode4/2026/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 704,
                "newInLastHour": 103,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"120b3b7c013a5f859edbbd60957fa560eaab797a42884b20b2238c8a99458f01",
                " \"1fc3a5ec7a65a8478190bccb5914aa1d1c6d2fea1e907282d12d1b32984503bb",
                " \"e18e9309db33273762be1d78f5bdd78fa6ea41dadf5f6eef8ece4c841ea76110",
                " \"d785392a4352a2b167e8e0b49bff0aeb911c45da5c1709be2cded70de88fb5df",
                " \"7c3dd6e8cb94b89eb21fb3e98576474edb13726c4b0c213c408edb0388a49118"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1621,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1621,
                "newInLastHour": 1,
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
                "1[.]13[.]250[.]55",
                "1[.]15[.]14[.]29",
                "1[.]156[.]141[.]253",
                "1[.]180[.]153[.]254",
                "1[.]180[.]183[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5475,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5475,
                "newInLastHour": 5475,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]205[.]204[.]213",
                "1[.]214[.]117[.]218",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24802,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24802,
                "newInLastHour": 24802,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]147[.]212[.]208:53938/i",
                "hxxp://isellchildren[.]online/arc",
                "hxxp://110[.]39[.]241[.]173:51963/bin[.]sh",
                "hxxp://115[.]48[.]163[.]36:55709/bin[.]sh",
                "hxxp://142[.]248[.]80[.]144/bins/vaxbot[.]m68k"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 774,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 774,
                "newInLastHour": 774,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"wilder-flow-work-lmsystem[.]garden\"",
                " \"kittenschalk[.]xyz\"",
                " \"governmentyard[.]cfd\"",
                " \"120[.]27[.]155[.]171:8443\"",
                " \"68[.]64[.]176[.]34:5432\""
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
            "iocCount": 9680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9680,
                "newInLastHour": 36,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c470e636bbf2e111e32699330bfe98e82e932c72",
                "39f3abca4d940c79c7effc9800ee64f7776c3075",
                "debeb3e11187e37aa2570fcf9bf95e23cc65625c",
                "1ec4f7faacd89a677183b196ab46a799fafe7309",
                "b7e68e05b1230ff7166780de17e02039e7083cfd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52346,
            "activeSources": 8,
            "criticalAlerts": 34817,
            "activeCampaigns": 182
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25157,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9660,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 357,
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
                "percentage": 92
            },
            {
                "name": "Tech",
                "percentage": 7
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24442,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]228[.]33[.]42:42803/bin[.]sh",
                    "hxxp://115[.]61[.]3[.]9:36676/bin[.]sh",
                    "hxxps://cybernetic-prosthetic-lab[.]garden/b6a33b11-a1f8-4c43-8296-0569b7b5118b/google[.]cl"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]156[.]141[.]253",
                    "1[.]176[.]118[.]246",
                    "1[.]180[.]153[.]254"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1642,
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
                "count": 1411,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd",
                    "0f6b3491e94f40a637680924c507a494426e534c",
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c"
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
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
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
                "count": 527,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44",
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661"
                ]
            },
            {
                "name": "OffLoader",
                "count": 403,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 357,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "646821885b9e966ba8bb62c511f6b90a0b8d58c8",
                    "47fd399c8f9f2074b6d16aaa853cd6eaacecd1ed",
                    "06e08670cd781e40cee3c93163c7d29ea73d4acb"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46496,
        "lastCalculated": "2026-05-18 17:22 IST"
    }
};
