// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-30T22:38:44.414100+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-30T22:38:44.124828+05:30",
    "lastUpdatedFormatted": "Mar 30, 2026 at 10:38 PM IST",
    "comparisonPeriod": "Mar 29 \u2013 Mar 30, 2026",
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
                "hxxps://mahiyasingh[.]github[.]io/ecommerce-ui",
                "hxxp://cna[.]cnj-sjpqdna9[.]com/",
                "hxxps://j[.]91boris[.]com/",
                "hxxps://assetsunlayercc[.]flazio[.]site/",
                "hxxps://microsoft[.]resolve-issue[.]click/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 432,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 432,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a96a077d02d5fe3524e3416adc88f09f3817099b617e552338f7c736758f242f",
                " \"ceec4a8c3e789ee5bd081661fa8e74342f8609ffc32d20c3f2626c4d22723989",
                " \"56f6193794056ad2198ce52e11b84663eaa5a16a7e5aed0b0c054239a4e7f8b5",
                " \"8166707195ef31d1677a854603752163bbd98ce64515c7404ad698dca2147aab",
                " \"230d016086472bcea8ec59bb5224e107746e79a72a67a2562c58a7ae3caf504c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1552,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1552,
                "newInLastHour": 2,
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
                "1[.]14[.]3[.]240",
                "1[.]174[.]69[.]6",
                "1[.]179[.]94[.]187",
                "1[.]182[.]191[.]117",
                "1[.]183[.]46[.]50"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4700,
                "newInLastHour": 4700,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]194[.]219[.]159",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21153,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21153,
                "newInLastHour": 21153,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]127[.]153[.]171:51092/bin[.]sh",
                "hxxps://surnm5-route[.]v7lora[.]in[.]net/verification[.]google",
                "hxxp://42[.]230[.]227[.]7:50551/i",
                "hxxp://222[.]127[.]75[.]70:57804/i",
                "hxxp://123[.]4[.]147[.]72:36735/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1100,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1100,
                "newInLastHour": 1092,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"surnm5-route[.]v7lora[.]in[.]net\"",
                " \"r0ug3-stack[.]v7lora[.]in[.]net\"",
                " \"poster-port[.]cinderbay[.]in[.]net\"",
                " \"velvetautu[.]cinderbay[.]in[.]net\"",
                " \"hxxps://github[.]com/charlie-60/R/raw/refs/heads/main/MasonRootkit[.]exe\""
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
            "iocCount": 9429,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9429,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3a34f580e3626ac9de04604b8d0a4c3abb8682aa",
                "426f482e33309401ce4ecf7958f5ae28e8ff1423",
                "5564b85fb641dbb29c8d4c265b4e41b3476a851d",
                "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                "9a39dd3fec6c66ce980dbc07e4ad5103b2d0b09b"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48864,
            "activeSources": 8,
            "criticalAlerts": 30915,
            "activeCampaigns": 198
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21504,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9411,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 529,
                "trend": "stable",
                "percentage": 5
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
                "count": 21042,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://gl0ss-grid[.]n0vabrook[.]in[.]net/verification[.]google",
                    "hxxp://27[.]193[.]230[.]64:40914/i",
                    "hxxp://27[.]207[.]184[.]58:54300/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]202[.]59",
                    "1[.]14[.]3[.]240",
                    "1[.]174[.]69[.]6"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1550,
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
                "count": 1395,
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
                "count": 659,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                    "4fb81998ac697ab9e998f1c69d89e7ea606850ed",
                    "33510aca342fd05d8d74aa957e95477aeb2e7ed7"
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
                "count": 471,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"gl0ss-grid[.]n0vabrook[.]in[.]net\"",
                    " \"hmndwk[.]n0vabrook[.]in[.]net\"",
                    " \"capitclou[.]stormglade[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 460,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "426f482e33309401ce4ecf7958f5ae28e8ff1423",
                    "5564b85fb641dbb29c8d4c265b4e41b3476a851d",
                    "8501fab6623b7b8f968d2b522da81c514918df66"
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
        "totalAttacksThisHour": 42291,
        "lastCalculated": "2026-03-30 22:38 IST"
    }
};
