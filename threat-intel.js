// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-03T16:17:22.100979+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-03T16:17:21.766954+05:30",
    "lastUpdatedFormatted": "Jul 03, 2026 at 04:17 PM IST",
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
                "hxxps://validationoutlook365ing[.]site[.]je/",
                "hxxps://weedfreegardening[.]com/",
                "hxxps://dovishfinancialservices[.]com/wp-content/uploads/2026/43rd/index[.]html",
                "hxxps://exodus[.]page/",
                "hxxp://trezor[.]wallet-web3[.]com[.]cn/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 605,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 605,
                "newInLastHour": 46,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6e75302cc7aefb9254fe8c45638dddfeaef9993941a4942dfa91fa5f6aeb319b",
                " \"b2ba880161254c8c2b38a43a0062ac12d7d355243f59df856fd12e53150392fd",
                " \"1d5657e571c5f9ef5b220a4881f09f63b44576158a6bd02104d27e123ad947f0",
                " \"588e6ed7f440ff77b3dc294d6edcd72e23d8e367e07c905d92fb93404eed09de",
                " \"7345401e4b16b1981e68e1a899e376d159be35b7f8afe549ffd06a148b5c7e65"
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
                "1[.]156[.]80[.]246",
                "1[.]181[.]200[.]22",
                "1[.]192[.]178[.]255",
                "1[.]193[.]63[.]144",
                "1[.]197[.]241[.]117"
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
                "1[.]14[.]203[.]20",
                "1[.]14[.]28[.]29",
                "1[.]180[.]246[.]242",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21945,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21945,
                "newInLastHour": 21945,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]52[.]16[.]242:37666/bin[.]sh",
                "hxxps://oxqniwv[.]1xpin[.]vip/edcc3c22-d58e-4305-b72b-69493006207f",
                "hxxp://115[.]50[.]93[.]34:37693/bin[.]sh",
                "hxxp://125[.]44[.]243[.]245:44944/bin[.]sh",
                "hxxp://110[.]37[.]91[.]29:45945/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3927,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3927,
                "newInLastHour": 3788,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"oxqniwv[.]1xpin[.]vip\"",
                " \"1xpin[.]vip\"",
                " \"qxguiws[.]1xpin[.]org\"",
                " \"hxxps://vcf[.]psgiran[.]news/\"",
                " \"vcf[.]psgiran[.]news\""
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
            "iocCount": 10098,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10098,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a37d8c8b3e427201148b485e4b23a59067fd3812",
                "fa925f013a4c8ed98cda12d1d8f06ef638b11301",
                "6617b3218632fe78cd223bfae98ae55ef69c13c2",
                "0d9b7493086b8a7b2687ee21026ed1cb8eac55e5",
                "adee7459752a33ec85d89a1837d84e9e75f8ac6e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53488,
            "activeSources": 8,
            "criticalAlerts": 32627,
            "activeCampaigns": 242
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22552,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10075,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21900,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]121[.]253[.]155:47156/i",
                    "hxxp://221[.]15[.]145[.]214:39615/bin[.]sh",
                    "hxxp://182[.]121[.]115[.]145:35642/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]156[.]80[.]246",
                    "1[.]176[.]118[.]246",
                    "1[.]181[.]200[.]22"
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
                "count": 1407,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"139[.]226[.]191[.]215:2082\"",
                    " \"208[.]87[.]207[.]196:8443\"",
                    " \"43[.]144[.]20[.]144:443\""
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
                    "0d9b7493086b8a7b2687ee21026ed1cb8eac55e5",
                    "9970ddeb7d0e2dd711bc2af3646b417b201bfdf2",
                    "5ce60656e1fb7c3a46a0d6f4380613ff856f9f9d"
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
        "totalAttacksThisHour": 45695,
        "lastCalculated": "2026-07-03 16:17 IST"
    }
};
