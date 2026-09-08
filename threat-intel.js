// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-08T09:55:09.523751+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-08T09:55:09.176329+05:30",
    "lastUpdatedFormatted": "Sep 08, 2026 at 09:55 AM IST",
    "comparisonPeriod": "Sep 07 \u2013 Sep 08, 2026",
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
                "hxxps://www[.]roblox[.]com[.]bi/users/232134073038/profile",
                "hxxp://m[.]shenglongmuyi[.]cn/index[.]html",
                "hxxps://www[.]roblox[.]com[.]ml/users/214203311298/profile",
                "hxxps://u[.]to/blox-fruits-private-server-code-231241732343237023930417434378/P3_uIg",
                "hxxps://https-wwwv-roblox[.]co/share?code=f486a87fb2a847e5f9a2693cc852c2ad&type=Server"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 899,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 899,
                "newInLastHour": 85,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"39bd8e920636476e5816985e8f363966ff76c66dbbfdda45aa967d29b14e539c",
                " \"ed6d05c9cfb0055bf4c00b80d6bb9c8353aa7deb6625b1861a12e994570a40c2",
                " \"5b35e644be1e8e43a1fcab04c7b9b656e18c573fd9d519e431f9a2f52987e71c",
                " \"1d37a1a5605c36b1f06174151af5791b0e818810a962053c7d043cde5f67621f",
                " \"5478cbc19129559bd58329a0ce9e2953ca0b349e19240e22b5d8446b26d2000a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1653,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1653,
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
                "1[.]119[.]194[.]253",
                "1[.]183[.]224[.]115",
                "1[.]191[.]147[.]236",
                "1[.]192[.]178[.]237"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5551,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5551,
                "newInLastHour": 5551,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]174[.]208[.]30",
                "1[.]20[.]94[.]169",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13611,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13611,
                "newInLastHour": 13611,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]62[.]146[.]115:39533/i",
                "hxxp://42[.]232[.]235[.]34:46172/i",
                "hxxp://115[.]62[.]146[.]115:39533/bin[.]sh",
                "hxxp://42[.]232[.]235[.]34:46172/bin[.]sh",
                "hxxp://182[.]116[.]88[.]124:46504/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7389,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7389,
                "newInLastHour": 7137,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"154[.]91[.]62[.]118:8094\"",
                " \"154[.]91[.]62[.]113:8094\"",
                " \"154[.]91[.]62[.]112:8094\"",
                " \"154[.]91[.]62[.]119:8094\"",
                " \"slippery971[.]workers[.]dev\""
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
            "iocCount": 10468,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10468,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b5daf66c6f8a99f2d6fe3fc678264598ec140049",
                "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18",
                "206850b799a53982b73accdefec94083f2094a6e",
                "e00005ae100b2af24cf6d7f71b7cd123f8b916be",
                "2a2c44f91a961c0b573d1e823f314fb4ffbc88dd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50835,
            "activeSources": 8,
            "criticalAlerts": 26369,
            "activeCampaigns": 252
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15732,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10637,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4335,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]59[.]169",
                    "1[.]145[.]32[.]156",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 14858,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]119[.]160[.]167:51257/i",
                    "hxxp://115[.]57[.]251[.]81:37477/i",
                    "hxxp://125[.]44[.]215[.]218:54441/bin[.]sh"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1724,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"badger-kuis-vnex5[.]life\"",
                    " \"rock[.]betweenthebunz[.]co\"",
                    " \"ira-company[.]com\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1707,
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
                "count": 1444,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18",
                    "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
                    "78527fc92bcf8d188b3bcab1b35ac5881e2aaa43"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1311,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"209[.]200[.]246[.]194:53\"",
                    " \"webuser[.]n1u89dhs[.]xyz\"",
                    " \"cs2[.]acsdomaindsadas[.]click\""
                ]
            },
            {
                "name": "Vidar",
                "count": 770,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97",
                    "1baea4f8295715f075d3c0510b61017840047ae3",
                    "4454daf3ef7f7d71cf8e4ce8067c880f9976c952"
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
                "count": 703,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2",
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 593,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"usembassytiranaaera[.]org\"",
                    " \"ukrtrade[.]biz\"",
                    " \"www[.]turkeyhillwildlife[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 41690,
        "lastCalculated": "2026-09-08 09:55 IST"
    }
};
