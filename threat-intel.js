// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-05T02:41:03.532043+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-05T02:41:03.206274+05:30",
    "lastUpdatedFormatted": "Jul 05, 2026 at 02:41 AM IST",
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
            "iocCount": 624,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 624,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"444ae54b9603d446ca3497bf3a8647f16a43786798631f88a1de1db48ebba09a",
                " \"53faf93d2f0a5caccf8a99a797602c07aa0d19a26249feb705570cb2fbd9483f",
                " \"38809fbd8e2c55db79df0c71984ec5be8988f27f423674e5f6f58f572c2118c3",
                " \"c6048c44535ab5fe1f7af9047eacf7225d88fc7b0c9324c1595a8b45d2d9588e",
                " \"adf43c66f5394bc13aaaf3df3adaa6debeb69aa7bb126b665f1b2522607b8225"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1640,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1640,
                "newInLastHour": 7,
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
                "1[.]156[.]34[.]93",
                "1[.]159[.]81[.]89",
                "1[.]165[.]8[.]160",
                "1[.]183[.]41[.]171",
                "1[.]193[.]63[.]123"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4552,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4552,
                "newInLastHour": 4552,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]107[.]99",
                "1[.]12[.]223[.]79",
                "1[.]14[.]151[.]196",
                "1[.]14[.]203[.]20"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22528,
                "newInLastHour": 22528,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://38[.]137[.]17[.]143:42164/bin[.]sh",
                "hxxp://62[.]60[.]226[.]140/files/946381547/6SnNrNw[.]exe",
                "hxxps://czcymhx[.]enfejar-site[.]bet/c134f757-6fbf-46f2-8fde-8e2ef55324d0",
                "hxxp://200[.]115[.]102[.]2:44642/i",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_ed1d6fcaae901695[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4099,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4099,
                "newInLastHour": 3713,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"czcymhx[.]enfejar-site[.]bet\"",
                " \"azbkptz[.]enfejar-site[.]bet\"",
                " \"urqvdqc[.]dreambet[.]casino\"",
                " \"173[.]211[.]46[.]220:56379\"",
                " \"dreambet[.]casino\""
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
            "iocCount": 10004,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10004,
                "newInLastHour": 70,
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
            "totalIndicators": 54240,
            "activeSources": 8,
            "criticalAlerts": 33173,
            "activeCampaigns": 249
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23165,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10008,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3320,
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
                "count": 22512,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]173[.]199[.]8:48446/i",
                    "hxxp://115[.]55[.]252[.]77:54172/bin[.]sh",
                    "hxxp://115[.]42[.]71[.]239:33856/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]158[.]2[.]149",
                    "1[.]159[.]81[.]89",
                    "1[.]183[.]41[.]171"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1674,
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
                "count": 1416,
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
                "count": 679,
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
                "count": 610,
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
                "count": 553,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46181,
        "lastCalculated": "2026-07-05 02:41 IST"
    }
};
