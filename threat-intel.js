// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-27T22:34:58.720477+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-27T22:34:58.427327+05:30",
    "lastUpdatedFormatted": "Mar 27, 2026 at 10:34 PM IST",
    "comparisonPeriod": "Mar 26 \u2013 Mar 27, 2026",
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
                "hxxp://litere[.]uvt[.]ro/conferinte",
                "hxxp://one[.]link/evink/1",
                "hxxp://insta-verify-now[.]cyou/",
                "hxxps://www[.]robiox[.]com[.]py/games/1537690962/Bee-Swarm-Simulator?privateServerLinkCode=046669058921466022733654381262",
                "hxxps://www[.]robiox[.]com[.]py/games/88270880256027/WORKING-SUSSY-SWAP-SIMULATOR-2?privateServerLinkCode=005277144126727567749812678521"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 771,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 771,
                "newInLastHour": 88,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"60d7ecfa5459d57946bad25c71577ddff454bde012fd802d340830a6a6a4d94f",
                " \"89043da2e6d158dcd7741c0306530351759b57830fe6a8ed0092362f46446e0d",
                " \"bafde1447184101db89b964f771dc659ab811e0c17a32f468049e8d94c9e7cf2",
                " \"7f08de2db662531be25f28cdea63b3b9e85051ddf9ddf96064ec50a63cf26e21",
                " \"ac7d8028e97fb59750fec35387a50099a6d6df27b943041689fed14412d7c714"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1550,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1550,
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
                "1[.]177[.]162[.]2",
                "1[.]182[.]191[.]117",
                "1[.]183[.]46[.]50",
                "1[.]191[.]127[.]124"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4295,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4295,
                "newInLastHour": 4295,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]192[.]202[.]92",
                "1[.]204[.]166[.]3",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21106,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21106,
                "newInLastHour": 21106,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://dev1proc[.]banchiktend[.]in[.]net/verification[.]google",
                "hxxp://175[.]168[.]253[.]206:46688/i",
                "hxxps://cl4link[.]conditoverwinter[.]in[.]net/verification[.]google",
                "hxxp://39[.]79[.]193[.]140:49806/bin[.]sh",
                "hxxps://cl3dev[.]conditoverwinter[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1056,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1056,
                "newInLastHour": 1046,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dev1proc[.]banchiktend[.]in[.]net\"",
                " \"cl4link[.]conditoverwinter[.]in[.]net\"",
                " \"cl3dev[.]conditoverwinter[.]in[.]net\"",
                " \"cl2remote[.]conditoverwinter[.]in[.]net\"",
                " \"cl1store[.]conditoverwinter[.]in[.]net\""
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
            "iocCount": 9399,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9399,
                "newInLastHour": 9,
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
            "totalIndicators": 49781,
            "activeSources": 8,
            "criticalAlerts": 31129,
            "activeCampaigns": 221
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21748,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9381,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1188,
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
                "count": 20942,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]232[.]88[.]55:43933/bin[.]sh",
                    "hxxp://78[.]153[.]140[.]16/i[.]sh",
                    "hxxp://78[.]153[.]140[.]16/sc[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]177[.]162[.]2",
                    "1[.]182[.]191[.]117",
                    "1[.]191[.]127[.]124"
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
                "count": 652,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "01fca6410fefef1530ac71c5e34d6985a6e23643",
                    "aa61baea020e30d4e9279369359932319ca0d2ec",
                    "3892e7a2c8bd6e4755701c9d1d6af34795a75b5a"
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
                "count": 457,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"tensorecho[.]thistlecore[.]in[.]net\"",
                    " \"hhxxz[.]stone-blink[.]in[.]net\"",
                    " \"invoicgran[.]cl0verrun[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 454,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0a95355a64c3fe3f52695f97595037481ca11c4d",
                    "36ab4c53471d9071a08c916360e6b9e44b7bcf51",
                    "9413d052ea89e6c879e577b62e5a55436f55dd8d"
                ]
            },
            {
                "name": "OffLoader",
                "count": 366,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4b1e26306f87b52a186829f27e64af12633a8f3f",
                    "d59f81b85fcc5e75eddaea46f9fedaa93aa45e6f",
                    "0b0dc82e3c43d6527d2e2d4e19195817d9731387"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41849,
        "lastCalculated": "2026-03-27 22:34 IST"
    }
};
