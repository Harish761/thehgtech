// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-17T14:34:01.127055+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-17T14:34:00.838386+05:30",
    "lastUpdatedFormatted": "Mar 17, 2026 at 02:34 PM IST",
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
            "iocCount": 512,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 512,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"63c47dd8b16c20bac5fadae8e576a90c805bcfa6b56f33bd2af71f098fa29e80",
                " \"04766d99dbf4738ff82addb4a60fc8dac74506b45b0539f8dd316fa850a11a71",
                " \"3021f4d365a641722748c5e60d983a080db17bef8f0a1dbe624ffe63cd544cc1",
                " \"f037a658f8a9340faa41f98f2ea03e91966cacf5ac61ba99c049545373e6f4a4",
                " \"2b3e736cb6dfddefb0b035d1130b4dc288436dda702796aa41f5116385c75ec4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1528,
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
            "iocCount": 8740,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8740,
                "newInLastHour": 8740,
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
            "iocCount": 19550,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19550,
                "newInLastHour": 19550,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://yzkzwt[.]highjoke[.]in[.]net/verification[.]google",
                "hxxp://59[.]97[.]178[.]6:40441/bin[.]sh",
                "hxxp://117[.]235[.]230[.]237:45372/i",
                "hxxps://warmcha[.]jokerun[.]in[.]net/verification[.]google",
                "hxxps://opticwin[.]jokerun[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1798,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1798,
                "newInLastHour": 1754,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"yzkzwt[.]highjoke[.]in[.]net\"",
                " \"hxxps://signs-in-extranet[.]com\"",
                " \"warmcha[.]jokerun[.]in[.]net\"",
                " \"hxxps://web-booking-extranet[.]com\"",
                " \"hxxps://auth-in-extranet[.]com\""
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
            "iocCount": 9217,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9217,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "5ec0b97b4993394721c873a4e9b8ed52cade22f0",
                "095c0df266f4b6c115b657420ac53e701e718a36",
                "9a00a12fad770289e318387488aab1f3c5ab0cb6",
                "c3d8724b118e63cbf69aafa13f5f7b87fa0d6fba",
                "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47863,
            "activeSources": 8,
            "criticalAlerts": 29227,
            "activeCampaigns": 197
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19982,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9245,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 477,
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
                "count": 19431,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://3nsojlm[.]cokenote[.]in[.]net/verification[.]google",
                    "hxxp://113[.]221[.]27[.]140:35843/i",
                    "hxxps://cour1e1-beam[.]cokenote[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]76[.]172",
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]15[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1527,
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
                "count": 655,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]117[.]174[.]176:7443\"",
                    " \"20[.]29[.]10[.]79:443\"",
                    " \"177[.]161[.]176[.]60:7443\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 638,
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
                "count": 508,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ts2hfdf[.]cokefun[.]in[.]net\"",
                    " \"3nsojlm[.]cokenote[.]in[.]net\"",
                    " \"cour1e1-beam[.]cokenote[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 415,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45406,
        "lastCalculated": "2026-03-17 14:34 IST"
    }
};
