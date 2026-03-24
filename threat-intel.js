// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-24T14:34:07.035665+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-24T14:34:06.744485+05:30",
    "lastUpdatedFormatted": "Mar 24, 2026 at 02:34 PM IST",
    "comparisonPeriod": "Mar 23 \u2013 Mar 24, 2026",
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
                "hxxps://homebridges[.]wixstudio[.]com/en-suite",
                "hxxps://bestroute[.]aiko[.]com[.]mx/Controllers/Incapacidades/plugins/login[.]php/",
                "hxxps://allegro[.]kpu32f61d21[.]bond/?id=0H2g3H1X0A5d5E5B9m9E1r2F0g3H3l3r",
                "hxxps://mailserver[.]goteal[.]io/paga-ofertas/bancolombia/contrase%C3%B1aMano[.]html",
                "hxxps://pop3[.]goteal[.]io/paga-ofertas/bancolombia/dinamica[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 578,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 578,
                "newInLastHour": 59,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"24a4a81c4ec9e2b81441b2df60e86244e85c2256c92650279ba416d45a1249f0",
                " \"0dade8670a52841beb1631acef826a6053723a7818bca5e02b7053559bea2f32",
                " \"61e1ecb154bc8d21908940d2005de2f2bc3c106043ce85aa179c6da6ea8c0056",
                " \"cbe607cd3f2bb8a3719a58c34c5fcdca44633948cebf477204de818820638511",
                " \"45ccb6f0b57114939322e4f0a7d9ccbb800f8715f217e64011483ccc9d44b90a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1536,
                "newInLastHour": 2,
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
                "1[.]0[.]253[.]217",
                "1[.]15[.]118[.]23",
                "1[.]15[.]15[.]189",
                "1[.]15[.]51[.]236",
                "1[.]182[.]191[.]117"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4817,
                "newInLastHour": 4817,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]163[.]193[.]34",
                "1[.]192[.]189[.]251",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21372,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21372,
                "newInLastHour": 21372,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]85[.]74[.]201:54764/bin[.]sh",
                "hxxps://e5754[.]velvet-dune[.]in[.]net/verification[.]google",
                "hxxp://125[.]41[.]247[.]115:43021/bin[.]sh",
                "hxxp://123[.]14[.]17[.]138:60250/i",
                "hxxp://45[.]225[.]135[.]61/GdaWJLSiOjz162[.]bin"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1232,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1232,
                "newInLastHour": 1230,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"e5754[.]velvet-dune[.]in[.]net\"",
                " \"85[.]137[.]253[.]33:443\"",
                " \"31[.]129[.]22[.]29:443\"",
                " \"golde-loose[.]velvet-dune[.]in[.]net\"",
                " \"kerneldelive[.]velvet-dune[.]in[.]net\""
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
            "iocCount": 9368,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9368,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "af122b6c757acb41574bdcb6e0b1bcd01bb2e483",
                "03dda1240ed1938576cbd9d3f6c51f778db895d1",
                "2fe45c6b4dfa42ec5f86a81a81932869b0c16da6",
                "25157f834c4519f65b96860fa5a4d29c25746133",
                "afa1d275776f12ada15518a6ec15bf89f8678a18"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49137,
            "activeSources": 8,
            "criticalAlerts": 31171,
            "activeCampaigns": 210
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21824,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9347,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 490,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 91
            },
            {
                "name": "Tech",
                "percentage": 8
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21185,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://158[.]94[.]208[.]168/files/8316621590/n7wmUuF[.]bat",
                    "hxxp://158[.]94[.]208[.]168/files/8316621590/dRf4qKq[.]bat",
                    "hxxp://110[.]37[.]44[.]250:53103/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]253[.]217",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]15[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1536,
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
                "count": 1393,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06",
                    "51f20540cd77caa36702bb359c8c06949aecea02",
                    "c415fb25075e3df71a6a9bf67750cbf6a6c7e868"
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
                "count": 647,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8f2ea97e92648473ca2a6d2f1607e1e36ac55346",
                    "d8d8f1297e6c21a5707c2f5b09752c45054335ac",
                    "c23d6863f7ad286ca9f63354456c552d0b37d6a6"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 545,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ca0c1280a2c26415f8d77ca00a39c6986841da0c",
                    "fdd41b75b65c0dfb3a3873ddca6d77723a5e92b6",
                    "0211433cfdfedfc7352c1228fc58d9d2f9d49032"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 476,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cl4link[.]chrysalisbuffer[.]in[.]net\"",
                    " \"cl3dev[.]chrysalisbuffer[.]in[.]net\"",
                    " \"cl2remote[.]chrysalisbuffer[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "055a435dbca9b6c9f14de1735be3c2f4b3b84274",
                    "855df27eb0c93652f8fc54190698c15bcb86373d",
                    "5854bcdd3f88acbf00bf32990f0ef0cbb3905a57"
                ]
            },
            {
                "name": "OffLoader",
                "count": 364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0b0dc82e3c43d6527d2e2d4e19195817d9731387",
                    "ad794607ab5dbb098a4c5bc5d87e1b3bcd659d74",
                    "137adb757afcb4e5980a5e6aa63ac498559309d2"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42801,
        "lastCalculated": "2026-03-24 14:34 IST"
    }
};
