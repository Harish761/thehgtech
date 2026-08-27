// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-27T15:00:03.627475+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-27T15:00:03.257348+05:30",
    "lastUpdatedFormatted": "Aug 27, 2026 at 03:00 PM IST",
    "comparisonPeriod": "Aug 26 \u2013 Aug 27, 2026",
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
                "hxxps://facebook-7[.]blogspot[.]com/?m=1",
                "hxxps://www[.]facebook-7[.]blogspot[.]com/?m=1",
                "hxxp://thirteenh[.]com/",
                "hxxps://start-trezsoriiio[.]gitbook[.]io/",
                "hxxps://fortnitewatch[.]top/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 881,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 881,
                "newInLastHour": 123,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d0a6bfc9f3ab087fd18b5256c56ede8a95a3ce90dbf059ffdf9ad0c52c86c34b",
                " \"c65eb5b1fa5e4422e585065c360999934e9e77c48af91bdc386e157538b51e91",
                " \"01afd92a73ffe2308a60f215b4999f4929b8b4f7f0aa2a053969fb994ac6743f",
                " \"74767c9861b094c67c72251577a61a4dac640532b2f9c3d97e77b00c15825687",
                " \"e3a66437a0da269213728ca97e4bd4179dac45110940ecd55ee488a6f2a13de2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1647,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1647,
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
                "2.27.62.0/24",
                "2.56.192.0/22"
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
                "1[.]12[.]229[.]231",
                "1[.]183[.]148[.]62",
                "1[.]188[.]5[.]46",
                "1[.]189[.]45[.]59"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5999,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5999,
                "newInLastHour": 5999,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]218[.]28",
                "1[.]14[.]64[.]225",
                "1[.]162[.]198[.]126",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15869,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15869,
                "newInLastHour": 15869,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]223[.]152[.]97:800/armv7l",
                "hxxp://222[.]223[.]152[.]97:800/i586",
                "hxxp://222[.]223[.]152[.]97:800/mipsel",
                "hxxp://222[.]223[.]152[.]97:800/powerpc",
                "hxxp://222[.]223[.]152[.]97:800/armv5l"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6963,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6963,
                "newInLastHour": 6765,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"en-us-nurvealive[.]com\"",
                " \"23[.]94[.]252[.]4:443\"",
                " \"158[.]174[.]50[.]97:7000\"",
                " \"91[.]92[.]40[.]138:4838\"",
                " \"27[.]124[.]17[.]164:8801\""
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
            "iocCount": 10278,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10278,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "969b40a4fd2fb579a29aed9b2f81a7cf5cc0b1db",
                "2125bebc5912c9fb523a668daf7d116999488493",
                "be5b37f69a9cf825cca6d9b0e27e3aeaf0903721",
                "42412a6aee2a4ff0234fc0afe142d5a2bf8f1e92",
                "fd78e771cab22c3afad8a5d5c448ff05268f20dd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51156,
            "activeSources": 8,
            "criticalAlerts": 27555,
            "activeCampaigns": 266
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17029,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10526,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4615,
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
                "count": 16161,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://220[.]158[.]234[.]4/arm6",
                    "hxxp://220[.]158[.]234[.]4/m68k",
                    "hxxp://125[.]106[.]117[.]223:37160/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]23[.]21"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1703,
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
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1328,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"137[.]220[.]151[.]95:9999\"",
                    " \"89[.]127[.]233[.]112:3128\"",
                    " \"8[.]163[.]98[.]217:443\""
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
                "name": "Vidar",
                "count": 734,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5d801efeb2e22aa0da901ffbce45db05a80a7b0b",
                    "64e6fe29e84ea3ecaaef08920d8ceb9567240166",
                    "7a9be497f84c09e7591ba7c7d69539a6e0468302"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 684,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://faceit-account[.]com/\"",
                    " \"hxxps://gpswoutdoors[.]com/\"",
                    " \"hxxps://kook[.]bar/\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44074,
        "lastCalculated": "2026-08-27 15:00 IST"
    }
};
