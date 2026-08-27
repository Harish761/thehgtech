// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-28T03:44:21.613742+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-28T03:44:21.216937+05:30",
    "lastUpdatedFormatted": "Aug 28, 2026 at 03:44 AM IST",
    "comparisonPeriod": "Aug 27 \u2013 Aug 28, 2026",
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
                "hxxps://www[.]roblox[.]com[.]mu/users/1519856114/profile",
                "hxxps://fbbr3[.]aaabbs[.]shop/brgtm/?pixel=1990834228265259&ls=1",
                "hxxps://panwuhan[.]shop/kkk/?pixel=1691965335246804&oc=1",
                "hxxps://fbbr2[.]xxmnax[.]shop/brgtm/?pixel=1691965335246804&oc=1",
                "hxxps://1url[.]at/www/robloxcom-users-271322182473-profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1002,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1002,
                "newInLastHour": 357,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ef0d94d552e13da04d16d0a78c170fc443c06e4534a555c2f594b1bcf55f96c8",
                " \"4b67b924433af0d9f40554dc7acbf5363d02b7492f431a736ca3d5b509051c91",
                " \"c6807219f08f5c93b7726fa209ce3ac0d60b94a52b6d4e84f9c7d833e184bd2b",
                " \"500346a6ab386ea645c40d8f520816fe5e871084842a22c70cbf8809df8dbee5",
                " \"800ef9ebbc5539c68e9db97b0fdc3859bb39206045a38e11768e8e7b6ce4e4c8"
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
                "newInLastHour": 57,
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
                "1[.]15[.]14[.]29",
                "1[.]188[.]5[.]46",
                "1[.]189[.]45[.]59",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6665,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6665,
                "newInLastHour": 6665,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]242[.]233",
                "1[.]162[.]198[.]126",
                "1[.]180[.]246[.]242",
                "1[.]2[.]174[.]204"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16146,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16146,
                "newInLastHour": 16146,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]46[.]131[.]9:49040/bin[.]sh",
                "hxxp://27[.]215[.]54[.]219:55163/i",
                "hxxp://182[.]121[.]177[.]176:36990/i",
                "hxxp://124[.]131[.]128[.]79:49267/i",
                "hxxp://42[.]228[.]46[.]234:49037/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6177,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6177,
                "newInLastHour": 6025,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"royalensemble[.]com\"",
                " \"hxxp://fezm[.]website:9048/subscriptions\"",
                " \"hxxp://flreaow[.]click:6527/orders\"",
                " \"rsc[.]123ful[.]net\"",
                " \"hxxps://rsc[.]123ful[.]net/\""
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
            "iocCount": 10450,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10450,
                "newInLastHour": 286,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f111c69f42266b474927156f103d70843e7f82b",
                "ddac606a1cf89b62cad44ca59ae7986378f191e7",
                "77b9903c538d045e266bd4d6cf40ede0b040b403",
                "969b40a4fd2fb579a29aed9b2f81a7cf5cc0b1db",
                "2125bebc5912c9fb523a668daf7d116999488493"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50943,
            "activeSources": 8,
            "criticalAlerts": 27033,
            "activeCampaigns": 272
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16777,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10256,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4867,
                "trend": "stable",
                "percentage": 5
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
                "count": 15869,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]223[.]152[.]97:800/armv7l",
                    "hxxp://222[.]223[.]152[.]97:800/i586",
                    "hxxp://222[.]223[.]152[.]97:800/mipsel"
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
                    "1[.]12[.]229[.]231",
                    "1[.]183[.]148[.]62"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1647,
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
                "count": 1427,
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
                "count": 1324,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"193[.]160[.]32[.]138:8085\"",
                    " \"47[.]109[.]23[.]77:22\"",
                    " \"47[.]109[.]23[.]77:8888\""
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
                "name": " \"unknown\"",
                "count": 694,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"27[.]124[.]17[.]164:8801\"",
                    " \"27[.]124[.]17[.]173:8801\"",
                    " \"47[.]242[.]62[.]96:15800\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 685,
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
                "name": " \"js.iclickfix\"",
                "count": 657,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"robbywoj321[.]life\"",
                    " \"antropostudio[.]org\"",
                    " \"agencenoel[.]archi\""
                ]
            },
            {
                "name": "Vidar",
                "count": 654,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fd78e771cab22c3afad8a5d5c448ff05268f20dd",
                    "8b41b8741c4d2a24de0aba241f742f043f1014d1",
                    "db787c8625b794b3d2385274bfdf8f34d731d7d9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44841,
        "lastCalculated": "2026-08-28 03:44 IST"
    }
};
