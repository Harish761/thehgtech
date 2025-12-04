// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-04T18:33:20.640423+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-04T18:33:20.266706+05:30",
    "lastUpdatedFormatted": "Dec 04, 2025 at 06:33 PM IST",
    "comparisonPeriod": "Dec 03 \u2013 Dec 04, 2025",
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
                "hxxps://public[.]gensparkspace[.]com/api/files/s/R6qWh9MT",
                "hxxp://metamsk_loogii[.]godaddysites[.]com/",
                "hxxp://zimbra-mail[.]pages[.]dev/",
                "hxxp://microsoft-copilot-porxy-5sv[.]pages[.]dev/login[.]srf?wa=wsignin1[.]0",
                "hxxp://microsoft-copilot-porxy-hns[.]pages[.]dev/login[.]srf?wa=wsignin1[.]0"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1064,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1064,
                "newInLastHour": 79,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e3888ed6bc225dc6656ee02a4dcd5608f7901ebfb6ba665fc3a5e0956c40621e",
                " \"cec28cdad6cfe852ccf9ff9b44d22e8a39a2e5a668970c968634dcd081c8249c",
                " \"1ba51b481413f35cda4b682af825344686c521fb4da6709a13b85ff2ac6b3637",
                " \"f59b5224efac776a01675db6d391971c9ffd0a4535f9f19002b169f7c7f50f71",
                " \"21cb07f97127a5427603d9d9540c68e0fce7e1d4863216d86799a84f32074d05"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1458,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1458,
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
                "1[.]116[.]180[.]98",
                "1[.]117[.]17[.]128",
                "1[.]14[.]3[.]240",
                "1[.]15[.]20[.]205"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5228,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5228,
                "newInLastHour": 5228,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]161[.]58[.]137",
                "1[.]168[.]241[.]144",
                "1[.]194[.]200[.]251",
                "1[.]194[.]239[.]240",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29591,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29591,
                "newInLastHour": 29591,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://95[.]163[.]83[.]87/mips",
                "hxxp://95[.]163[.]83[.]87/arm4",
                "hxxp://95[.]163[.]83[.]87/arm5",
                "hxxp://95[.]163[.]83[.]87/mpsl",
                "hxxp://95[.]163[.]83[.]87/arm7"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1514,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1514,
                "newInLastHour": 1090,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"googlecret[.]com\"",
                " \"2v2[.]space\"",
                " \"09[.]brightpeak[.]ru\"",
                " \"23ra[.]b2yh7ean[.]ru\"",
                " \"hxxps://new[.]borealis-soft[.]ch/wp-content/plugins/background-image-cropper/ulgfpl[.]php?us=5yb8t352\""
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
            "iocCount": 8556,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8556,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3581e9cc8d250929c19ac08fd592430cd63145ba",
                "1af063753cd3a9491c82807c3e25f805519c6e5a",
                "c31308a551fcc811ddcd8af515501106bd1b9e7f",
                "df26c9fe62f56d8f47d090c6bb1cd49653f16625",
                "c9863652b26032c9a713ab5312ed7f7cf5058c94"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57422,
            "activeSources": 8,
            "criticalAlerts": 39127,
            "activeCampaigns": 242
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30597,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 8530,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 571,
                "trend": "stable",
                "percentage": 8
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
                "count": 29487,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]9[.]26[.]123:41598/bin[.]sh",
                    "hxxp://115[.]50[.]201[.]38:51419/bin[.]sh",
                    "hxxp://182[.]126[.]94[.]191:52743/i"
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
                    "1[.]116[.]180[.]98",
                    "1[.]117[.]17[.]128"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1458,
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
                "count": 1353,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b6510825c2c07b1bf03f200b2a91a4ffe5f4daed",
                    "6137c89b82c858af9f0101ebc77af7d262ce5b73",
                    "6f6c70df3fd9f7a5f984e44b63720d670ea7ee0f"
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
                "count": 538,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"cf9e440c713a4e61cbff76228bf5f219be075e47a2eff4f1529e7739667350b3",
                    " \"1a122250e50018b358d530b5e2a700ae312a80de5e7358ecc19acb7604b5afc3",
                    " \"9ef27ba77690d2a36b187ac021f73b2ff7a3f3150d0372587823b1d675349690"
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
        "totalAttacksThisHour": 51295,
        "lastCalculated": "2025-12-04 18:33 IST"
    }
};
