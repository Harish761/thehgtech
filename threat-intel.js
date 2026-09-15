// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-16T03:09:42.947164+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-16T03:09:42.607545+05:30",
    "lastUpdatedFormatted": "Sep 16, 2026 at 03:09 AM IST",
    "comparisonPeriod": "Sep 15 \u2013 Sep 16, 2026",
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
                "hxxps://www[.]site-ma-ga-zine-luiza[.]com/site-ma-ga-zine-luiza[.]com/produt",
                "hxxp://es[.]uevangelica[.]edu[.]ar/",
                "hxxps://paypal-app[.]online/",
                "hxxps://zyexx[.]com/t18674c21q3caa437ak9ae2e39dv1902ec25[.]html",
                "hxxps://manjaresdelmar[.]com[.]ar/DROPBOXX[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1162,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1162,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a90a4002b80cfe93512c8472e1e4f2f1b0169b22b354d65a932618fcf335b944",
                " \"ee4bcb0c3b1787b0da543803f75c30877fbb588fdf5e47a6ea6f04d0ed2d39ed",
                " \"681ad9e7ae2170f726fd99138a5b983ed3f7b31ab957308052afd3657a4782e4",
                " \"9cce6c826ab4346b7697db6aab3c9ad82ff8f9ecd30bb4b199a606ba389b1d9a",
                " \"ff84363e81342e1c225c4abf350f078a4c5b1a86e92843a80ff6548aa9b1e717"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1689,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1689,
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
                "1[.]14[.]121[.]115",
                "1[.]193[.]63[.]83",
                "1[.]205[.]52[.]2",
                "1[.]213[.]214[.]233"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4666,
                "newInLastHour": 4666,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]231[.]29[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12960,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12960,
                "newInLastHour": 12960,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://196[.]189[.]197[.]131:53737/i",
                "hxxp://182[.]121[.]86[.]104:33908/bin[.]sh",
                "hxxp://175[.]175[.]205[.]233:57134/i",
                "hxxp://223[.]151[.]72[.]234:56151/i",
                "hxxp://105[.]186[.]175[.]32:36415/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9431,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9431,
                "newInLastHour": 8123,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"z0mvmrtr[.]eng-us-puraboost[.]us\"",
                " \"scandia-express[.]com\"",
                " \"www[.]dualmont[.]com\"",
                " \"105[.]72[.]55[.]52:8080\"",
                " \"47[.]81[.]57[.]227:443\""
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
            "iocCount": 10605,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10605,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1e5bfc073ee72f5ae99507c87f2479ec1d5f43b7",
                "c3e6df2402e57af3e0b7c66f8282efec4a387ac6",
                "ba3714d484afb75fd03911c59aa096cee9595955",
                "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
                "46b898af8e29cb2fe186de2bfdf60bc01d617720"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50955,
            "activeSources": 8,
            "criticalAlerts": 24790,
            "activeCampaigns": 273
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14097,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10693,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 5269,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]96[.]105",
                    "1[.]181[.]200[.]22"
                ]
            },
            {
                "name": "malware_download",
                "count": 12938,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]157[.]62[.]192:50300/i",
                    "hxxp://196[.]189[.]98[.]77:33646/i",
                    "hxxp://196[.]189[.]98[.]77:33646/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1724,
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
                "count": 1447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1441,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]146[.]227[.]247:22\"",
                    " \"8[.]146[.]227[.]247:8080\"",
                    " \"8[.]146[.]227[.]247:443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1376,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]154[.]32[.]104:8808\"",
                    " \"82[.]26[.]66[.]136:8808\"",
                    " \"46[.]40[.]228[.]158:1723\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1064,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]tounderstandthetruth[.]com\"",
                    " \"www[.]unityforconstruction[.]com\"",
                    " \"www[.]videografiko[.]com\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 962,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"stonestation[.]cfd\"",
                    " \"zulfija[.]blog\"",
                    " \"zus[.]cz\""
                ]
            },
            {
                "name": "Vidar",
                "count": 781,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
                    "f166dfb0e185cab2e7bfdfff50edc67f238195c3",
                    "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 41116,
        "lastCalculated": "2026-09-16 03:09 IST"
    }
};
