// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-24T10:06:33.125761+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-24T10:06:32.802071+05:30",
    "lastUpdatedFormatted": "Sep 24, 2026 at 10:06 AM IST",
    "comparisonPeriod": "Sep 23 \u2013 Sep 24, 2026",
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
                "hxxps://www[.]roblox[.]com[.]do/users/386681976516/profile",
                "hxxps://www[.]roblox[.]com[.]mu/users/2382934507/profile?referer=urlvanish[.]com/88cd1b97",
                "hxxps://urlvanish[.]com/88cd1b97",
                "hxxp://dawaid-sessionmints[.]netlify[.]app/",
                "hxxps://public-trexor[.]framer[.]website/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2035,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2035,
                "newInLastHour": 280,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c7b9ca8987d5892f9eb64b584811a72451c14ebac1e1c1ee651bd9255178f9b2",
                " \"77fe748f078f9c04997063712dd9d8498f52bb910cea09c6840a42f25a12a607",
                " \"ee247e26917c6055c238f6046ccba307512ca790183006fc4e342492c93ab3da",
                " \"d3226cc7690af1f68aa49f653853445b401a9c3e84061fed0e74e44d291bfade",
                " \"9b0050d44e7ea5b1d612ce396c70e7c789342f00b07980e5f8dfed4506516b2f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1711,
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
                "1[.]189[.]89[.]243",
                "1[.]195[.]104[.]116",
                "1[.]20[.]186[.]172",
                "1[.]24[.]16[.]108",
                "1[.]24[.]16[.]119"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11700,
                "newInLastHour": 11700,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14063,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14063,
                "newInLastHour": 14063,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]37[.]227[.]211:43711/bin[.]sh",
                "hxxp://175[.]173[.]86[.]162:56232/bin[.]sh",
                "hxxp://175[.]147[.]92[.]200:60016/i",
                "hxxp://59[.]96[.]137[.]163:53028/i",
                "hxxp://171[.]213[.]155[.]238:49251/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8336,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8336,
                "newInLastHour": 7930,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pishbini90ai[.]com\"",
                " \"saudementalbrasil[.]site\"",
                " \"hxxps://95[.]182[.]116[.]101\"",
                " \"grupoprimesolution[.]com[.]br\"",
                " \"hxxps://testingcf[.]jsdelivr[.]net/gh/3fF2/723e2dbf470c/a0aba2ff36a1\""
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
            "iocCount": 10793,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10793,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "de58e571469c72f26cfb59884e06e2aa5db7d6ff",
                "180512bde178c27cef6b8597f301558d88f853e2",
                "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
                "95688000a5176c85f77eb00ba69faef202ae6c24",
                "2c718d1d6454ad663cf963baecf3a1c81495716a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52369,
            "activeSources": 8,
            "criticalAlerts": 27022,
            "activeCampaigns": 277
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16251,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10771,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4352,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]32[.]156"
                ]
            },
            {
                "name": "malware_download",
                "count": 14338,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://219[.]157[.]188[.]171:39761/bin[.]sh",
                    "hxxp://46[.]158[.]71[.]165:50492/i",
                    "hxxp://196[.]190[.]10[.]252:40024/bin[.]sh"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2142,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"misty-whirl-beacon-doa[.]life\"",
                    " \"ashen-trace-zephyr-draeix[.]life\"",
                    " \"krestmoais-reed[.]life\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1711,
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
                "count": 1452,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1381,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"81[.]70[.]21[.]163:18080\"",
                    " \"3[.]70[.]2[.]18:8080\"",
                    " \"23[.]94[.]66[.]124:80\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 861,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"20418f02f538ab4c22904990193a772524cc318cec03397f978dd96418174d49",
                    " \"4d10e7bc39ffbaeb92082f95350c0122661b752ce1f49f80325c4ba3b1e4b596",
                    " \"5941fa466e3de48730732fd05885547637fe4e90d6d48736a79f351395ba62c0"
                ]
            },
            {
                "name": "Vidar",
                "count": 797,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2d55d1a98da553c64dca5168488b90de1ac2b6dc",
                    "8ebcb44e692f32d2a4894ada4a06079a48bdf1a6",
                    "e368d5f28111dd2b577e949c59b254f7de1dae2b"
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
                "count": 708,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
                    "b85ab05112c6848ccf2dd6889903e1268cdc6a75",
                    "9b798f7d87edcf42680454660f593afd696ef8ca"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 49278,
        "lastCalculated": "2026-09-24 10:06 IST"
    }
};
