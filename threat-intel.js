// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-20T01:12:15.332606+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-20T01:12:14.979409+05:30",
    "lastUpdatedFormatted": "Jul 20, 2026 at 01:12 AM IST",
    "comparisonPeriod": "Jul 19 \u2013 Jul 20, 2026",
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
                "hxxps://brohihafsa57-hash[.]github[.]io/Amazon-Clone/",
                "hxxps://www[.]css-ch[.]blogspot[.]com/?m=1",
                "hxxps://fnxx[.]info/0eebad9ba891cd477bk8e11cfc5aa6db13b6[.]html",
                "hxxps://www[.]metamaskloginu[.]blogspot[.]com/",
                "hxxps://www[.]roblox[.]com[.]ml/users/142627874477/profile/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 632,
                "newInLastHour": 52,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e425d063bef56c66f0bde899a4c51ffb4188377ff0bcbddaa22bf1026760b87d",
                " \"83ecf6bfff6205592e60c815b6eeb59ead730f88eab9e1e3a30552853906a0f6",
                " \"fa53ca26be6f566f25087663526d8fbb5d081f04ebb4ea8c2e4bcdc7d0811d57",
                " \"f42c8f49b6056f9190da668b8fb649d0ad66377dcfa5cd2bd38353964eef6e6e",
                " \"f3fdbd51a85f2b42162c28a0840193da355dc0d67eccc3ae3badefce851d9744"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1657,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1657,
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
                "1[.]12[.]65[.]64",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]138",
                "1[.]193[.]63[.]145"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4959,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4959,
                "newInLastHour": 4959,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]162[.]245[.]230",
                "1[.]169[.]229[.]100",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20816,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20816,
                "newInLastHour": 20816,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://219[.]157[.]21[.]205:43284/i",
                "hxxp://119[.]177[.]187[.]21:40981/bin[.]sh",
                "hxxp://pvphood[.]cc/eclipse[.]powerpc",
                "hxxp://pvphood[.]cc/eclipse[.]powerpc-440fp",
                "hxxp://94[.]154[.]43[.]114/eclipse[.]i586"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4038,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4038,
                "newInLastHour": 3922,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mango-sushi[.]com\"",
                " \"litsotravels[.]com\"",
                " \"koin99[.]link\"",
                " \"istudiosgl[.]com\"",
                " \"cydm[.]domirunway[.]com\""
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
            "iocCount": 10193,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10193,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1e5253b44aa68a4b31f0dfc07df48b31798debca",
                "7f563e6df9b87f615f2d492ba68d5df373a6ca26",
                "a6df6eca49e13a8c5ebba1f86ca4c5766b1c1b97",
                "3cf6a282d22b606bce0ba5ad74526257eff4cf81",
                "3fb1dbcabe3bab0eb06fefe295821bff1007fb25"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52631,
            "activeSources": 8,
            "criticalAlerts": 31664,
            "activeCampaigns": 214
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21458,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10206,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3268,
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
                "count": 20757,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://92[.]124[.]120[.]65:44976/i",
                    "hxxps://h9fw1u0e[.]hanasushiorlando[.]com/?ublib=c34a1a48-f0b9-4e4a-9ac0-c2bdc524c746",
                    "hxxp://125[.]45[.]67[.]61:46866/bin[.]sh"
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
                    "1[.]12[.]65[.]64",
                    "1[.]159[.]90[.]31"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1677,
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
                "count": 1430,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c31650da58712771ad83fd5c6cef97905a255cc5",
                    "e86cb30b97c8af13b305fa5cdc7357e23f633447",
                    "c4e9396a3a0543fa79cc0a8f23395f90a15e03b0"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1424,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]87[.]53[.]6:22\"",
                    " \"81[.]70[.]21[.]248:111\"",
                    " \"64[.]90[.]17[.]181:8080\""
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
                "count": 693,
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
                "count": 649,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4264b1c47eac055ce604ef3509d23cd7e3bd584b",
                    "58a5ded84c93621d72ecc14b386e0e6bea5d103a",
                    "1dedacf3710f30c15b9e73c9d719a969eec755e5"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 574,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://amazon-ny-gifts[.]com/shellsajshdasd/ftpaksjdkasdjkxnckzxn/ywOVkkem[.]txt\"",
                    " \"web-captcha[.]co\"",
                    " \"hxxp://193[.]148[.]56[.]98/WQUKDbdzO8yY5asDU6\""
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45054,
        "lastCalculated": "2026-07-20 01:12 IST"
    }
};
