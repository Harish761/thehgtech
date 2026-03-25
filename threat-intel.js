// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-25T22:45:35.620404+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-25T22:45:35.327622+05:30",
    "lastUpdatedFormatted": "Mar 25, 2026 at 10:45 PM IST",
    "comparisonPeriod": "Mar 24 \u2013 Mar 25, 2026",
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
            "iocCount": 820,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 820,
                "newInLastHour": 820,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"37c34d93921350411a23f12b0db0e29bc6df3e6d3b3183dbb438878a4451186b",
                " \"b28d301fb3cf377ed6197aad81013c1c771bebc2bc3025a020d2ebca61a6d79a",
                " \"f47356051ad100c4521b6bf1b74d872b3d5620d09136691de339d03a006760f2",
                " \"3187d3e3b16a56070801701cb040843b67ee52f3a601be142267fd0ea0d91e3b",
                " \"ee16e45dc5662c91fd4c0d3577d49075d613159337d6a59527f1541fba35afae"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1548,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1548,
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
            "iocCount": 4992,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4992,
                "newInLastHour": 4992,
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
            "iocCount": 20986,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20986,
                "newInLastHour": 20986,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://2350[.]velorune[.]in[.]net/verification[.]google",
                "hxxp://222[.]140[.]156[.]153:49998/i",
                "hxxp://115[.]48[.]238[.]197:37617/i",
                "hxxp://61[.]53[.]140[.]57:53493/i",
                "hxxps://veri-hidd[.]velorune[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1862,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1862,
                "newInLastHour": 1851,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"2350[.]velorune[.]in[.]net\"",
                " \"veri-hidd[.]velorune[.]in[.]net\"",
                " \"nhko[.]velorune[.]in[.]net\"",
                " \"cinemagarden[.]crestfall[.]in[.]net\"",
                " \"aviator-check[.]online\""
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
            "iocCount": 9343,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9343,
                "newInLastHour": 6,
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
            "totalIndicators": 48260,
            "activeSources": 7,
            "criticalAlerts": 30239,
            "activeCampaigns": 174
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20873,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 9366,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 607,
                "trend": "stable",
                "percentage": 2
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
                "count": 20849,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://zenlithum5[.]stonemuse[.]in[.]net/verification[.]google",
                    "hxxp://117[.]209[.]95[.]78:53409/bin[.]sh",
                    "hxxp://182[.]116[.]23[.]107:52660/bin[.]sh"
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
                    "1[.]15[.]15[.]189"
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
                "count": 649,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "38539fcee6bf1d363e1c8a3866913d7d8ee3d102",
                    "c61b06bc00a58330fcb94e0e18094f5128adf283",
                    "8f2ea97e92648473ca2a6d2f1607e1e36ac55346"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 547,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f065e37b5c0112620f7c97d3cd761e626e0faf4",
                    "ba19ffedc0a28ed2055127327e4cd6873dcf5a4f",
                    "ca0c1280a2c26415f8d77ca00a39c6986841da0c"
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
                "count": 411,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zenlithum5[.]stonemuse[.]in[.]net\"",
                    " \"029g1[.]stonemuse[.]in[.]net\"",
                    " \"tritidear7[.]n1ghtridge[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 364,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0b0dc82e3c43d6527d2e2d4e19195817d9731387",
                    "ad794607ab5dbb098a4c5bc5d87e1b3bcd659d74",
                    "137adb757afcb4e5980a5e6aa63ac498559309d2"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43960,
        "lastCalculated": "2026-03-25 22:45 IST"
    }
};
