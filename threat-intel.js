// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-24T19:00:21.379791+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-24T19:00:20.989827+05:30",
    "lastUpdatedFormatted": "Sep 24, 2026 at 07:00 PM IST",
    "comparisonPeriod": "Sep 23 \u2013 Sep 24, 2026",
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
                "hxxps://www[.]trzorsutelgin[.]godaddysites[.]com/",
                "hxxp://www[.]1234-six-omega[.]vercel[.]app/",
                "hxxps://www[.]trezrr-sfe-looggin[.]godaddysites[.]com/",
                "hxxps://test-tau-black-69[.]vercel[.]app/",
                "hxxp://www[.]test-tau-black-69[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2313,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2313,
                "newInLastHour": 629,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"62ae36274d9e33b704ce1485952cb76dea26dd84a6bf18c870db21ae1c3b7528",
                " \"5401e8314bbffb1198e453908b7bf3c6e10456b5b82e906e1bc8351d40bac8de",
                " \"1cdbe79a992c820abf017d774f0e6a7987daeb9e1816bcf0c702b5982920f987",
                " \"3a1f8e14b674b6c3f20a83629bccc38e982d229fbacde684d005bacafd5b4b90",
                " \"da34c724b81240b9f2603c5357dc4dc637825bef8b33a9a7eea5fff3fa9f4333"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1696,
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
                "1[.]177[.]162[.]4",
                "1[.]189[.]248[.]116",
                "1[.]192[.]129[.]106",
                "1[.]24[.]16[.]103",
                "1[.]24[.]16[.]104"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11726,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11726,
                "newInLastHour": 11726,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14290,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14290,
                "newInLastHour": 14290,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]137[.]135[.]85:58023/bin[.]sh",
                "hxxp://42[.]224[.]120[.]144:33549/i",
                "hxxp://27[.]44[.]145[.]91:42447/bin[.]sh",
                "hxxp://222[.]127[.]68[.]176:38452/i",
                "hxxp://223[.]151[.]255[.]165:47591/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9344,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9344,
                "newInLastHour": 9020,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"9xagists[.]iranwordpres[.]com\"",
                " \"iranwordpres[.]com\"",
                " \"b30450f0db56652e2652318b24f9a36fb04786af99c22995584766923bebec1e\"",
                " \"1907be92bfb56439610fce9fa7be748c0e424b4c07ab1a163704a30d56b94f53\"",
                " \"45[.]139[.]104[.]194:3410\""
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
            "iocCount": 10648,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10648,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "06ba62804f9d40f0ffb38ecd4c42b0229921cbde",
                "aca5d4a8d82ba3feb8e85cd90158efba0d02f03f",
                "fd081cbaf79596b443b9d591f9dd1390268db7f0",
                "9780ed18b0a63e77e19611e7f46f640a64c1ad5e",
                "cadf6b3f7ceb64de2253e8c0734b867a2762987a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52243,
            "activeSources": 8,
            "criticalAlerts": 26896,
            "activeCampaigns": 277
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16125,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10771,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4341,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]189[.]89[.]243",
                    "1[.]195[.]104[.]116",
                    "1[.]20[.]186[.]172"
                ]
            },
            {
                "name": "malware_download",
                "count": 14063,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]37[.]227[.]211:43711/bin[.]sh",
                    "hxxp://175[.]173[.]86[.]162:56232/bin[.]sh",
                    "hxxp://175[.]147[.]92[.]200:60016/i"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2142,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"misty-whirl-beacon-doa[.]life\"",
                    " \"ashen-trace-zephyr-draeix[.]life\"",
                    " \"krestmoais-reed[.]life\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1711,
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
                "count": 1452,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1389,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]35[.]217[.]145:8081\"",
                    " \"101[.]35[.]217[.]145:80\"",
                    " \"101[.]35[.]217[.]145:8080\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 1055,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"77fe748f078f9c04997063712dd9d8498f52bb910cea09c6840a42f25a12a607",
                    " \"ee247e26917c6055c238f6046ccba307512ca790183006fc4e342492c93ab3da",
                    " \"0918159216b732cfdb3bf5fb971db9110cf9a1dc77e19527424dc024d4227acd"
                ]
            },
            {
                "name": "Vidar",
                "count": 797,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2d55d1a98da553c64dca5168488b90de1ac2b6dc",
                    "8ebcb44e692f32d2a4894ada4a06079a48bdf1a6",
                    "e368d5f28111dd2b577e949c59b254f7de1dae2b"
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
                "count": 708,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
                    "b85ab05112c6848ccf2dd6889903e1268cdc6a75",
                    "9b798f7d87edcf42680454660f593afd696ef8ca"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 50980,
        "lastCalculated": "2026-09-24 19:00 IST"
    }
};
