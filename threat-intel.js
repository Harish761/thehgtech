// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-06T23:19:03.827093+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-06T23:19:03.451710+05:30",
    "lastUpdatedFormatted": "May 06, 2026 at 11:19 PM IST",
    "comparisonPeriod": "May 05 \u2013 May 06, 2026",
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
                "hxxp://shopee2349[.]blogspot[.]com/",
                "hxxp://aniketbhujad06[.]github[.]io/netfilx-clone",
                "hxxp://priyanshisingh0210[.]github[.]io/Netflix-Clone",
                "hxxp://sure-chandini[.]github[.]io/sample",
                "hxxp://bafkreicsvwtgwhy5bpcajytwbwkrd23yquvf75un33gdfuq4gkq67uau6u[.]ipfs[.]dweb[.]link/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 656,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 656,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f9ff9aaba61fa274343a96815ba7bba924d4b7301b1f37584c3f364f415fcbd4",
                " \"476b1882f5d8371b15289c83fb2522469e096f6045da9d02ef1e89ba2793efc6",
                " \"4e7b159b873a86940bdfb4968a7894b9e79d0a30d74109e848b8263ac8607e93",
                " \"1b6ce2fff9c6a0378682123b23fa316c2a9c48b99932d7fabe68003be37c4be7",
                " \"d50b9442d397be84a0787968c36d9f7a0c39a6a725eac84eac6e71f9bd932eb1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1624,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1624,
                "newInLastHour": 15,
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
                "1[.]10[.]247[.]225",
                "1[.]11[.]228[.]4",
                "1[.]161[.]57[.]96",
                "1[.]177[.]63[.]24",
                "1[.]183[.]41[.]171"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3634,
                "newInLastHour": 3634,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]13[.]22[.]203",
                "1[.]162[.]247[.]201",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27858,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27858,
                "newInLastHour": 27858,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://primeproxy[.]sorix7el[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp",
                "hxxps://axwq1[.]sorix7el[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp",
                "hxxps://osbases[.]jesuit5itny[.]lat/draw-msft-cl0ud-acc-trust7934/gettwo[.]dll",
                "hxxp://solven9ix[.]sorix7el[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp",
                "hxxps://solven9ix[.]sorix7el[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1651,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1651,
                "newInLastHour": 1641,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"primeproxy[.]sorix7el[.]lat\"",
                " \"osbases[.]jesuit5itny[.]lat\"",
                " \"axwq1[.]sorix7el[.]lat\"",
                " \"metalts[.]jesuit5itny[.]lat\"",
                " \"solven9ix[.]sorix7el[.]lat\""
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
            "iocCount": 9657,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9657,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "275d98e8ac40fa51490a1982fd621954d6ffe4c1",
                "642658f7ab86668339d1f98c7fb6a4200589db02",
                "5ee1e0ab5f0782e83d62722e9a7ee91062102652",
                "c56ac80a032ff319463850125369cc514e83ed59",
                "cce12866188dc393f3c4e151caf38e32543a9c65"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56690,
            "activeSources": 8,
            "criticalAlerts": 38036,
            "activeCampaigns": 192
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28396,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9640,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 303,
                "trend": "stable",
                "percentage": -2
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 84
            },
            {
                "name": "Tech",
                "percentage": 15
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 27767,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]36[.]254:43104/i",
                    "hxxps://metricregistry[.]xamir3on[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp",
                    "hxxps://root-cul[.]xamir3on[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]247[.]225",
                    "1[.]11[.]228[.]4",
                    "1[.]161[.]57[.]96"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1611,
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
                "count": 1409,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c",
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 856,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"metricregistry[.]xamir3on[.]lat\"",
                    " \"root-cul[.]xamir3on[.]lat\"",
                    " \"d3c0de-scope[.]xamir3on[.]lat\""
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
                "count": 679,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487",
                    "bb085af0610557f877683616d87b7345b59c4f54"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 522,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "275d98e8ac40fa51490a1982fd621954d6ffe4c1",
                    "82f19aac31fa0b5c38858af039bc9b0133424046",
                    "fcf4598502929f58a832dd6aa1fba567340e504a"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 497,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://114[.]132[.]190[.]121:8888/supershell/login/\"",
                    " \"hxxps://truitpix9871[.]world/ext[.]f66368c3907c[.]js\"",
                    " \"hxxps://truitpix9871[.]world/ext-b[.]1c60f323a607[.]js\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48483,
        "lastCalculated": "2026-05-06 23:19 IST"
    }
};
