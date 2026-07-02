// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-02T19:55:07.467644+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-02T19:55:07.133908+05:30",
    "lastUpdatedFormatted": "Jul 02, 2026 at 07:55 PM IST",
    "comparisonPeriod": "Jul 01 \u2013 Jul 02, 2026",
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
            "iocCount": 505,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 505,
                "newInLastHour": 92,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5380bc5893d043bbbc7680d359e80ae7464b729fd128d313a56327a245c8e0b7",
                " \"a5d8960b42bef15260e3909e3acfe90ea220ac17b6a54c58e24276dc7acbe407",
                " \"fddc9cca767ef639b17d70374bb9ca9d5c6516f58b9b63cae86f593ced0f3b6b",
                " \"388d7fd938e51455ad9ba27eae9ce01fcbadff8ab88d5a7e9e742cb28402f1e8",
                " \"cb0a4a758877e3f18a85fe307c6d4a7baf9924aab93bcbcb41f81eb13d9ac0f6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1672,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1672,
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
                "1[.]176[.]118[.]246",
                "1[.]189[.]79[.]190",
                "1[.]190[.]63[.]212"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4886,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4886,
                "newInLastHour": 4886,
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
            "iocCount": 21739,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21739,
                "newInLastHour": 21739,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://klqxthu[.]enfejar[.]poker/1e70be9f-6442-432f-b0b8-cdd49eed1d86",
                "hxxps://krdtpvieod[.]vercel[.]app/?download=1",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_2e6917a6c33f979e[.]exe",
                "hxxp://182[.]124[.]212[.]108:50577/i",
                "hxxp://112[.]246[.]80[.]75:39781/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4021,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4021,
                "newInLastHour": 3901,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://soccerpunter[.]org/\"",
                " \"klqxthu[.]enfejar[.]poker\"",
                " \"hxxps://fesold[.]com/\"",
                " \"hxxps://nonseca[.]lol/api/v1/status\"",
                " \"hxxps://tommy-m[.]lol/o\""
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
            "iocCount": 10064,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10064,
                "newInLastHour": 4,
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
            "totalIndicators": 53143,
            "activeSources": 8,
            "criticalAlerts": 32221,
            "activeCampaigns": 243
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22158,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10063,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3388,
                "trend": "stable",
                "percentage": 1
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
                "count": 21670,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]114[.]198[.]64:59795/bin[.]sh",
                    "hxxp://124[.]135[.]141[.]173:48830/bin[.]sh",
                    "hxxp://112[.]248[.]163[.]173:35273/i"
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
                "count": 1682,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"39[.]106[.]80[.]126:443\"",
                    " \"121[.]43[.]181[.]37:443\"",
                    " \"115[.]190[.]178[.]249:8888\""
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
                "count": 626,
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
        "totalAttacksThisHour": 45927,
        "lastCalculated": "2026-07-02 19:55 IST"
    }
};
