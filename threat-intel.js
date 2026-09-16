// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-16T18:57:01.155161+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-16T18:57:00.832720+05:30",
    "lastUpdatedFormatted": "Sep 16, 2026 at 06:57 PM IST",
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
                "hxxps://schtrekh[.]de/img/",
                "hxxp://www[.]900599[.]cc/",
                "hxxps://farren[.]webdesignla[.]info/ga/click/2-115159033-1585-17249-33739-18616-2212d2c02a-1b10dc49b9",
                "hxxps://brayden-15[.]pages[.]dev/",
                "hxxps://ch-pak-informations[.]bolt[.]host/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1645,
                "newInLastHour": 534,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"008c5a3e7fdd225b6636ae3e7390b5d2a77de2cc8ca467578694f9cf11b653b3",
                " \"7a34596116dabf19692311e53f1f09f098aeedfa05d8c1adbe54d5c9d97db7ec",
                " \"a237309e0895e8e14bf8fffd919ba184c665d550b5a574ec8d5379c6d62decdf",
                " \"1a34b664f7ff7f2da8e01a4608804d80d2c5ff3dfa3a2b9e4d8296098e7216a7",
                " \"950a7646ffa509a2873baf17b7bb18bf98c3365bdf9a8223a870cf69d04d6a1b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1713,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1713,
                "newInLastHour": 1162,
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
                "1[.]10[.]172[.]57",
                "1[.]117[.]59[.]169",
                "1[.]12[.]229[.]231",
                "1[.]189[.]89[.]152",
                "1[.]20[.]174[.]139"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4696,
                "newInLastHour": 4696,
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
                "1[.]224[.]237[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13143,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13143,
                "newInLastHour": 13143,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://windowsdiagnostics[.]st/api/static/exodus[.]asar",
                "hxxps://windowsdiagnostics[.]st/api/static/Office365",
                "hxxps://windowsdiagnostics[.]st/api/static/svhost",
                "hxxps://windowsdiagnostics[.]st/api/static/index[.]js",
                "hxxps://windowsdiagnostics[.]st/api/static/python"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8770,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8770,
                "newInLastHour": 7613,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://drepace[.]click:7289/images\"",
                " \"hxxp://trwehop[.]shop:5627/articles\"",
                " \"1[.]14[.]100[.]25:8084\"",
                " \"106[.]15[.]104[.]224:55555\"",
                " \"49[.]235[.]130[.]208:18082\""
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
            "iocCount": 10705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10705,
                "newInLastHour": 180,
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
            "totalIndicators": 49755,
            "activeSources": 8,
            "criticalAlerts": 24339,
            "activeCampaigns": 275
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13826,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10513,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 5449,
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
                    "1[.]10[.]172[.]57",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]96[.]105"
                ]
            },
            {
                "name": "malware_download",
                "count": 12554,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://223[.]112[.]189[.]134:33646/bin[.]sh",
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_0ad97829e0695995[.]exe",
                    "hxxp://222[.]142[.]214[.]152:60003/bin[.]sh"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1441,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"120[.]53[.]19[.]157:80\"",
                    " \"45[.]61[.]170[.]191:443\"",
                    " \"45[.]61[.]170[.]191:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1440,
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
                "count": 1068,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"townofmainbrook[.]ca\"",
                    " \"tpglighting[.]com\"",
                    " \"trdemo[.]com[.]au\""
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
                "count": 723,
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
                "name": "QuasarRAT",
                "count": 692,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 42633,
        "lastCalculated": "2026-09-16 18:57 IST"
    }
};
