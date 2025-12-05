// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-05T22:08:03.435622+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-05T22:08:03.080309+05:30",
    "lastUpdatedFormatted": "Dec 05, 2025 at 10:08 PM IST",
    "comparisonPeriod": "Dec 04 \u2013 Dec 05, 2025",
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
                "hxxps://click-now-appeal[.]page[.]gd/",
                "hxxps://engr-oli[.]github[.]io/251205-amazon[.]com-oli/",
                "hxxp://rabbit231[.]github[.]io/bliss",
                "hxxp://pub-ffebc89527c34624b07a3358e969f5c1[.]r2[.]dev/index[.]html",
                "hxxp://pub-f31c58a60d314dd3916990ca6cde67a5[.]r2[.]dev/index[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1112,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1112,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e3f1902421faae100167994834c994a1ae8c66ff91955011f85cc99339cd97e1",
                " \"d20d68a0f4827677ae52f3f03f80b61e3ab99c1879abc3327fc679790e3fc186",
                " \"3652e0279435be214791abc22275875ba3456a25719e40ef498e2dd0a3b11721",
                " \"549a2ef27e60dc1550032622ce3c85b5b5b3fdceabdfc318342f1c24e55614bf",
                " \"6b07ab113fff683bf9ee68a55861ccccbb90ed42b0dd6e25976a01db96cc1953"
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
                "1[.]116[.]180[.]98",
                "1[.]117[.]17[.]128",
                "1[.]15[.]118[.]23",
                "1[.]15[.]20[.]205",
                "1[.]176[.]134[.]242"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5299,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5299,
                "newInLastHour": 5299,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]123[.]48",
                "1[.]13[.]19[.]219",
                "1[.]161[.]45[.]32",
                "1[.]161[.]58[.]137",
                "1[.]168[.]241[.]144"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29611,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29611,
                "newInLastHour": 29611,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]115[.]223[.]27:44964/i",
                "hxxp://110[.]37[.]56[.]54:54112/bin[.]sh",
                "hxxp://103[.]77[.]241[.]135/00101010101001/morte[.]arm5",
                "hxxp://103[.]77[.]241[.]135/00101010101001/morte[.]arm6",
                "hxxp://103[.]77[.]241[.]135/00101010101001/morte[.]arm7"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1035,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1035,
                "newInLastHour": 802,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"forest[.]firecrest[.]ru\"",
                " \"121[.]127[.]41[.]143:25461\"",
                " \"85[.]187[.]200[.]250:4807\"",
                " \"h3[.]darkh1ll[.]ru\"",
                " \"162[.]216[.]243[.]228:1804\""
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
                "152[.]89[.]239[.]34",
                "162[.]243[.]103[.]246",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8565,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8565,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "999bb8821f120870be5aa56ec743627cf67ffd17",
                "dc0113fb2c5c3bcd8dcad83080861eaa9e9b4156",
                "0831c75f233d7a6b5069670d3b862817ea50b533",
                "463d2faa6b38a16140bc5dc7cfbffc6c5d30761c",
                "2f5dc800ba6e420a1019dc0fd14226f205ed0835"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57158,
            "activeSources": 8,
            "criticalAlerts": 39271,
            "activeCampaigns": 239
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30729,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8542,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 472,
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
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 29526,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]137[.]38[.]193:36674/bin[.]sh",
                    "hxxp://110[.]37[.]5[.]110:35768/bin[.]sh",
                    "hxxp://196[.]191[.]128[.]2:39257/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]116[.]180[.]98",
                    "1[.]117[.]17[.]128",
                    "1[.]15[.]20[.]205"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1494,
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
                "count": 1357,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "463d2faa6b38a16140bc5dc7cfbffc6c5d30761c",
                    "3581e9cc8d250929c19ac08fd592430cd63145ba",
                    "1af063753cd3a9491c82807c3e25f805519c6e5a"
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
                "name": " \"Mirai",
                "count": 586,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"18061ed8b454556d97f48b7a736a14ea852aef1d07b573b0ffb22912539d06a6",
                    " \"234cc4e68ba76b24903846332b595297fa119e970580901e44f5236f2332901c",
                    " \"e4e358c107cdf3f769d62887a0a9aab2f77cf6e01127b4a8a7e2dd34cd53cacd"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 533,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1d28cc6dca52e95f859739c39a04d794671f66d9",
                    "7b7c48a7d10c11ab988801fec68db41f6935ecf4",
                    "b57cc0f34294222d350c45d62c735547c8882195"
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
        "totalAttacksThisHour": 51079,
        "lastCalculated": "2025-12-05 22:08 IST"
    }
};
