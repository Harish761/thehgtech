// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-27T15:49:27.057252+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-27T15:49:26.642881+05:30",
    "lastUpdatedFormatted": "Jun 27, 2026 at 03:49 PM IST",
    "comparisonPeriod": "Jun 26 \u2013 Jun 27, 2026",
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
                "hxxp://03365pay[.]com/",
                "hxxps://areaexclusiva[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://www[.]robiox[.]com[.]gr/users/6955289390/profile/",
                "hxxp://jwgl[.]my[.]m[.]luxurylifebrand[.]com/",
                "hxxps://www[.]borderclick[.]com/BC/media/Borderclick/Files/free-7up-robux[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 631,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5bd762010ec26573fc11d98b67cb976f1eddc10d9ae29df29315ac9ec10409ef",
                " \"fee96a66a8c143ff4f172963a56a813427a65dad7758834bb3283685a37df633",
                " \"99fa87f8885cd8d4f0afb63b6c43c0f00d3cdd3edf535c1730641c8f919449b6",
                " \"be83d2ef399368140800f80465eddfc8b33fb6edcc3dfe728ee5a09db8929c53",
                " \"495c7e5513fa7766c236e76d8520139139fc4ad7203ddcb2ccdae17bdb691979"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1697,
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
                "1[.]159[.]67[.]80",
                "1[.]176[.]118[.]246",
                "1[.]177[.]162[.]2",
                "1[.]183[.]161[.]114"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4402,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4402,
                "newInLastHour": 4402,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]28[.]29",
                "1[.]15[.]135[.]116",
                "1[.]15[.]227[.]58",
                "1[.]162[.]197[.]67"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22504,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22504,
                "newInLastHour": 22504,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]238[.]240[.]251:44088/i",
                "hxxp://110[.]39[.]255[.]101:43962/bin[.]sh",
                "hxxp://27[.]44[.]145[.]132:39967/i",
                "hxxps://23[.]139[.]68[.]114/Bin/ScreenConnect[.]ClientSetup[.]exe",
                "hxxp://110[.]36[.]89[.]246:35064/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4450,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4450,
                "newInLastHour": 3919,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://nhuydecor[.]com/\"",
                " \"hxxps://villacamarao[.]com[.]br/\"",
                " \"62[.]0[.]120[.]51:443\"",
                " \"49[.]232[.]242[.]230:8084\"",
                " \"103[.]11[.]41[.]20:9087\""
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
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "85725890743b16375132651911e3f692115128a8",
                "35f7eb4f519f8878beb88a02587ce4d82df24ce6",
                "4914d714908de0f52c22349b5b784f77442a27e6",
                "22254f34fc7bb27507295179034e621efba15cfe",
                "03574e3801865919645fe101df0b05cf1cd75859"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54672,
            "activeSources": 8,
            "criticalAlerts": 33141,
            "activeCampaigns": 240
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23083,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10058,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3461,
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
                "count": 22379,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]200[.]233[.]101:39396/i",
                    "hxxp://123[.]5[.]130[.]44:43408/i",
                    "hxxp://221[.]13[.]232[.]153:52283/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]159[.]114[.]184",
                    "1[.]159[.]67[.]80",
                    "1[.]176[.]118[.]246"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1697,
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
                "count": 1437,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]236[.]60[.]111:443\"",
                    " \"e534d9032141555d21be8b23f30d8f6dd156d61e986bbeed019d9316973b1ba9\"",
                    " \"139c7a9f824bcf6db4407f38413ef817ebef64a8\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1420,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "526b4a8604d900869439980614e56e4b288fb46d",
                    "15a47f45b77ef377b9ec7f6aff1fc3fcca1c6035",
                    "3361a98a6c2746e41390b299202f149699f5a17d"
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
                "count": 688,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 619,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4914d714908de0f52c22349b5b784f77442a27e6",
                    "cb3467ed8453ec11060a815fe90e0c37957a205e",
                    "29e911278a8f4291b3db0684b0ea6a31c6accc9a"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 433,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fa1ffe8c35c3aab0195800f52cf831125eeb4698",
                    "dd3ba97127142419e80ef9ae606bec55ca8500fd",
                    "fbb234bb7df601783c1d25be2a386c9ab5d45e41"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46161,
        "lastCalculated": "2026-06-27 15:49 IST"
    }
};
