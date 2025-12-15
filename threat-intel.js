// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-15T14:16:25.585798+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-15T14:16:25.281598+05:30",
    "lastUpdatedFormatted": "Dec 15, 2025 at 02:16 PM IST",
    "comparisonPeriod": "Dec 14 \u2013 Dec 15, 2025",
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
                "hxxp://www[.]domainfortesting[.]space/",
                "hxxps://betww[.]cm/",
                "hxxps://www[.]betqq[.]cm/",
                "hxxp://www[.]betuu[.]cm/",
                "hxxp://fatmaciba-cpu[.]github[.]io/javascript-search-filter"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1019,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1019,
                "newInLastHour": 158,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"32252a6cf311b03cdfe25ce1ba008b474369e323e41d7f99f1aebbcf129ab31b",
                " \"e65a58a7827abbdff3c349958c83633e25adf8217048e0cb4400c1b13ebd4edf",
                " \"025c8513b71051fa81c1e6f12bdae897b90aa74c75dda2d21304824f7320a47a",
                " \"9a39423ec90dc06a3058279cd744c08d83252d1c7096633b9853e435cc205755",
                " \"adef30df8354575e73fc75c36058203e6fa2ee164467b381816582624823da84"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1495,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1495,
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
                "1[.]1[.]179[.]25",
                "1[.]123[.]20[.]64",
                "1[.]161[.]61[.]55",
                "1[.]181[.]114[.]38",
                "1[.]193[.]63[.]133"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6104,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6104,
                "newInLastHour": 6104,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]179[.]25",
                "1[.]13[.]175[.]150",
                "1[.]162[.]207[.]22",
                "1[.]162[.]231[.]97",
                "1[.]194[.]200[.]251"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25192,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25192,
                "newInLastHour": 25192,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://facet2[.]crystalroad[.]ru/cn5s982a",
                "hxxps://prism[.]crystalroad[.]ru/79caiit5",
                "hxxps://prism[.]crystalroad[.]ru/maevxvaj",
                "hxxps://pier4[.]safebr1dge[.]ru/t8kfejbt",
                "hxxps://pier4[.]safebr1dge[.]ru/jhgx7fop"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1066,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1066,
                "newInLastHour": 918,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"allahuhq7777-54726[.]portmap[.]host\"",
                " \"school-argument[.]gl[.]at[.]ply[.]gg\"",
                " \"maroni823[.]sytes[.]net\"",
                " \"hxxp://www[.]zzepms[.]com/askhelp52/askinstall52[.]exe\"",
                " \"hxxps://cdn[.]discordapp[.]com/attachments/873244194234318850/895746980494585856/pctool[.]exe\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8631,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "49b2e8a3d6248c6c13dae420dcf4b636eec3c5a8",
                "bf39408fcf66c8f2d9018d2aeb6bf743cf4ecabc",
                "42db76d7258b5310c6fdf9cc4f7d6d206711ff9e",
                "605fedf5b6ba598a3446c6a99b1fd2a6a0fdb58c",
                "d83ae9ca38bbbd42120b5efa7a125d35a8ae429c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52533,
            "activeSources": 8,
            "criticalAlerts": 34735,
            "activeCampaigns": 188
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26127,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8608,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 549,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 25130,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://178[.]16[.]55[.]189/files/7044575709/ZcRUGDs[.]exe",
                    "hxxps://arid[.]clears0il[.]ru/iegknu4x",
                    "hxxps://arid[.]clears0il[.]ru/0gc5la9j"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]179[.]25",
                    "1[.]123[.]20[.]64",
                    "1[.]161[.]61[.]55"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1495,
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
                "count": 1360,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae6ca91be0e1145adf2f7120ca3edec533d7573f",
                    "aebe846393cee6199796dc1524f82c22f5f1bb35",
                    "2f0654bc0b155cba85aa0be287860feff2045195"
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
                "name": " \"Mirai",
                "count": 523,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"7668e3eb7c98c753acd6b56b52af72032180b1e1f7026dbef226729a1296ff9e",
                    " \"c641072d1954cb11e4cbf1d038b8f3a2a85368bf3b3879fad58004c38385a1ef",
                    " \"2c6baac5b8db2b028965241bcd7319b2e10ade6a14516639adeec3913a1dfb83"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 47677,
        "lastCalculated": "2025-12-15 14:16 IST"
    }
};
