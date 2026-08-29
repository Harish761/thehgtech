// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-29T19:18:42.283891+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-29T19:18:41.939494+05:30",
    "lastUpdatedFormatted": "Aug 29, 2026 at 07:18 PM IST",
    "comparisonPeriod": "Aug 28 \u2013 Aug 29, 2026",
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
            "iocCount": 806,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 806,
                "newInLastHour": 83,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6757aaf3a7819fbee15ad9b36c38cf0e10bfdbbbd38f6fb58e714892157bc491",
                " \"197fb4b7ef3b7394eb87cb5e513a79cc1e90f91dab71bf202cc5fc8ec1e2c0d2",
                " \"b54fac5e1433492ab96c5486cd854bf0ddf4446d0d96720feea780516d40450c",
                " \"2950549fda1f2059a2b429aa74713f16a66691e2d967dce4ad5ebd042089e0f2",
                " \"48688f71bdef811c65fa75335790a95d258f0a84c95abac37800e076bf7df681"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1656,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1656,
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
                "1[.]120[.]123[.]117",
                "1[.]181[.]200[.]22",
                "1[.]183[.]160[.]23",
                "1[.]192[.]129[.]106",
                "1[.]193[.]2[.]85"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13164,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13164,
                "newInLastHour": 13164,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]242[.]233",
                "1[.]162[.]197[.]67",
                "1[.]162[.]198[.]126",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15624,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15624,
                "newInLastHour": 15624,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]138[.]151[.]125:34037/bin[.]sh",
                "hxxps://mon-xxx-02[.]cfd/FirertjuDispatcher[.]exe",
                "hxxps://85[.]121[.]176[.]140/Bin/ScreenConnect[.]ClientSetup[.]exe",
                "hxxp://125[.]41[.]2[.]240:38275/bin[.]sh",
                "hxxps://5[.]181[.]0[.]129/Bin/ScreenConnect[.]ClientSetup[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6988,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6988,
                "newInLastHour": 6709,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"7ti[.]li\"",
                " \"www[.]hobbyegge[.]ch\"",
                " \"43[.]163[.]88[.]35:8080\"",
                " \"43[.]163[.]88[.]35:137\"",
                " \"43[.]163[.]88[.]35:443\""
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
            "iocCount": 1980,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 1980,
                "newInLastHour": 4,
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
            "totalIndicators": 51294,
            "activeSources": 8,
            "criticalAlerts": 26933,
            "activeCampaigns": 245
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16375,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10558,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4538,
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
                "count": 15409,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://186[.]227[.]246[.]220:32769/bin[.]sh",
                    "hxxps://141[.]140[.]0[.]167/Bin/ScreenConnect[.]ClientSetup[.]exe",
                    "hxxps://141[.]140[.]0[.]167/bin/support[.]client[.]exe"
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
                    "1[.]181[.]200[.]22",
                    "1[.]183[.]160[.]23"
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
                "count": 1510,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"flowerpii9831[.]life\"",
                    " \"147[.]45[.]71[.]191:443\"",
                    " \"158[.]94[.]208[.]87:443\""
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
                "count": 1367,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"157[.]66[.]26[.]124:80\"",
                    " \"154[.]37[.]218[.]73:12580\"",
                    " \"43[.]143[.]13[.]146:8888\""
                ]
            },
            {
                "name": "Vidar",
                "count": 743,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ef5c2a4999763064e2213dbe1c8ed696c0e8914b",
                    "8508e14457ad7de321edddf3688e124d5f1d652c",
                    "9f0464e29fb94333e1ad31740bf4d4bff89cbd28"
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
                    " \"embersummit[.]cfd\"",
                    " \"440c[.]en-us-theeloncod[.]com\"",
                    " \"zupee[.]download\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 50884,
        "lastCalculated": "2026-08-29 19:18 IST"
    }
};
