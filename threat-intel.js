// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-24T11:06:37.415530+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-24T11:06:37.114328+05:30",
    "lastUpdatedFormatted": "Mar 24, 2026 at 11:06 AM IST",
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
            "iocCount": 615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 615,
                "newInLastHour": 21,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e3060223977da8f21e95f6df338863429d0d547e68063658c875b629e27d4b6f",
                " \"0588790ffddd8154f1d1ea6bd11464fa8ab1116f5418c11b5e5c82a923379b63",
                " \"6b20ceec5cacfc49cd64def8ba0135499cfcb6e7fd85637da4ac8745b8025bcd",
                " \"531b33dd1a79c4a57ca2aed8a2ecd97df05974c84d39d35b8ca4f568edba1ecf",
                " \"c2730e947a040529c26bfdac395bdd563dcc505317b1e6e3967b196c8a9de69e"
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
                "newInLastHour": 3,
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
                "1[.]182[.]191[.]117",
                "1[.]183[.]160[.]11"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4852,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4852,
                "newInLastHour": 4852,
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
            "iocCount": 21185,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21185,
                "newInLastHour": 21185,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://158[.]94[.]208[.]168/files/8316621590/n7wmUuF[.]bat",
                "hxxp://158[.]94[.]208[.]168/files/8316621590/dRf4qKq[.]bat",
                "hxxp://110[.]37[.]44[.]250:53103/i",
                "hxxp://158[.]94[.]208[.]168/files/8316621590/v3R9oxk[.]bat",
                "hxxp://42[.]56[.]160[.]67:39640/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1127,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1127,
                "newInLastHour": 1125,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cl4link[.]chrysalisbuffer[.]in[.]net\"",
                " \"cl3dev[.]chrysalisbuffer[.]in[.]net\"",
                " \"62[.]171[.]131[.]243:80\"",
                " \"85[.]239[.]56[.]9:8010\"",
                " \"172[.]86[.]76[.]179:7001\""
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
            "iocCount": 9369,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9369,
                "newInLastHour": 58,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0b0dc82e3c43d6527d2e2d4e19195817d9731387",
                "7da0a76b514869395da864dff3444a294c5bc73b",
                "dd9055d19cf441e17d7a0f8d4f3cd8a78712993d",
                "30f1bac7bb98fdf0215cdf023bac1112f5d35f99",
                "055a435dbca9b6c9f14de1735be3c2f4b3b84274"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48919,
            "activeSources": 8,
            "criticalAlerts": 30926,
            "activeCampaigns": 211
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21637,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9289,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 491,
                "trend": "stable",
                "percentage": 1
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
                "count": 21007,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]224[.]75[.]40:57867/bin[.]sh",
                    "hxxp://219[.]155[.]24[.]248:47451/bin[.]sh",
                    "hxxp://110[.]39[.]231[.]61:43412/bin[.]sh"
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
                "count": 1535,
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
                "count": 646,
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
                "count": 544,
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
                "count": 503,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cl2remote[.]chrysalisbuffer[.]in[.]net\"",
                    " \"cl1store[.]chrysalisbuffer[.]in[.]net\"",
                    " \"ext4sync[.]mandibulateflow[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 441,
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
                "count": 358,
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
        "totalAttacksThisHour": 42549,
        "lastCalculated": "2026-03-24 11:06 IST"
    }
};
