// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-14T22:15:17.141229+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-14T22:15:16.849714+05:30",
    "lastUpdatedFormatted": "Mar 14, 2026 at 10:15 PM IST",
    "comparisonPeriod": "Mar 13 \u2013 Mar 14, 2026",
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
                "hxxps://kucoin-logini[.]gitbook[.]io/us/",
                "hxxp://kucoin-logini[.]gitbook[.]io/",
                "hxxps://james-huston49823563[.]pages[.]dev/help/contact/862713388058410",
                "hxxp://metamasktiologin[.]webflow[.]io/",
                "hxxp://hamzachehlaoui[.]github[.]io/login/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 709,
                "newInLastHour": 192,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3ed543cdaf97deb296b5e698ddd40c14039908dbb79a18e2727db8c685c04172",
                " \"90e2ed98a45a75b3a4f73d1a9bffb85d4020dc4a8d3658073ff35bd45885118a",
                " \"4b78364cb434ab7380a20b48f79ebcfb8f1a0e90488887f8c890d9a696c903bd",
                " \"e7886ec29eacf22845634e0d98aa3b5233bfab8c9f3fb0c8d8d767f3b4f77f41",
                " \"466dac1c9f5a7ceb8232e99dc9bf8a1247bd92dc02e166a46c932bb7f8466f9c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1532,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1532,
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
                "1[.]123[.]154[.]151",
                "1[.]15[.]118[.]23",
                "1[.]162[.]147[.]232",
                "1[.]170[.]10[.]139",
                "1[.]177[.]162[.]2"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6142,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6142,
                "newInLastHour": 6142,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]141[.]8",
                "1[.]162[.]198[.]143",
                "1[.]192[.]189[.]251",
                "1[.]197[.]102[.]62",
                "1[.]204[.]166[.]3"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19743,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19743,
                "newInLastHour": 19743,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]1[.]200[.]254:39880/bin[.]sh",
                "hxxps://rzlt[.]getron[.]in[.]net/verification[.]google",
                "hxxps://dl[.]armour-inc-down[.]net/data/?7",
                "hxxps://dl[.]armour-inc-down[.]net/data/?3",
                "hxxps://dl[.]armour-inc-down[.]net/data/?6"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1748,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1748,
                "newInLastHour": 1743,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"climole[.]stoppit[.]in[.]net\"",
                " \"rzlt[.]getron[.]in[.]net\"",
                " \"146[.]103[.]122[.]117:443\"",
                " \"nirgua[.]com[.]ve\"",
                " \"hxxp://tribecaflatstore[.]com/\""
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
            "iocCount": 9249,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9249,
                "newInLastHour": 40,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "034998a0955ae52460f68ad42e38c0ceca71e67e",
                "51c0bdf104cd59d27e54dfea6b8222f7570b641b",
                "58f7ed004585920351cbf01d943efc7c41324209",
                "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                "9310dd2c06171769e79a51c4897dc963a7c11ff6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47723,
            "activeSources": 8,
            "criticalAlerts": 29312,
            "activeCampaigns": 197
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20121,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9191,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1098,
                "trend": "up",
                "percentage": 23
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
                "count": 19488,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://45[.]156[.]87[.]79/bins/bin[.]x86_64",
                    "hxxp://175[.]148[.]164[.]67:59201/bin[.]sh",
                    "hxxp://110[.]39[.]239[.]111:42729/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]154[.]151",
                    "1[.]15[.]118[.]23",
                    "1[.]162[.]147[.]232"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1532,
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
                "count": 1385,
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
                "name": " \"win.asyncrat\"",
                "count": 672,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"sniper[.]pikseltesisatci[.]com\"",
                    " \"sniper[.]sc88bet[.]net\"",
                    " \"sniper[.]sexhay001[.]com\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 637,
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
                "count": 389,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43165,
        "lastCalculated": "2026-03-14 22:15 IST"
    }
};
