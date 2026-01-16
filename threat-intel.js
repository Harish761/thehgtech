// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-17T00:26:33.600488+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-17T00:26:33.297558+05:30",
    "lastUpdatedFormatted": "Jan 17, 2026 at 12:26 AM IST",
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
                "hxxps://proxofive[.]cc:443/newtransfer",
                "hxxps://r[.]godprox[.]cc/go/y2b403/03a4/",
                "hxxp://businessgolos[.]ru/hatcces/nickel/clients/",
                "hxxp://bafybeifisnl2ds5xiv6ip76ppn3honte5z7kacfhp3gpgdisk7gr2w5pqm[.]ipfs[.]dweb[.]link/",
                "hxxp://kucoinlgini[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 658,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 658,
                "newInLastHour": 106,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b3785ce6d33809a45a6217d12cd1b2040715617f76afc69a6b92629efbed23f8",
                " \"c827699ba7634075d1ea4653d1c23fb82474593ae3fe9425ff027ac15788ef6f",
                " \"d0b25d94a4ce13959db8529e67fa22ae4c60a923e7dfc5a96954f971c80f9760",
                " \"ab6a0ccbf3d0bf03fb43ca5fe80d95296c7b63e4f432cec335312f76a5fefaf2",
                " \"0a312098ae47179960b4b1f75b1613f6f2f9ebda11884c2f7840824eecc8f8a1"
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
                "newInLastHour": 12,
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
                "1[.]0[.]249[.]51",
                "1[.]15[.]118[.]23",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4535,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4535,
                "newInLastHour": 4535,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]14[.]12[.]141",
                "1[.]14[.]254[.]146",
                "1[.]161[.]49[.]101",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24114,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24114,
                "newInLastHour": 24114,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]56[.]8[.]128:46729/bin[.]sh",
                "hxxp://47[.]86[.]96[.]183:443/02[.]08[.]2022[.]exe",
                "hxxp://42[.]235[.]69[.]199:50181/i",
                "hxxp://47[.]98[.]253[.]102/02[.]08[.]2022[.]exe",
                "hxxp://47[.]109[.]59[.]81:8888/02[.]08[.]2022[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1510,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1510,
                "newInLastHour": 1510,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"49[.]119[.]117[.]16:10250\"",
                " \"39[.]40[.]143[.]246:995\"",
                " \"3[.]33[.]154[.]23:443\"",
                " \"207[.]56[.]205[.]208:443\"",
                " \"207[.]56[.]202[.]164:443\""
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
            "iocCount": 8791,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8791,
                "newInLastHour": 6,
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
            "totalIndicators": 51642,
            "activeSources": 8,
            "criticalAlerts": 33417,
            "activeCampaigns": 206
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24643,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8774,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1380,
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
                "count": 24020,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://87[.]121[.]84[.]189/deals/xwormsolu2026[.]txt",
                    "hxxp://45[.]144[.]212[.]54/BIN/ofu[.]ps1",
                    "hxxp://117[.]220[.]78[.]81:52789/bin[.]sh"
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
                    "1[.]0[.]249[.]51"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1449,
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
                "count": 1371,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1eee0b991daeddda5eb790822cace341505480d",
                    "8262ac683ec151cc53cb28d382ab595a7cb5aa3c",
                    "fb503acf7aee005f9d10bd635e9f6f8e12a1b309"
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
                "count": 608,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "68cda8cc402c23eb7b13968c1e8f01aae03db4bb",
                    "b22fd267edd11cd730bbc12794103f4f4bd1c28d",
                    "588bfb310a84e9090cac64559864fb3ec92fc706"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
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
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45588,
        "lastCalculated": "2026-01-17 00:26 IST"
    }
};
