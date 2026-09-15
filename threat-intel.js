// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-16T01:10:12.029726+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-16T01:10:11.677865+05:30",
    "lastUpdatedFormatted": "Sep 16, 2026 at 01:10 AM IST",
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
            "iocCount": 1132,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1132,
                "newInLastHour": 239,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4de8b1038d0afe4583cb84c224bb5b662fd92289577989d4f14ca26d5e35b2cb",
                " \"91f183bd031b2686c90cc20913357fe2cf41c3a08a86fd32d84a4902d28f3b1d",
                " \"55b99ef719ccf9d8098e3180ccba1a2febaae6ea8c4a70394a958fe18579036c",
                " \"9c415b4b5374b32483d611a37e90659d2b3fffe21237b15b11b5cf4f824254a0",
                " \"af42d0b00f13d5472916778f1e2c2c762f4421009b30f3fa759213acf901a896"
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
                "newInLastHour": 57,
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
                "1[.]14[.]96[.]105",
                "1[.]181[.]200[.]22",
                "1[.]193[.]63[.]83",
                "1[.]20[.]186[.]24"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4687,
                "newInLastHour": 4687,
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
            "iocCount": 12938,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12938,
                "newInLastHour": 12938,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]157[.]62[.]192:50300/i",
                "hxxp://196[.]189[.]98[.]77:33646/i",
                "hxxp://196[.]189[.]98[.]77:33646/bin[.]sh",
                "hxxp://116[.]139[.]179[.]199:57442/i",
                "hxxp://85[.]11[.]167[.]41:8080/x86_64"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9141,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9141,
                "newInLastHour": 7836,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://chordapple[.]com/SGct2K\"",
                " \"hxxps://rehearsal-b[.]com/SGct2K\"",
                " \"d1zih0uv[.]en-us-zen-sulin[.]com\"",
                " \"bisajepediwisma[.]org\"",
                " \"jomy[.]store\""
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
            "iocCount": 10715,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10715,
                "newInLastHour": 200,
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
            "totalIndicators": 50919,
            "activeSources": 8,
            "criticalAlerts": 24344,
            "activeCampaigns": 280
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13851,
                "trend": "stable",
                "percentage": 5
            },
            {
                "category": "C2",
                "count": 10493,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 5305,
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
                    "1[.]181[.]200[.]22",
                    "1[.]189[.]89[.]152"
                ]
            },
            {
                "name": "malware_download",
                "count": 12840,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]51[.]95[.]94:46145/bin[.]sh",
                    "hxxp://27[.]215[.]55[.]48:39346/i",
                    "hxxp://196[.]191[.]137[.]44:34151/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1667,
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
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1432,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]108[.]225[.]4:8082\"",
                    " \"47[.]108[.]225[.]4:8011\"",
                    " \"47[.]108[.]225[.]4:443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1402,
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
                "count": 1066,
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
                "count": 963,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zulfija[.]blog\"",
                    " \"zus[.]cz\"",
                    " \"zukunfthandel[.]saarland\""
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
                "count": 722,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f166dfb0e185cab2e7bfdfff50edc67f238195c3",
                    "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
                    "7bc298ef18b49cfd44b5b429209035207250e25e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41262,
        "lastCalculated": "2026-09-16 01:10 IST"
    }
};
