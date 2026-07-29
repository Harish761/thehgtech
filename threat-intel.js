// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-29T19:57:29.369157+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-29T19:57:29.035153+05:30",
    "lastUpdatedFormatted": "Jul 29, 2026 at 07:57 PM IST",
    "comparisonPeriod": "Jul 28 \u2013 Jul 29, 2026",
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
                "hxxp://zerointerestpromo[.]com/",
                "hxxps://paket[.]info[.]158-158-1-61[.]cpanel[.]site/pl/kasse[.]php?2kh6by2fuuo3z",
                "hxxps://www[.]roblox[.]com[.]mu/users/6525325044/profile",
                "hxxps://s4w[.]in/www-roblox-com-users-321759054-profile",
                "hxxps://pw[.]pypexqb[.]net/EngTgred[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1026,
                "newInLastHour": 185,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2135da1fbfb04479247c4268d2002059ca335b5384929093644e4896c44a37bb",
                " \"1650509e245d62930fcd56d8f8aafe5e8ed9a57c746f027d7565fc732b77d7dd",
                " \"f40c9170ce158fb797deb5bd41f4110b51439d9fd9217944a01c325a6ca5c1c8",
                " \"d380f9a174bfd62bc70b845fdcd4e6043dd0d74d140326354caf1a5342fb7f77",
                " \"4f55629fddb7c272fe500b6a132fb15341d2f58ca29fb597be19ebdb77e1994d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1666,
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
                "1[.]10[.]185[.]51",
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]12[.]65[.]23",
                "1[.]15[.]14[.]29"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9542,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9542,
                "newInLastHour": 9542,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]180[.]246[.]242",
                "1[.]192[.]61[.]70"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15637,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15637,
                "newInLastHour": 15637,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]45[.]64[.]153:35082/bin[.]sh",
                "hxxp://125[.]44[.]62[.]231:47335/i",
                "hxxp://115[.]58[.]140[.]184:54228/bin[.]sh",
                "hxxp://222[.]137[.]107[.]54:52378/bin[.]sh",
                "hxxp://203[.]159[.]90[.]61/Bin/ScreenConnect[.]ClientSetup[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6023,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6023,
                "newInLastHour": 5283,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cbrldu[.]phoenixfactory[.]org\"",
                " \"lgteexx[.]witchwatchchapters[.]com\"",
                " \"phoenixfactory[.]org\"",
                " \"144[.]208[.]127[.]87:443\"",
                " \"118[.]31[.]18[.]77:8080\""
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
            "iocCount": 10199,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10199,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0b260881d660a14c3c0b2e61a6685839c8053bc9",
                "11a9b0c571e681f4f9e7780e3aff1fe8c2f3d676",
                "e15c7bdeb747a9fff47c514a10229a2a59d1157d",
                "283042355c89f2c59e260246d1488a73a8bef7b2",
                "e6cc4eebe2d73c7174be4be73bc00d4642122ac4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49709,
            "activeSources": 8,
            "criticalAlerts": 26372,
            "activeCampaigns": 254
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16128,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10244,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3682,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 15118,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]228[.]103[.]211:38030/i",
                    "hxxps://hindustanagency[.]com/3[.]exe",
                    "hxxp://182[.]115[.]185[.]8:58576/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]12[.]229[.]231",
                    "1[.]162[.]38[.]36"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1666,
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
                "count": 1433,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1345,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"51[.]222[.]87[.]16:50050\"",
                    " \"1[.]116[.]121[.]47:22\"",
                    " \"154[.]12[.]94[.]16:8443\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 891,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"crcmb1nm[.]goodangpao[.]com\"",
                    " \"acisvwr[.]zodiacsmoke[.]com\"",
                    " \"zodiacsmoke[.]com\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 775,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]206[.]219[.]14:10002\"",
                    " \"169[.]58[.]50[.]199:7443\"",
                    " \"hxxps://cheloks[.]pro/\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 771,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zerodansleau[.]fr\"",
                    " \"zeronervepain[.]com\"",
                    " \"ziegler-partner[.]eu\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45953,
        "lastCalculated": "2026-07-29 19:57 IST"
    }
};
