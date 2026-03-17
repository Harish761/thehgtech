// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-17T19:16:52.977675+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-17T19:16:52.687174+05:30",
    "lastUpdatedFormatted": "Mar 17, 2026 at 07:16 PM IST",
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
                "hxxps://www[.]roblox[.]com[.]gl/users/274590671691/profile",
                "hxxps://www[.]o-shop[.]com/en/menu/eye-lenses/ciba-vision/air-optix-night-day-aqua-2551[.]html",
                "hxxps://validate-robinhood[.]com[.]emuna[.]info/",
                "hxxps://validate-robinhood[.]com/",
                "hxxps://invoicecarcareenquirydocusign[.]appwrite[.]network/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 501,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 501,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cb86017411708eb6e5384fc0288b0ec4692ea45ef38586b7c67f99148e1117c3",
                " \"55e4a8425387a5ad4d63be81b36e39199d38ae6270828979440836708af1252c",
                " \"4f9669712b6cd325eba9e94faf73a7d6ac29cdb724e857f5693aebe542f64b94",
                " \"c6d18dd01ae4fd2db8adf18c6bf1876e14a6cd190aeefb12e3c2b3bb14843930",
                " \"76a6874c692e69f4e3c73b82515537033dbc4fd5f1628b9c40580c5231668271"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1525,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1525,
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
                "1[.]15[.]15[.]189",
                "1[.]161[.]142[.]123",
                "1[.]162[.]147[.]232",
                "1[.]163[.]107[.]124",
                "1[.]170[.]10[.]139"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8596,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8596,
                "newInLastHour": 8596,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]141[.]8",
                "1[.]162[.]198[.]143",
                "1[.]164[.]175[.]189",
                "1[.]189[.]21[.]20",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19689,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19689,
                "newInLastHour": 19689,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]138[.]64[.]12:44625/bin[.]sh",
                "hxxp://123[.]190[.]231[.]231:48718/bin[.]sh",
                "hxxp://115[.]55[.]51[.]170:40829/i",
                "hxxps://neo-sc4r1[.]blowoff[.]in[.]net/verification[.]google",
                "hxxps://geo-reg1st[.]blowoff[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1843,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1843,
                "newInLastHour": 1797,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"geo-reg1st[.]blowoff[.]in[.]net\"",
                " \"3[.]78[.]28[.]71:13447\"",
                " \"yum[.]shuvocomputer[.]org\"",
                " \"yum[.]ssffaa2[.]xyz\"",
                " \"52[.]57[.]120[.]10:13447\""
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
            "iocCount": 9269,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9269,
                "newInLastHour": 67,
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
            "totalIndicators": 47910,
            "activeSources": 8,
            "criticalAlerts": 29281,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20086,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9195,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 472,
                "trend": "stable",
                "percentage": -1
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
                "count": 19550,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://yzkzwt[.]highjoke[.]in[.]net/verification[.]google",
                    "hxxp://59[.]97[.]178[.]6:40441/bin[.]sh",
                    "hxxp://117[.]235[.]230[.]237:45372/i"
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
                "count": 1528,
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
                "count": 1388,
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
                "count": 675,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://signs-in-extranet[.]com\"",
                    " \"hxxps://web-booking-extranet[.]com\"",
                    " \"hxxps://auth-in-extranet[.]com\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 638,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da",
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759"
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
                "count": 489,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"yzkzwt[.]highjoke[.]in[.]net\"",
                    " \"warmcha[.]jokerun[.]in[.]net\"",
                    " \"opticwin[.]jokerun[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 405,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9a00a12fad770289e318387488aab1f3c5ab0cb6",
                    "4fe4c76644c524e662ba08364bb0405775eab374",
                    "da23f7db47ec680f55226ed5040cbcf4b9f55d64"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45493,
        "lastCalculated": "2026-03-17 19:16 IST"
    }
};
