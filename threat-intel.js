// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-17T14:07:27.801673+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-17T14:07:27.550865+05:30",
    "lastUpdatedFormatted": "Jan 17, 2026 at 02:07 PM IST",
    "comparisonPeriod": "Jan 16 \u2013 Jan 17, 2026",
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
                "hxxp://www[.]info-resmi849[.]blogspot[.]com/",
                "hxxps://go[.]ly/roblox-user-375386257294-profile",
                "hxxp://cn[.]manmvp572[.]com/",
                "hxxps://decoriumhouse[.]com/",
                "hxxps://att-login4382[.]weeblysite[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 618,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c4db60ad25020b35b573f02de1913a18d008b84c054ed56624056f8260be51e3",
                " \"bc5cc133d250058080a284fb1f6ce394f588b8363d4ec7fa8af163acce309da6",
                " \"01e0a45b8719e9571decb88aef9a0c46a70b34045818ab5074b1cc4a0065a40b",
                " \"9affdd7320dda529271f43090f8b8c3e82963d382e21a73d00cde6068090252f",
                " \"a30ce984361d2929f4781e276d4eb7eae30a49c9fcfc0154a7bab69608ab660e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1461,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1461,
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
                "1[.]0[.]170[.]118",
                "1[.]0[.]202[.]30",
                "1[.]0[.]214[.]168",
                "1[.]0[.]214[.]175",
                "1[.]0[.]249[.]51"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5887,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5887,
                "newInLastHour": 5887,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]12[.]141",
                "1[.]15[.]114[.]102",
                "1[.]162[.]249[.]243",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23407,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23407,
                "newInLastHour": 23407,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]122[.]221[.]197:36131/i",
                "hxxp://110[.]37[.]52[.]120:35861/i",
                "hxxp://59[.]42[.]90[.]127:56735/bin[.]sh",
                "hxxp://150[.]241[.]230[.]84/hiddenbin/boatnet[.]arm7",
                "hxxp://119[.]115[.]78[.]38:54675/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1454,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1454,
                "newInLastHour": 1434,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"116[.]102[.]228[.]216:8000\"",
                " \"72[.]60[.]126[.]32:443\"",
                " \"130[.]12[.]182[.]181:2404\"",
                " \"45[.]136[.]15[.]98:80\"",
                " \"60[.]205[.]123[.]87:80\""
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
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "34[.]204[.]119[.]63",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8802,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8802,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e1eee0b991daeddda5eb790822cace341505480d",
                "6ea8fc3980ed947d6d2c509c02a2e439c8d5f7e1",
                "9b483450f76d361de12dac4cdfe6370f291692b9",
                "61e69d864771077edac32b3fad04fbf6f6060929",
                "c8e6ce07c7fdb13a8c284698d3dd604857a1147e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 42556,
            "activeSources": 8,
            "criticalAlerts": 24304,
            "activeCampaigns": 107
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24020,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1369,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 284,
                "trend": "down",
                "percentage": -96
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
                "count": 23372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://46[.]200[.]60[.]108:49805/bin[.]sh",
                    "hxxp://42[.]224[.]57[.]140:38854/i",
                    "hxxp://60[.]211[.]68[.]247:45675/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]170[.]118",
                    "1[.]0[.]202[.]30",
                    "1[.]0[.]214[.]175"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1461,
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
                "name": " \"win.formbook\"",
                "count": 389,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]y1675[.]top\"",
                    " \"www[.]yaksa[.]tech\"",
                    " \"www[.]ydnkll[.]top\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 294,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://www[.]info-resmi849[.]blogspot[.]com/",
                    "hxxps://go[.]ly/roblox-user-375386257294-profile",
                    "hxxp://cn[.]manmvp572[.]com/"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 275,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"134[.]199[.]229[.]117:80\"",
                    " \"89[.]125[.]255[.]162:7443\"",
                    " \"34[.]26[.]141[.]70:443\""
                ]
            },
            {
                "name": " \"win.phorpiex\"",
                "count": 238,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://195[.]178[.]136[.]19/forg\"",
                    " \"tldrzone[.]top\"",
                    " \"tsrv5[.]top\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 232,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"de13418767bb55e4cd8182ae1158448deb7bfc619d2858f0e020fbe368099082",
                    " \"4b52d1b1539c60adb4fb9ce833b2d007bc4570a0810fb2529ff650e02d791c15",
                    " \"efbb64104422651f957cd2a2f5b1330882ce3b1c5ba69f3f1ecaa1e9c710505f"
                ]
            },
            {
                "name": " \"n/a",
                "count": 145,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"86cf13cfb953cbfb8d1167f259928bb200a9e953ba8a45d5d71e9252f05ba009",
                    " \"cfe5007c67bc42dd8bdfdcf6bdbdc568714726c31766bd8ba9f1dc74f5962317",
                    " \"fd0ad75d830feb3779c51b61a2a0e0b866b203438ec1b5b4c3c5952c3fddc818"
                ]
            },
            {
                "name": "Vidar",
                "count": 104,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61e69d864771077edac32b3fad04fbf6f6060929",
                    "c8e6ce07c7fdb13a8c284698d3dd604857a1147e",
                    "1ce3a4fc71eb5165aec6217b908ba97fdf3fbc0a"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 54564,
        "lastCalculated": "2026-01-17 14:07 IST"
    }
};
