// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-05T04:31:02.993962+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-05T04:31:02.799217+05:30",
    "lastUpdatedFormatted": "Oct 05, 2026 at 04:31 AM IST",
    "comparisonPeriod": "Oct 04 \u2013 Oct 05, 2026",
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
                "hxxps://www[.]roblox[.]ly/users/2892759210/profile",
                "hxxp://infomx-account-com[.]help/a[.]php",
                "hxxp://location-gpsmx-satelite[.]help/a[.]php",
                "hxxp://soporte-app-gps[.]us/a[.]php",
                "hxxp://www[.]chat-group-as-ruby[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 986,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 986,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d9d6f4d04fb0f2e2d16bf729035b2eb3dc7d7a160eddf9b43b6d5c794e77e4d1",
                " \"8b1b1714d9544d86284accdd3240df5ef641cf5504f4c8baebec5387e966524f",
                " \"25a546a305fbfe3b05f90139fe3f007818e5668192c6b74a9ea861b496de6566",
                " \"f31ece43389d70c6351fa607e08e31a1e11f5d9d77968f4b515c833a1628973a",
                " \"ba5088e6fff5b63a2316fc273029bb651436be91618ba53425e24e23c798ab2a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1682,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1682,
                "newInLastHour": 48,
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
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]189[.]248[.]116",
                "1[.]193[.]56[.]152"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16627,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16627,
                "newInLastHour": 16627,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]215[.]124[.]85:40583/bin[.]sh",
                "hxxp://210[.]208[.]111[.]36:45746/i",
                "hxxp://115[.]57[.]230[.]101:45103/i",
                "hxxp://175[.]165[.]82[.]127:40349/i",
                "hxxp://195[.]64[.]243[.]84:46567/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11018,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11018,
                "newInLastHour": 7760,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"f6fbb28a2648634d262e7a8786ad78302e0c9d0c93ab7f541f1c5c8856591fd4\"",
                " \"e7f014c57e9566c2c513b9e774e912b0e11c28e451b06702fadc692c57823ba8\"",
                " \"66024c3e81837a3a9513ebc6e8e93176b82529db47a43de88fd4cf2d859f712f\"",
                " \"06fffeea93435328949a102e15496f92e4dddb66cdb8a351d7efb31e0a0b5049\"",
                " \"5a8e0f96cdc4ae20b9b76f3b0b9fbc6acd154f58cc045260089b78dc7ebf4eaa\""
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
            "iocCount": 10880,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10880,
                "newInLastHour": 8616,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2d22783f272d8fb12ff94ac13466fcd9a9a2ccc2",
                "fec72b31ad1f9e2e080c83f3964b34fe81e4a8e4",
                "bfc3decb728fc2becb887cc23c6cf46a2fdcbb8d",
                "1c04120f29c25a1e06b4f48651fc9eaaecd45eaa",
                "07fa3f9a48cdbe0d045c16a741f09237aacf2c3d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47851,
            "activeSources": 8,
            "criticalAlerts": 19874,
            "activeCampaigns": 169
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17597,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4191,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 2277,
                "trend": "down",
                "percentage": -79
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 16598,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://193[.]178[.]158[.]57/bin/f83ecc00a27c5716_hwbp_syst_B2nASg1e[.]exe",
                    "hxxp://182[.]112[.]31[.]192:54978/i",
                    "hxxp://175[.]147[.]89[.]184:45139/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]15[.]14[.]29",
                    "1[.]203[.]186[.]149"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 2617,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"call-united[.]com\"",
                    " \"cvpro4u[.]com\"",
                    " \"depannage-porte-sectionnelle[.]com\""
                ]
            },
            {
                "name": " \"elf.mirai\"",
                "count": 1937,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"95b4e74af25fbe652b36c394e69c5c6c29d9f803f8a81b5ca37021a569910d96\"",
                    " \"50eba3c916db0f1a0892ed2651cbaab89965b628a618c095de4473fd5d15e536\"",
                    " \"3acc9265a1e24ec2367f86417a3284bdfc3a9a668cd7986e31d905bacb9f8550\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1643,
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
                "name": " \"win.asyncrat\"",
                "count": 1411,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"08efdc76f3809e93f6d0fa8bcea60aa4849a3cb0d04f3b5c8293559cca82af74\"",
                    " \"46[.]246[.]6[.]4:2703\"",
                    " \"45[.]32[.]135[.]118:7777\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1315,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"144[.]172[.]68[.]200:8443\"",
                    " \"115[.]159[.]101[.]177:50050\"",
                    " \"106[.]55[.]253[.]229:8080\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 617,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"207[.]56[.]217[.]24:56001\"",
                    " \"185[.]174[.]102[.]29:443\"",
                    " \"185[.]174[.]102[.]29:56003\""
                ]
            },
            {
                "name": "Vidar",
                "count": 607,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "80a11d8978c116516b3e6e0dabdcd381bc3511a1",
                    "30cc75ff5ee466fba938458513d89d8270a5b882",
                    "60fd7f114b0a4015ad7f634223491259bc50ab7d"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 437,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a62ae903603179c7f3cca4548bd2b46fdb4e13b3896f1e9a529813e13601ef82",
                    " \"0b667fe4fc990f75d0ff341a3a8c0a6a8939006cbf74d1250e536dcaa020e262",
                    " \"4cd800261d0e873ee5c8237997707bc22174417d09e46585d136ae96a547cd11"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 48363,
        "lastCalculated": "2026-10-05 04:31 IST"
    }
};
