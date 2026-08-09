// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-09T07:53:22.871076+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-09T07:53:22.513665+05:30",
    "lastUpdatedFormatted": "Aug 09, 2026 at 07:53 AM IST",
    "comparisonPeriod": "Aug 08 \u2013 Aug 09, 2026",
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
                "hxxp://ledgrr-live-download[.]pages[.]dev/",
                "hxxps://www[.]roblox[.]com[.]mu/games/95878078212429/UPD3-Convince-the-CRAZY-Idol-to-let-you-free?privateServerLinkCode=42904738446208678593099227646059",
                "hxxp://www[.]365bet6[.]com/",
                "hxxps://amazon-clone-f73c[.]panda[.]new/",
                "hxxp://www[.]17568[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 771,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 771,
                "newInLastHour": 40,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9b9ba2f52c6346eec1f443e7a096175d57dcae5ac133e6050b1ca704c2da6ecf",
                " \"8579180f2f57cb3d7e837e0392f421427d93d9d18cb6378a2ae7c5e9375403af",
                " \"1384a023aa9e76d0f579ca471ba7769b824de74ca0ea728f4efc65cdb13e9a79",
                " \"525b378c9abf58b083365cd178a7a611c19ae0107346a714df6ba450eed172ab",
                " \"bfe753d1f3edb65136b2016f54206d0ffb4b41f546317c222e29d5b97f8e3cd9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1603,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1603,
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
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]159[.]48[.]69",
                "1[.]178[.]120[.]81"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4894,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4894,
                "newInLastHour": 4894,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]10[.]160[.]130",
                "1[.]197[.]102[.]62",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15471,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15471,
                "newInLastHour": 15471,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]136[.]49[.]183:57439/bin[.]sh",
                "hxxp://110[.]39[.]231[.]36:48526/bin[.]sh",
                "hxxp://94[.]183[.]233[.]225/data_aarch64",
                "hxxp://112[.]248[.]83[.]6:56719/i",
                "hxxp://94[.]183[.]233[.]225/bbc"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5026,
                "newInLastHour": 4604,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hfwex7a5[.]josephmichaelnh[.]com\"",
                " \"sync[.]aspenframe[.]lol\"",
                " \"dkzsusg[.]graphicstabletreviews[.]com\"",
                " \"m60mkvir[.]finkfamilyautomotive[.]com\"",
                " \"querem[.]supremepaintingandrestoration[.]com\""
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
            "iocCount": 10072,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10072,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0034d3f66acca402e4ae3d683e435f10d513006a",
                "1ab7aaf074b1e925322cd328b4d1343f46f4f91b",
                "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae",
                "508ab3696a27249abc7ea437ee1b8bcb8a999d65",
                "02df529de5d2da5b01c0b557b02b289b060f344b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49327,
            "activeSources": 8,
            "criticalAlerts": 27129,
            "activeCampaigns": 253
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16797,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10332,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3603,
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
                "count": 15842,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://github[.]com/ThreadColonelSouk/release/releases/download/release/release[.]zip",
                    "hxxps://github[.]com/Shapecluneedle/jubilant-engine/releases/download/exec/payd[.]exe",
                    "hxxps://github[.]com/Shapecluneedle/jubilant-engine/releases/download/exec/payl[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]103[.]245"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1683,
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
                "count": 1435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1309,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]207[.]211[.]207:22\"",
                    " \"45[.]207[.]211[.]207:8080\"",
                    " \"45[.]207[.]211[.]207:443\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 761,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bgrrcs[.]eng--us-echoxen[.]com\"",
                    " \"eng--us-echoxen[.]com\"",
                    " \"engus-echoxen[.]com\""
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
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79"
                ]
            },
            {
                "name": "Vidar",
                "count": 669,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5b8bebd73d8e8aec88ccc17b1e27c34921667ae",
                    "cfe6dcd7527099d525ffa8cec0bd1ab5020d47a7",
                    "a9ebd28ce7e4ac020e6d263e228b8547e1914bfa"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 40316,
        "lastCalculated": "2026-08-09 07:53 IST"
    }
};
