// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-28T10:54:52.950210+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-28T10:54:52.660935+05:30",
    "lastUpdatedFormatted": "Mar 28, 2026 at 10:54 AM IST",
    "comparisonPeriod": "Mar 27 \u2013 Mar 28, 2026",
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
                "hxxps://teieperformance[.]com/app/QBP6cbknunXu5k3Fo8JFzW",
                "hxxp://s[.]teamwi[.]world/p/fwk-bzz/eqwjnihf",
                "hxxp://home-xinqiusports[.]com/khoviicf",
                "hxxps://teieperformance[.]com/app/rL7SKEuNuvXnUnznULS3BV",
                "hxxps://teieperformance[.]com/app/NxFbpZ4ewwjALMwQQXm7UD"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 800,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 800,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"84783a9fc4a17cdb2e679ce3c4b13507450b5d35e46ccb59e17e6b8972d3a638",
                " \"3ccb5b82017530f77d89d8d5892b452b20e872831386d5f247e53722faef2fd0",
                " \"2a6dd96e61b92ca2110268a4b201373ce13631cedb69bdd2dcf066d77df256f1",
                " \"2d28b6f43cbd8f869e52388a0788dd1b92aa5ce7957aeeb294b919aaf379902c",
                " \"eb45effa07848a1fda4c6fbd11391aead7d0efa5bc6c65c5e06d6f2c5f765cd9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1539,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1539,
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
                "1[.]191[.]127[.]124",
                "1[.]192[.]177[.]194",
                "1[.]193[.]63[.]107",
                "1[.]193[.]63[.]135",
                "1[.]193[.]63[.]139"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4598,
                "newInLastHour": 4598,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]126[.]185",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]204[.]166[.]3",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20907,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20907,
                "newInLastHour": 20907,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://ext4view[.]momentumbloomera[.]in[.]net/verification[.]google",
                "hxxp://110[.]38[.]221[.]182:50047/bin[.]sh",
                "hxxp://175[.]165[.]80[.]194:36221/i",
                "hxxps://ext3ghost[.]momentumbloomera[.]in[.]net/verification[.]google",
                "hxxp://110[.]37[.]24[.]11:41012/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1206,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1206,
                "newInLastHour": 1186,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ext4view[.]momentumbloomera[.]in[.]net\"",
                " \"ext3ghost[.]momentumbloomera[.]in[.]net\"",
                " \"ext2core[.]momentumbloomera[.]in[.]net\"",
                " \"ext1proc[.]momentumbloomera[.]in[.]net\"",
                " \"svc4link[.]apexharvestor[.]in[.]net\""
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
            "iocCount": 9407,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9407,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "38e6803834672d7669a414b41a68a80800041309",
                "b39ef781d5025993ed84ed86715d0e1ad16e3520",
                "cfdefb9b571940cbf746e3ff7a8d159e75c3daad",
                "5b2a562d69edcf47f050790a2b8a2a04816ed1e5",
                "7730cc62a58f9c1c91704b5805e186e977b816b3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49143,
            "activeSources": 8,
            "criticalAlerts": 31076,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21686,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9390,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 416,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 89
            },
            {
                "name": "Tech",
                "percentage": 9
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20848,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://118[.]253[.]80[.]156:48921/bin[.]sh",
                    "hxxps://svc1sync[.]zenithharbinger[.]in[.]net/verification[.]google",
                    "hxxp://110[.]37[.]96[.]168:49364/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]191[.]127[.]124",
                    "1[.]192[.]177[.]194",
                    "1[.]193[.]63[.]107"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1553,
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
                "count": 1394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06",
                    "51f20540cd77caa36702bb359c8c06949aecea02"
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
                "count": 655,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "38e6803834672d7669a414b41a68a80800041309",
                    "b39ef781d5025993ed84ed86715d0e1ad16e3520",
                    "5b2a562d69edcf47f050790a2b8a2a04816ed1e5"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 549,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a",
                    "7f065e37b5c0112620f7c97d3cd761e626e0faf4"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 476,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"svc2data[.]zenithharbinger[.]in[.]net\"",
                    " \"svc1sync[.]zenithharbinger[.]in[.]net\"",
                    " \"ext4point[.]keystoneprospera[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 455,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7730cc62a58f9c1c91704b5805e186e977b816b3",
                    "0a95355a64c3fe3f52695f97595037481ca11c4d",
                    "36ab4c53471d9071a08c916360e6b9e44b7bcf51"
                ]
            },
            {
                "name": "OffLoader",
                "count": 370,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cfdefb9b571940cbf746e3ff7a8d159e75c3daad",
                    "f72b15a90b86d3b726a98c4b54b1912ff67f0014",
                    "f9c3b7e52c81b2001740f7fcdb39339549af04dc"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42020,
        "lastCalculated": "2026-03-28 10:54 IST"
    }
};
