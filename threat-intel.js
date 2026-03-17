// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-17T08:21:52.852501+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-17T08:21:52.570497+05:30",
    "lastUpdatedFormatted": "Mar 17, 2026 at 08:21 AM IST",
    "comparisonPeriod": "Mar 16 \u2013 Mar 17, 2026",
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
                "hxxp://getproxylens23fjvj[.]s3[.]us-west-2[.]amazonaws[.]com/index[.]html?eta=3mail@a[.]b[.]c0",
                "hxxps://geraldoseguros[.]cl/wp-includes/resources/",
                "hxxp://nhn-cafeview[.]com/view/129384",
                "hxxps://delv[.]ghanapost[.]vip/zc",
                "hxxp://businessrequestverifyportal[.]com/5227406565/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 533,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 533,
                "newInLastHour": 91,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"535ada9c0c833577ab9489386fad8fc02e9629fe8d038e3dedb3db261868e0ed",
                " \"9b9f0a47f0e1ed11995b18ca0eec65c53c8e027076fa8be151271b6f0b110276",
                " \"3d91c5fa7542c6043f486dcfd84abd00225ea2ccadd7a4304521eba9b30568b0",
                " \"a61cfdb1585ebd47d4046b62ed7ad8a756234f54b24ee0755385c39fb12dbd40",
                " \"9cd9b2800309a07bce3f559d5fc75a649c52d08de7b2b2734b481807f8c5d87a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1527,
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
                "1[.]12[.]76[.]172",
                "1[.]15[.]118[.]23",
                "1[.]15[.]15[.]189",
                "1[.]162[.]147[.]232",
                "1[.]170[.]10[.]139"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8782,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8782,
                "newInLastHour": 8782,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]141[.]8",
                "1[.]162[.]198[.]143",
                "1[.]164[.]175[.]189",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19386,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19386,
                "newInLastHour": 19386,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]63[.]133[.]39:34520/bin[.]sh",
                "hxxp://222[.]139[.]106[.]179:43780/i",
                "hxxp://219[.]156[.]172[.]168:36670/i",
                "hxxp://42[.]231[.]250[.]218:46008/i",
                "hxxp://115[.]61[.]114[.]175:40761/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1807,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1807,
                "newInLastHour": 1757,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"156[.]245[.]144[.]203:8880\"",
                " \"markterminal[.]grosstao[.]in[.]net\"",
                " \"peteruncaged[.]menshealthclinics[.]us\"",
                " \"k8s-992-node[.]fjordpulse[.]in[.]net\"",
                " \"peter-rodriguez[.]globaldivide[.]info\""
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
            "iocCount": 9278,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9278,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b69db4ec327f041f246fc14ec574a65194e9b317",
                "f002264af756edac68aa506aaf80d835d8b30248",
                "31badffbca316a7ab6cbca09cedd56fb94944138",
                "654311f9725e26020bb0b04a32ca445fe72e96ea",
                "9e09c60d08dc2b3c0439d6673e5227a6a96869b7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48238,
            "activeSources": 8,
            "criticalAlerts": 29590,
            "activeCampaigns": 198
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20351,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9239,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 452,
                "trend": "stable",
                "percentage": 8
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19800,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://176[.]65[.]139[.]67/bins/spoofer[.]spc",
                    "hxxp://176[.]65[.]139[.]67/bins/spoofer[.]x86",
                    "hxxp://176[.]65[.]139[.]67/bins/spoofer[.]ppc"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]250[.]190",
                    "1[.]12[.]76[.]172",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1529,
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
                "count": 1390,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada"
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
                "name": " \"unknown\"",
                "count": 696,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"soulguy[.]lol\"",
                    " \"ai6900[.]lol\"",
                    " \"milkywaysol[.]lol\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 640,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759",
                    "56bad084f7d679dfddbe0f1ac2254b191051d348"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 541,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa",
                    "e30905555de39d1e66f834f672f6f14e9106839b",
                    "f9e8d701de1740086da792e2c9be70df261e1832"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 492,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"net-v8-access[.]medivault[.]in[.]net\"",
                    " \"kelspireal3[.]saltball[.]in[.]net\"",
                    " \"tru59-chain[.]darkboll[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "da23f7db47ec680f55226ed5040cbcf4b9f55d64",
                    "6c3090397f5d96a0c3cdf0e64e6949c4e488405d",
                    "36d7f495d67d9fe0357f141e008d693ed2f53919"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45338,
        "lastCalculated": "2026-03-17 08:21 IST"
    }
};
