// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-11T09:58:51.048400+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-11T09:58:50.698062+05:30",
    "lastUpdatedFormatted": "Sep 11, 2026 at 09:58 AM IST",
    "comparisonPeriod": "Sep 10 \u2013 Sep 11, 2026",
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
                "hxxps://s3[.]us-east-2[.]amazonaws[.]com/acrobat[.]adobe[.]co/indexdoc[.]html",
                "hxxps://aishwarya-rathore[.]github[.]io/javascript-amazon-project-main-main",
                "hxxps://pesta--shopee779[.]blogspot[.]com/",
                "hxxp://www[.]pesta--shopee779[.]blogspot[.]com/",
                "hxxps://nsidebymeliaalicanteportamaris[.]spahotel[.]guru/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1099,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1099,
                "newInLastHour": 43,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6d6adbff7df2734a190003658eeaea6f2cbef90953b3bbc116d3a411aa02ed66",
                " \"2776db94daae85ee1013c8274828d48e1c08705a690fa953f22209830b7618bd",
                " \"06b74f0ddef0180a092d00fb8974aa2598f631e0d6437acc97dd4d05e3b86bf8",
                " \"ae2cd00c16b6911133d21eada3d44e30eee5de57a9d4167f408fc5bbe7a30f88",
                " \"cd9655a77201f73e69953ec5b53f898de41983c1b4dcedd0c431955b9c20b241"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1653,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1653,
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
                "2.27.62.0/24",
                "2.56.192.0/22"
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
                "1[.]119[.]194[.]253",
                "1[.]12[.]229[.]231",
                "1[.]159[.]111[.]86",
                "1[.]181[.]200[.]22",
                "1[.]183[.]148[.]62"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5268,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5268,
                "newInLastHour": 5268,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12644,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12644,
                "newInLastHour": 12644,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]224[.]192[.]6:34023/bin[.]sh",
                "hxxp://115[.]56[.]157[.]163:33718/i",
                "hxxp://125[.]41[.]2[.]160:45493/i",
                "hxxp://42[.]227[.]202[.]111:40117/bin[.]sh",
                "hxxp://125[.]41[.]2[.]160:45493/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12069,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 12069,
                "newInLastHour": 8248,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"154[.]91[.]62[.]114:8074\"",
                " \"154[.]91[.]62[.]110:8074\"",
                " \"154[.]91[.]62[.]112:8074\"",
                " \"154[.]91[.]59[.]125:8074\"",
                " \"154[.]91[.]62[.]124:8074\""
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
            "iocCount": 10399,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10399,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "4a5cf0f4e8da154ed1c60ba064f0e733ce9c373e",
                "da016d8c7ef2176f549cd35927d92a6d9cc9e253",
                "199e1fd0a2f1c805aae75b33803d0e27b874b892",
                "5df1d8183a0c35eed21884c00e84299ded6ece0c",
                "ad1e251a18db0657b238f75305b312593a6276a4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54361,
            "activeSources": 8,
            "criticalAlerts": 25520,
            "activeCampaigns": 270
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14857,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10663,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4273,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 300,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]59[.]169",
                    "1[.]145[.]32[.]156",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13711,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]54[.]41[.]118:40394/i",
                    "hxxp://115[.]55[.]151[.]48:39130/i",
                    "hxxp://115[.]55[.]151[.]48:39130/bin[.]sh"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 3832,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]247[.]187[.]47:6661\"",
                    " \"84[.]247[.]187[.]47:8115\"",
                    " \"62[.]171[.]148[.]175:6606\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1710,
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
                "count": 1447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1415,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zfsinlimite[.]xyz\"",
                    " \"xn--80aeeebt5a0ahee[.]xn--p1ai\"",
                    " \"xn--iglesiadelacompaia-20b[.]com\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1293,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]76[.]190[.]209:8090\"",
                    " \"209[.]200[.]246[.]80:26513\"",
                    " \"209[.]200[.]246[.]80:4444\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 1094,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8gtfcl8o[.]eng-us-zensulin[.]com\"",
                    " \"phlf2dky[.]us-theeloncode[.]com\"",
                    " \"egmg2b5w[.]xen-burn[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 773,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4a5cf0f4e8da154ed1c60ba064f0e733ce9c373e",
                    "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                    "2be2964d2711f536de55aa929fa612ba69ebc405"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 41508,
        "lastCalculated": "2026-09-11 09:58 IST"
    }
};
