// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-25T02:24:09.237699+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-25T02:24:08.905765+05:30",
    "lastUpdatedFormatted": "Mar 25, 2026 at 02:24 AM IST",
    "comparisonPeriod": "Mar 24 \u2013 Mar 25, 2026",
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
                "hxxp://kittyxkum[.]online/",
                "hxxp://docs[.]rpk-global[.]co/?uuid=421cd36b-2b95-4589-b85c-c6c3fe4724f7",
                "hxxp://verifiedmeme[.]pages[.]dev/wallet/assets/unpkg[.]com/f[.][.]@1[.]5[.]3/dist/wallet/index[.]html",
                "hxxps://roblox[.]com[.]ge/communities/6554078247/",
                "hxxp://gov[.]com-yvd[.]top/uk/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 780,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 780,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"02cbc77d52e12aea6a6c9db36c07d2eccd1af9d39b88b3802b40cb10d088b30c",
                " \"3a79036ce04c504a193d85ddcc34a4ca5df583a64bfff81fc0b53b03d16de6e9",
                " \"53cd02e362b1e50a2dc7becbbba17ab0c196c9a7dd378d6af516570acc046a8e",
                " \"6fbb15997087eeb37320503a99f42d4b41a0fcab92f2b34a833134821642d161",
                " \"baeeb416eb46e13927c462dd392bc03f7734a70bcb7a24c873e1b3c42f04304f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1536,
                "newInLastHour": 2,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]15[.]189",
                "1[.]15[.]51[.]236",
                "1[.]180[.]252[.]30",
                "1[.]182[.]191[.]117"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3537,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3537,
                "newInLastHour": 3537,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]163[.]193[.]34",
                "1[.]189[.]21[.]20",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21683,
                "newInLastHour": 21683,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://j3b873[.]duskforge[.]in[.]net/verification[.]google",
                "hxxps://lmwfj4[.]brimvale[.]in[.]net/verification[.]google",
                "hxxp://59[.]97[.]252[.]2:46768/bin[.]sh",
                "hxxps://ovdtt[.]larkspin[.]in[.]net/verification[.]google",
                "hxxp://123[.]9[.]25[.]183:34406/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1143,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1143,
                "newInLastHour": 1135,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"j3b873[.]duskforge[.]in[.]net\"",
                " \"trave-cast[.]cl0verrun[.]in[.]net\"",
                " \"lmwfj4[.]brimvale[.]in[.]net\"",
                " \"ovdtt[.]larkspin[.]in[.]net\"",
                " \"tensorout[.]cobalt-ridge[.]in[.]net\""
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
            "iocCount": 9382,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9382,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f0558a6d99572f494ab316c7dc3e1f08076908f8",
                "60fb7400edece2b09a17663e06efdb9badde8e2e",
                "af122b6c757acb41574bdcb6e0b1bcd01bb2e483",
                "03dda1240ed1938576cbd9d3f6c51f778db895d1",
                "2fe45c6b4dfa42ec5f86a81a81932869b0c16da6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49759,
            "activeSources": 8,
            "criticalAlerts": 31801,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22455,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9346,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 605,
                "trend": "stable",
                "percentage": -10
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 91
            },
            {
                "name": "Tech",
                "percentage": 8
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21654,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]217[.]81[.]219:35431/bin[.]sh",
                    "hxxps://fwnc6xm[.]stone-blink[.]in[.]net/verification[.]google",
                    "hxxp://120[.]28[.]215[.]248:51659/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]15[.]189",
                    "1[.]15[.]51[.]236"
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
                "count": 1394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06",
                    "51f20540cd77caa36702bb359c8c06949aecea02"
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
                "count": 647,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "38539fcee6bf1d363e1c8a3866913d7d8ee3d102",
                    "c61b06bc00a58330fcb94e0e18094f5128adf283",
                    "8f2ea97e92648473ca2a6d2f1607e1e36ac55346"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 547,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f065e37b5c0112620f7c97d3cd761e626e0faf4",
                    "ba19ffedc0a28ed2055127327e4cd6873dcf5a4f",
                    "ca0c1280a2c26415f8d77ca00a39c6986841da0c"
                ]
            },
            {
                "name": "Vidar",
                "count": 449,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "60fb7400edece2b09a17663e06efdb9badde8e2e",
                    "afa1d275776f12ada15518a6ec15bf89f8678a18",
                    "5811fdb0d159f6f5effd6472a57c401aef033c44"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 414,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fwnc6xm[.]stone-blink[.]in[.]net\"",
                    " \"mercrest3on[.]stone-blink[.]in[.]net\"",
                    " \"podcastridg[.]stone-blink[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 362,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0b0dc82e3c43d6527d2e2d4e19195817d9731387",
                    "ad794607ab5dbb098a4c5bc5d87e1b3bcd659d74",
                    "137adb757afcb4e5980a5e6aa63ac498559309d2"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41701,
        "lastCalculated": "2026-03-25 02:24 IST"
    }
};
