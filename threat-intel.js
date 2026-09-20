// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-21T03:52:53.089013+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-21T03:52:52.797812+05:30",
    "lastUpdatedFormatted": "Sep 21, 2026 at 03:52 AM IST",
    "comparisonPeriod": "Sep 20 \u2013 Sep 21, 2026",
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
                "hxxp://suhanir7[.]github[.]io/Amazon_Clone",
                "hxxp://addqo[.]com/pl",
                "hxxps://main[.]d3thcdi1mb7dsr[.]amplifyapp[.]com/",
                "hxxp://varsha24-01[.]github[.]io/Amazon_Clone",
                "hxxps://ledger-live-downlloadd[.]blogspot[.]com/?m=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1705,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"17c15e2b10ba39f8a1e298a84815fab3ca3ebec7c5b9ba6ee436df531d2b0a91",
                " \"3ebe95f9159c0109766c79f284b736e05da410e55454d4644998a0966c7c6985",
                " \"9e33ff78de4b1ddf3ceb3862613f3587e2dbf714b15adac5f4c1f1e3c17902d6",
                " \"1756897b4029c19c185bd866000926a1b837e3c391c71dbe2cf9ecd0adbd088f",
                " \"dba511e0078b9f007cab108236ce3d740b9055dafc8d35e42a8f4d4b878126ad"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1710,
                "newInLastHour": 77,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]14[.]156[.]5",
                "1[.]14[.]69[.]226",
                "1[.]189[.]89[.]243",
                "1[.]214[.]98[.]143",
                "1[.]24[.]16[.]101"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 12029,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 12029,
                "newInLastHour": 12029,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]192[.]95",
                "1[.]14[.]209[.]20",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13029,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13029,
                "newInLastHour": 13029,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://170[.]238[.]123[.]66:37609/bin[.]sh",
                "hxxp://175[.]107[.]209[.]245:36715/bin[.]sh",
                "hxxp://182[.]113[.]232[.]150:44550/i",
                "hxxp://182[.]113[.]232[.]150:44550/bin[.]sh",
                "hxxp://105[.]225[.]38[.]104:36717/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6193,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6193,
                "newInLastHour": 5086,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://teculse[.]click:9210/sessions\"",
                " \"hxxp://fuarnpp[.]shop:5627/notifications\"",
                " \"45[.]192[.]204[.]42:2083\"",
                " \"45[.]192[.]204[.]42:2053\"",
                " \"45[.]192[.]204[.]42:8080\""
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
            "iocCount": 10728,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10728,
                "newInLastHour": 92,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0db74536080bbf99f4e8e8b53efd477d1ccaf3e0",
                "8daac8268eaa54e2c2d1aef6108fba9ba29eaa36",
                "372b91c0d31a75b4e1765af998d984881e34dab1",
                "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
                "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48484,
            "activeSources": 8,
            "criticalAlerts": 25377,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14739,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10638,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4172,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]156[.]5",
                    "1[.]14[.]69[.]226",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13020,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]165[.]67[.]92:58588/bin[.]sh",
                    "hxxp://109[.]235[.]7[.]1:52247/bin[.]sh",
                    "hxxp://222[.]140[.]183[.]43:37860/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1634,
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
                "count": 1445,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "372b91c0d31a75b4e1765af998d984881e34dab1",
                    "9700462dfd419d0295b2753079208e939a853dce",
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1370,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"106[.]54[.]201[.]103:3000\"",
                    " \"106[.]54[.]201[.]103:888\"",
                    " \"106[.]54[.]201[.]103:22\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1359,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"52[.]47[.]77[.]229:2000\"",
                    " \"102[.]220[.]163[.]36:6606\"",
                    " \"1746a28841e6de3faad920079ff9b2b041e2fbcfa43c15a0bd9de5901a5f2c49\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 1043,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"935e24466c7b67ee29b2767189572eb845940811d0a3e98843a65bb9f93fab65",
                    " \"17cffe727712a861b652098cfa78a72616fe1075d1ec0066524eebe3ee826eb6",
                    " \"e412a1e9c8de8d806cc27ab46974609dd0526b6591c08cd5b83d61ee52a0485d"
                ]
            },
            {
                "name": "Vidar",
                "count": 757,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
                    "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999",
                    "ed64fe5bf9ba187fb8b7a54fce4a986d6681f4f2"
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
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 45657,
        "lastCalculated": "2026-09-21 03:52 IST"
    }
};
