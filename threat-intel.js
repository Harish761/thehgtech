// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-03T02:49:34.686138+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-03T02:49:34.408113+05:30",
    "lastUpdatedFormatted": "Jul 03, 2026 at 02:49 AM IST",
    "comparisonPeriod": "Jul 02 \u2013 Jul 03, 2026",
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
                "hxxps://llonex-fursa-a7c109-wplm[.]pages[.]dev/",
                "hxxps://500675[.]com/",
                "hxxps://norzani-gld-varmita-p1t8fq96[.]pages[.]dev/",
                "hxxps://avanteshipping[.]com/wp-includes/build/esb/",
                "hxxps://avanteshipping[.]com/wp-includes/build/esb"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 573,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 573,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"42bf45811ef88b4cbbde334f34197beca2836a38a6d2ba45d7c9f4ec60937450",
                " \"b634c8c0ec3a4d682630eed6ac1cc8d5e2b0481110121990edcb4e0df9867698",
                " \"f5b84a261a19b8066cb609124d97bc52df08f08f564d32358a15aaf511caf5e4",
                " \"cbc71b0bd3f94cb163a8ab106242aa7638aced10e7b8c4d6179bc7fc5ba649f2",
                " \"5cad494f67808745489659cd077dce429fce364a673c44c9d238d14dcca81732"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1670,
                "newInLastHour": 49,
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
                "1[.]15[.]14[.]29",
                "1[.]176[.]118[.]246",
                "1[.]189[.]79[.]190",
                "1[.]190[.]63[.]212"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4839,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4839,
                "newInLastHour": 4839,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]15[.]135[.]116",
                "1[.]192[.]61[.]19",
                "1[.]20[.]140[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22242,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22242,
                "newInLastHour": 22242,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]179[.]214[.]253:43723/i",
                "hxxps://rfedpuuc[.]falsafekonkour[.]site/?ublib=01057b20-0c1b-47e6-a963-324be77d9013",
                "hxxp://27[.]44[.]147[.]17:41763/i",
                "hxxp://218[.]16[.]164[.]107:53377/bin[.]sh",
                "hxxp://125[.]26[.]202[.]115:42337/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4158,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4158,
                "newInLastHour": 3961,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"154[.]220[.]93[.]235:8888\"",
                " \"154[.]220[.]123[.]189:8888\"",
                " \"154[.]220[.]122[.]107:8888\"",
                " \"154[.]220[.]122[.]114:8888\"",
                " \"154[.]220[.]121[.]50:8888\""
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
            "iocCount": 10081,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10081,
                "newInLastHour": 8589,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c165baaa2bb8cd1021237ebda0b2cfee01d71177",
                "9970ddeb7d0e2dd711bc2af3646b417b201bfdf2",
                "5ce60656e1fb7c3a46a0d6f4380613ff856f9f9d",
                "2431ed7de8a7c0d747bbcdef2ed5b06fa31fd63d",
                "e047a0eefddb594af79bfff22f28a7148729b007"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 45380,
            "activeSources": 8,
            "criticalAlerts": 24297,
            "activeCampaigns": 161
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22792,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3525,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1505,
                "trend": "down",
                "percentage": -85
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
                "count": 22221,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://mlvgwjn[.]1xforward[.]pro/e955fa4f-bca8-46ed-8cbe-d4bf666037df",
                    "hxxp://123[.]188[.]73[.]220:49388/i",
                    "hxxp://120[.]85[.]61[.]36:43042/bin[.]sh"
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
                    "1[.]176[.]118[.]246"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1632,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1404,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"82[.]157[.]78[.]201:8080\"",
                    " \"150[.]158[.]122[.]8:6000\"",
                    " \"39[.]106[.]80[.]126:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 421,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9970ddeb7d0e2dd711bc2af3646b417b201bfdf2",
                    "5ce60656e1fb7c3a46a0d6f4380613ff856f9f9d",
                    "2431ed7de8a7c0d747bbcdef2ed5b06fa31fd63d"
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 377,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]155[.]69[.]97:1202\"",
                    " \"185[.]122[.]171[.]65:5691\"",
                    " \"185[.]122[.]171[.]124:8015\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 362,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]117[.]171[.]174:7443\"",
                    " \"waysmakeyourlifebetter[.]com\"",
                    " \"goodpersonofourcentury[.]com\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 327,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"mlvgwjn[.]1xforward[.]pro\"",
                    " \"1xforward[.]pro\"",
                    " \"926ikjry[.]euroyek[.]bio\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://llonex-fursa-a7c109-wplm[.]pages[.]dev/",
                    "hxxps://500675[.]com/",
                    "hxxps://norzani-gld-varmita-p1t8fq96[.]pages[.]dev/"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 263,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"172[.]94[.]18[.]103:70\"",
                    " \"179e5c88bbd34e45830e7ee3610d5216\"",
                    " \"0aac658075b7d9e81419d0beaa3db796569bc14fd57512f4479fb36e9cc4c1a2\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 54994,
        "lastCalculated": "2026-07-03 02:49 IST"
    }
};
