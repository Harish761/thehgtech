// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-08T01:22:37.830974+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-08T01:22:37.474968+05:30",
    "lastUpdatedFormatted": "Sep 08, 2026 at 01:22 AM IST",
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
                "hxxps://loyaltyprogram[.]ink/aQzXm",
                "hxxp://hs393765aff890a3eac6911d6f8eb9dd9b[.]nexusqalinka2[.]quest/",
                "hxxp://www[.]hs393765aff890a3eac6911d6f8eb9dd9b[.]nexusqalinka2[.]quest/",
                "hxxps://ledgerw[.]vercel[.]app/login",
                "hxxps://zwjf76j-h07j[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 724,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 724,
                "newInLastHour": 98,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2786eb073b9d0c5c0ac144b8e0f5c5649bf8625168b5aaa08248b5ce7e5e898b",
                " \"29613d1dbf180223f502151ea17098145c71326ce109fb38d103035579e81858",
                " \"975a7ab200926687ed0a003a8f839e8126a795f2f5601e2c14d539b036f6450e",
                " \"d38f077b96a00aae266c00f630a7153c6bb89e6cebeb33d328ec11efa3fdbeda",
                " \"0becdca6e10561565ffa55124050064f5f83220301797aab955a55fab08ad937"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1704,
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
                "1[.]117[.]59[.]169",
                "1[.]119[.]194[.]253",
                "1[.]145[.]32[.]156",
                "1[.]15[.]14[.]29",
                "1[.]163[.]237[.]25"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5714,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5714,
                "newInLastHour": 5714,
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
            "iocCount": 14848,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14848,
                "newInLastHour": 14848,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://87[.]120[.]196[.]16:889/agustin51",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_d428ecd0038c581e[.]exe",
                "hxxp://45[.]61[.]150[.]229:8080/pear[.]exe",
                "hxxp://45[.]61[.]150[.]229:8080/dlr[.]vbs",
                "hxxp://45[.]61[.]150[.]229:8080/dl[.]hta"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7467,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7467,
                "newInLastHour": 7158,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"206[.]238[.]123[.]77:60443\"",
                " \"20[.]118[.]221[.]53:4321\"",
                " \"194[.]9[.]6[.]95:443\"",
                " \"194[.]59[.]30[.]123:56003\"",
                " \"172[.]111[.]201[.]220:3020\""
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
            "iocCount": 10643,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10643,
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
            "totalIndicators": 50344,
            "activeSources": 8,
            "criticalAlerts": 25972,
            "activeCampaigns": 253
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15335,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 10637,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4313,
                "trend": "stable",
                "percentage": 1
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
                    "1[.]119[.]158[.]77",
                    "1[.]145[.]32[.]156"
                ]
            },
            {
                "name": "malware_download",
                "count": 14627,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://210[.]208[.]110[.]51:43845/bin[.]sh",
                    "hxxp://123[.]11[.]217[.]41:39743/bin[.]sh",
                    "hxxp://222[.]140[.]180[.]172:33921/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1708,
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
                "count": 1707,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rock[.]betweenthebunz[.]co\"",
                    " \"ira-company[.]com\"",
                    " \"isabellemarier[.]ca\""
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
                "count": 1324,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]195[.]8[.]27:43001\"",
                    " \"103[.]204[.]174[.]212:18443\"",
                    " \"206[.]237[.]120[.]90:8443\""
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
                "name": " \"win.pure_rat\"",
                "count": 588,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]219[.]239[.]100:443\"",
                    " \"45[.]139[.]104[.]226:49001\"",
                    " \"31[.]57[.]38[.]7:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43123,
        "lastCalculated": "2026-09-08 01:22 IST"
    }
};
