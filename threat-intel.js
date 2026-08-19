// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-19T18:33:51.869866+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-19T18:33:51.567346+05:30",
    "lastUpdatedFormatted": "Aug 19, 2026 at 06:33 PM IST",
    "comparisonPeriod": "Aug 18 \u2013 Aug 19, 2026",
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
                "hxxp://facebologin[.]blogspot[.]com/",
                "hxxps://staking4portfolio[.]blogspot[.]com/",
                "hxxp://php-web-server--antijudas2323[.]replit[.]app/",
                "hxxp://www[.]staking2portfolio[.]blogspot[.]com/",
                "hxxps://www[.]ttk-pay-eua[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1261,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1261,
                "newInLastHour": 89,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1d28002e36d7e26f394269f04377a2381255959c94d4f91c132b7d93872fdb6b",
                " \"9d0f2f33327c470bfb073fda6e2d1c0b1658bf490eec005a9943a96faeb81773",
                " \"66dc00d303cf379796529c5634401327ff739a71c3c18c8ad6f7c05b8e21bfd9",
                " \"fbd8b50d4c36272586ce75a99b775d1322cabf6076d8b2f28e4fce718b7dca0c",
                " \"7d19af16438b9afaf91740d6515162b6410ca73ff1255834b7f7d002114d6a68"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
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
                "1[.]119[.]158[.]77",
                "1[.]119[.]194[.]226",
                "1[.]15[.]14[.]29",
                "1[.]159[.]70[.]231",
                "1[.]165[.]27[.]71"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4783,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4783,
                "newInLastHour": 4783,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16811,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16811,
                "newInLastHour": 16811,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]148[.]157[.]224:54842/i",
                "hxxp://125[.]42[.]27[.]234:57981/i",
                "hxxp://175[.]107[.]209[.]203:44599/bin[.]sh",
                "hxxp://115[.]48[.]143[.]40:35243/i",
                "hxxp://115[.]55[.]193[.]225:54553/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10178,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10178,
                "newInLastHour": 10173,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"216[.]118[.]235[.]70:4321\"",
                " \"82[.]153[.]241[.]181:1604\"",
                " \"abondance[.]blog\"",
                " \"gjii3jk6[.]en-us-theslimsplitsmethod[.]com\"",
                " \"boulangeo[.]lol\""
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
            "iocCount": 10451,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10451,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ab53f86d2ce32d9306f431e8e82f39cb31f48a53",
                "304062e0d9d93dad14b84554abb56fd3af8266ff",
                "4442db8ed5780616c630362ab45b8e59f40a2e5a",
                "173cb58c2538a3e2fccf3f3ae72b5713e4f810a3",
                "79e9e22d16866b1126c524c08afda88a225d6545"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55153,
            "activeSources": 8,
            "criticalAlerts": 28350,
            "activeCampaigns": 237
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17898,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10452,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4861,
                "trend": "stable",
                "percentage": 4
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
                "count": 16649,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://teakivo[.]com//wp-content/bin[.]exe",
                    "hxxp://222[.]140[.]156[.]149:50285/bin[.]sh",
                    "hxxp://120[.]84[.]213[.]18:32896/bin[.]sh"
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
                    "1[.]140[.]210[.]242",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2417,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"iocriotao[.]icu\"",
                    " \"triapfog[.]com\"",
                    " \"mioiooo[.]icu\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1692,
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
                "name": " \"unknown_loader\"",
                "count": 1678,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"governorhobbies[.]cfd\"",
                    " \"sofazinc[.]cfd\"",
                    " \"snailsreading[.]xyz\""
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
                "count": 1422,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]221[.]118[.]46:8080\"",
                    " \"147[.]139[.]245[.]149:801\"",
                    " \"119[.]45[.]198[.]250:55555\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1129,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://casaandaimemarica[.]com[.]br/\"",
                    " \"hxxps://one1ppp[.]com[.]pk/\"",
                    " \"hxxps://speed[.]hirebiz[.]pro/index-classic[.]html\""
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
                "count": 719,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "57dd505a5d745deaa32411f3f7e247e6795164a5",
                    "1e7d6c983d80311dcecc580135dcc216732fd478",
                    "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47165,
        "lastCalculated": "2026-08-19 18:33 IST"
    }
};
