// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-01T22:10:38.001760+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-01T22:10:37.750760+05:30",
    "lastUpdatedFormatted": "Mar 01, 2026 at 10:10 PM IST",
    "comparisonPeriod": "Feb 28 \u2013 Mar 01, 2026",
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
                "hxxp://mimosawedding[.]vn/wp-content/themes/mimosa/languages/Antaii/home/id[.]html",
                "hxxp://mimosawedding[.]vn/wp-content/themes/mimosa/languages/Antaii/home",
                "hxxp://dancing-raindrop-014955[.]netlify[.]app/",
                "hxxps://eth[.]trusteeglobal[.]com/address/0xc136695159CFc79D9B63E88A02D11Be77de75a27/",
                "hxxps://robiox[.]com[.]py/users/358687988363/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 700,
                "newInLastHour": 72,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7c99023596af9048bbfb4d44f629950e35e7c94fab6b29324586125aa7489674",
                " \"7fdecc456a601dc61d8f0f75f44af834f8d1ebaf268f614231c56ba72ed4ea9f",
                " \"4127683f8121bbd4f55c3f3c72a80fca2b2095d93d3a2fd4f04b0eb91fc3cea7",
                " \"f654dd05e0a4b7c604f95160b8f7695883e70356fcb3c86ba6c6e4da30e26394",
                " \"f77d9073f461ce158971e66bd0dbec3273aba6c24fb3e8fe2ba4998dd7b59468"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1531,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1531,
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
                "1[.]170[.]61[.]110",
                "1[.]176[.]134[.]241",
                "1[.]176[.]134[.]250",
                "1[.]177[.]63[.]24",
                "1[.]181[.]114[.]38"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7758,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7758,
                "newInLastHour": 7758,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]164[.]174[.]157",
                "1[.]194[.]233[.]49",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22149,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22149,
                "newInLastHour": 22149,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://38[.]52[.]142[.]194:43236/i",
                "hxxp://123[.]11[.]77[.]120:60281/i",
                "hxxp://42[.]56[.]189[.]176:35780/bin[.]sh",
                "hxxp://36[.]88[.]164[.]210:38757/i",
                "hxxp://110[.]39[.]226[.]242:60782/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 911,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 911,
                "newInLastHour": 911,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"moldes1dollar[.]creamodashop[.]com\"",
                " \"mohamedismail[.]net\"",
                " \"mofonguitoshouse[.]com\"",
                " \"111[.]170[.]36[.]160:8585\"",
                " \"vortexdataserver1[.]mom\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9115,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9115,
                "newInLastHour": 8525,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "50b26b2afc3c8e881d4dee00bbaad11e2f74232a",
                "6f892ab7af6b9a1ff019ea78a091107536f00e81",
                "71d30109639e95033261ac02f9af0383f116b04d",
                "15f062f1105b3c69d4115feb35fa8a012b9e44bf",
                "f1bc1295c44190efd73ccd02bf1a141c6d734103"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 41085,
            "activeSources": 8,
            "criticalAlerts": 23342,
            "activeCampaigns": 107
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22748,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 639,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 594,
                "trend": "down",
                "percentage": -93
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
                "count": 22049,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]62[.]152[.]242:52632/i",
                    "hxxp://130[.]12[.]180[.]43/files/7471363698/g2zctI3[.]exe",
                    "hxxps://r3ulx0ht[.]vivaldicoke[.]digital/?=check&&actmn=aJvdwQbuIczacozp"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]170[.]61[.]110",
                    "1[.]176[.]134[.]241",
                    "1[.]176[.]134[.]250"
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
                "name": "Generic Phishing",
                "count": 295,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://mimosawedding[.]vn/wp-content/themes/mimosa/languages/Antaii/home/id[.]html",
                    "hxxp://mimosawedding[.]vn/wp-content/themes/mimosa/languages/Antaii/home",
                    "hxxp://dancing-raindrop-014955[.]netlify[.]app/"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 237,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f893677414d3e535739934646d783958e1f54d7c25efb9181f5d853f24e41be5",
                    " \"f3a2aa787edbfbc232f116465a70353ef04666daa12f987af552e9f4aae93a07",
                    " \"c9338c4441fcff1e53ccf7cb47a00dd1efa1e3c14aa1fa03ab8eae200fb15a95"
                ]
            },
            {
                "name": " \"n/a",
                "count": 216,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"7b56bf129830c3a1545910ffb3acb0e4e0307aa53ec01b258eacd831fcaab71f",
                    " \"15b9f7098de5762f0a86cb8adfd954f37c2454da562b113b58d198bdb5800f3b",
                    " \"4a8751808fdf81e5819fd4c299bf1dd09547c938f63721e3820623bd8771a6cc"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 209,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"5tdxu[.]sa[.]com\"",
                    " \"conciathumli[.]za[.]com\"",
                    " \"iop2[.]ru[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 185,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f1bc1295c44190efd73ccd02bf1a141c6d734103",
                    "3257aeb7699555559ab3f9b109e2c761e7939389",
                    "567366638bf367630666c5ae9af1421fb2248f87"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 133,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]117[.]160[.]67:7443\"",
                    " \"104[.]208[.]24[.]64:8443\"",
                    " \"52[.]44[.]43[.]202:443\""
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 116,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://projecttetstts23r22we[.]pages[.]dev/\"",
                    " \"hxxp://tri-county-air[.]pages[.]dev/\"",
                    " \"hxxp://projectsharex0987y6tgv[.]pages[.]dev/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 54718,
        "lastCalculated": "2026-03-01 22:10 IST"
    }
};
