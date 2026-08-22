// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-23T02:04:24.860215+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-23T02:04:24.561257+05:30",
    "lastUpdatedFormatted": "Aug 23, 2026 at 02:04 AM IST",
    "comparisonPeriod": "Aug 22 \u2013 Aug 23, 2026",
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
                "hxxps://api[.]msuto[.]com/",
                "hxxp://send-usdt-9999[.]netlify[.]app/",
                "hxxp://send-usdt-1-chi[.]vercel[.]app/",
                "hxxps://dau-ug-koreatyujdjhdjuuej6664746637-chi[.]vercel[.]app/?naps",
                "hxxp://www[.]undianshopee-2021[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 795,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"782a55c97a9a460550fa4f80b806cabca251990fd5b9aafd82bc6b4739ff3374",
                " \"882386fb50324ab5f35f2327c1cfdf4f9cc28189eab66727820d17f544ddb0e2",
                " \"0e3f4c846181031a64b8d820e8b163d2b5acc982ab6290f062baa2a955ddeaaa",
                " \"dfcfa81660a11bccc54d1c53adf025795e7473d51df00f38d42a635d04a29cfc",
                " \"a88aa9d6b0dc066a618ee48e4b488a13a007e4e95512b8caa138c85b7d26b710"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1698,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1698,
                "newInLastHour": 78,
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
                "1[.]119[.]158[.]77",
                "1[.]15[.]14[.]29",
                "1[.]180[.]190[.]250",
                "1[.]180[.]247[.]82",
                "1[.]188[.]101[.]117"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5184,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5184,
                "newInLastHour": 5184,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]247[.]163",
                "1[.]14[.]64[.]225",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16660,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16660,
                "newInLastHour": 16660,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]137[.]198[.]130:51494/bin[.]sh",
                "hxxp://222[.]140[.]182[.]112:48863/i",
                "hxxp://182[.]117[.]0[.]179:35408/bin[.]sh",
                "hxxp://182[.]120[.]1[.]2:48934/i",
                "hxxp://61[.]52[.]62[.]249:60152/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4953,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4953,
                "newInLastHour": 4609,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"wfss[.]ch\"",
                " \"80[.]190[.]77[.]86:9909\"",
                " \"80[.]190[.]77[.]86:222\"",
                " \"6hawco2w[.]eng-neurosharp[.]us\"",
                " \"eng-neurosharp[.]us\""
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
            "iocCount": 10528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10528,
                "newInLastHour": 73,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9c0a9291be46e42b67835dff9e6c767fd6660287",
                "19cf66baa4727b080e283d10284993170c9b462b",
                "150e9fffc913a1c87bf94e7f2ad0354d4b6afea1",
                "01162aa2c2be7f9d16f646b94a1245726c68b110",
                "d8bdc29b8e9cdd5a849185ca6042d9c6f90d12e7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49947,
            "activeSources": 8,
            "criticalAlerts": 27927,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17494,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10433,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4202,
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
                "count": 16639,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]140[.]183[.]70:34777/i",
                    "hxxp://222[.]243[.]95[.]50:59704/i",
                    "hxxp://123[.]11[.]14[.]253:33653/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]15[.]14[.]29",
                    "1[.]177[.]162[.]4"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1620,
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
                "count": 1438,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1316,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"150[.]187[.]25[.]242:65534\"",
                    " \"43[.]140[.]219[.]182:8443\"",
                    " \"85[.]175[.]101[.]203:500\""
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
                "name": "Vidar",
                "count": 705,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "19cf66baa4727b080e283d10284993170c9b462b",
                    "0bb977bf9e0950a1a818660dde009ac9934bd1e2",
                    "0f47d296ca2a764238bfd644c7b716cffafa1352"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
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
            },
            {
                "name": "ConnectWise",
                "count": 469,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "adfc8dd0c5e99a8e33b1df7d5c10fc9653342491",
                    "0c587f31dc58c33ef2e3632bb161f4d52231b7c1",
                    "b94eb3bcd4a57442c30e14dd2067b0c6c46d9619"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 41919,
        "lastCalculated": "2026-08-23 02:04 IST"
    }
};
