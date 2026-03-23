// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-24T00:58:35.031734+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-24T00:58:34.740150+05:30",
    "lastUpdatedFormatted": "Mar 24, 2026 at 12:58 AM IST",
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
                "hxxp://member011[.]register-verification-center[.]com/",
                "hxxps://kucoin-buy-crypto[.]webflow[.]io/",
                "hxxps://dropbox-prod[.]adobemsbasic[.]com/features/share/password-protection/",
                "hxxp://portal-descuentospostpagos[.]com/paga-ofertas/bancolombia/usuario[.]html",
                "hxxp://f3852f3ed6824559bde4f7f6be80acce[.]hoceb[.]cn/"
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
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a0d7249a0df608c9cee5924acc55ad7f39cff3df7cf0702be47469c094fc23dd",
                " \"8606c084446472d6e383d2ec2279858474fa807bcfc3380b7e5a939da23dd5a8",
                " \"34af4409264d852ba0c694c1b63c7a60daafed958e4f3f32cbf243e0e17e15ad",
                " \"a6a748c0606fb9600fdf04763523b7da20b382b054b875fdd1ef1c36fc16079a",
                " \"442a65793c7f312821f230d901e1fae24803e200831658bc00deb31975f8563a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1538,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1538,
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
                "1[.]15[.]51[.]236",
                "1[.]177[.]63[.]24",
                "1[.]183[.]47[.]146"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4856,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4856,
                "newInLastHour": 4856,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]163[.]193[.]34",
                "1[.]164[.]175[.]121",
                "1[.]197[.]102[.]62",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21296,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21296,
                "newInLastHour": 21296,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]54[.]253[.]47:56235/i",
                "hxxps://svc3user[.]dynamicshubpoint[.]in[.]net/verification[.]google",
                "hxxps://svc2base[.]dynamicshubpoint[.]in[.]net/verification[.]google",
                "hxxp://110[.]37[.]61[.]44:33462/bin[.]sh",
                "hxxp://87[.]121[.]84[.]57/nuts/poop"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1110,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1110,
                "newInLastHour": 1108,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"svc2base[.]dynamicshubpoint[.]in[.]net\"",
                " \"svc1infra[.]dynamicshubpoint[.]in[.]net\"",
                " \"dev4work[.]thermalpulserelay[.]in[.]net\"",
                " \"somalia-peterson[.]with[.]playit[.]plus\"",
                " \"dev3local[.]thermalpulserelay[.]in[.]net\""
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
            "iocCount": 9353,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9353,
                "newInLastHour": 27,
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
            "totalIndicators": 49055,
            "activeSources": 8,
            "criticalAlerts": 31125,
            "activeCampaigns": 213
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21805,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9320,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 471,
                "trend": "up",
                "percentage": 20
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
                "count": 21234,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]209[.]84[.]104:43367/bin[.]sh",
                    "hxxp://218[.]60[.]253[.]28:34193/bin[.]sh",
                    "hxxp://176[.]226[.]129[.]38:54033/i"
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
                "count": 1391,
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
                "count": 645,
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
                "count": 488,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fernprim[.]cr4ftlane[.]in[.]net\"",
                    " \"tensorparticle[.]cr4ftlane[.]in[.]net\"",
                    " \"voicetrusted[.]cr4ftlane[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 433,
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
                "count": 361,
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
        "totalAttacksThisHour": 42656,
        "lastCalculated": "2026-03-24 00:58 IST"
    }
};
