// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-13T10:07:51.560370+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-13T10:07:51.262629+05:30",
    "lastUpdatedFormatted": "Sep 13, 2026 at 10:07 AM IST",
    "comparisonPeriod": "Sep 12 \u2013 Sep 13, 2026",
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
                "hxxps://retired-crimson-irxib1ps[.]edgeone[.]dev/",
                "hxxps://ing-ledger-help[.]pages[.]dev/",
                "hxxps://haseebansaripk4-web[.]github[.]io/journex/",
                "hxxps://s4w[.]in/ezxWm",
                "hxxps://www[.]roblox[.]com[.]ml/users/255877383315/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 410,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 410,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"48f7a0fd3cb39a4a400a06331d73d74fe84817d8e6f2b7f34d853e61049a322c",
                " \"52c06775e28c145b7ec96b7d7f2120bfc97c8d073f21d548d1a7c1aebfa5169b",
                " \"b54a9f76aaa20aff72fd978bca433b67ca210e9466db9ddb32d448204beb705b",
                " \"6b700b6ed41413e36dcffb50d8d9f0b082e8b2f514a123636ba715fde1bc7487",
                " \"5b73969e4df42bd57becfd96fdc5ce13873c48995a19a877bf3030e1399fbf2c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1712,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1712,
                "newInLastHour": 49,
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
                "1[.]159[.]111[.]86",
                "1[.]207[.]32[.]183",
                "1[.]24[.]16[.]127",
                "1[.]24[.]16[.]13"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11374,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11374,
                "newInLastHour": 11374,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]43[.]49",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12312,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12312,
                "newInLastHour": 12312,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]141[.]43[.]100:40161/i",
                "hxxp://217[.]60[.]195[.]239/x86",
                "hxxp://125[.]47[.]85[.]91:34593/i",
                "hxxp://125[.]47[.]85[.]91:34593/bin[.]sh",
                "hxxp://222[.]138[.]148[.]176:40711/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11152,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11152,
                "newInLastHour": 8095,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"jtd3m9p0[.]jurni[.]store\"",
                " \"jurni[.]store\"",
                " \"148[.]66[.]17[.]123:60003\"",
                " \"148[.]66[.]17[.]125:60003\"",
                " \"154[.]91[.]61[.]124:8074\""
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
            "iocCount": 10688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10688,
                "newInLastHour": 8604,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "db7000ad8c148580941840ce41d8efb95f478854",
                "60d55d4ff506bc654814ba6b26308f999766054a",
                "93edc2f5b2504b5700af766157b2aa96d1edd20f",
                "c78af78d930e82506823c8ececf1140c7035d8ef",
                "74afa65e38769e7e58835fd799e353c2fea3a209"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 43620,
            "activeSources": 8,
            "criticalAlerts": 15213,
            "activeCampaigns": 171
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13116,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4497,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 2097,
                "trend": "down",
                "percentage": -80
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
                    "1[.]10[.]172[.]57",
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]111[.]86"
                ]
            },
            {
                "name": "malware_download",
                "count": 12693,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://www[.]dropbox[.]com/scl/fi/0uo36mnwpsr3pkimq0tbw/installer[.]exe?rlkey=y809n84pzpul9hs33ihya6qcj&st=gy1s1dqs&dl=1",
                    "hxxp://64[.]89[.]160[.]197/bot_client_mipsle",
                    "hxxp://64[.]89[.]160[.]197/bot[.]b64"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 2861,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]220[.]160[.]198:2026\"",
                    " \"ea0ac7277d0fdf801972b56bdc57184fc51ac8be47438873396436736f3694a9\"",
                    " \"ea0c84717977b89e7c7c885c68ac7ab4d8e561044cd93b47f3ddf830f9f688cd\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1692,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bikecondition[.]cfd\"",
                    " \"ce9c1422af2c16af682eac479c3f9c57959beb355b22ba72de8c10c4078eb8db\"",
                    " \"7f47e02e297a35fabb1fb2a2e195e3dae5ff8ecfe7b201fed189d14e54124d2e\""
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
                "name": " \"win.cobalt_strike\"",
                "count": 1412,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"59[.]110[.]153[.]133:22\"",
                    " \"49[.]51[.]230[.]17:53001\"",
                    " \"38[.]76[.]183[.]197:8806\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1279,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cf-check[.]site\"",
                    " \"authshipup[.]net\"",
                    " \"runtimerailbit[.]com\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 865,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"vw7sqxax[.]niaa[.]store\"",
                    " \"niaa[.]store\"",
                    " \"0hd4saaw[.]bossizmit[.]store\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 593,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]192[.]226[.]20:56003\"",
                    " \"31[.]56[.]209[.]63:443\"",
                    " \"213[.]209[.]159[.]91:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 570,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "60d55d4ff506bc654814ba6b26308f999766054a",
                    "f567b9fc86b00e059bdfea261466360804fbdb38",
                    "00095e3cd5dfc929d16036132665d7e3e9ef7cd6"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 55774,
        "lastCalculated": "2026-09-13 10:07 IST"
    }
};
