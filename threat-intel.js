// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-11T20:22:32.006234+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-11T20:22:31.710113+05:30",
    "lastUpdatedFormatted": "Oct 11, 2026 at 08:22 PM IST",
    "comparisonPeriod": "Oct 10 \u2013 Oct 11, 2026",
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
                "hxxps://clickblitz22[.]shop/",
                "hxxps://www[.]roblox[.]com[.]mu/users/1558532921/profile",
                "hxxps://mfacebook[.]com[.]vn/kfpw6ogvhx9?xNK&Qup",
                "hxxps://rbcode[.]net/v/271d9243d604619fd8547fbfc3a75f03",
                "hxxps://ledger-live-desktop-app-asc[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 858,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 858,
                "newInLastHour": 145,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2f7be7bf192bb93d92147d306b1540f549d32d8df9b8d98394728f5f20416d2a",
                " \"9c00cd8bd6773a0a66c615487a4d54654337b1098573f6eefc188cbf70d6a5f1",
                " \"a8093429f55248c0e334e056d59d1a2d1562cb09871f69c529fa78e2b88b500d",
                " \"acf2a1b963ba1fad29967bfe4046c2f3d77e2c0ea2ddf060cf1d31ffb93e2843",
                " \"3d43a2c782dcc1c36e5de783518c3d840f160b255f93d120465ed3ed5a17164a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1658,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1658,
                "newInLastHour": 1,
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
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106",
                "1[.]193[.]58[.]33",
                "1[.]193[.]63[.]3",
                "1[.]20[.]175[.]54"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4667,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4667,
                "newInLastHour": 4667,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]162[.]245[.]71",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33012,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33012,
                "newInLastHour": 33012,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]248[.]103[.]215:38282/i",
                "hxxps://gitlab[.]com/chaingangs/fivem-mod-menu/-/raw/HEAD/Loader[.]exe",
                "hxxps://github[.]com/sizzenls/Umbrella-HWID-Tool/raw/HEAD/Umbrella/Umbrella[.]exe",
                "hxxps://github[.]com/iceclerryk/redENGINE-FiveM/raw/HEAD/Loader[.]exe",
                "hxxps://gitlab[.]com/LoraHex/lunaexecutor/-/raw/HEAD/LunaExecutor[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6993,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6993,
                "newInLastHour": 6230,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"nexahub[.]lat\"",
                " \"5b9c053b9a963219cef8409a81743ad57fd8ec14b7ecdb9b544bb19e33d1f813\"",
                " \"b27d11834ced4031cdd69a63b8d83c17aeb450f2d7a7d56c222e4be3771a9bda\"",
                " \"217[.]60[.]242[.]27:8443\"",
                " \"hxxps://hs[.]4-win[.]org\""
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
            "iocCount": 10609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10609,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7fc6c2a32eed69593d705df8d2f29de51da78e0b",
                "17658c947940cef2209381bda159a44a8f55883c",
                "3904919770fb59a5c74df86090853e3f19a09575",
                "3644a1d19d369a66e0970ee6e997736f1338727f",
                "9f71ec8a14e7a86f050b0484934ce8acc519fa91"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68316,
            "activeSources": 8,
            "criticalAlerts": 44500,
            "activeCampaigns": 281
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33579,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10921,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4179,
                "trend": "stable",
                "percentage": -2
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 32741,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://151[.]234[.]36[.]221:38747/i",
                    "hxxp://125[.]45[.]67[.]66:58929/i",
                    "hxxp://124[.]6[.]169[.]54:60212/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]58[.]33",
                    "1[.]20[.]175[.]54"
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
                "count": 1459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1326,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"49[.]235[.]158[.]141:22\"",
                    " \"156[.]67[.]105[.]187:5698\"",
                    " \"156[.]67[.]105[.]187:11117\""
                ]
            },
            {
                "name": "Vidar",
                "count": 828,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3644a1d19d369a66e0970ee6e997736f1338727f",
                    "dad953249b7dc6a1491183ca1f790b78038872c8",
                    "3013447f5f36ed0c97f878cd6106853088a49ef8"
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
                "count": 716,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9f71ec8a14e7a86f050b0484934ce8acc519fa91",
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 622,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]41[.]151:56003\"",
                    " \"82[.]26[.]66[.]167:443\"",
                    " \"45[.]192[.]211[.]91:56003\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 59362,
        "lastCalculated": "2026-10-11 20:22 IST"
    }
};
