// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-11T18:53:31.885269+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-11T18:53:31.611851+05:30",
    "lastUpdatedFormatted": "Mar 11, 2026 at 06:53 PM IST",
    "comparisonPeriod": "Mar 10 \u2013 Mar 11, 2026",
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
                "hxxps://login[.]ai[.]crforum[.]co[.]uk/f21c2995-59d9-4f21-96b8-fa9d30778b09/login",
                "hxxps://www[.]roblox[.]com[.]gl/users/345086250874/profile",
                "hxxps://u[.]to/roblox-com-users-3450550874-profile/dXl2Ig",
                "hxxps://roblox[.]cd/games/8737602449/PLS-DONATE?privateServerLinkCode=41734316277659259890189232429580",
                "hxxps://roblox[.]com[.]ge/users/4208486548/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 612,
                "newInLastHour": 155,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"64a92d23f6efcc17cdd3016a52e0503a13350f037785220a08b74b46333a3eee",
                " \"ce10df51bf1eda48756df2c7c1962d2486d2e25e23695a6f98a82e32281df347",
                " \"a15044541cc9587c61dc7fbfa613b03045d323cc643d4fd08d8351d7cdd80a32",
                " \"c63d675d88282db91149a1057b122a11a1bae3f17361941005aca4e14307f9b7",
                " \"a6edec8bb8a1de71eff27deecd7aae78ef4514dc8e2ed3dd83aeaf25a7e4a188"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1533,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1533,
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
                "1[.]12[.]64[.]5",
                "1[.]15[.]118[.]23",
                "1[.]170[.]227[.]213",
                "1[.]170[.]47[.]69",
                "1[.]188[.]103[.]101"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7922,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7922,
                "newInLastHour": 7922,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]136[.]28",
                "1[.]162[.]231[.]28",
                "1[.]164[.]175[.]119",
                "1[.]168[.]217[.]136",
                "1[.]192[.]189[.]251"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19142,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19142,
                "newInLastHour": 19142,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]245[.]135[.]237:60313/i",
                "hxxp://123[.]11[.]161[.]92:55994/bin[.]sh",
                "hxxp://120[.]238[.]189[.]72:40002/bin[.]sh",
                "hxxp://42[.]230[.]40[.]4:56852/i",
                "hxxp://125[.]42[.]40[.]11:38162/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1042,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1042,
                "newInLastHour": 1040,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"paragrafo[.]org\"",
                " \"pantografocnc[.]mx\"",
                " \"18[.]162[.]145[.]74:8554\"",
                " \"165[.]154[.]225[.]36:8443\"",
                " \"176[.]65[.]139[.]43:80\""
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
            "iocCount": 9225,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9225,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a31a48281774353a1282ae49b81f0699a15a9d49",
                "8b47871555b697ac34385dd0622ef77a0ff99d65",
                "b918317471273f6346359afabcc1f14c4d22ebfb",
                "7692e8ab3cd18c1bd81d8541f62628560c2abf21",
                "56bad084f7d679dfddbe0f1ac2254b191051d348"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46815,
            "activeSources": 8,
            "criticalAlerts": 28876,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19669,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9207,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 534,
                "trend": "stable",
                "percentage": 7
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19069,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://wire2spell[.]com/1[.]rar",
                    "hxxps://spjx-1k1[.]pages[.]dev/download/android%E7%89%88[.]zip",
                    "hxxp://109[.]236[.]48[.]121/kswapd1"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]64[.]5",
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]227[.]213"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1536,
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
                "count": 1389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603"
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
                "count": 638,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "56bad084f7d679dfddbe0f1ac2254b191051d348",
                    "363c5465989001701bfd2de6993628e0264dc7e7",
                    "581cff3c3ff5140030c1b2dae80093f37df765df"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c",
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 420,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rkxv[.]keysum[.]in[.]net\"",
                    " \"genefrost[.]keysum[.]in[.]net\"",
                    " \"tr4c-craft[.]keysum[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 400,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b918317471273f6346359afabcc1f14c4d22ebfb",
                    "82fe5adc2e8dbae73f9825e1ef853a064ae1bba9",
                    "597545892f122729047032705d557fe787138c32"
                ]
            },
            {
                "name": "OffLoader",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "343a308d6aa6ef72febb594eb35d88f843d50852",
                    "fecbcfd7dcdac7eb882a84d60e0a0f8aa8413fe0",
                    "f78a257ac3bdf0503c3c8e10b84fcee62452df64"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43565,
        "lastCalculated": "2026-03-11 18:53 IST"
    }
};
