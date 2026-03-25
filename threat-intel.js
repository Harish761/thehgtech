// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-26T02:22:11.862838+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-26T02:22:11.573503+05:30",
    "lastUpdatedFormatted": "Mar 26, 2026 at 02:22 AM IST",
    "comparisonPeriod": "Mar 25 \u2013 Mar 26, 2026",
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
                "hxxp://boisterous-clafoutis-a6cac8[.]netlify[.]app/",
                "hxxps://napthevn[.]news/",
                "hxxps://own-social[.]github[.]io/app",
                "hxxp://sambathprak789[.]github[.]io/netflix-cambodia-clone",
                "hxxps://78987select-fth0-capital-plans[.]pages[.]dev/help/contact/445855145458402"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 819,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 819,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9711eed3ca1dee77537514f3679c60abdb148d847a94e2b6fe545e6c568feaab",
                " \"e434455a0e5ce91463110bf3610aa84969bde479d1bfd23a4036c2e3861c41ed",
                " \"8f77d470fca308767aada0a6751aa300defc451f53bec558afafb9a2654f8eee",
                " \"9b456b1515a829016d853f7e081450fca1080f8265fc279eeb320902308602d0",
                " \"ab4eaf919e2860ce69cbda84bf29c12c6087d069b20dc04dc4ca62d9ae811df9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1551,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1551,
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
                "1[.]14[.]3[.]240",
                "1[.]15[.]118[.]23",
                "1[.]183[.]160[.]11",
                "1[.]191[.]127[.]124",
                "1[.]191[.]147[.]229"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5389,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5389,
                "newInLastHour": 5389,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]163[.]193[.]34",
                "1[.]189[.]21[.]20",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21065,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21065,
                "newInLastHour": 21065,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]48[.]147[.]84:44518/i",
                "hxxp://158[.]94[.]208[.]168/files/7180287117/Gb7grdV[.]exe",
                "hxxps://colotone[.]fablegrove[.]in[.]net/verification[.]google",
                "hxxp://219[.]154[.]144[.]30:44859/i",
                "hxxps://dyn-coreen[.]fablegrove[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1847,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1847,
                "newInLastHour": 1833,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"e3zp8fgzvy[.]localto[.]net\"",
                " \"colotone[.]fablegrove[.]in[.]net\"",
                " \"dyn-coreen[.]fablegrove[.]in[.]net\"",
                " \"wolfreel[.]fablegrove[.]in[.]net\"",
                " \"qu4r-bridge[.]fablegrove[.]in[.]net\""
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
            "iocCount": 9385,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9385,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "3892e7a2c8bd6e4755701c9d1d6af34795a75b5a",
                "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                "1faf3762722a11f385dc5d9d4eb22a51594e83f5",
                "460e554589554e5dbaeb2c6f4c6aaf93e31da41a",
                "d59f81b85fcc5e75eddaea46f9fedaa93aa45e6f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49954,
            "activeSources": 8,
            "criticalAlerts": 31252,
            "activeCampaigns": 224
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21880,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9372,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1294,
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
                "percentage": 90
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
                "count": 21030,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://jhculxyr[.]tires8f[.]in[.]net/verification[.]google",
                    "hxxps://arklithum[.]tires8f[.]in[.]net/verification[.]google",
                    "hxxp://59[.]96[.]136[.]232:33748/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]118[.]23",
                    "1[.]183[.]160[.]11"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1554,
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
                "count": 650,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3892e7a2c8bd6e4755701c9d1d6af34795a75b5a",
                    "38539fcee6bf1d363e1c8a3866913d7d8ee3d102",
                    "c61b06bc00a58330fcb94e0e18094f5128adf283"
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
                "name": "Vidar",
                "count": 452,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9413d052ea89e6c879e577b62e5a55436f55dd8d",
                    "60fb7400edece2b09a17663e06efdb9badde8e2e",
                    "afa1d275776f12ada15518a6ec15bf89f8678a18"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 414,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"jhculxyr[.]tires8f[.]in[.]net\"",
                    " \"arklithum[.]tires8f[.]in[.]net\"",
                    " \"bran-crest[.]f0xharbor[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 365,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d59f81b85fcc5e75eddaea46f9fedaa93aa45e6f",
                    "0b0dc82e3c43d6527d2e2d4e19195817d9731387",
                    "ad794607ab5dbb098a4c5bc5d87e1b3bcd659d74"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43602,
        "lastCalculated": "2026-03-26 02:22 IST"
    }
};
