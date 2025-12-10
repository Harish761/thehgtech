// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-10T10:11:51.177473+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-10T10:11:50.817616+05:30",
    "lastUpdatedFormatted": "Dec 10, 2025 at 10:11 AM IST",
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
                "hxxps://www[.]robiox[.]com[.]py/users/476431298791/profile",
                "hxxps://courierguy-thedelivery-southafrica[.]pages[.]dev/pag1_files/pag1_files/saved_resource(2)[.]html/",
                "hxxps://roblox[.]com[.]ge/games/920587237/DAY-9-Adopt-Me?privateServerLinkCode=57328233226280364464937420557884",
                "hxxps://courierguy-thedelivery-southafrica[.]pages[.]dev/pag1_files/pag1_files/saved_resource(4)[.]html/",
                "hxxps://courierguy-thedelivery-southafrica[.]pages[.]dev/pag1_files/saved_resource(3)[.]html/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1545,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1545,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5bb6555cfd3e08d19dfe8e568e6115e3d44b756a92a643ce09299c0b3bf80f3c",
                " \"290d4ed63719a0ed2362bf726abe742e0bdc5bf0d75d4644996e063928b471bf",
                " \"943eaf398ab7e9767c727a429a772f924770599b1569868539829757e38db6db",
                " \"4836401b560c601de78fea1467813078d4829863c6b41f0019ea79080f30381c",
                " \"bf9c08ee1c58899f4734654f212c88f884006b4cb72f1fc959beee10613980a7"
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
                "newInLastHour": 3,
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
                "1[.]15[.]118[.]23",
                "1[.]176[.]134[.]251",
                "1[.]177[.]22[.]68",
                "1[.]181[.]114[.]38",
                "1[.]181[.]69[.]174"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6787,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6787,
                "newInLastHour": 6787,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]19[.]219",
                "1[.]13[.]79[.]144",
                "1[.]15[.]24[.]14",
                "1[.]161[.]49[.]186",
                "1[.]194[.]200[.]251"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28547,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28547,
                "newInLastHour": 28547,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://185[.]14[.]92[.]152/nuts/bolt",
                "hxxp://222[.]138[.]151[.]183:53082/i",
                "hxxp://51[.]81[.]104[.]115/nuts/bolts",
                "hxxp://51[.]81[.]104[.]115/nuts/x86",
                "hxxp://196[.]251[.]100[.]191/update[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3655,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3655,
                "newInLastHour": 3460,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"repositorylinux[.]info\"",
                " \"gfxnick[.]emerald[.]usbx[.]me\"",
                " \"merahmerona[.]sbs\"",
                " \"meomeoli[.]mooo[.]com\"",
                " \"pub-dc84e32afcfa417fa04d36454032549b[.]r2[.]dev\""
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
            "iocCount": 8602,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8602,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1f126ff0056b82441259c5c2eb1566a1d12cfe5b",
                "c078625aea4e1e9c0adf87a8a36998d6feab851a",
                "6ddf090c6ddcee20ae94b25b9a2944541620a64b",
                "f428360c1605f4853897e7fcc6805ab3c327e207",
                "4fc7ae833fc2ba4f6c54e180849c7f4ecaca1b1a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 59230,
            "activeSources": 8,
            "criticalAlerts": 38620,
            "activeCampaigns": 226
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30042,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 8578,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1961,
                "trend": "stable",
                "percentage": -2
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
                "count": 28477,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://196[.]189[.]98[.]77:60145/bin[.]sh",
                    "hxxp://91[.]92[.]243[.]183/slovsdih/sparc",
                    "hxxp://91[.]92[.]243[.]183/slovsdih/mips"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]176[.]134[.]251",
                    "1[.]177[.]22[.]68"
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
                "name": " \"unknown_stealer\"",
                "count": 1007,
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
                "name": " \"win.dcrat\"",
                "count": 762,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"107[.]189[.]21[.]140:7000\"",
                    " \"69[.]167[.]11[.]28:443\"",
                    " \"54[.]38[.]110[.]98:22\""
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
                "count": 382,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]99[.]90[.]69:2850\"",
                    " \"101[.]99[.]90[.]165:2850\"",
                    " \"45[.]148[.]10[.]242:7443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 54117,
        "lastCalculated": "2025-12-10 10:11 IST"
    }
};
