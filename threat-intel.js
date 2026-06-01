// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-01T10:38:47.893386+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-01T10:38:47.600951+05:30",
    "lastUpdatedFormatted": "Jun 01, 2026 at 10:38 AM IST",
    "comparisonPeriod": "May 31 \u2013 Jun 01, 2026",
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
                "hxxp://w33onm9q[.]top/",
                "hxxp://web-git-05-08-featwebenhancedepthchartwithflipto-60762c-uniswap[.]vercel[.]app/",
                "hxxps://u[.]dongbeilaobo[.]com/start/",
                "hxxp://www[.]netflixclone-mu-nine[.]vercel[.]app/",
                "hxxp://www[.]hayatseninleguzel[.]store/auth"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 576,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 576,
                "newInLastHour": 86,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1bd61f2b5fec4f77c5a12ac5f3ba81b5396a3fabd886c3599e06b00569ad8078",
                " \"3cf13f6915e916344708b364af4458befb09731bd920a637a3adfec34b6ea219",
                " \"5c501efadac0000afee68f6e6b8c362f20d66734f036ab26ea23ade50fd7cf3a",
                " \"07bcfe93ba826112d94e11ed81e99e79019187b4cef043806f98fbcb4db4aa2a",
                " \"34b70412bd031251974f51be37e27e9cd1b1b6205f25ce6bf99707d04778af05"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1605,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1605,
                "newInLastHour": 18,
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
                "1[.]13[.]163[.]60",
                "1[.]141[.]152[.]90",
                "1[.]15[.]170[.]24",
                "1[.]162[.]111[.]181"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7260,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7260,
                "newInLastHour": 7260,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]178[.]210[.]2",
                "1[.]20[.]163[.]80",
                "1[.]202[.]220[.]94"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20037,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20037,
                "newInLastHour": 20037,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]116[.]115[.]158:33228/bin[.]sh",
                "hxxp://171[.]213[.]224[.]180:38527/i",
                "hxxp://110[.]37[.]90[.]59:47333/i",
                "hxxp://27[.]44[.]147[.]210:53624/i",
                "hxxp://116[.]68[.]160[.]180:36438/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3127,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3127,
                "newInLastHour": 3125,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bgogpid[.]xfgautoparts[.]com\"",
                " \"ciopkms[.]yutongdrying[.]com\"",
                " \"xelecqe[.]yutongdrying[.]com\"",
                " \"apgagls[.]bonuliautoparts[.]com\"",
                " \"skgzwxo[.]bonuliautoparts[.]com\""
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
            "iocCount": 9797,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9797,
                "newInLastHour": 35,
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
            "totalIndicators": 51146,
            "activeSources": 8,
            "criticalAlerts": 31132,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21360,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9772,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2836,
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
                "count": 20738,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]14[.]178[.]83:55778/bin[.]sh",
                    "hxxp://123[.]9[.]203[.]16:51462/bin[.]sh",
                    "hxxp://61[.]52[.]159[.]112:55542/i"
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
                    "1[.]141[.]152[.]90",
                    "1[.]141[.]160[.]162"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1589,
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
                "count": 1415,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1357,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"107[.]151[.]246[.]172:7890\"",
                    " \"209[.]200[.]246[.]82:443\"",
                    " \"209[.]200[.]246[.]82:80\""
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
                    "8e733b34e95a7b98ada40292b8d35e9040016e65",
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "493f6dbb48806992e524df2a3a0fa0348cef243b"
                ]
            },
            {
                "name": "Vidar",
                "count": 554,
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
                "count": 418,
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
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 45866,
        "lastCalculated": "2026-06-01 10:38 IST"
    }
};
