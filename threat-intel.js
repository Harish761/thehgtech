// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-27T19:08:55.941710+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-27T19:08:55.650619+05:30",
    "lastUpdatedFormatted": "Mar 27, 2026 at 07:08 PM IST",
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
            "iocCount": 782,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 782,
                "newInLastHour": 59,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c5ba01490fc242514ff588e060b79b1afbad2fb5afa8b5bcd5c7d61b65ca35c2",
                " \"f2731f3e8c386a76fdf1663c0cb0d4565768ba57aa453b243936da8195b489c9",
                " \"dc65daa965ef88b801f2ca4aa9775a9891c209319ac2982e80ba05a81bc0739f",
                " \"2da6979700ca47740c94446df38096017166eecb4206af33aa1d55c9346593ea",
                " \"8ea3c693f6edc50719b565dc8e24d94fef688196b2dd527e9f58cf2ea5fc0f72"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1553,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1553,
                "newInLastHour": 1297,
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
                "1[.]177[.]162[.]2",
                "1[.]182[.]191[.]117",
                "1[.]191[.]127[.]124",
                "1[.]191[.]147[.]229",
                "1[.]192[.]177[.]194"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4217,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4217,
                "newInLastHour": 4217,
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
            "iocCount": 20942,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20942,
                "newInLastHour": 20942,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]232[.]88[.]55:43933/bin[.]sh",
                "hxxp://78[.]153[.]140[.]16/i[.]sh",
                "hxxp://78[.]153[.]140[.]16/sc[.]sh",
                "hxxps://hhxxz[.]stone-blink[.]in[.]net/verification[.]google",
                "hxxp://39[.]81[.]52[.]74:38134/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1796,
                "newInLastHour": 1783,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"tensorecho[.]thistlecore[.]in[.]net\"",
                " \"hxxps://automaticdrafts[.]com/mao_czin[.]zip\"",
                " \"hxxps://automaticdrafts[.]com/loader[.]ps1\"",
                " \"hhxxz[.]stone-blink[.]in[.]net\"",
                " \"automaticdrafts[.]com\""
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
            "iocCount": 9403,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9403,
                "newInLastHour": 49,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0a95355a64c3fe3f52695f97595037481ca11c4d",
                "be269f8ead3a0b0603dfb229617307426ecb5102",
                "bfb00181d113469c1bfa7c591625ea5e80a02d71",
                "01fca6410fefef1530ac71c5e34d6985a6e23643",
                "4b1e26306f87b52a186829f27e64af12633a8f3f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48381,
            "activeSources": 8,
            "criticalAlerts": 31037,
            "activeCampaigns": 226
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21705,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9332,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1184,
                "trend": "stable",
                "percentage": -3
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
                "count": 20831,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]215[.]52[.]78:47877/i",
                    "hxxp://103[.]160[.]62[.]234/lemperluvkurayami/kurayami[.]i686",
                    "hxxp://103[.]160[.]62[.]234/lemperluvkurayami/kurayami[.]arc"
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
                    "1[.]193[.]63[.]139"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1393,
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
                    "01fca6410fefef1530ac71c5e34d6985a6e23643",
                    "aa61baea020e30d4e9279369359932319ca0d2ec",
                    "3892e7a2c8bd6e4755701c9d1d6af34795a75b5a"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 547,
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
                "count": 455,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"oszk[.]apexprospera[.]in[.]net\"",
                    " \"t48qdsn[.]apexprospera[.]in[.]net\"",
                    " \"5pn9[.]apexprospera[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 432,
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
                "count": 363,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4b1e26306f87b52a186829f27e64af12633a8f3f",
                    "d59f81b85fcc5e75eddaea46f9fedaa93aa45e6f",
                    "0b0dc82e3c43d6527d2e2d4e19195817d9731387"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 43652,
        "lastCalculated": "2026-03-27 19:08 IST"
    }
};
