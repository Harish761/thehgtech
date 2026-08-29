// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-29T07:21:12.393897+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-29T07:21:12.044997+05:30",
    "lastUpdatedFormatted": "Aug 29, 2026 at 07:21 AM IST",
    "comparisonPeriod": "Aug 28 \u2013 Aug 29, 2026",
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
                "hxxps://help-l-edg-er-liv-e[.]typedream[.]app/",
                "hxxps://companylogin[.]au/?r=26039595-725b-41c2-87ec-a95ec63f757c",
                "hxxps://xx[.]yvgvvyl[.]net/SECURE/securehtm/?naps",
                "hxxps://naviatayde[.]github[.]io/fb-login",
                "hxxps://otrsc[.]com/home/iTEAIItDVzUUjb5E0mzELKIaO9G2vqJ0qgUs?MpiY6NME_"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 923,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 923,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6f388f379301aba42801abdbdf0cde24f87037412835a837282994096c842b41",
                " \"669664e380b29d42736475ca0949cc81a4514e2c0e9d839a1bebccc2a40888d0",
                " \"b8194e692fcca6f142c880dc630ced9841c2f5e27bad386391547733c889cbe6",
                " \"76af6d537f3677d28220b662a4c2730cbda6e37e179ba37fd74f7b0442d14600",
                " \"6ae503b3ee113406e80f9ec06b42800843cd655e2307b4b4c934a72efbd72085"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1695,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1695,
                "newInLastHour": 19,
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
                "1[.]12[.]229[.]231",
                "1[.]189[.]125[.]236",
                "1[.]189[.]45[.]59",
                "1[.]193[.]2[.]85",
                "1[.]193[.]63[.]118"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 13185,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 13185,
                "newInLastHour": 13185,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]242[.]233",
                "1[.]162[.]197[.]67",
                "1[.]162[.]198[.]126",
                "1[.]162[.]247[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15348,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15348,
                "newInLastHour": 15348,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]107[.]209[.]163:45781/i",
                "hxxp://175[.]107[.]209[.]163:45781/bin[.]sh",
                "hxxp://42[.]235[.]95[.]115:48397/i",
                "hxxp://175[.]150[.]244[.]110:45518/i",
                "hxxp://42[.]235[.]95[.]115:48397/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7402,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7402,
                "newInLastHour": 7111,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"trygetdsm[.]com\"",
                " \"thegetdsm[.]com\"",
                " \"f7ut9c0h[.]localcannabiscompany[.]com\"",
                " \"localcannabiscompany[.]com\"",
                " \"unseulterrain[.]com\""
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
            "iocCount": 10548,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10548,
                "newInLastHour": 280,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5e06eaa686adc5ca8fd118752c6667e826bbcad0",
                "41f8e81a4f9b3e7e70353a84e4bf87d687ddc79e",
                "407df66ac87ceb177c560e82df9521c8003b5f0d",
                "1389c26fb7ce71a7aa1514e86879daf6b373325a",
                "8f154a9a3584398eb6be34b0e2f05c79c63cea6a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51900,
            "activeSources": 8,
            "criticalAlerts": 27401,
            "activeCampaigns": 255
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17126,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10275,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4545,
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
                "name": "malware_download",
                "count": 16155,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://62[.]60[.]226[.]140/files/7299809293/zlYuYkG[.]bat",
                    "hxxp://124[.]235[.]169[.]39:39615/i",
                    "hxxps://gd[.]ozzhlb[.]net/bin/stego_pefqx5myie[.]png"
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
                    "1[.]12[.]229[.]231",
                    "1[.]183[.]160[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1686,
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
                "name": " \"js.iclickfix\"",
                "count": 1562,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"flowerpii9831[.]life\"",
                    " \"147[.]45[.]71[.]191:443\"",
                    " \"158[.]94[.]208[.]87:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1423,
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
                "count": 1365,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"137[.]220[.]151[.]95:2222\"",
                    " \"117[.]72[.]182[.]5:888\"",
                    " \"8[.]163[.]98[.]217:8081\""
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
                "name": " \"unknown_loader\"",
                "count": 700,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"440c[.]en-us-theeloncod[.]com\"",
                    " \"zupee[.]download\"",
                    " \"yonodigona[.]com\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 688,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1"
                ]
            },
            {
                "name": "Vidar",
                "count": 679,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8508e14457ad7de321edddf3688e124d5f1d652c",
                    "9f0464e29fb94333e1ad31740bf4d4bff89cbd28",
                    "fd78e771cab22c3afad8a5d5c448ff05268f20dd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 51267,
        "lastCalculated": "2026-08-29 07:21 IST"
    }
};
