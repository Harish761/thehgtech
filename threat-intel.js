// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-16T04:21:52.853219+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-16T04:21:52.483084+05:30",
    "lastUpdatedFormatted": "Sep 16, 2026 at 04:21 AM IST",
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
            "iocCount": 1158,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1158,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"923b6cee2c309853889d29309cf0abb0176def5e3b0144e2ae8cb6cc018c2448",
                " \"367c96ee24039f89632411c93f2f46ebd24e190039f279773c31d426f005854e",
                " \"613f44cee75950783397a3f59c9d26fb22b175811496e6b4aab0682c202e9303",
                " \"2f650a26f61b8876b100c5b672ca8282880d579de7449d46e1afad6d8a1dc4f4",
                " \"6e8591864dd9d796219ba8319640624c81f79908ce65823a581a9c1d70337aae"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1724,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1724,
                "newInLastHour": 35,
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
                "1[.]14[.]121[.]115",
                "1[.]14[.]96[.]105",
                "1[.]181[.]200[.]22",
                "1[.]189[.]89[.]152",
                "1[.]24[.]16[.]108"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4672,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4672,
                "newInLastHour": 4672,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]231[.]29[.]229",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12968,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12968,
                "newInLastHour": 12968,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]139[.]41[.]139:41068/bin[.]sh",
                "hxxp://125[.]41[.]78[.]139:53006/i",
                "hxxp://222[.]138[.]151[.]181:41950/i",
                "hxxp://110[.]138[.]2[.]93:54212/i",
                "hxxp://222[.]138[.]151[.]181:41950/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9523,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9523,
                "newInLastHour": 8215,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"townofmainbrook[.]ca\"",
                " \"tpglighting[.]com\"",
                " \"trdemo[.]com[.]au\"",
                " \"tusbothfeld[.]de\"",
                " \"urgenteyecarefl[.]com\""
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
            "iocCount": 10687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10687,
                "newInLastHour": 110,
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
            "totalIndicators": 51152,
            "activeSources": 8,
            "criticalAlerts": 24732,
            "activeCampaigns": 275
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14149,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10583,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 5448,
                "trend": "stable",
                "percentage": 3
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
                    "1[.]14[.]121[.]115",
                    "1[.]193[.]63[.]83"
                ]
            },
            {
                "name": "malware_download",
                "count": 12960,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://196[.]189[.]197[.]131:53737/i",
                    "hxxp://182[.]121[.]86[.]104:33908/bin[.]sh",
                    "hxxp://175[.]175[.]205[.]233:57134/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1689,
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
                "count": 1445,
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
                "count": 1442,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]81[.]57[.]227:443\"",
                    " \"5[.]104[.]86[.]108:8088\"",
                    " \"83[.]229[.]123[.]249:18082\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1379,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"82[.]26[.]66[.]136:6606\"",
                    " \"121[.]200[.]216[.]74:80\"",
                    " \"102[.]220[.]163[.]36:2502\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1144,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]briannacrawford[.]com\"",
                    " \"www[.]debrancheexpert[.]tv\"",
                    " \"www[.]duegolficharter[.]com\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 987,
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
                "count": 747,
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
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 41344,
        "lastCalculated": "2026-09-16 04:21 IST"
    }
};
