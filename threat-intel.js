// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-31T22:12:35.677600+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-31T22:12:35.446550+05:30",
    "lastUpdatedFormatted": "Jan 31, 2026 at 10:12 PM IST",
    "comparisonPeriod": "Jan 30 \u2013 Jan 31, 2026",
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
                "hxxps://sp57541[.]sitebeat[.]crazydomains[.]com/",
                "hxxps://joymeekings[.]wixsite[.]com/my-site-1",
                "hxxps://mooreb2056[.]wixsite[.]com/my-site-1",
                "hxxps://larrywriggs[.]wixsite[.]com/website",
                "hxxps://manxtwentiiesbonnie1[.]weebly[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 744,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 744,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0e8185d83eeaaaec1651ce593fe6e2235fba58b9b94562d6fce374cf6822f1e8",
                " \"c88f2448efa77d4ba9393392cc48af741ef1a700701fe26607f9d577fb840a37",
                " \"b2ac80b6474c14a27beac97efd6dce00c59f4da3b6cb9f059588de665c8f5e2e",
                " \"5ee01a7ec5257373175090e2bc23fae980ac996325ffa4bffc5bd53164c21d49",
                " \"af45e7ab9d8c10b174c3ae27c54f39e69311c1716be6af42cc50eaaf96e29710"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1471,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1471,
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
                "1[.]0[.]255[.]215",
                "1[.]15[.]118[.]23",
                "1[.]170[.]24[.]236",
                "1[.]171[.]55[.]41",
                "1[.]172[.]228[.]93"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5983,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5983,
                "newInLastHour": 5983,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]171[.]55[.]41",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]219[.]224[.]46",
                "1[.]234[.]83[.]55"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19091,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19091,
                "newInLastHour": 19091,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://176[.]65[.]148[.]130/all[.]sh",
                "hxxp://176[.]65[.]148[.]130/bins/bot[.]arm5",
                "hxxp://176[.]65[.]148[.]130/bins/bot[.]arm6",
                "hxxp://176[.]65[.]148[.]130/bins/bot[.]sh4",
                "hxxp://176[.]65[.]148[.]130/bins/bot[.]mips"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 565,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 565,
                "newInLastHour": 565,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"13[.]62[.]56[.]163:18244\"",
                " \"54[.]179[.]215[.]123:58123\"",
                " \"transfernow[.]website\"",
                " \"194[.]59[.]30[.]79:9619\"",
                " \"104[.]248[.]177[.]238:8081\""
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
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8847,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8847,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1174cf685ee5148b65469947a7386b6303cbd471",
                "f7cdabe00750f8afa1ed05a8715d7f19e8af4b60",
                "e0cd22588c5eb33b575fd706a8cfb26a73302eac",
                "0dec713d11506f454580c12573a23f934e9671d4",
                "2818ea1d731dbd4db63e4cc45c5c044ca953af10"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 37501,
            "activeSources": 8,
            "criticalAlerts": 20145,
            "activeCampaigns": 117
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19815,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 466,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 330,
                "trend": "down",
                "percentage": -96
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
                "count": 19025,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]55[.]217[.]97:37403/bin[.]sh",
                    "hxxp://110[.]37[.]95[.]229:58291/bin[.]sh",
                    "hxxp://verbal-conduct-frequent-cleared[.]trycloudflare[.]com/manji[.]arm7"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]24[.]236",
                    "1[.]171[.]55[.]41"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1475,
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
                "name": "Generic Phishing",
                "count": 264,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://sp57541[.]sitebeat[.]crazydomains[.]com/",
                    "hxxps://joymeekings[.]wixsite[.]com/my-site-1",
                    "hxxps://mooreb2056[.]wixsite[.]com/my-site-1"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 206,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"46e241c461922b6909115e8f887a0ee4816b83a6a4205f2e258da4622eaecde2",
                    " \"f1c2f1ffa26c4e443d12cac3498193701b59ee2394387d52b07b9c41be537fdd",
                    " \"9e6ec64dc19e5ddf7637b525d3efabb389310135eb7804324759301cadda2e43"
                ]
            },
            {
                "name": " \"n/a",
                "count": 191,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"edb2e646f7d889b6d979f2d5d53c075d2f454860777a91c6619125f95ee7e88f",
                    " \"62b0f6a41b6027c2b82ae449bfef9d8a6f682d77d47f1ee019e701e9d494ec65",
                    " \"098e0f982f6e766e1f9603075e7b91addf6cd5839ff3bbebae8ec280d2cb2421"
                ]
            },
            {
                "name": "Vidar",
                "count": 132,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1174cf685ee5148b65469947a7386b6303cbd471",
                    "f7cdabe00750f8afa1ed05a8715d7f19e8af4b60",
                    "0fffd3c4d67d0477013f86eb09641271fbbad2c8"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 82,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"16[.]58[.]157[.]121:80\"",
                    " \"69[.]62[.]125[.]171:443\"",
                    " \"172[.]233[.]15[.]195:8888\""
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 78,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"77[.]110[.]103[.]209:80\"",
                    " \"hxxp://77[.]110[.]103[.]209/api/logs\"",
                    " \"hxxps://adm-toolkit[.]live/api/logs\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 49,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3aa47ddf31d8ca5846b61bf92d35891c33ff692d",
                    "bcbc3e835367e44c252da0525a8b888f449fc7fb",
                    "ccf693d9cedb70a4b541c69ed65b2e7e1324c8ef"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 49488,
        "lastCalculated": "2026-01-31 22:12 IST"
    }
};
