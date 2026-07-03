// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-04T02:49:14.004238+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-04T02:49:13.691596+05:30",
    "lastUpdatedFormatted": "Jul 04, 2026 at 02:49 AM IST",
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
                "hxxps://danae[.]com[.]br/it/persone-e-famiglie/content/internetbanking/common/extra-content-login/login-page[.]html",
                "hxxp://365wtvip[.]cc/",
                "hxxp://varimo[.]info/mac/korea[.]html",
                "hxxp://www[.]kanatogullari[.]com[.]tr/safe/safesend[.]html",
                "hxxps://www[.]roblox[.]com[.]bi/communities/411721888093/Nova-Society%E2%84%A2"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 721,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 721,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"11ab28dfe32b4bba5c69ad37b1a898b519212036adec54d0cb306759126454d3",
                " \"46f10062d69ebabbfe405bbd79eae9e9243735997d4353ff771adbe8f4f66607",
                " \"94fa960157c205a74ee1a2a783d3208dd536f25adf2f39a05b0a282ac822fcc5",
                " \"cfbd2859a855c47242fa0966147baacc11e4174ecb70910953f451711efffa92",
                " \"69cbe4f3ad816def514f1ec5c6cada7874be2d0230ebf89ec1aaff8179daa0d3"
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
                "newInLastHour": 81,
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
                "1[.]123[.]233[.]240",
                "1[.]190[.]63[.]212",
                "1[.]193[.]63[.]144",
                "1[.]193[.]63[.]200",
                "1[.]196[.]168[.]86"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4571,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4571,
                "newInLastHour": 4571,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]107[.]99",
                "1[.]12[.]223[.]79",
                "1[.]14[.]203[.]20",
                "1[.]14[.]28[.]29"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22121,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22121,
                "newInLastHour": 22121,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]239[.]74[.]140:48416/bin[.]sh",
                "hxxps://lofybdv[.]megaparii[.]pro/556ffabb-6029-4fd5-9860-2bb1dd443051",
                "hxxp://123[.]129[.]1[.]230:35858/i",
                "hxxp://123[.]10[.]227[.]134:53465/i",
                "hxxp://59[.]103[.]121[.]32:41365/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3858,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3858,
                "newInLastHour": 3776,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"lofybdv[.]megaparii[.]pro\"",
                " \"154[.]220[.]94[.]47:8888\"",
                " \"154[.]220[.]94[.]48:8888\"",
                " \"154[.]220[.]94[.]45:8888\"",
                " \"5732ru8p[.]1x303[.]casino\""
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
            "iocCount": 10099,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10099,
                "newInLastHour": 275,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "988bb7e571418b2800a0cc2d33a794ecf1eb42a7",
                "a37d8c8b3e427201148b485e4b23a59067fd3812",
                "fa925f013a4c8ed98cda12d1d8f06ef638b11301",
                "6617b3218632fe78cd223bfae98ae55ef69c13c2",
                "0d9b7493086b8a7b2687ee21026ed1cb8eac55e5"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53402,
            "activeSources": 8,
            "criticalAlerts": 32646,
            "activeCampaigns": 233
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22844,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9802,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 3438,
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
                "count": 22096,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]44[.]147[.]6:47311/i",
                    "hxxp://83[.]219[.]1[.]198:58786/bin[.]sh",
                    "hxxp://42[.]58[.]167[.]28:50302/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]233[.]240",
                    "1[.]156[.]80[.]246",
                    "1[.]181[.]200[.]22"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1600,
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
                "count": 1414,
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
                    " \"223[.]166[.]30[.]24:2082\"",
                    " \"172[.]245[.]226[.]120:80\"",
                    " \"1[.]14[.]217[.]176:443\""
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
                "count": 671,
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
                "count": 576,
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
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9"
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"185[.]115[.]164[.]60:51500\"",
                    " \"185[.]115[.]164[.]59:57459\"",
                    " \"155[.]103[.]71[.]115:14657\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 46129,
        "lastCalculated": "2026-07-04 02:49 IST"
    }
};
