// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-20T18:35:50.132778+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-20T18:35:49.781371+05:30",
    "lastUpdatedFormatted": "Aug 20, 2026 at 06:35 PM IST",
    "comparisonPeriod": "Aug 19 \u2013 Aug 20, 2026",
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
                "hxxps://www[.]agingenieria[.]com[.]pe/wp-content/logs/newsletter/www[.]made-in-china[.]com/index[.]html",
                "hxxps://urlz[.]li/b12f2603",
                "hxxps://dccrsorgia[.]github[.]io/gov[.]in[.]crs[.]verifyCertificate[.]id-TMJK8JJy4RuII5JYuqLhWA8HRA/",
                "hxxps://dccrsorgia[.]github[.]io/gov[.]in[.]crs[.]verifyCertificate[.]id-TMJK8JJy4RuII5JYuqLhWA8HRA",
                "hxxps://aidenpiearce[.]github[.]io/Javascript-amazon"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1385,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1385,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"da13c70e505da61a12d5dd4fa2ee0d4a92be16e24b91d09b1ee2e507e10ae521",
                " \"e10ea4528e79ac803578f25192b47654c6f211fa1aa2d6bfb681421c1e4a5404",
                " \"c2950027214694211b93f45aff96f7eeb0b46c5ce15235a9775b50597c565416",
                " \"b1de4588777902ac32ed8c81ce2ff58a9291438e6fb5fbd9a078a1e1ff0d56da",
                " \"22552867f3ad3e274b8fc255c23fefa5afc317c4bf7ef947bb0a23b1dbb6951b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1686,
                "newInLastHour": 9,
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
                "1[.]140[.]210[.]242",
                "1[.]159[.]70[.]231",
                "1[.]165[.]27[.]71",
                "1[.]180[.]190[.]250",
                "1[.]188[.]101[.]117"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4970,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4970,
                "newInLastHour": 4970,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]10[.]222[.]205",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16782,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16782,
                "newInLastHour": 16782,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]53[.]84[.]173:60970/bin[.]sh",
                "hxxp://123[.]14[.]178[.]128:40955/i",
                "hxxp://123[.]14[.]178[.]128:40955/bin[.]sh",
                "hxxp://85[.]108[.]86[.]149:50272/i",
                "hxxp://60[.]217[.]123[.]198:46902/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8142,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8142,
                "newInLastHour": 7905,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://fdrv[.]beeyuskincare[.]co[.]nz/download[.]php/Complete_Package_Inspection_And_Damage_Verification_Mp4\"",
                " \"104[.]239[.]66[.]83:1804\"",
                " \"45[.]141[.]148[.]10:4001\"",
                " \"serve2lead[.]com\"",
                " \"fibre-industries[.]de\""
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
            "iocCount": 10411,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10411,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f73eeb03e7df441484d4610c5a0c3a02f166989",
                "3992dd5edcdf2ce5d143f933e2657640e00a58d4",
                "e0ffdffb5d9bf9216ea5e70d4fe2bae919f5a6ca",
                "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
                "0ad6076cb27bcdd5dd26fe56c022f4ab61ea00be"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54646,
            "activeSources": 8,
            "criticalAlerts": 28666,
            "activeCampaigns": 252
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18181,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10485,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5178,
                "trend": "stable",
                "percentage": 1
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
                "count": 16748,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]9[.]240[.]151:46316/bin[.]sh",
                    "hxxps://sunix-technology[.]com/images/niceorgimg_082205[.]png",
                    "hxxps://nieuw[.]technoberg[.]nl//wp-content/bin44[.]exe"
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
                    "1[.]119[.]194[.]226",
                    "1[.]140[.]210[.]242"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2461,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fgx9[.]com\"",
                    " \"valokse[.]lol\"",
                    " \"sixpences[.]xyz\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1688,
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
                "count": 1431,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"9f0c756af7f4a15a6e801aeb364a832d\"",
                    " \"33215eef229fa578661e017862dbca09c9d9d0a2d19ff56e0622604c804c7ebe\"",
                    " \"103[.]185[.]249[.]199:8081\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1136,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"smokingstationhub[.]com\"",
                    " \"185[.]212[.]44[.]47:1010\"",
                    " \"hxxps://taliy[.]sbs/auth\""
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
                "count": 726,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
                    "732c7efa7d624c30b074e78df6595f54fde9188d",
                    "9ba597b7a850fe598927a226f6ab2efd3050ff95"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45018,
        "lastCalculated": "2026-08-20 18:35 IST"
    }
};
