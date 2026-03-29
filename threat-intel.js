// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-29T18:47:22.860594+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-29T18:47:22.576834+05:30",
    "lastUpdatedFormatted": "Mar 29, 2026 at 06:47 PM IST",
    "comparisonPeriod": "Mar 28 \u2013 Mar 29, 2026",
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
                "hxxp://sso-eng-neetcoins-com-cdnn-auth[.]webflow[.]io/",
                "hxxp://easybank-landing-page-redo[.]vercel[.]app/",
                "hxxp://amazon-clone-neon-ten-70[.]vercel[.]app/",
                "hxxp://spotify-clone-lime[.]vercel[.]app/",
                "hxxp://mandirienergikonsultan[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 446,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 446,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"aecd2bc39bd3a65ac4f2c9c4092efc1bb03b13d29704d23ede06446478b84816",
                " \"588c4aa1500c17a75a830c65032215767969a015d18e7adf467090f4be5cbc10",
                " \"d90b1ac4f8e356320ea14ff997d51ee251cdd158aa3f5e36c819be2adb155f13",
                " \"d7d9990082d80af780af8e83c69f668321776f0d8ea0ae9708915879a25803cd",
                " \"b34ad2bcea2f7e3459975747fa3e44fe958cad413bc5e45768bcbf86cf505fa2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1538,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1538,
                "newInLastHour": 1,
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
                "1[.]10[.]202[.]221",
                "1[.]180[.]116[.]17",
                "1[.]182[.]191[.]117",
                "1[.]183[.]46[.]50",
                "1[.]188[.]102[.]120"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4208,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4208,
                "newInLastHour": 4208,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]214[.]117[.]218",
                "1[.]214[.]255[.]210",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20847,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20847,
                "newInLastHour": 20847,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://binsap[.]latticeprospera[.]in[.]net/verification[.]google",
                "hxxp://204[.]137[.]166[.]139:42101/bin[.]sh",
                "hxxps://rybfb[.]radiantharbinger[.]in[.]net/verification[.]google",
                "hxxp://116[.]55[.]64[.]167:35466/i",
                "hxxps://plassplit[.]radiantharbinger[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1128,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1128,
                "newInLastHour": 1111,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"binsap[.]latticeprospera[.]in[.]net\"",
                " \"rybfb[.]radiantharbinger[.]in[.]net\"",
                " \"plassplit[.]radiantharbinger[.]in[.]net\"",
                " \"hyper-tr4cke[.]radiantharbinger[.]in[.]net\"",
                " \"hxxps://klikshop[.]buzz/YGROPRYN[.]msi\""
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
            "iocCount": 9413,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9413,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                "8501fab6623b7b8f968d2b522da81c514918df66",
                "77af6e6bafaf9effbba2f8cb33c80effe6efe773",
                "be1e2e424052ffaf96e10700d5acd79eceba25e4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48713,
            "activeSources": 8,
            "criticalAlerts": 30690,
            "activeCampaigns": 197
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21296,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9394,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 392,
                "trend": "up",
                "percentage": 71
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
                "percentage": 10
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20776,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://quorfluxet[.]stormcove[.]in[.]net/verification[.]google",
                    "hxxp://59[.]89[.]65[.]192:41113/i",
                    "hxxp://59[.]89[.]65[.]192:41113/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]180[.]116[.]17",
                    "1[.]182[.]191[.]117",
                    "1[.]191[.]127[.]124"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1552,
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
                "count": 656,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "77af6e6bafaf9effbba2f8cb33c80effe6efe773",
                    "38e6803834672d7669a414b41a68a80800041309",
                    "b39ef781d5025993ed84ed86715d0e1ad16e3520"
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
                "count": 503,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"quorfluxet[.]stormcove[.]in[.]net\"",
                    " \"woodspeci[.]stormcove[.]in[.]net\"",
                    " \"arnb3r-line[.]n1ghtbloom[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 458,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8501fab6623b7b8f968d2b522da81c514918df66",
                    "be1e2e424052ffaf96e10700d5acd79eceba25e4",
                    "cfbf57b8861a2ecb82c130d7815e61aabfa08c84"
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41481,
        "lastCalculated": "2026-03-29 18:47 IST"
    }
};
