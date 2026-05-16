// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-16T09:25:22.533230+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-16T09:25:22.196898+05:30",
    "lastUpdatedFormatted": "May 16, 2026 at 09:25 AM IST",
    "comparisonPeriod": "May 15 \u2013 May 16, 2026",
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
                "hxxps://wavellen[.]github[.]io/Microsoft-Clone-Home-Page",
                "hxxps://restoremycreditreport[.]com/bniyycir/dfsj",
                "hxxps://nycgyroking[.]com/",
                "hxxps://scotiaonlinebank[.]vercel[.]app/signinfolder/login[.]html",
                "hxxps://osmconsultancy[.]com/sd/er/fe/fsa/sdf/179/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 635,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 635,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"054ad4bf54b21866acc10d47c7fff6cdff699d4093f6fe1d759e8124e6faa8c0",
                " \"622af70fefd8db51524b916384044ff48c8137208503625ea43f53b1a8184d39",
                " \"f77d14298ce747794bfca03d33625dfbcd9cef965c2eff0edefd9ebdd5665a76",
                " \"919925c22890ca7c79f7c48e14b9894b747a2ee9db954f86c2f85e9b020dc8c3",
                " \"cc401ea6e01470e8f46c5fcd542a79987b11b706087076565b7c8b6e49d8f749"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1637,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1637,
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
                "1[.]190[.]169[.]10",
                "1[.]192[.]176[.]80",
                "1[.]192[.]215[.]232",
                "1[.]192[.]46[.]208",
                "1[.]193[.]63[.]78"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5373,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5373,
                "newInLastHour": 5373,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]145[.]83[.]197",
                "1[.]194[.]210[.]131",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24527,
                "newInLastHour": 24527,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://backyard-harvest-planner[.]garden/429e5532-8c10-4da4-9aee-c2eec2d23872/google[.]cl",
                "hxxp://222[.]140[.]189[.]209:35600/i",
                "hxxp://115[.]57[.]194[.]83:54809/bin[.]sh",
                "hxxp://222[.]140[.]189[.]209:35600/bin[.]sh",
                "hxxps://evergreentimberland[.]garden/aa85d475-72f2-4c64-9cab-57a7c8a4d3be/google[.]cl"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1043,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1043,
                "newInLastHour": 875,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"evergreentimberland[.]garden\"",
                " \"backyard-harvest-planner[.]garden\"",
                " \"7uopofgy[.]steel-evar-yes-valence[.]digital\"",
                " \"mjyzsuaj[.]steel-evar-yes-valence[.]digital\"",
                " \"steel-evar-yes-valence[.]digital\""
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
            "iocCount": 9693,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9693,
                "newInLastHour": 50,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                "42874ed125e23b73be13b7b8a7b89305ce979661",
                "bb1df8c1e6236408eb85294e9ce002f9222e57db",
                "fe322929a69e13348a8824c9eb27d58d8a82313b",
                "c3b80ea156c61148c1639d0c5c2eedd97d1dc9f7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53855,
            "activeSources": 8,
            "criticalAlerts": 35874,
            "activeCampaigns": 201
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26249,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9625,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 545,
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
                "percentage": 91
            },
            {
                "name": "Tech",
                "percentage": 8
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 25580,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]52[.]159[.]219:60877/bin[.]sh",
                    "hxxps://botanicalworkflow[.]garden/e0587229-9369-4c97-8567-6162aeb858d9/google[.]cl",
                    "hxxp://39[.]81[.]72[.]230:57751/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]13[.]250[.]55",
                    "1[.]180[.]183[.]158"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1642,
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
                "count": 1409,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd",
                    "0f6b3491e94f40a637680924c507a494426e534c",
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c"
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
                "count": 677,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 519,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661",
                    "bb1df8c1e6236408eb85294e9ce002f9222e57db"
                ]
            },
            {
                "name": "OffLoader",
                "count": 400,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 46172,
        "lastCalculated": "2026-05-16 09:25 IST"
    }
};
