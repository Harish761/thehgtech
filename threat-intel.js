// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-14T11:50:59.936124+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-14T11:50:59.562287+05:30",
    "lastUpdatedFormatted": "Jul 14, 2026 at 11:50 AM IST",
    "comparisonPeriod": "Jul 13 \u2013 Jul 14, 2026",
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
                "hxxp://chatgpt0005[.]eu[.]org/blog/checkpoint-2025-discord-year-in-review",
                "hxxp://dstrata-nyxus-5d04be-wave-aurora[.]pages[.]dev/",
                "hxxp://word-im-whatapp[.]hl[.]cn/",
                "hxxps://www[.]roblox[.]com[.]bn/games/112603410439245/Drones-Battlegrounds?privateServerLinkCode=28405194768188635998407230900998&game_id=112603410439245&game_name=Drones-Battlegrounds",
                "hxxp://www[.]roblox[.]com[.]ml/users/274753046570/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 563,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 563,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"27e86594b78358d7c9f7440d4d7f7f5e63e7dd43cd6bd5e55f2f6072754ca02c",
                " \"1de0ece47647946782f790d4aa8e74295df8db96bc0e2442337edf320e2c76a8",
                " \"c3fa96a0a213bcd2abdd386feedd4169ed6d172b7cd497880b1d0cc4c58a78db",
                " \"3d49444c7f58ccbd6ba93587fce2420f1e1775cfa8592b259d4a921b38e42533",
                " \"6e09d15e9ccadd14880f71f19273b3ccd440ed9cc2cc9d40bf4184e2dc647f64"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1674,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1674,
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
                "1[.]159[.]52[.]66",
                "1[.]175[.]87[.]205",
                "1[.]188[.]101[.]15",
                "1[.]188[.]16[.]137",
                "1[.]192[.]177[.]87"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5284,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5284,
                "newInLastHour": 5284,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]162[.]247[.]210",
                "1[.]180[.]246[.]242",
                "1[.]192[.]63[.]54"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21037,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21037,
                "newInLastHour": 21037,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://yliw[.]site-asli-bedon-filter-1xbet[.]com/5d6be428-cb4e-4ac2-91bb-c6afd66179ef",
                "hxxps://tdzfnvda[.]plinko-1xbet[.]games/d8adcf01-928e-45e0-9da3-6b60aff918ba",
                "hxxp://115[.]56[.]65[.]191:43676/bin[.]sh",
                "hxxp://125[.]40[.]153[.]82:45244/i",
                "hxxp://125[.]44[.]56[.]240:34717/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4502,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4502,
                "newInLastHour": 4075,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ghyrtamr[.]plinko-1xbet[.]games\"",
                " \"bfpi[.]site-shartbandi-bedun-filter[.]com\"",
                " \"tdzfnvda[.]plinko-1xbet[.]games\"",
                " \"yliw[.]site-asli-bedon-filter-1xbet[.]com\"",
                " \"94[.]154[.]32[.]144:1912\""
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
            "iocCount": 10167,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10167,
                "newInLastHour": 30,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3403986d256e4ce608c0b4e9648d867a373ff6cc",
                "659379b480f2d3448f8946b0961115e00bfdbce0",
                "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                "4ab5197c559d38f2d4886d00f7140b09318bc5ca",
                "11079f607edb45c25b11a2106e6ba510a055b98f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53164,
            "activeSources": 8,
            "criticalAlerts": 31709,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21578,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10131,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3622,
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
                "count": 20991,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://118[.]232[.]137[.]101:48141/i",
                    "hxxp://222[.]141[.]131[.]100:40368/i",
                    "hxxp://119[.]187[.]249[.]1:52457/bin[.]sh"
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
                    "1[.]159[.]52[.]66",
                    "1[.]175[.]87[.]205"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1673,
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
                "count": 1423,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "34ba6ed6fdcf11e71f689efe8e8bb5d723339125",
                    "8f000dbd7cc73e8857d42a3c7c15676305af6889",
                    "85f5e4e0d8c608a11c4e493eb349a7a4c8c4bc9d"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1416,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]113[.]98[.]42:80\"",
                    " \"47[.]113[.]98[.]42:443\"",
                    " \"114[.]132[.]89[.]132:45443\""
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
                "count": 692,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 636,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3403986d256e4ce608c0b4e9648d867a373ff6cc",
                    "4ab5197c559d38f2d4886d00f7140b09318bc5ca",
                    "cd1f1ffdd1055c9540758327ff1d7698068c9a93"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "OffLoader",
                "count": 440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "659379b480f2d3448f8946b0961115e00bfdbce0",
                    "4af51082ffa699d104ec1f66263afc8efa99cf76",
                    "a838f21e4fbcf93b9dcb1adf61ce9a7e07729594"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45760,
        "lastCalculated": "2026-07-14 11:50 IST"
    }
};
