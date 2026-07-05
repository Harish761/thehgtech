// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-05T09:45:50.536940+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-05T09:45:50.200618+05:30",
    "lastUpdatedFormatted": "Jul 05, 2026 at 09:45 AM IST",
    "comparisonPeriod": "Jul 04 \u2013 Jul 05, 2026",
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
                "hxxps://cnivok-krelna-mk3006tgb-bjbyh-2ch378[.]pages[.]dev/",
                "hxxp://j99w[.]vip/",
                "hxxps://www[.]72597[.]xyz/",
                "hxxps://qurnela-gld-zelmora-a6t2dk87[.]pages[.]dev/send_appeal_request",
                "hxxps://driksjb11jul[.]kaisen[.]my[.]id/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 603,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 603,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"befaa63b031753c4e811f7f24b68c6107c8a6b1720e027aee673efde3c9f13ec",
                " \"8e8580be4c0807a0141da1e7cddf1763fea514408897d1bf2f7e298198525437",
                " \"ccbf818a36523c19051d066f8e5edad655a478516afc916cd915aacca80dbcd2",
                " \"5c8dcfaf72d826e5e944b2b3c5a5f19c52f5d254e4f7de5a0a385354e778e955",
                " \"848b460096ecaeaf40ed9399c67650a0914967cd8ba35a3e59fbd372ddc2a7ee"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1661,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1661,
                "newInLastHour": 41,
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
                "1[.]190[.]98[.]234",
                "1[.]192[.]178[.]255",
                "1[.]197[.]102[.]62",
                "1[.]20[.]93[.]158",
                "1[.]205[.]181[.]81"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4610,
                "newInLastHour": 4610,
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
                "1[.]14[.]107[.]204"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21918,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21918,
                "newInLastHour": 21918,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]193[.]120[.]232:45080/i",
                "hxxp://123[.]14[.]251[.]239:39827/i",
                "hxxp://27[.]193[.]120[.]232:45080/bin[.]sh",
                "hxxp://110[.]37[.]61[.]166:45070/bin[.]sh",
                "hxxp://42[.]235[.]137[.]189:34050/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4082,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4082,
                "newInLastHour": 3696,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"edvdafc[.]prozhe[.]vip\"",
                " \"prozhe[.]vip\"",
                " \"hxxp://slugph[.]xyz:4190\"",
                " \"6pyrumd5[.]ace90[.]casino\"",
                " \"qsnvmsy[.]jetbet90[.]ai\""
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
            "iocCount": 10065,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10065,
                "newInLastHour": 96,
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
            "totalIndicators": 54200,
            "activeSources": 8,
            "criticalAlerts": 33161,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23179,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9982,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3325,
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
                "count": 22528,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://38[.]137[.]17[.]143:42164/bin[.]sh",
                    "hxxp://62[.]60[.]226[.]140/files/946381547/6SnNrNw[.]exe",
                    "hxxps://czcymhx[.]enfejar-site[.]bet/c134f757-6fbf-46f2-8fde-8e2ef55324d0"
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
                "count": 1640,
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
                "count": 1413,
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
                "count": 1407,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"103[.]42[.]30[.]154:443\"",
                    " \"47[.]116[.]57[.]211:443\"",
                    " \"172[.]245[.]226[.]120:443\""
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
                "count": 682,
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
                "count": 599,
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
                "count": 424,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45729,
        "lastCalculated": "2026-07-05 09:45 IST"
    }
};
