// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-24T02:27:59.583817+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-24T02:27:59.296370+05:30",
    "lastUpdatedFormatted": "Feb 24, 2026 at 02:27 AM IST",
    "comparisonPeriod": "Feb 23 \u2013 Feb 24, 2026",
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
                "hxxps://mypost[.]ycaskp[.]help/au/service/22/",
                "hxxp://www[.]bduedu[.]in/pay-fees/",
                "hxxps://geminibalance[.]520131401[.]xyz/",
                "hxxps://robloxr[.]com[.]es/users/1140465374/profile",
                "hxxps://www[.]robiox[.]com[.]py/users/225612695322/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1397,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1397,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1b03cd6ad141fe183fde097bf9030deaaa33b5b221bfa8d011b21454c0571816",
                " \"0d2291b8f0b26d7cc0232e168776f4f8fb4d9565bbe73c76ec4330811d007ebd",
                " \"a8142d74377f050feb6bdecebe1eca40413a62df69a9967d3f270e2567eea304",
                " \"87a8788f64accf4a6338b086843fbe50c7a431c2a6f8f5d1a5d42ae54548b9f0",
                " \"dee9ffafbcefc48d148ba03836b2e25a4ca15fcaa67fdacf60dc324c27130718"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1483,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1483,
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
                "1[.]0[.]164[.]165",
                "1[.]10[.]211[.]66",
                "1[.]1[.]176[.]58",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7521,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7521,
                "newInLastHour": 7521,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]136[.]28",
                "1[.]165[.]130[.]37",
                "1[.]194[.]219[.]159",
                "1[.]214[.]117[.]218",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21615,
                "newInLastHour": 21615,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://221[.]14[.]175[.]205:53696/bin[.]sh",
                "hxxp://196[.]251[.]107[.]104/build1[.]exe",
                "hxxps://transit-harbor-node[.]quickharbor[.]in[.]net/service/verification[.]google",
                "hxxp://182[.]114[.]51[.]109:33285/i",
                "hxxp://115[.]50[.]69[.]58:38363/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1377,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1377,
                "newInLastHour": 1377,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"transit-harbor-node[.]quickharbor[.]in[.]net\"",
                " \"mckleenz[.]com[.]au\"",
                " \"fast-port-logic[.]quickharbor[.]in[.]net\"",
                " \"mchb[.]net\"",
                " \"quick-harbor-unit[.]quickharbor[.]in[.]net\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 2,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 2,
                "newInLastHour": 2,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 9064,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9064,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "895e70f5240040e570ead8de7e5d15b787ea687d",
                "babb5c546aaa1b7f5fca06d7915785784a03157e",
                "c28279e89eed09d15c697bb24609c93e3e72a3f1",
                "aca620d6a9b7b98f585027186a359ee3e345300a",
                "cf21ee8a0778cde8dfea2048741c56fb9d72d71f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50190,
            "activeSources": 8,
            "criticalAlerts": 32039,
            "activeCampaigns": 203
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23009,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9030,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1018,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "name": "malware_download",
                "count": 21587,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]5[.]95[.]219:55765/i",
                    "hxxp://60[.]18[.]70[.]146:60629/bin[.]sh",
                    "hxxps://raw[.]githubusercontent[.]com/stevencohn8888-max/hj/refs/heads/main/ENCRYPTED[.]ps1"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]1[.]176[.]58",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1481,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 625,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a49ad700b0042b6d1e20153a6253bcc8ff17cff2",
                    "56dd33cfae66685bb9cf7f923d6e6752ff791705",
                    "2568edbf429d4745fe7ec67848063d60b82823d8"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 570,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bennettarbitration[.]com\"",
                    " \"eventocontaduriafce[.]viajandoalcielo[.]com\"",
                    " \"gconfisur[.]com\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 537,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c",
                    "6fd95f4a2d9cec238cbe2e1756890381c4fae3cb",
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b"
                ]
            },
            {
                "name": " \"n/a",
                "count": 524,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"dee9ffafbcefc48d148ba03836b2e25a4ca15fcaa67fdacf60dc324c27130718",
                    " \"35355ac21f1baed0dac02a947f37c972859afaa02045c385683dbd74f991c1bc",
                    " \"c5bd69dd7c58cc1b3a9ee8183f36578c10c5ab9fcbae83f1b5a2f770be32b210"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 509,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"765b06d48da8554cdd725bc6a1649a19ff741668a5e0846b7eaccf5877c6eab4",
                    " \"f4646d3ed97f7a0f985f067571d1066c1f8d0b9061f7162c051ea51efc986acf",
                    " \"91f9e1a24ea700822b660eee81789c7811256f5e7e8d0fb866a29dd7ec680702"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45829,
        "lastCalculated": "2026-02-24 02:27 IST"
    }
};
