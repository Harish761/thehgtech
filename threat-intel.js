// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-05T10:51:11.764144+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-05T10:51:11.489376+05:30",
    "lastUpdatedFormatted": "Feb 05, 2026 at 10:51 AM IST",
    "comparisonPeriod": "Feb 04 \u2013 Feb 05, 2026",
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
                "hxxp://schedule[.]cidoofo[.]digital/B6@Q9fRa/$3mail@a[.]b[.]c0",
                "hxxps://122era[.]nickles[.]cc/gives/",
                "hxxps://34key[.]proxette[.]cc/newtransfer",
                "hxxps://35joi[.]lofesdes[.]cc/info",
                "hxxp://bafkreiekbtzmshtc237taav2aevej2xm7rbnt5f4vkc5vavwijjg44m7vi[.]ipfs[.]dweb[.]link/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 846,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 846,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a4d438b665dbf9214f7099436fcd86af803ac45674e96691917d4f3537f41b91",
                " \"2b2d13399de197811964125323c6450ad9637e0de1e0bfa5a68757ea416483cd",
                " \"88615f7d7e2b67a28e5ec2a1ba6dfd302bec926f093b9efae9b341b452b63167",
                " \"49af01f9215248c4f6a5e180940b0ad6c1b7bf596b8b9c4eb8251a4dc81eacad",
                " \"bfaf2f32db06dcd44839325b91455809da05ece763a81461679c4544e687596d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1476,
                "newInLastHour": 1349,
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
                "1[.]10[.]211[.]222",
                "1[.]15[.]116[.]189",
                "1[.]15[.]51[.]122",
                "1[.]157[.]80[.]72",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6212,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6212,
                "newInLastHour": 6212,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]170[.]65[.]104",
                "1[.]214[.]197[.]163",
                "1[.]234[.]70[.]54",
                "1[.]234[.]83[.]55",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21276,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21276,
                "newInLastHour": 21276,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]57[.]70[.]140:48604/bin[.]sh",
                "hxxp://125[.]43[.]26[.]246:57101/bin[.]sh",
                "hxxp://220[.]202[.]91[.]49:55110/i",
                "hxxp://219[.]157[.]246[.]145:56493/i",
                "hxxp://123[.]132[.]166[.]239:41644/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 481,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 481,
                "newInLastHour": 481,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"103[.]177[.]47[.]178:3790\"",
                " \"89[.]32[.]41[.]15:80\"",
                " \"185[.]253[.]117[.]57:443\"",
                " \"172[.]111[.]139[.]95:2405\"",
                " \"92[.]246[.]87[.]60:2404\""
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
                "167[.]86[.]75[.]145",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8876,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8876,
                "newInLastHour": 27,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "971eff3b46008afa8e51412a1f92e56fb16c0c8b",
                "33775d94078769a5fb2d35798e12075b6141af73",
                "6171d10623d6850c8048fef17a4e0f8d6462b3e7",
                "ae2bcb77201c2a5e7e3e14a58238c30dfac0cf0a",
                "18e41b19704dec838e6450de8c40398ea4dbc635"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46861,
            "activeSources": 8,
            "criticalAlerts": 30955,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22126,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 8829,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 415,
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
                "count": 21227,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]7[.]222[.]8:43619/bin[.]sh",
                    "hxxp://175[.]164[.]196[.]147:38327/bin[.]sh",
                    "hxxp://42[.]237[.]48[.]231:58751/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]211[.]222",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1377,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6d675b60e925179eaf8834d92a4744ddcd10eb3",
                    "f1bb8bd97d70c986438f0cd5f46cd2992875659a",
                    "98bd8df0057497dc91b608f7db0d0358c1e75d6b"
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
                "count": 615,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bc3ca9fd7fdab7635c897aa5b61d0de4c471d1b9",
                    "436f02b3a63406707f6467d4880a691a2a3f53ea",
                    "e0cd22588c5eb33b575fd706a8cfb26a73302eac"
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
            },
            {
                "name": "Malware",
                "count": 334,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b73dc00950e4a6e8c228abf884c937e895a35b96",
                    "57f2f129b4b92f8a5a9b673485771a148c5d6159",
                    "9d33c03bf55d9c545df8079f848800f219cccf29"
                ]
            },
            {
                "name": "Vidar",
                "count": 331,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "971eff3b46008afa8e51412a1f92e56fb16c0c8b",
                    "33775d94078769a5fb2d35798e12075b6141af73",
                    "6171d10623d6850c8048fef17a4e0f8d6462b3e7"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 44652,
        "lastCalculated": "2026-02-05 10:51 IST"
    }
};
