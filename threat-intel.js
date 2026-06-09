// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-09T16:57:24.639747+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-09T16:57:24.306568+05:30",
    "lastUpdatedFormatted": "Jun 09, 2026 at 04:57 PM IST",
    "comparisonPeriod": "Jun 08 \u2013 Jun 09, 2026",
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
                "hxxps://ig[.]do/ROBLOX",
                "hxxps://communications[.]office-teams[.]net/home/332f4e1818dd4c7a94407bbdffd51124/d6d66a555073743b3bc8552bd846df275",
                "hxxps://communications[.]office-teams[.]net/i/d6d66a555073743b3bc8552bd846df275",
                "hxxps://www[.]jjhdgtv[.]vercel[.]app/",
                "hxxps://pemenang2021[.]blogspot[.]com/?m=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1252,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1252,
                "newInLastHour": 155,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5630e33cd7789a8b57e969665a4bef4afd9fc9953dd3c5dcd760889bc17ed784",
                " \"d53ea6091d6771f9f0213e72c8c75b15ac09fc81aaa021a77e9a96d912df112f",
                " \"ce7d31abba5c710b3d7e2274536725d2211a720aee03d4ca5f66723feeb65f00",
                " \"f2ad29c69261ff249699ba62d4ddf812e1b90cefc29757b19f67b03abcc8686a",
                " \"76e0fe3c9ca985c8de8505bbd6a8d0626147f71fe769a4e5f0715f8e509f9503"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1610,
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
                "1[.]0[.]203[.]197",
                "1[.]119[.]194[.]226",
                "1[.]140[.]109[.]53",
                "1[.]141[.]149[.]62",
                "1[.]159[.]23[.]85"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5045,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5045,
                "newInLastHour": 5045,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]51[.]198",
                "1[.]192[.]61[.]19",
                "1[.]2[.]252[.]192",
                "1[.]202[.]220[.]94"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18241,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18241,
                "newInLastHour": 18241,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]11[.]13[.]197:57013/bin[.]sh",
                "hxxp://115[.]58[.]157[.]8:54211/bin[.]sh",
                "hxxp://117[.]190[.]134[.]254:53615/bin[.]sh",
                "hxxp://219[.]154[.]172[.]53:47597/i",
                "hxxps://zlbcjre[.]wrfc8[.]com/39c740be-8d6a-424b-8dc0-f7e2101520ec"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4432,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4432,
                "newInLastHour": 4425,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"zlbcjre[.]wrfc8[.]com\"",
                " \"gfmuomz[.]pinbahiis[.]com\"",
                " \"jbwjdp[.]rial[.]bet\"",
                " \"clhfgcomacdn[.]beer\"",
                " \"hasmeverdcdn[.]beer\""
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
            "iocCount": 9872,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9872,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "496d191aedf6be136391a1828962864b479bfec7",
                "cc060f5f00fde826f5252c47765f1f0a74e8cb1b",
                "5556255c430a2dff1a61bf266d7c3eaeedd885ab",
                "7a87b6d493b26e7a16255788436690996b49f273",
                "a72f1227b88e5c8d436899f9f098a57504a1ef9e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50227,
            "activeSources": 8,
            "criticalAlerts": 29010,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19154,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 9856,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3288,
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
                "count": 17978,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]14[.]156:50010/bin[.]sh",
                    "hxxp://42[.]230[.]134[.]148:51148/bin[.]sh",
                    "hxxp://123[.]190[.]98[.]219:53027/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]203[.]197",
                    "1[.]119[.]194[.]226",
                    "1[.]140[.]109[.]53"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1621,
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
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1387,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"120[.]55[.]246[.]213:18443\"",
                    " \"149[.]88[.]66[.]234:20050\"",
                    " \"62[.]76[.]229[.]102:56782\""
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
                "count": 687,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 577,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "454a92d16f440ad8f180e21da8ee6552b151c25c",
                    "44d317f1bdfcf7670d288c912cecd0737bc4cc1b",
                    "7cf0a3e58ceb76c0839efdd4adf64dd64fa6f6f2"
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
                "name": " \"js.clearfake\"",
                "count": 551,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"wsiflnb[.]persian[.]sex\"",
                    " \"mnnwpo[.]jamjahani2026[.]football\"",
                    " \"jjcuameq[.]parspoker90[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43174,
        "lastCalculated": "2026-06-09 16:57 IST"
    }
};
