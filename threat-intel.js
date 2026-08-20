// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-20T14:21:18.949199+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-20T14:21:18.596541+05:30",
    "lastUpdatedFormatted": "Aug 20, 2026 at 02:21 PM IST",
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
                "hxxp://onedocuvetinary-ldjzoo9p-webu43[.]4everland[.]app/",
                "hxxp://netcoooins-logi[.]webflow[.]io/",
                "hxxps://originalmeeting[.]pages[.]dev/Microsoftmeet[.]html?email=valosz@2de1886ed1cab04908e53d937d7dffd68a87[.]net",
                "hxxps://flexibilidadeaseulimite[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://www[.]supp0rtassistance[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1406,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1406,
                "newInLastHour": 208,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fccbfae45cc43c9c561db065c3c385b5ded7b424ae71a895eba1bb67d27e1945",
                " \"a6d93a46e14e1c8d399ccd081f70cbf9eb8d76e019126ff7ef5fb42b80407c99",
                " \"7ddbeda50c70097212083946b1da5fbdd53fe56c0dd77098a1e756b695976a99",
                " \"dec621da52182ff4d8bdfe40d9e88e94e622d502cf3b4943446fa3d8cb68ee00",
                " \"b520ec22d54dad3cdacb65e6a4e26aa4540fbbb033b14d84548548cdcc68ecdc"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1688,
                "newInLastHour": 1,
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
                "1[.]140[.]210[.]242",
                "1[.]159[.]70[.]231",
                "1[.]165[.]27[.]71"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4924,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4924,
                "newInLastHour": 4924,
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
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16748,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16748,
                "newInLastHour": 16748,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]9[.]240[.]151:46316/bin[.]sh",
                "hxxps://sunix-technology[.]com/images/niceorgimg_082205[.]png",
                "hxxps://nieuw[.]technoberg[.]nl//wp-content/bin44[.]exe",
                "hxxps://sixmexicos[.]com/20/stego_cm94aawwlf[.]png",
                "hxxps://pub-378362a70f714a30b26c109732cabca4[.]r2[.]dev/img_171507[.]png"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8992,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8992,
                "newInLastHour": 8757,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"qibanopy[.]workers[.]dev\"",
                " \"9f0c756af7f4a15a6e801aeb364a832d\"",
                " \"33215eef229fa578661e017862dbca09c9d9d0a2d19ff56e0622604c804c7ebe\"",
                " \"api[.]rh7[.]ninja\"",
                " \"217[.]60[.]102[.]8:2269\""
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
            "iocCount": 10507,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10507,
                "newInLastHour": 86,
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
            "totalIndicators": 55737,
            "activeSources": 8,
            "criticalAlerts": 28352,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17953,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10399,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5090,
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
                "count": 16585,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://191[.]44[.]114[.]243:889/[.]bash_history",
                    "hxxp://115[.]48[.]10[.]6:39981/i",
                    "hxxp://27[.]44[.]145[.]210:44835/i"
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
                    "1[.]140[.]210[.]242",
                    "1[.]159[.]70[.]231"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2528,
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
                "count": 1691,
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
                "count": 1684,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"oneai[.]surf\"",
                    " \"oneai[.]icu\"",
                    " \"office356[.]icu\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1434,
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
                "count": 1426,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]96[.]106[.]127:443\"",
                    " \"47[.]96[.]106[.]127:22\"",
                    " \"169[.]58[.]121[.]189:8443\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1153,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://sci-lumiere[.]ci/\"",
                    " \"hxxps://richplusglobal[.]com/\"",
                    " \"hxxps://meraapnabharat[.]ca/\""
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
                "count": 700,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9ba597b7a850fe598927a226f6ab2efd3050ff95",
                    "5e7110d4c25e3aef153d9d38610550ad510f23cf",
                    "ab53f86d2ce32d9306f431e8e82f39cb31f48a53"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46029,
        "lastCalculated": "2026-08-20 14:21 IST"
    }
};
