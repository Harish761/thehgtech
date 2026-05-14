// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-15T01:45:22.137690+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-15T01:45:21.782574+05:30",
    "lastUpdatedFormatted": "May 15, 2026 at 01:45 AM IST",
    "comparisonPeriod": "May 14 \u2013 May 15, 2026",
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
                "hxxp://b35aaa[.]com/poker/125",
                "hxxp://b35aaa[.]com/poker/216",
                "hxxp://b35aaa[.]com/sport/115",
                "hxxps://discord[.]fresh-soft[.]ru/?etext=2202[.]Mm1zi1xQwed46cjbAdGmvdVrHiHH9xltwtxQ51NnS1MLf0LsIjHjdTqm1QDaB6BUaHR2cmVvaHprbHF1YXN6eQ[.]2f6cab86819c593d63cb7ada4fde7a90594280a7",
                "hxxp://www[.]robiox[.]com[.]ua/users/1448219617/profile/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 578,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 578,
                "newInLastHour": 46,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a592a83e5773dbea9bbbe10f7fdeb9aeed07e077e0fac85b0bcd1d8e485dac0e",
                " \"c9e164b96ba7916e6ab6c5ad4f94c11858a72c495b81de2cd64c3dbf543b2cb3",
                " \"4f3efcfcfc24df90f64118a2fea1de5bb50f1a55a843841f071eda1f9d3ce672",
                " \"12975876ab7d54b7d120a35569f3d9e0140ae7b803fe81dfa69f4982683d3dad",
                " \"8e247f24515a0caf92ac8205556c9b84ef18bac4fa6a662c3d7d49b47322b72b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1604,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1604,
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
                "1[.]0[.]249[.]217",
                "1[.]173[.]112[.]122",
                "1[.]190[.]169[.]10",
                "1[.]191[.]147[.]239",
                "1[.]192[.]176[.]80"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5436,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5436,
                "newInLastHour": 5436,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]194[.]233[.]49",
                "1[.]214[.]197[.]163",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25997,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25997,
                "newInLastHour": 25997,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]53[.]243[.]30:49524/bin[.]sh",
                "hxxp://193[.]233[.]113[.]85/debug/loader[.]sh",
                "hxxp://193[.]233[.]113[.]85/payload[.]sh",
                "hxxp://193[.]233[.]113[.]85/loader[.]sh",
                "hxxp://83[.]217[.]209[.]80/debug/loader[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 735,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 735,
                "newInLastHour": 689,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"sup[.]dusapp[.]com[.]br\"",
                " \"hxxps://sup[.]dusapp[.]com[.]br/\"",
                " \"packet-routing-lab[.]courses\"",
                " \"cloudruntime[.]courses\"",
                " \"95[.]141[.]133[.]7:7443\""
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
            "iocCount": 9628,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9628,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c3b80ea156c61148c1639d0c5c2eedd97d1dc9f7",
                "33ce7373545ee49eaae60e70c81ca1c1768061ea",
                "a7ebb36bfc096ff4c3337e3d4b93c60a45737d09",
                "c99556080925c1984193558fe2956dba8b72f758",
                "17e77e5099f947d0d081764e9068af08c10a5430"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53859,
            "activeSources": 8,
            "criticalAlerts": 36177,
            "activeCampaigns": 193
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26511,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9666,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 392,
                "trend": "down",
                "percentage": -34
            },
            {
                "category": "Phishing",
                "count": 339,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 25933,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://system-analytics-pro-guide[.]courses/3da71941-fb0e-4331-ab54-9a79c00560e4/google[.]cl",
                    "hxxp://125[.]46[.]215[.]186:38346/bin[.]sh",
                    "hxxp://110[.]38[.]201[.]35:46732/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]249[.]217",
                    "1[.]162[.]160[.]202",
                    "1[.]173[.]112[.]122"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1612,
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
                "count": 1411,
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
                "count": 679,
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
                "count": 554,
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
                "count": 528,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c3b80ea156c61148c1639d0c5c2eedd97d1dc9f7",
                    "33ce7373545ee49eaae60e70c81ca1c1768061ea",
                    "a7ebb36bfc096ff4c3337e3d4b93c60a45737d09"
                ]
            },
            {
                "name": "OffLoader",
                "count": 404,
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
                "name": "ConnectWise",
                "count": 357,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "646821885b9e966ba8bb62c511f6b90a0b8d58c8",
                    "47fd399c8f9f2074b6d16aaa853cd6eaacecd1ed",
                    "06e08670cd781e40cee3c93163c7d29ea73d4acb"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47478,
        "lastCalculated": "2026-05-15 01:45 IST"
    }
};
