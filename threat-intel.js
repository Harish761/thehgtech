// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-14T14:06:14.378583+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-14T14:06:14.008066+05:30",
    "lastUpdatedFormatted": "Dec 14, 2025 at 02:06 PM IST",
    "comparisonPeriod": "Dec 13 \u2013 Dec 14, 2025",
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
                "hxxps://7pysv[.]gobookroom[.]com/",
                "hxxps://www[.]roblox[.]com[.]ml/games/85624299453503/Ro63-Classic?privateServerLinkCode=08034712364736047870583759728244",
                "hxxps://s[.]strongestpasswords[.]com/education_redirect_second/8c5781c2-7b1e-4035-b1d7-990e269e5380",
                "hxxp://review[.]sharefiles[.]email/education_redirect_second?8c5781c2-7b1e-4035-b1d7-990e269e5380",
                "hxxp://review[.]sharefiles[.]email/secure/training/6422c2/8c5781c2-7b1e-4035-b1d7-990e269e5380?test=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 949,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 949,
                "newInLastHour": 42,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"da39e52b40e68244322fe6c7f56879d88b30ae7ed49e9721b83efe4463657aad",
                " \"7e9d3236eb6c30eaba04f7480a3b00aa2d0c990e101d120c11325e6b4faacdf8",
                " \"cf990c07f431feebbb06b928ee77b2882f7753c47f315fbdcdfbb6467c40eca3",
                " \"1b372092abd1c44a679af5d619466dc5a6092726af540ac5cb8936a345075810",
                " \"904a61a37592f6a7c9e5db72bc097782911ac5992b17c2188ae9c6306c41c1e2"
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
                "1[.]10[.]214[.]65",
                "1[.]1[.]179[.]25",
                "1[.]123[.]20[.]64",
                "1[.]15[.]118[.]23",
                "1[.]161[.]61[.]55"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6286,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6286,
                "newInLastHour": 6286,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]162[.]207[.]22",
                "1[.]162[.]231[.]97",
                "1[.]172[.]78[.]203",
                "1[.]20[.]220[.]158",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28541,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28541,
                "newInLastHour": 28541,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ember[.]bluef1re[.]ru/91j8hris",
                "hxxps://ember[.]bluef1re[.]ru/0s2f33xl",
                "hxxps://trace[.]bluef1re[.]ru/crj208q1",
                "hxxps://trace[.]bluef1re[.]ru/ib63yhgw",
                "hxxps://clear[.]bluef1re[.]ru/87llvjf1"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1051,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1051,
                "newInLastHour": 1051,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ember[.]bluef1re[.]ru\"",
                " \"trace[.]bluef1re[.]ru\"",
                " \"clear[.]bluef1re[.]ru\"",
                " \"45[.]93[.]20[.]50:80\"",
                " \"54[.]83[.]104[.]76:2405\""
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
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "bf39408fcf66c8f2d9018d2aeb6bf743cf4ecabc",
                "42db76d7258b5310c6fdf9cc4f7d6d206711ff9e",
                "605fedf5b6ba598a3446c6a99b1fd2a6a0fdb58c",
                "d83ae9ca38bbbd42120b5efa7a125d35a8ae429c",
                "b6bd6b04935cb770d7ddf5d5fb3dd11fffb7a7c3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55991,
            "activeSources": 8,
            "criticalAlerts": 38088,
            "activeCampaigns": 188
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 29488,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8600,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 728,
                "trend": "stable",
                "percentage": -2
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 28467,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://cask[.]kettle-wisp[.]ru/033v1aua",
                    "hxxps://cask[.]kettle-wisp[.]ru/j7oxddji",
                    "hxxps://ejt0w[.]kettlewisp[.]ru/kkpp168c"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]214[.]65",
                    "1[.]1[.]179[.]25",
                    "1[.]123[.]20[.]64"
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
                "count": 445,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"00004616a4439bef89793a721f16917c4799781cf7f604601047a549d29d8e5c",
                    " \"30a84c4b46c83af809fb730b84d432615ce4e175405f1cce22bf056c03d21d3b",
                    " \"43f131d3bb08eb2457bb1a7caf82b9b5916606c3beae99935b6466e6edc9b8db"
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
        "totalAttacksThisHour": 51232,
        "lastCalculated": "2025-12-14 14:06 IST"
    }
};
