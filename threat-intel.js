// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-10T02:36:10.946293+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-10T02:36:10.537668+05:30",
    "lastUpdatedFormatted": "Sep 10, 2026 at 02:36 AM IST",
    "comparisonPeriod": "Sep 09 \u2013 Sep 10, 2026",
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
                "hxxps://www[.]facebooklogin21[.]blogspot[.]com/",
                "hxxps://ledgrr-live-io-faq[.]pages[.]dev/",
                "hxxp://ledgrr--live[.]pages[.]dev/",
                "hxxp://ledgrr-livv-app[.]pages[.]dev/",
                "hxxps://ledgrr-iolive[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 863,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 863,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f5909238ccb916af6b8260268318f58aee16961d42699521de049f18f0743787",
                " \"2436a177565db40038ce42446b01614e8781e62cd1da618a62fdc9cc31d1195f",
                " \"9b344a299cf74f414ec990711777bc4bb2d5b819527cadbbe94b0a7b971f02c1",
                " \"d49785f0195374536fa826a9f2228da105b80fa7bff5d8bee24c7260c665a09e",
                " \"ff394679232be326f86b65908b12b230af7e9e54884224774c657f8bdf138c7a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1695,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1695,
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
                "1[.]15[.]14[.]29",
                "1[.]181[.]200[.]22",
                "1[.]183[.]160[.]23",
                "1[.]183[.]41[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5176,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5176,
                "newInLastHour": 5176,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14129,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14129,
                "newInLastHour": 14129,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]118[.]244[.]134:34417/bin[.]sh",
                "hxxp://113[.]238[.]99[.]109:46495/bin[.]sh",
                "hxxp://210[.]208[.]111[.]234:49349/bin[.]sh",
                "hxxp://175[.]173[.]129[.]69:57947/bin[.]sh",
                "hxxps://globalsupportupdate[.]top/enc[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9500,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9500,
                "newInLastHour": 9263,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"easiera[.]wasmer[.]app\"",
                " \"levelprodukcija[.]com\"",
                " \"bitfundedxcryptobanter[.]com\"",
                " \"butecoemcasacampinas[.]com[.]br\"",
                " \"clinicaveterinarialescampes[.]com\""
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
            "iocCount": 10577,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10577,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f350973861d149efb83b0a1f51d0e0db0329dda",
                "1955a3ce0e4bb011e3e667a51be5f42fb02d769f",
                "559a55c8c7779e0037429794a8836a1039dbcdc3",
                "8e492f36b0c1412f2d872dc9d51c974d27733d47",
                "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51974,
            "activeSources": 8,
            "criticalAlerts": 25737,
            "activeCampaigns": 256
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15081,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10656,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4145,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]227[.]58"
                ]
            },
            {
                "name": "malware_download",
                "count": 14125,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://globalsupportupdate[.]top/enc[.]exe",
                    "hxxp://115[.]50[.]7[.]192:56498/bin[.]sh",
                    "hxxp://36[.]70[.]111[.]17:52592/i"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1969,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"eyemove[.]space\"",
                    " \"foldstation[.]cfd\"",
                    " \"fleshproduce[.]xyz\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1708,
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
                "count": 1585,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://www[.]abelmomaroc[.]com\"",
                    " \"rug[.]betweenthebunz[.]co\"",
                    " \"remoteitprofessional[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1446,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47",
                    "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"152[.]136[.]253[.]101:111\"",
                    " \"120[.]77[.]254[.]122:8888\"",
                    " \"120[.]77[.]254[.]122:22\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 982,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"oxs9kh4w[.]blowfemme[.]com\"",
                    " \"blowfemme[.]com\"",
                    " \"hxxps://cdn[.]jsdelivr[.]net/gh/Anny11-34/C6-66-6A/B2-50-D8-BE\""
                ]
            },
            {
                "name": "Vidar",
                "count": 772,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                    "2be2964d2711f536de55aa929fa612ba69ebc405",
                    "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97"
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
        "fastestRisingThreat": " \"unknown_rat\"",
        "totalAttacksThisHour": 43876,
        "lastCalculated": "2026-09-10 02:36 IST"
    }
};
