// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-20T10:17:27.458416+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-20T10:17:27.095600+05:30",
    "lastUpdatedFormatted": "Aug 20, 2026 at 10:17 AM IST",
    "comparisonPeriod": "Aug 19 \u2013 Aug 20, 2026",
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
                "hxxp://onedocuvetinary-ldjzoo9p-webu43[.]4everland[.]app/",
                "hxxp://netcoooins-logi[.]webflow[.]io/",
                "hxxps://originalmeeting[.]pages[.]dev/Microsoftmeet[.]html?email=valosz@2de1886ed1cab04908e53d937d7dffd68a87[.]net",
                "hxxps://flexibilidadeaseulimite[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://www[.]supp0rtassistance[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1341,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1341,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d8e2cdff227e5174c00467e0fd7b0f466bf7e389c11c0cc79a70276c21efa48e",
                " \"3615a57af1621f5729b3ab3f3604014cdd5fa3f9df0b67ae426c65893ec21006",
                " \"07a832683b5161e701bb28eb30312dc2eaa6358aa60f2a707c7043b8932f6a94",
                " \"6910e0a987ca752e7fcd93bc66f45790fe0e0a04140d7055f7dcb7cd901ca6fb",
                " \"fc63d1bf597dfa26b660453e57e5bbec5df9b3dd2ebb112e7750215f6f3cf68e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1691,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1691,
                "newInLastHour": 2,
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
                "1[.]119[.]158[.]77",
                "1[.]140[.]210[.]242",
                "1[.]159[.]70[.]231",
                "1[.]165[.]27[.]71",
                "1[.]180[.]190[.]250"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4905,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4905,
                "newInLastHour": 4905,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16585,
                "newInLastHour": 16585,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://191[.]44[.]114[.]243:889/[.]bash_history",
                "hxxp://115[.]48[.]10[.]6:39981/i",
                "hxxp://27[.]44[.]145[.]210:44835/i",
                "hxxp://182[.]116[.]11[.]55:53485/i",
                "hxxp://222[.]141[.]132[.]237:60298/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10394,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10394,
                "newInLastHour": 10155,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bauenmitleuppi[.]ch\"",
                " \"fgx9[.]com\"",
                " \"oneai[.]surf\"",
                " \"oneai[.]icu\"",
                " \"abiesco[.]ch\""
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
            "iocCount": 10421,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10421,
                "newInLastHour": 54,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "687928f5bd90cb243f29760de8d299236de2cadf",
                "9ba597b7a850fe598927a226f6ab2efd3050ff95",
                "16545697d78cbada6dac236b73dbeff19c9035d1",
                "5e7110d4c25e3aef153d9d38610550ad510f23cf",
                "0b92ba05df90855d90170858ba91680d33f76e0f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55778,
            "activeSources": 8,
            "criticalAlerts": 28407,
            "activeCampaigns": 249
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17994,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10413,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5084,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16571,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]224[.]151[.]118:35018/bin[.]sh",
                    "hxxp://103[.]31[.]103[.]204:55940/bin[.]sh",
                    "hxxp://219[.]157[.]249[.]227:40515/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]140[.]210[.]242",
                    "1[.]180[.]247[.]82"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2527,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"valokse[.]lol\"",
                    " \"sixpences[.]xyz\"",
                    " \"taliy[.]sbs\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1690,
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
                "name": " \"unknown_loader\"",
                "count": 1681,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"governorhobbies[.]cfd\"",
                    " \"sofazinc[.]cfd\"",
                    " \"snailsreading[.]xyz\""
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
                "count": 1424,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]221[.]118[.]46:80\"",
                    " \"45[.]221[.]118[.]46:443\"",
                    " \"38[.]76[.]183[.]197:8082\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1152,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://meraapnabharat[.]ca/\"",
                    " \"hxxps://vidyalekha[.]co[.]in/\"",
                    " \"hxxps://vefasigorta[.]net/\""
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
                "count": 704,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9ba597b7a850fe598927a226f6ab2efd3050ff95",
                    "5e7110d4c25e3aef153d9d38610550ad510f23cf",
                    "ab53f86d2ce32d9306f431e8e82f39cb31f48a53"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47053,
        "lastCalculated": "2026-08-20 10:17 IST"
    }
};
