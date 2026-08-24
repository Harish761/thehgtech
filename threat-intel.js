// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-24T14:28:53.536750+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-24T14:28:53.207393+05:30",
    "lastUpdatedFormatted": "Aug 24, 2026 at 02:28 PM IST",
    "comparisonPeriod": "Aug 23 \u2013 Aug 24, 2026",
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
                "hxxps://sp22ct-kemur-biz-zori-lavu[.]pages[.]dev/",
                "hxxps://miniature-octo-waffle-dpgu17krrwmh[.]edgeone[.]dev/",
                "hxxp://www[.]gttyour-robloxrbx[.]blogspot[.]com/",
                "hxxps://verication-casefb562291[.]vercel[.]app/",
                "hxxps://creditopichincha-977--creditopichin8[.]replit[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 791,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 791,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a5869df51a258135f00fcad0dc5656315c19f1b02372f6477a1897acbb4c1f62",
                " \"0510cea13d36b08922804e4cdecb799b72959a717cfcb9bdaf9b3a7b67604b2c",
                " \"2acc3c29b9551744095a0c597af172ad168589e95fd3521cd795f31651cc7a25",
                " \"b007e3f21dc382e21ffdc64e665444bc9494d1d67b82bc7ddf415ba2288af648",
                " \"b4ce5927fe12c1e2a017715f227e58c76258e0d459f22569bf2160fc953e221f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1700,
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
                "1[.]15[.]14[.]29",
                "1[.]180[.]190[.]250",
                "1[.]180[.]247[.]82",
                "1[.]183[.]161[.]214",
                "1[.]183[.]227[.]151"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5143,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5143,
                "newInLastHour": 5143,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]247[.]163",
                "1[.]14[.]171[.]90",
                "1[.]14[.]64[.]225",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16023,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16023,
                "newInLastHour": 16023,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]228[.]91[.]22:38538/i",
                "hxxp://105[.]224[.]244[.]218:59145/bin[.]sh",
                "hxxp://183[.]151[.]113[.]187:48908/i",
                "hxxp://222[.]141[.]40[.]165:47875/i",
                "hxxp://42[.]238[.]244[.]17:47417/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6581,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6581,
                "newInLastHour": 6150,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]141[.]21[.]47:7004\"",
                " \"milaka[.]workers[.]dev\"",
                " \"hxxps://kingo[.]lol/mods/api/log-download\"",
                " \"hxxps://kingo[.]lol/ws\"",
                " \"hxxps://kingo[.]lol/?p=\""
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
            "iocCount": 10522,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10522,
                "newInLastHour": 1,
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
            "totalIndicators": 50686,
            "activeSources": 8,
            "criticalAlerts": 27309,
            "activeCampaigns": 236
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16804,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10505,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4022,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16012,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]63[.]245[.]15:43804/bin[.]sh",
                    "hxxp://46[.]236[.]65[.]160:41635/bin[.]sh",
                    "hxxp://123[.]5[.]126[.]253:47935/bin[.]sh"
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
                    "1[.]180[.]190[.]250"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1701,
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
                "count": 1440,
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
                "count": 1300,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"209[.]200[.]246[.]194:32126\"",
                    " \"acsdomaindsadas[.]click\"",
                    " \"118[.]25[.]37[.]47:8082\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 912,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"varese[.]gue-be[.]be\"",
                    " \"visionplanet[.]com[.]ar\"",
                    " \"wewnetrznywymiar[.]com\""
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
                "count": 729,
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
                "count": 698,
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 42661,
        "lastCalculated": "2026-08-24 14:28 IST"
    }
};
