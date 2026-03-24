// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-24T08:22:27.939900+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-24T08:22:27.651804+05:30",
    "lastUpdatedFormatted": "Mar 24, 2026 at 08:22 AM IST",
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
            "iocCount": 606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 606,
                "newInLastHour": 46,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"73edb1d8637b28113a1ba04fa4aa64d3020a9eaaf8a3024b978b362a4cce6238",
                " \"683602b792415612d9d3e60a899c0b8634d52180c1509f27c3ccfb318aa58580",
                " \"6469b020b69eda0df62411166d292141053219c4beaff2a9c4a62cf53d8c7ddc",
                " \"3b0de26de5b19cef038df70f8c2a002f5809f6b13cfab2a13d8f36631947c1c7",
                " \"e078e5e55d8239d7d07bede334cb404d463735e93cb946dbe9cf8f0fc04f2d24"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1535,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1535,
                "newInLastHour": 11,
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
                "1[.]161[.]138[.]75",
                "1[.]182[.]191[.]117"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4823,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4823,
                "newInLastHour": 4823,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]163[.]193[.]34",
                "1[.]197[.]102[.]62",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21007,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21007,
                "newInLastHour": 21007,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]224[.]75[.]40:57867/bin[.]sh",
                "hxxp://219[.]155[.]24[.]248:47451/bin[.]sh",
                "hxxp://110[.]39[.]231[.]61:43412/bin[.]sh",
                "hxxps://cl2remote[.]chrysalisbuffer[.]in[.]net/verification[.]google",
                "hxxp://196[.]188[.]80[.]240:55375/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1155,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1155,
                "newInLastHour": 1153,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cl2remote[.]chrysalisbuffer[.]in[.]net\"",
                " \"cl1store[.]chrysalisbuffer[.]in[.]net\"",
                " \"ext4sync[.]mandibulateflow[.]in[.]net\"",
                " \"ext3gate[.]mandibulateflow[.]in[.]net\"",
                " \"ext2proc[.]mandibulateflow[.]in[.]net\""
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
            "iocCount": 9311,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9311,
                "newInLastHour": 13,
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
            "totalIndicators": 49258,
            "activeSources": 8,
            "criticalAlerts": 31301,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21967,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9334,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 482,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21336,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://svc1proc[.]activestaticsync[.]in[.]net/verification[.]google",
                    "hxxp://27[.]217[.]33[.]239:35619/i",
                    "hxxp://175[.]148[.]158[.]32:60996/i"
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
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1527,
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
                "count": 1392,
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
                "count": 499,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"svc1proc[.]activestaticsync[.]in[.]net\"",
                    " \"dev4space[.]linearprocessnode[.]in[.]net\"",
                    " \"dev3field[.]linearprocessnode[.]in[.]net\""
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
        "fastestRisingThreat": " \"unknown\"",
        "totalAttacksThisHour": 42358,
        "lastCalculated": "2026-03-24 08:22 IST"
    }
};
