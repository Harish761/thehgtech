// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-08T21:06:19.581682+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-08T21:06:19.228904+05:30",
    "lastUpdatedFormatted": "Oct 08, 2026 at 09:06 PM IST",
    "comparisonPeriod": "Oct 07 \u2013 Oct 08, 2026",
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
                "hxxps://usps-email[.]com/",
                "hxxp://trusted-connection-anchor-182fu9ada8[.]s3[.]eu-west-1[.]amazonaws[.]com/gbp40plrdgwf5icw9h3z[.]html",
                "hxxps://office[.]biogeen[.]sbs/common/federation/oauth2msa",
                "hxxp://inregisterworkshop[.]com/",
                "hxxp://ebqprupn[.]biogeen[.]sbs/oauth20_authorize[.]srf?scope=openid%20profile%20email%20offline_access"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 863,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 863,
                "newInLastHour": 238,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"bd471bd2e0b469dc1b42fc369847fe49ca2247be251363f290b1b8cff1d54408",
                " \"be65797d62ee77d94954f8fb367428f7c37f0a183f93c4a743a1ad9cfe393066",
                " \"93a02e28c64549669aaf37b557849b148f2dde48e895c0e6c9c519b8ae517e39",
                " \"9bf6e7fd924aa4aff92bb5db0705d5300e7a6e199c73be2fc9bdecb9819194fe",
                " \"aeaafb0a5653d4ae748e70b19d83c05a5c762dc6a5181c4c03410e8e881fae01"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1670,
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
                "1[.]179[.]41[.]48",
                "1[.]192[.]129[.]106",
                "1[.]193[.]58[.]33",
                "1[.]193[.]63[.]3",
                "1[.]20[.]218[.]10"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4751,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4751,
                "newInLastHour": 4751,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]145[.]25[.]235",
                "1[.]160[.]214[.]25"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 32606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 32606,
                "newInLastHour": 32606,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://210[.]208[.]110[.]147:47846/bin[.]sh",
                "hxxp://115[.]52[.]197[.]166:50949/bin[.]sh",
                "hxxp://222[.]137[.]72[.]136:54589/i",
                "hxxps://download1472[.]mediafire[.]com/svlromhuu0fgbeT1VDGW6vzmExzvuu304WFLhbLzLpXwokLP17DRHd-b4tNEswcE4dOgSSeiz3hW-yKZXQh44ZZcjX3Qn40p-khBAo574f5PdKPCSLkRhm4RRa6eznKORrHCGpB1jxFHQY-pqlyo-XwcFmXiqyK8hQPFklc/b9htoqy9l9sgfdx/bfeegNota1Q9TL2[.]95789[.]40552Copia[.]zip",
                "hxxp://60[.]22[.]8[.]194:38407/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6512,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6512,
                "newInLastHour": 5895,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/8ec144b01a/4c3be-d997-4c13-a86f-30ac5aee2ae6/6cc-8ed4f452d693\"",
                " \"hxxp://caxools[.]click:7728/collections\"",
                " \"hxxp://bravplo[.]click:7713/contacts\"",
                " \"hxxp://flreaow[.]click:6527/projects\"",
                " \"hxxp://fezm[.]website:9048/reviews\""
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
            "iocCount": 10878,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10878,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1ccf99a4deb337e800230280e82782da64384694",
                "0916fba7d3ffe7cf2d7f6803f098cdc96077a842",
                "001a8f07b150e2b1d6bcb715fd95c20a1e24dac3",
                "97b346a6656f38507fae979537c0baa86186a2d7",
                "a095f06a7ac8b272c1dd2e14e3b2508f4e4f86e3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 69102,
            "activeSources": 8,
            "criticalAlerts": 43989,
            "activeCampaigns": 295
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33097,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10892,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4313,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
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
                "count": 31765,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://raw[.]githubusercontent[.]com/clatthys/EulenCheats-FiveM/HEAD/Loader[.]exe",
                    "hxxps://raw[.]githubusercontent[.]com/ys3ngd/WarzoneExternalCheat/HEAD/Loader[.]exe",
                    "hxxps://raw[.]githubusercontent[.]com/comptess/Exodus-Larp-Tool/HEAD/Exodus[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]29[.]140",
                    "1[.]179[.]41[.]48"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1736,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://pastebin[.]com/raw/tpQx02nZ\"",
                    " \"hxxps://pastebin[.]com/raw/TWUtCzmt\"",
                    " \"hxxps://pastebin[.]com/raw/tctVXH33\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1669,
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
                "count": 1459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1285,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"31[.]207[.]4[.]106:443\"",
                    " \"114[.]215[.]184[.]158:8000\"",
                    " \"hxxp://69[.]49[.]229[.]88:443/MQEw\""
                ]
            },
            {
                "name": "Vidar",
                "count": 821,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18",
                    "6bfc8dafb875c3e2ae6476df215805eb15298cbb",
                    "7a9913813778b16a5bf57aeb7dea4c93340c79c0"
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
                "count": 715,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 631,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"93[.]152[.]214[.]174:443\"",
                    " \"84[.]200[.]91[.]170:56002\"",
                    " \"80[.]76[.]49[.]209:8080\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 58809,
        "lastCalculated": "2026-10-08 21:06 IST"
    }
};
