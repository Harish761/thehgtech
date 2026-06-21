// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-21T19:59:14.123777+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-21T19:59:13.779860+05:30",
    "lastUpdatedFormatted": "Jun 21, 2026 at 07:59 PM IST",
    "comparisonPeriod": "Jun 20 \u2013 Jun 21, 2026",
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
                "hxxps://devicelocate[.]us/ICL264/",
                "hxxps://maps-icloudmy1[.]us/ICL264/",
                "hxxps://mail[.]jsupport-myclouds[.]us/ICL264/",
                "hxxps://serch-finds[.]life/ICL264/",
                "hxxp://myphone-app[.]us/ICL264/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 697,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0b3581ab2acd2099ec8d7de4f77608a0e9a1b7b4810009c7eb1cc4007d30d487",
                " \"4374049d24a766eac84cdd1995bbd236d14956a11123de0402a8cd4669aa0be0",
                " \"54a62444672de4d11e9a3ebd67289f1afc4401d7f7631ac02e404c7d0ca257ca",
                " \"10d1620dbbb762a94bea71602b7f6d3a3167bf5f4e1cd7f3ab49aeac74c2a573",
                " \"e5ca4586785728938cb9de0e964a35bd36dfa534bd7bf47f2438af4a4c2103c2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1693,
                "newInLastHour": 1194,
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
                "1[.]11[.]228[.]4",
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4466,
                "newInLastHour": 4466,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]116[.]61[.]217",
                "1[.]14[.]28[.]29",
                "1[.]14[.]99[.]224",
                "1[.]15[.]134[.]139"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17228,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17228,
                "newInLastHour": 17228,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]138[.]182[.]107:48022/bin[.]sh",
                "hxxp://123[.]9[.]199[.]217:55576/i",
                "hxxp://123[.]9[.]199[.]217:55576/bin[.]sh",
                "hxxps://kefds8uo[.]zerangbet[.]com/?ublib=430d563a-4421-4543-9f73-367aa9af43cd",
                "hxxp://196[.]189[.]3[.]1:54492/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3511,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3511,
                "newInLastHour": 3112,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"162[.]14[.]99[.]178:61080\"",
                " \"141[.]98[.]157[.]101:2288\"",
                " \"106[.]52[.]91[.]14:8888\"",
                " \"87[.]199[.]196[.]12:443\"",
                " \"zyppn5vo[.]riyazishahkilid[.]xyz\""
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
            "iocCount": 9991,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9991,
                "newInLastHour": 122,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "68a81d42abb025f982a44a7caefb588f515b6790",
                "d4ea5c5ed890d658f9ef23555e312c694793d831",
                "8cb01cefc1fb1be2b68c00ad8a801a40ff0dacf3",
                "535bea5950f28c905e73148a5d0d69229eca4ad2",
                "01dcaf71bc0dc821c2df145680dee05578368355"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47156,
            "activeSources": 8,
            "criticalAlerts": 27825,
            "activeCampaigns": 223
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17964,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9861,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 2995,
                "trend": "stable",
                "percentage": -1
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
                "count": 17192,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]7[.]53:36894/i",
                    "hxxp://123[.]11[.]14[.]255:34243/i",
                    "hxxp://156[.]146[.]24[.]204:58319/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1430,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]108[.]49[.]157:8443\"",
                    " \"67[.]216[.]197[.]83:10000\"",
                    " \"47[.]122[.]118[.]128:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1415,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50",
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558"
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
                "count": 681,
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
                "count": 570,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d4ea5c5ed890d658f9ef23555e312c694793d831",
                    "8cb01cefc1fb1be2b68c00ad8a801a40ff0dacf3",
                    "535bea5950f28c905e73148a5d0d69229eca4ad2"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
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
                "name": "Spamhaus DROP List",
                "count": 499,
                "types": [
                    "ip-range"
                ],
                "sampleIndicators": [
                    "2.26.75.0/24",
                    "2.27.5.0/24",
                    "2.58.56.0/24"
                ]
            },
            {
                "name": "OffLoader",
                "count": 414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b7fca0fbc8179ef52e3239907257dcd0315cb2f1",
                    "8f15e3e07c691ae493b4059222638003e0bf0a9b",
                    "031af28814511239c0172b71c2c5092660676632"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 41436,
        "lastCalculated": "2026-06-21 19:59 IST"
    }
};
