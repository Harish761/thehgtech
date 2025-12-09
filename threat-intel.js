// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-10T02:00:27.368584+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-10T02:00:26.999250+05:30",
    "lastUpdatedFormatted": "Dec 10, 2025 at 02:00 AM IST",
    "comparisonPeriod": "Dec 09 \u2013 Dec 10, 2025",
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
                "hxxps://roblox[.]com[.]ge/games/2753915549/Blox-Fruits?privateServerLinkCode=33305052478489294833197911204491",
                "hxxps://roblox[.]com[.]ml/communities/3100973784/",
                "hxxp://coiinbasawallatextensonweb3[.]created[.]app/",
                "hxxp://reservation[.]thailand-id5272[.]com/LSPLZWV4/",
                "hxxp://nadx-us-en[.]addpotion[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1536,
                "newInLastHour": 46,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2229d93f6a97610c642b07f6849510b6e72ac3d19ce60f13bf3df253ab7e1cf2",
                " \"2e16f69641a223aaacdf4f55696a4c6cae94a1529d2b801a4b50e6044e7d6794",
                " \"09aa3df0913749e11f49c9465be5ac92a3fd8585bb1f87f649a63af6ad61c428",
                " \"01f007821935462819bdd4362f4988a6630441039b6aa520010241c59c738d91",
                " \"db72cdb5ae27046822e32a6fbc41cf200c1df177ab3b94a367f7ae7a5094d6e2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1497,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1497,
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
                "1[.]1[.]176[.]58",
                "1[.]15[.]118[.]23",
                "1[.]176[.]134[.]251",
                "1[.]177[.]162[.]4",
                "1[.]177[.]22[.]68"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6528,
                "newInLastHour": 6528,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]15[.]24[.]14",
                "1[.]162[.]251[.]28",
                "1[.]194[.]200[.]251",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29052,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29052,
                "newInLastHour": 29052,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://kn6m[.]tinkerstep[.]ru/03nwqnet",
                "hxxp://42[.]226[.]67[.]7:60294/bin[.]sh",
                "hxxp://222[.]141[.]10[.]32:57156/bin[.]sh",
                "hxxp://221[.]15[.]14[.]164:49704/bin[.]sh",
                "hxxp://123[.]14[.]73[.]41:39061/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4737,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4737,
                "newInLastHour": 4329,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"nexus[.]tinkerstep[.]ru\"",
                " \"kn6m[.]tinkerstep[.]ru\"",
                " \"spinner[.]tinkerstep[.]ru\"",
                " \"13[.]218[.]69[.]176:53282\"",
                " \"103[.]177[.]46[.]29:3790\""
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
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8601,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8601,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c078625aea4e1e9c0adf87a8a36998d6feab851a",
                "6ddf090c6ddcee20ae94b25b9a2944541620a64b",
                "f428360c1605f4853897e7fcc6805ab3c327e207",
                "4fc7ae833fc2ba4f6c54e180849c7f4ecaca1b1a",
                "e2293f74d8d72bde90bb0424038259a9e3126e1b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 60725,
            "activeSources": 8,
            "criticalAlerts": 39154,
            "activeCampaigns": 226
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30577,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8577,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2027,
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
                "count": 29031,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://stelyx[.]starl1ght[.]ru/mc0svnbc",
                    "hxxp://61[.]53[.]85[.]3:44521/i",
                    "hxxp://115[.]48[.]237[.]144:46345/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]15[.]118[.]23",
                    "1[.]176[.]134[.]251"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 1946,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://mossyden2011[.]sbs/b5a52ebb310b65f06dd10cfe69f72363/yj41avk5qvkdmvo\"",
                    " \"hxxp://mossyden2011[.]sbs/b5a52ebb310b65f06dd10cfe69f72363/ufcx6bc1ef45e7g\"",
                    " \"hxxp://mossyden2011[.]sbs/b5a52ebb310b65f06dd10cfe69f72363/m3o1azkhufs1enk\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1497,
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
                "count": 1359,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195",
                    "463d2faa6b38a16140bc5dc7cfbffc6c5d30761c"
                ]
            },
            {
                "name": " \"win.dcrat\"",
                "count": 762,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"69[.]167[.]11[.]28:443\"",
                    " \"54[.]38[.]110[.]98:22\"",
                    " \"xoilaczk[.]net\""
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
                "count": 593,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d5c32a9bf92da1d16d0558ed2ed9f19c821c8a9",
                    "31e9cb5ace32adba5c43bce257a6396f9fa0f21c",
                    "9432f61b3afd49f0c35b548b09db103221d9b8c5"
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
                "name": " \"unknown\"",
                "count": 388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://adrianadecastrojewelry[.]com/\"",
                    " \"hxxps://amenom[.]jp/\"",
                    " \"heronwater1337[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 55258,
        "lastCalculated": "2025-12-10 02:00 IST"
    }
};
