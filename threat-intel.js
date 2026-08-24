// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-25T02:11:55.808716+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-25T02:11:55.449349+05:30",
    "lastUpdatedFormatted": "Aug 25, 2026 at 02:11 AM IST",
    "comparisonPeriod": "Aug 24 \u2013 Aug 25, 2026",
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
                "hxxps://ogs[.]secure-nexo[.]com/review[.]php",
                "hxxps://ogs[.]secure-nexo[.]com/",
                "hxxp://apple_se[.]wzebq[.]xyz/ja/main",
                "hxxp://itrust-captal-singin[.]pages[.]dev/",
                "hxxps://www[.]robiox[.]com[.]gr/users/2966724025/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 785,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 785,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a4e921a7afacd5c9d8037425088e87847b0171e8985adc659cdb32d265db2684",
                " \"74f92110966d46b49dab95189364618795e12e8895f0246e37e7e7b8f67346cf",
                " \"d4d2b7e99fdc2ce7eca14986a189d974bb24e42fea69b4bf6424301146d869bd",
                " \"cee5f4234344c49796812e11c5b14c68089c09ee1c772e71ff1cc296a26925ca",
                " \"ab4c9f360c6d5f3e0d9a90c713d4ccfb2780ef52da41a028d6516cf9ea5e9238"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1701,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1701,
                "newInLastHour": 6,
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
                "1[.]120[.]123[.]117",
                "1[.]15[.]14[.]29",
                "1[.]180[.]190[.]250",
                "1[.]180[.]247[.]82",
                "1[.]183[.]227[.]151"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5167,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5167,
                "newInLastHour": 5167,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]171[.]90",
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
            "iocCount": 16311,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16311,
                "newInLastHour": 16311,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]116[.]35[.]246:42450/i",
                "hxxp://42[.]224[.]29[.]91:43741/bin[.]sh",
                "hxxp://84[.]54[.]33[.]215:8080/Payroll_statement[.]pdf[.]pdf",
                "hxxp://84[.]54[.]33[.]215:8080/Invoice[.]zip",
                "hxxp://84[.]54[.]33[.]215:8080/Invoice[.]lnk"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6394,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6394,
                "newInLastHour": 6228,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://zonxh[.]shop:7728/sessions\"",
                " \"hxxp://zonxh[.]shop:7728/settings\"",
                " \"hxxp://puaglse[.]click:8954/customers\"",
                " \"hxxp://kupzovo[.]shop:7567/messages\"",
                " \"hxxp://xightne[.]click:7242/documents\""
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
            "iocCount": 10530,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10530,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7a9be497f84c09e7591ba7c7d69539a6e0468302",
                "277cf8e1227351964ba2a8e57b49b26f8f8e353a",
                "9c0a9291be46e42b67835dff9e6c767fd6660287",
                "19cf66baa4727b080e283d10284993170c9b462b",
                "150e9fffc913a1c87bf94e7f2ad0354d4b6afea1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50949,
            "activeSources": 8,
            "criticalAlerts": 27599,
            "activeCampaigns": 230
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17092,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10507,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4138,
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
                "count": 16289,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://45[.]88[.]186[.]201/setup[.]exe",
                    "hxxp://115[.]57[.]16[.]71:56706/i",
                    "hxxps://139[.]59[.]240[.]15/kworker"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]120[.]123[.]117",
                    "1[.]15[.]14[.]29",
                    "1[.]170[.]96[.]242"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1695,
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
                "count": 1288,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"209[.]200[.]246[.]194:24563\"",
                    " \"45[.]141[.]215[.]202:8060\"",
                    " \"45[.]141[.]215[.]202:22\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1091,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://serenevacation[.]com/wp-links-piss[.]php\"",
                    " \"hxxps://verico-de-id[.]beer/api[.]php\"",
                    " \"qaz4[.]com\""
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
                "count": 732,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7a9be497f84c09e7591ba7c7d69539a6e0468302",
                    "277cf8e1227351964ba2a8e57b49b26f8f8e353a",
                    "19cf66baa4727b080e283d10284993170c9b462b"
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
        "fastestRisingThreat": " \"win.remus\"",
        "totalAttacksThisHour": 43034,
        "lastCalculated": "2026-08-25 02:11 IST"
    }
};
