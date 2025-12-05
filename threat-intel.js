// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-05T14:09:01.280308+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-05T14:09:00.904326+05:30",
    "lastUpdatedFormatted": "Dec 05, 2025 at 02:09 PM IST",
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
                "hxxps://roblox[.]com[.]ge/games/94641939467366/Fun-combat-game?privateServerLinkCode=91006313887146611551343620283535",
                "hxxp://piyushsingh24[.]github[.]io/spotify-clone",
                "hxxps://71pms7116aa5mketapp[.]peou[.]de/71PMs/Aa5MKEtAPp/6MUwbNfsyIzYe2bbfMTJ4D9qgen/71PMs/Aa5MKEtAPp/Finance/7116/anaheim[.]net/6MUwbNfsyIzYe2bbfMTJ",
                "hxxps://rbx-url[.]com/cH6-h99q",
                "hxxps://www[.]apprewards[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1213,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1213,
                "newInLastHour": 57,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a21847e72cefadb005323ad17061e1789bf564abf56717666913bb53e9028210",
                " \"aaa47d79ba3bd68f095c78b039828154c227f1fd62cec5ee6aab6138190b0f0c",
                " \"cbab5c167d7ba213a9c1634ce30a2b66a365895d8d0b84ad56297843ad0350a8",
                " \"8b6e5f4bc8e2fb081c8da40a9e9140fbf8615f5cd97041db9c8de441e1215408",
                " \"8808e19e8c12bc330422f203296e49878211861e86583ceb316192d1e7b716c8"
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
                "1[.]116[.]180[.]98",
                "1[.]117[.]17[.]128",
                "1[.]14[.]3[.]240",
                "1[.]15[.]20[.]205",
                "1[.]176[.]134[.]242"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5767,
                "newInLastHour": 5767,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]123[.]48",
                "1[.]161[.]45[.]32",
                "1[.]161[.]58[.]137",
                "1[.]168[.]241[.]144",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 29351,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 29351,
                "newInLastHour": 29351,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]90[.]11:39385/i",
                "hxxp://123[.]11[.]10[.]96:51320/i",
                "hxxp://110[.]37[.]90[.]11:39385/bin[.]sh",
                "hxxp://182[.]117[.]111[.]36:56181/bin[.]sh",
                "hxxp://115[.]49[.]31[.]153:37290/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1101,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1101,
                "newInLastHour": 866,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"nimeshpatel[.]in[.]net\"",
                " \"malware[.]nimeshpatel[.]in[.]net\"",
                " \"158[.]94[.]210[.]88:1312\"",
                " \"mint[.]deepc1iff[.]ru\"",
                " \"kla[.]deepc1iff[.]ru\""
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
            "totalIndicators": 57074,
            "activeSources": 8,
            "criticalAlerts": 39086,
            "activeCampaigns": 238
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 30544,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8542,
                "trend": "up",
                "percentage": 18074
            },
            {
                "category": "Botnet",
                "count": 534,
                "trend": "stable",
                "percentage": -5
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
                "count": 29276,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]67[.]117:58639/i",
                    "hxxp://82[.]117[.]87[.]188/hiddenbin/boatnet[.]ppc",
                    "hxxp://82[.]117[.]87[.]188/hiddenbin/boatnet[.]sh4"
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
                "name": " \"Mirai",
                "count": 616,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"33dfbe0bb1570713a9590a1765aca7a5524efafafcce529476f17df090b817c5",
                    " \"c2b6577a08f7aee28c79ee4ecdda564ae1838ebbcd1956609841bdfdb7d80b2d",
                    " \"0c6886926a912b41592508d37b08008221abc1a8ba4dbfa0108b0a8d7a41c450"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 51345,
        "lastCalculated": "2025-12-05 14:09 IST"
    }
};
