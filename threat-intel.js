// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-31T19:37:13.428756+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-31T19:37:13.129601+05:30",
    "lastUpdatedFormatted": "May 31, 2026 at 07:37 PM IST",
    "comparisonPeriod": "May 30 \u2013 May 31, 2026",
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
                "hxxps://www[.]robiox[.]com[.]py/users/450998465431/profile",
                "hxxps://kaufeld[.]com/cgi-bin/home[.]ha",
                "hxxp://insproxy[.]66zhang[.]cn/",
                "hxxp://www[.]info-resmi079[.]blogspot[.]com/",
                "hxxps://uniswap-azure[.]vercel[.]app/explore/transactions"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 518,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 518,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"798312a1889a135c42bd969a3d22a9cb77a62f71b83616bf51a9c5fda40fc7bc",
                " \"08031510f552af30e310fb3fa81186c48c2c2df41173b8045ab2876f94c1c4c9",
                " \"7a91a0f708266d100017814211736836481884f1e2dbe69e1c8def66379383c3",
                " \"9a1b80b37fbaff0e30ce1666b4a7cb8db864eb4247f09fd45ed1a63ae353a784",
                " \"bce855d1a81c079fd958f4e77e1b2cbf70ce118affc878c7abb26c8304479f86"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1607,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1607,
                "newInLastHour": 3,
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
                "1[.]1[.]223[.]76",
                "1[.]11[.]228[.]4",
                "1[.]12[.]229[.]231",
                "1[.]141[.]160[.]162",
                "1[.]15[.]35[.]79"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7256,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7256,
                "newInLastHour": 7256,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]15[.]103[.]109",
                "1[.]178[.]210[.]2",
                "1[.]20[.]163[.]80"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20619,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20619,
                "newInLastHour": 20619,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]11[.]9[.]171:41386/bin[.]sh",
                "hxxp://182[.]123[.]177[.]133:34912/bin[.]sh",
                "hxxp://196[.]189[.]3[.]1:35588/i",
                "hxxp://27[.]207[.]225[.]33:35214/i",
                "hxxp://42[.]227[.]239[.]164:52633/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3212,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3212,
                "newInLastHour": 3209,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bzcxhjo[.]vostrovape[.]com\"",
                " \"wapblkb[.]baocongnghe[.]net\"",
                " \"isdyzdy[.]baocongnghe[.]net\"",
                " \"hxxps://guiacuranatural[.]com[.]br/\"",
                " \"binzadata[.]icu\""
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
            "iocCount": 9817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9817,
                "newInLastHour": 25,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                "b733673f2c221400c4e14bb6cea0f528a5dff337",
                "3b8b88139678299948bf1ccc9c0fbb2b4cb5e861",
                "e4f7e7830ac3c9b8f1bbdaa32294eab9a8d105c8",
                "39c75b7060656d4df101e3bf55924e78c92ae716"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51102,
            "activeSources": 8,
            "criticalAlerts": 30981,
            "activeCampaigns": 210
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21199,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9782,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2926,
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20556,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]41[.]2[.]112:60732/bin[.]sh",
                    "hxxp://39[.]76[.]107[.]166:55801/bin[.]sh",
                    "hxxp://125[.]126[.]245[.]214:34176/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]76",
                    "1[.]12[.]229[.]231",
                    "1[.]141[.]160[.]162"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1604,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1429,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"209[.]200[.]246[.]82:443\"",
                    " \"209[.]200[.]246[.]82:80\"",
                    " \"209[.]200[.]246[.]82:8080\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
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
                    "8e733b34e95a7b98ada40292b8d35e9040016e65",
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "493f6dbb48806992e524df2a3a0fa0348cef243b"
                ]
            },
            {
                "name": "Vidar",
                "count": 560,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                    "b733673f2c221400c4e14bb6cea0f528a5dff337",
                    "3b8b88139678299948bf1ccc9c0fbb2b4cb5e861"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "OffLoader",
                "count": 412,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46441,
        "lastCalculated": "2026-05-31 19:37 IST"
    }
};
