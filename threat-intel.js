// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-24T08:24:22.170773+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-24T08:24:21.888083+05:30",
    "lastUpdatedFormatted": "Feb 24, 2026 at 08:24 AM IST",
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
                "hxxp://www[.]h98z[.]xyz/",
                "hxxps://roblox[.]com[.]ly/users/6147168822/profile",
                "hxxps://roblox[.]com[.]ge/users/160935880/profile",
                "hxxps://roblox[.]com[.]py/communities/8853142704/",
                "hxxps://bronze-arc-atom[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1408,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1408,
                "newInLastHour": 83,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2c3a7ce119f17ad7f50576f6474135599012e21464403901d1a80e1fef1f2d2f",
                " \"ff268fb324b69cfbf60d93d5f214e0a935fe6dc117f62a91c43b63e297226a87",
                " \"a24141b4b1836ca165549688a1b1b8a478ccce163ff737d0981535ce3379ba32",
                " \"c577845c7cdc0b209ba76c99bb2a12609094a247f0312e7718ae4a482785a0fa",
                " \"3ecdc4793011b382c169a6e03c7db44fdbc86a8869ee60aeb7191ca60a263cfd"
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
                "1[.]0[.]164[.]165",
                "1[.]10[.]211[.]66",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7433,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7433,
                "newInLastHour": 7433,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]165[.]130[.]37",
                "1[.]194[.]219[.]159",
                "1[.]220[.]64[.]218",
                "1[.]241[.]174[.]81",
                "1[.]34[.]219[.]246"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21137,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21137,
                "newInLastHour": 21137,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]224[.]169[.]44:55398/i",
                "hxxp://196[.]189[.]68[.]239:54783/bin[.]sh",
                "hxxp://182[.]124[.]170[.]137:49341/bin[.]sh",
                "hxxp://175[.]148[.]133[.]179:40554/bin[.]sh",
                "hxxp://222[.]142[.]245[.]119:39491/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1409,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1409,
                "newInLastHour": 1409,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"solar-grove-control[.]brightgrove[.]ru\"",
                " \"medsteticrp[.]com[.]br\"",
                " \"medigoods[.]de\"",
                " \"medicurineindiapharmaceutical[.]com\"",
                " \"medical[.]takadanobaba-seitai[.]com\""
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
            "iocCount": 9059,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9059,
                "newInLastHour": 0,
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
            "totalIndicators": 50238,
            "activeSources": 8,
            "criticalAlerts": 32077,
            "activeCampaigns": 203
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 23038,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9039,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1020,
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
                "count": 21615,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://221[.]14[.]175[.]205:53696/bin[.]sh",
                    "hxxp://196[.]251[.]107[.]104/build1[.]exe",
                    "hxxps://transit-harbor-node[.]quickharbor[.]in[.]net/service/verification[.]google"
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
                    "1[.]10[.]211[.]66",
                    "1[.]1[.]176[.]58"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1483,
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
                "count": 626,
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
                "count": 515,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"1b03cd6ad141fe183fde097bf9030deaaa33b5b221bfa8d011b21454c0571816",
                    " \"a8142d74377f050feb6bdecebe1eca40413a62df69a9967d3f270e2567eea304",
                    " \"dee9ffafbcefc48d148ba03836b2e25a4ca15fcaa67fdacf60dc324c27130718"
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
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 45364,
        "lastCalculated": "2026-02-24 08:24 IST"
    }
};
