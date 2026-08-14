// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-14T19:03:22.336877+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-14T19:03:21.960962+05:30",
    "lastUpdatedFormatted": "Aug 14, 2026 at 07:03 PM IST",
    "comparisonPeriod": "Aug 13 \u2013 Aug 14, 2026",
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
                "hxxps://162[.]89[.]74[.]97[.]host[.]secureserver[.]net/scl[.]swisscom-kundenservice/CH-DE",
                "hxxps://trgwrnchovoqii1mtimelknmjvqxeqrlkzsf14-cg13s[.]vercel[.]app/",
                "hxxps://kc-transporte[.]de/webspace/",
                "hxxps://84f7a2[.]icefactory[.]cl/",
                "hxxps://70f263[.]icefactory[.]cl/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 983,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 983,
                "newInLastHour": 69,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5bb5c4be630aeca4399ed0fe1872eea29f7b9f266fff3e20e1537619571c6cd4",
                " \"d806f57cd4a2e2450a80a14e72aa17c1eabcc5d3b50f14eb48d88e29aeb0a913",
                " \"a84b7855af9bb6b5abcc506d8eda6b67ee001656a95095ca4ecaccf7bceb3705",
                " \"b342af47f7df6c4b0391199a9d9eaab2c4e3d10880c04da790ae39c428c4d98b",
                " \"be9825d6a92906571e31480308cd09772aa6914bfe7fd8d8b9973040cbf610fe"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1683,
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
                "1[.]119[.]194[.]226",
                "1[.]172[.]222[.]189",
                "1[.]180[.]190[.]250",
                "1[.]181[.]200[.]22",
                "1[.]190[.]139[.]156"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4660,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4660,
                "newInLastHour": 4660,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]184[.]80",
                "1[.]178[.]214[.]92",
                "1[.]203[.]174[.]102",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17130,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17130,
                "newInLastHour": 17130,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]138[.]238[.]78:41991/bin[.]sh",
                "hxxp://39[.]87[.]217[.]20:54835/i",
                "hxxp://39[.]87[.]217[.]20:54835/bin[.]sh",
                "hxxp://166[.]0[.]192[.]57/loader",
                "hxxp://serdaregitim[.]com/3[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5561,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5561,
                "newInLastHour": 5495,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"166[.]0[.]192[.]57:6742\"",
                " \"2kask8yn[.]getbraindefender[.]us\"",
                " \"pull[.]valley-screen[.]click\"",
                " \"118[.]196[.]95[.]249:80\"",
                " \"118[.]196[.]95[.]249:443\""
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
            "iocCount": 10420,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10420,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "dfde6725130631a83b3d0dc221736bad3db16918",
                "a45080c92a0b2314966517a4643ebf280e88a11b",
                "3141245c066d71ef08936296ffea7ea15082f7fd",
                "46a2a90c5813eda22263c058742902faf1def5a6",
                "183d02c077142b8701d1a719cc8cee3f8fb76072"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50548,
            "activeSources": 8,
            "criticalAlerts": 28339,
            "activeCampaigns": 252
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17944,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10395,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3932,
                "trend": "stable",
                "percentage": 3
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
                "count": 16963,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://176[.]65[.]139[.]130/bins/bin[.]mips",
                    "hxxp://176[.]65[.]139[.]130/bins/bin[.]powerpc-440fp",
                    "hxxp://176[.]65[.]139[.]130/bins/bin[.]powerpc"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]140[.]210[.]242",
                    "1[.]15[.]14[.]29",
                    "1[.]172[.]222[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1685,
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
                "count": 1437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20",
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1338,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]128[.]21[.]190:123\"",
                    " \"108[.]165[.]147[.]244:18080\"",
                    " \"47[.]79[.]98[.]75:8080\""
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
                "name": "Vidar",
                "count": 695,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d18f8b968bd5981971d6699bdc4ed7b96a3e7248",
                    "d0944e5765a9b5767d3cf02e3bdd9f466c5391b7",
                    "4ee6cf96fce286a8e41faa52626ccf484c72a772"
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
                "name": " \"win.vidar\"",
                "count": 516,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://sww[.]sm188cuan[.]top/\"",
                    " \"sww[.]sm188cuan[.]top\"",
                    " \"sww[.]088idr[.]org\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 42682,
        "lastCalculated": "2026-08-14 19:03 IST"
    }
};
