// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-22T07:15:19.388037+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-22T07:15:19.058645+05:30",
    "lastUpdatedFormatted": "Aug 22, 2026 at 07:15 AM IST",
    "comparisonPeriod": "Aug 21 \u2013 Aug 22, 2026",
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
                "hxxp://btinternet-maintenance-update106043-104089[.]weeblysite[.]com/",
                "hxxp://courageous-paletas-6e47c2[.]netlify[.]app/",
                "hxxp://luxury-frangollo-2d3521[.]netlify[.]app/",
                "hxxp://classy-kulfi-c3cd9f[.]netlify[.]app/",
                "hxxp://simple-security-page--aphroditesaless[.]replit[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 939,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 939,
                "newInLastHour": 112,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"11974ece6c707759b83574eaf844a6fbeebb55c16ac2b5b81d89d7200905733e",
                " \"4b9d68a24e5bf83ee32a8feb43a9b74b4955c35dce3564ae62a137b7101eb903",
                " \"78a2d2988751b159ab860349e3dd1a9f034f4f1ef4d39888b66a4c924b7e9db0",
                " \"73e065dc63b3c7a08f3f940ed7cbf761129767b191f78a9621f5b4d305cedc71",
                " \"6a406376be3f0dc3c700a8c637b5c4a111c8e013b49f2100dace21520aeec4b8"
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
                "newInLastHour": 10,
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
                "1[.]140[.]210[.]242",
                "1[.]180[.]247[.]82",
                "1[.]183[.]161[.]214",
                "1[.]193[.]59[.]172"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5166,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5166,
                "newInLastHour": 5166,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]222[.]205",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16279,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16279,
                "newInLastHour": 16279,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]49[.]210[.]219:38645/bin[.]sh",
                "hxxp://163[.]142[.]94[.]45:36545/bin[.]sh",
                "hxxp://115[.]54[.]128[.]38:41331/i",
                "hxxp://123[.]7[.]223[.]208:48157/i",
                "hxxp://123[.]7[.]223[.]208:48157/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4862,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4862,
                "newInLastHour": 4840,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"43[.]106[.]5[.]146:7800\"",
                " \"43[.]106[.]5[.]146:7811\"",
                " \"192[.]252[.]178[.]137:7800\"",
                " \"192[.]252[.]178[.]137:7811\"",
                " \"199[.]187[.]25[.]93:443\""
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
            "iocCount": 10518,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10518,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "de7567aa2ce367cb0915ffd8eb55b1e320e726c9",
                "b95285b6b061fd0acf6a5ae95433d703f52d1872",
                "5b276d28106cb7d91dd5f810e61d9523d34c7804",
                "1cdb18c33da65a40adad7b51808edf66f3e180e5",
                "bf192adc3dcaba7412e15b567de22e3f3150bbf7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49879,
            "activeSources": 8,
            "criticalAlerts": 28076,
            "activeCampaigns": 238
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17607,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10469,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4103,
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
                "count": 16665,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://mon-blanc-04[.]cfd/installer[.]exe",
                    "hxxp://175[.]150[.]177[.]126:57685/i",
                    "hxxp://123[.]8[.]162[.]45:59164/bin[.]sh"
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
                    "1[.]12[.]229[.]231"
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
                "count": 1343,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"118[.]25[.]37[.]47:8081\"",
                    " \"162[.]251[.]92[.]64:80\"",
                    " \"162[.]251[.]92[.]64:8080\""
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
                "count": 722,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0bb977bf9e0950a1a818660dde009ac9934bd1e2",
                    "0f47d296ca2a764238bfd644c7b716cffafa1352",
                    "aa50e1b4a6e7c66ba2ce4c1c82e62f8d74cd7202"
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
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 489,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"31[.]57[.]184[.]154:56003\"",
                    " \"104[.]249[.]10[.]86:56001\"",
                    " \"104[.]249[.]10[.]86:56002\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vshell\"",
        "totalAttacksThisHour": 41741,
        "lastCalculated": "2026-08-22 07:15 IST"
    }
};
