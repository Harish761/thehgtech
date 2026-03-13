// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-13T14:24:54.254190+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-13T14:24:53.976874+05:30",
    "lastUpdatedFormatted": "Mar 13, 2026 at 02:24 PM IST",
    "comparisonPeriod": "Mar 12 \u2013 Mar 13, 2026",
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
                "hxxps://sx-58[.]github[.]io/netflix[.]com-login/",
                "hxxps://jubril879[.]github[.]io/netflix/",
                "hxxps://accesscontrolemailtermiantionnotice[.]weebly[.]com/",
                "hxxps://sekhariam[.]github[.]io/Netflix-Clone/",
                "hxxps://rohitashwapaldas[.]github[.]io/KTJ-WEBD-WORKSHOP-Assignment1/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 775,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 775,
                "newInLastHour": 31,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7c60cf6ee45edd4ad9f2c76959676e54187b8d981cf45e1bab3e9a85bedc5c1e",
                " \"d7b7cc13e0994509efc054b12656499b29d78f1d97ccaf60aeadc15f9bf18985",
                " \"4b98604bc283291e7573925c9f5656b2713c7840b6d0daa8cec029b25c04af4c",
                " \"e16604d0eed69a870f5d340266c3459c5516f8a548ab61e04ddb87f10b3cf256",
                " \"7033d65fa55d6b8092d4ab9f36efd7a3bff7d70b2cdbd25b7fcf86588cc47395"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1530,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1530,
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
                "1[.]15[.]118[.]23",
                "1[.]170[.]10[.]139",
                "1[.]170[.]227[.]213",
                "1[.]170[.]47[.]69",
                "1[.]177[.]162[.]3"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6464,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6464,
                "newInLastHour": 6464,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]162[.]231[.]28",
                "1[.]192[.]202[.]92",
                "1[.]197[.]102[.]62",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19350,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19350,
                "newInLastHour": 19350,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]37[.]118[.]101:58545/bin[.]sh",
                "hxxp://158[.]94[.]208[.]7/files/8115221351/c8hckRF[.]exe",
                "hxxp://119[.]115[.]243[.]13:53957/i",
                "hxxp://115[.]53[.]196[.]85:55661/i",
                "hxxp://175[.]174[.]87[.]139:57425/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1045,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1045,
                "newInLastHour": 947,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"core-shell-77[.]cybergeist[.]in[.]net\"",
                " \"wmfkj2w9[.]oakbit[.]digital\"",
                " \"alpha-trace-0[.]cybergeist[.]in[.]net\"",
                " \"point-entry[.]mondosolido[.]in[.]net\"",
                " \"31[.]57[.]201[.]19:443\""
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
            "iocCount": 9233,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9233,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "4ee62bf47053d694373113a1c4eecc04bcb4c857",
                "ae5460fc8c44e01fefa9ca3b6a5ae8499e9b5bf7",
                "4ec241d16098181c4e15f1f324ba96db74f2e7bc",
                "9f301a45cd5aa087acc97ff0746bea7a05b366de",
                "407d4bc9cc3b67c3a5e48aeae8f384639df29105"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47218,
            "activeSources": 8,
            "criticalAlerts": 29297,
            "activeCampaigns": 199
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20076,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9221,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 533,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 96
            },
            {
                "name": "Tech",
                "percentage": 3
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19267,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://59[.]182[.]88[.]137:54923/bin[.]sh",
                    "hxxp://123[.]10[.]2[.]23:40873/i",
                    "hxxp://115[.]63[.]15[.]15:54973/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]10[.]139",
                    "1[.]170[.]227[.]213"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1533,
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
                "name": "QuasarRAT",
                "count": 638,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "56bad084f7d679dfddbe0f1ac2254b191051d348",
                    "363c5465989001701bfd2de6993628e0264dc7e7",
                    "581cff3c3ff5140030c1b2dae80093f37df765df"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 540,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e30905555de39d1e66f834f672f6f14e9106839b",
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c"
                ]
            },
            {
                "name": "Vidar",
                "count": 402,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b45edee5059c8d032cb67eb6c347bc5c9b6b5cd4",
                    "d238aa58c140e5e411718d8e6afcd7689723e518",
                    "b918317471273f6346359afabcc1f14c4d22ebfb"
                ]
            },
            {
                "name": "OffLoader",
                "count": 356,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae5460fc8c44e01fefa9ca3b6a5ae8499e9b5bf7",
                    "343a308d6aa6ef72febb594eb35d88f843d50852",
                    "fecbcfd7dcdac7eb882a84d60e0a0f8aa8413fe0"
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42097,
        "lastCalculated": "2026-03-13 14:24 IST"
    }
};
