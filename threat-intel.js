// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-31T11:19:36.135811+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-31T11:19:35.851784+05:30",
    "lastUpdatedFormatted": "Mar 31, 2026 at 11:19 AM IST",
    "comparisonPeriod": "Mar 30 \u2013 Mar 31, 2026",
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
                "hxxps://urlyte[.]com/y1v0v",
                "hxxp://loogin-comndex[.]godaddysites[.]com/",
                "hxxp://sites[.]google[.]com/view/deartsiuvf/accueil",
                "hxxps://doge[.]trusteeglobal[.]com/",
                "hxxps://fidelltyae[.]one/figm2m/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 449,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 449,
                "newInLastHour": 31,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f7d335205b8d7b20208fb3ef93ee6dc817905dc3ae0c10a0b164f4e7d07121cd",
                " \"7bda0cfd6a599e099f8c628ab75609ed5827bc2f268501e41be148359a43f061",
                " \"fe334cfac7c661cf8e7c1aeef56a1bf06ebeef717f433aad096d11666c48e58e",
                " \"267d81ed801a1a3323f987285c30cb4e067c620d1e1fb0aad35f990c931d1ac8",
                " \"3006d3cf298cbd55a7cff8f908341ce044fa27cafbdc4178db685dcaa0b54720"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1549,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1549,
                "newInLastHour": 11,
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
                "1[.]174[.]69[.]6",
                "1[.]178[.]175[.]72",
                "1[.]188[.]102[.]120",
                "1[.]191[.]127[.]124",
                "1[.]192[.]177[.]194"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4524,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4524,
                "newInLastHour": 4524,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]192[.]202[.]92",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21005,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21005,
                "newInLastHour": 21005,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]134[.]163[.]7:52361/bin[.]sh",
                "hxxp://103[.]164[.]128[.]50:33037/bin[.]sh",
                "hxxp://117[.]209[.]9[.]210:42514/bin[.]sh",
                "hxxp://120[.]28[.]199[.]24:55586/i",
                "hxxp://110[.]37[.]39[.]88:51536/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1181,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1181,
                "newInLastHour": 1171,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"density-svc[.]viscositycontrol[.]in[.]net\"",
                " \"31[.]57[.]216[.]28:418\"",
                " \"204[.]76[.]203[.]165:418\"",
                " \"130[.]12[.]182[.]175:418\"",
                " \"46[.]151[.]182[.]19:418\""
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
            "iocCount": 9380,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9380,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a7e8d4159dfd1d4de048b6751d0e125ca7721d63",
                "e979e3166f481b4ed06d057f555ca41fc47de33e",
                "4a5d44ecbf4ac6ace7339e80b02052aa12f5001b",
                "df2ff49d860e2451ff42c0206afee446364b52f0",
                "8b6050f589d432c56f05de438e4ec606926c97df"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48737,
            "activeSources": 8,
            "criticalAlerts": 30746,
            "activeCampaigns": 200
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21343,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9403,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 543,
                "trend": "stable",
                "percentage": 0
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
                "percentage": 88
            },
            {
                "name": "Tech",
                "percentage": 11
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20882,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://solvent-vault[.]catalyticprocess[.]in[.]net/verification[.]google",
                    "hxxps://yield-monitor[.]catalyticprocess[.]in[.]net/verification[.]google",
                    "hxxps://reaction-api[.]catalyticprocess[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]174[.]69[.]6",
                    "1[.]183[.]46[.]50",
                    "1[.]191[.]127[.]124"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1541,
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
                    "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06"
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
                "count": 660,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8b6050f589d432c56f05de438e4ec606926c97df",
                    "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                    "4fb81998ac697ab9e998f1c69d89e7ea606850ed"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 550,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 455,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"solvent-vault[.]catalyticprocess[.]in[.]net\"",
                    " \"yield-monitor[.]catalyticprocess[.]in[.]net\"",
                    " \"reaction-api[.]catalyticprocess[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 455,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a7e8d4159dfd1d4de048b6751d0e125ca7721d63",
                    "426f482e33309401ce4ecf7958f5ae28e8ff1423",
                    "5564b85fb641dbb29c8d4c265b4e41b3476a851d"
                ]
            },
            {
                "name": "OffLoader",
                "count": 373,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9a39dd3fec6c66ce980dbc07e4ad5103b2d0b09b",
                    "f2fec8875975bbc52993dea783327c6096c9b285",
                    "20d6dac19c714dd2102038eb700f10283940d822"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42060,
        "lastCalculated": "2026-03-31 11:19 IST"
    }
};
