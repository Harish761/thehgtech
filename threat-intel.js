// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-03T18:17:08.547200+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-03T18:17:08.211783+05:30",
    "lastUpdatedFormatted": "Sep 03, 2026 at 06:17 PM IST",
    "comparisonPeriod": "Sep 02 \u2013 Sep 03, 2026",
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
                "hxxps://md[.]rytzskl[.]com/file/sharep[.]html",
                "hxxps://www[.]hbabyaqq[.]blogspot[.]com/",
                "hxxps://tejas3861[.]github[.]io/Spotify-Clone",
                "hxxps://trustcapitallogini[.]webador[.]com/",
                "hxxps://vo[.]la/saKvUR9/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 767,
                "newInLastHour": 81,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e76d28e648a606ad7e0427b533845a49cf240f44c1ad03ed5ead35cff33d6537",
                " \"98fbe0ec86f383e0647f7091db91ed0f2c64c5217f86c88f659f38dcf156e3f9",
                " \"f43098f091ef5749d6062e69217ddf556af62096a158d8475dac6d66e9741235",
                " \"9a72bc24787fa0a0c6fd6cb8cfb75b27c73f0043a95c15a6b6e37fabf330ddbe",
                " \"2e4ae196bb67c5eec5a803ca5eb7ed11fd83fa08515237b96702c846fdcc0c4f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1709,
                "newInLastHour": 11,
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
                "1[.]15[.]14[.]29",
                "1[.]177[.]162[.]4",
                "1[.]183[.]148[.]62",
                "1[.]192[.]129[.]106",
                "1[.]192[.]216[.]192"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11509,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11509,
                "newInLastHour": 11509,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]237[.]203",
                "1[.]162[.]247[.]182",
                "1[.]174[.]208[.]30"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15401,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15401,
                "newInLastHour": 15401,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://one-graup[.]com/LXX[.]js",
                "hxxps://tuiskr[.]com/cjr1[.]jpg",
                "hxxps://tuiskr[.]com/",
                "hxxps://togethers[.]tv/Togethers[.]exe",
                "hxxp://175[.]175[.]192[.]169:54382/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5687,
                "newInLastHour": 5332,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://neortal[.]click:8321/workspaces\"",
                " \"hxxp://cdire[.]shop:9048/permissions\"",
                " \"www[.]arcieriterranoaolbia[.]com\"",
                " \"hxxp://105[.]184[.]226[.]175:60791/Mozi[.]a\"",
                " \"lovezramexar[.]info\""
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
            "iocCount": 10612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10612,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "4157992dbca11ebbe0938db99c79c0769ff4e1b1",
                "5e9de84aab8968d3a10710904a0844d0c360d2a8",
                "d2ea1d53e2027b0378fa9346965edbcc0215e251",
                "dcd0ddb2675731126703bc235532e2fe60457b2a",
                "145f0fa0f6134e66fa5c80989c13987baf799bda"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49180,
            "activeSources": 8,
            "criticalAlerts": 26638,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16045,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "C2",
                "count": 10593,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4473,
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
                "count": 15215,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]138[.]78[.]232:52468/i",
                    "hxxp://175[.]150[.]74[.]42:43235/bin[.]sh",
                    "hxxp://182[.]126[.]122[.]180:45536/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]253",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1698,
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
                "count": 1441,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"165[.]99[.]43[.]101:4445\"",
                    " \"103[.]119[.]47[.]222:35203\"",
                    " \"23[.]148[.]212[.]176:53\""
                ]
            },
            {
                "name": "Vidar",
                "count": 754,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "145f0fa0f6134e66fa5c80989c13987baf799bda",
                    "6ddb71e5a27eccf80773188066ac92d9d39506d7",
                    "bfb6503c7c6ce8af43c41197a7fcaec491baa810"
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
                "count": 701,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac",
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 552,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"31[.]57[.]147[.]200:56001\"",
                    " \"31[.]57[.]147[.]200:56002\"",
                    " \"217[.]60[.]102[.]3:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"osx.macsync\"",
        "totalAttacksThisHour": 47649,
        "lastCalculated": "2026-09-03 18:17 IST"
    }
};
