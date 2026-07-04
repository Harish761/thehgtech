// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-04T19:23:58.241987+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-04T19:23:57.910974+05:30",
    "lastUpdatedFormatted": "Jul 04, 2026 at 07:23 PM IST",
    "comparisonPeriod": "Jul 03 \u2013 Jul 04, 2026",
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
                "hxxps://gemanelogin[.]webflow[.]io/",
                "hxxps://www[.]imtaken[.]my/download[.]html",
                "hxxp://bermita-gld-zarqula-r5x8hz21[.]pages[.]dev/",
                "hxxps://metamask_usa_logiwiki[.]godaddysites[.]com/",
                "hxxp://www[.]metamask_usa_logiwiki[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 650,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 650,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"67b2df2731ea786c3ed11537549ac005012d646af359b373bcae36b058d406ee",
                " \"d83cb784619dfda6973a0673d12420d4f67c7a4e347a64a0561c40907c75abf3",
                " \"e4a9a2dd549897824e652f48e0b98511f2a3a3e85d614126a6233a541faa7b33",
                " \"41fed20077af837483ffa0560041c9d73a79ce6e2289e752733a0cc02cdf271d",
                " \"26c54b1a0cb5d8636966e6f27505035b2521c7733ee8827b21a9a76f934665e7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1681,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1681,
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
                "1[.]165[.]8[.]160",
                "1[.]192[.]178[.]255",
                "1[.]192[.]46[.]208",
                "1[.]193[.]63[.]247",
                "1[.]197[.]102[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4632,
                "newInLastHour": 4632,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]116[.]107[.]99",
                "1[.]12[.]223[.]79",
                "1[.]14[.]151[.]196"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22423,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22423,
                "newInLastHour": 22423,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]117[.]84[.]80:59176/bin[.]sh",
                "hxxps://ayoddsw[.]acbet[.]casino/0b606039-d872-4ae5-9277-02eeb46c9c1f",
                "hxxps://0pkit2tt[.]prozhedownload[.]net/?ublib=1446773f-978d-46e5-a765-c473126fe732",
                "hxxp://61[.]53[.]74[.]97:43379/i",
                "hxxp://110[.]36[.]20[.]227:40827/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4016,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4016,
                "newInLastHour": 3785,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]dservices[.]space\"",
                " \"ayoddsw[.]acbet[.]casino\"",
                " \"acbet[.]casino\"",
                " \"0pkit2tt[.]prozhedownload[.]net\"",
                " \"prozhedownload[.]net\""
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
            "iocCount": 10100,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10100,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b87dc4ee057f64c6592d11ed074e03caf92e2851",
                "988bb7e571418b2800a0cc2d33a794ecf1eb42a7",
                "a37d8c8b3e427201148b485e4b23a59067fd3812",
                "fa925f013a4c8ed98cda12d1d8f06ef638b11301",
                "6617b3218632fe78cd223bfae98ae55ef69c13c2"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54212,
            "activeSources": 8,
            "criticalAlerts": 33151,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23074,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10077,
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
                "count": 22313,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]74[.]152:55571/i",
                    "hxxp://115[.]48[.]150[.]182:60957/i",
                    "hxxp://115[.]48[.]150[.]182:60957/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]156[.]34[.]93",
                    "1[.]159[.]81[.]89",
                    "1[.]165[.]8[.]160"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1681,
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
                "count": 1398,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]116[.]57[.]211:8888\"",
                    " \"176[.]121[.]49[.]1:8086\"",
                    " \"119[.]29[.]91[.]172:5555\""
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
                "count": 689,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ac563907d31a21443760cee92a98b50bba6152aa",
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f"
                ]
            },
            {
                "name": "Vidar",
                "count": 627,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b87dc4ee057f64c6592d11ed074e03caf92e2851",
                    "0d9b7493086b8a7b2687ee21026ed1cb8eac55e5",
                    "9970ddeb7d0e2dd711bc2af3646b417b201bfdf2"
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
                "count": 435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6617b3218632fe78cd223bfae98ae55ef69c13c2",
                    "adee7459752a33ec85d89a1837d84e9e75f8ac6e",
                    "fa1ffe8c35c3aab0195800f52cf831125eeb4698"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46171,
        "lastCalculated": "2026-07-04 19:23 IST"
    }
};
