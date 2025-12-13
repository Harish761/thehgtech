// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-13T07:38:12.941956+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-13T07:38:12.565799+05:30",
    "lastUpdatedFormatted": "Dec 13, 2025 at 07:38 AM IST",
    "comparisonPeriod": "Dec 12 \u2013 Dec 13, 2025",
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
                "hxxps://www[.]tvhksjxbsshop[.]cc/",
                "hxxps://6h501[.]com/",
                "hxxps://6h078[.]com/",
                "hxxps://6h509[.]com/",
                "hxxps://roblox[.]com[.]ge/users/9104457568/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 731,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 731,
                "newInLastHour": 42,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"29552c03c5b07cf68861afe9d1298b0fdcd1c5dd4894b7cd617b8a4e3093c57a",
                " \"8de453e90993fba024766075e3f04a39b5315d8eec1067bac49875fcb3e3127f",
                " \"7dae70f040b7ff11b7f3bd92f78e409d88a279a593990beafe8208a2df86d5c7",
                " \"f1d19242c06d094e74499da5be564a40d0a217c56007591647c8cd309c0a7d33",
                " \"bb803b5858814ad02ce0ff7ce604fe87c08fb6be7e5f1118b9eb3bbb33d73bd5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1495,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1495,
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
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]1[.]179[.]25",
                "1[.]15[.]118[.]23",
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5666,
                "newInLastHour": 5666,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]179[.]25",
                "1[.]12[.]53[.]235",
                "1[.]12[.]64[.]80",
                "1[.]13[.]79[.]144",
                "1[.]162[.]231[.]97"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28565,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28565,
                "newInLastHour": 28565,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://dsav5[.]f0undst2rve[.]ru/x7fyyfwt",
                "hxxps://dsav5[.]f0undst2rve[.]ru/h0tj3ct2",
                "hxxp://176[.]65[.]148[.]116/hiddenbin/boatnet[.]arc",
                "hxxps://crest[.]p2rabpr0nos[.]ru/1xs4igtv",
                "hxxps://crest[.]p2rabpr0nos[.]ru/swu2mf1b"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2250,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2250,
                "newInLastHour": 2025,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dsav5[.]f0undst2rve[.]ru\"",
                " \"crest[.]p2rabpr0nos[.]ru\"",
                " \"book[.]p2rabpr0nos[.]ru\"",
                " \"di[.]p2rabpr0nos[.]ru\"",
                " \"dz4y1[.]p2rabpr0nos[.]ru\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8621,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8621,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "aef87c27347dcc635eadd305506e254126bedc43",
                "6e751a35d2d9de163d6447f3f7301a4e87394a32",
                "40641ff77ae7b58d5b435664d7b47399730bf4a0",
                "d290f26e5af29e87034418cfd5b100d7d2fead9d",
                "50def7da0eb236fcb1d55eb802039ddd95049da9"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57841,
            "activeSources": 8,
            "criticalAlerts": 38561,
            "activeCampaigns": 219
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29963,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8598,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1450,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 29095,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://z4l[.]sh0rtwe5ter[.]ru/2hmtazm1",
                    "hxxps://z4l[.]sh0rtwe5ter[.]ru/dzbb4gxo",
                    "hxxps://lq[.]sh0rtwe5ter[.]ru/c9p9lzv1"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]179[.]25",
                    "1[.]15[.]118[.]23",
                    "1[.]177[.]22[.]68"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1495,
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
                "count": 1360,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195"
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": " \"win.phorpiex\"",
                "count": 461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ssofhoseuegsgrfnuy[.]net\"",
                    " \"slpsrgpsrhojifdijy[.]net\"",
                    " \"srndndubsbsifurfd[.]biz\""
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"kevincheat[.]com\"",
                    " \"buradakimvar[.]xyz\"",
                    " \"hxxp://bamboopaw2021[.]sbs/b5a52ebb310b65f06dd10cfe69f72363/\""
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"AgentTesla",
        "totalAttacksThisHour": 51602,
        "lastCalculated": "2025-12-13 07:38 IST"
    }
};
