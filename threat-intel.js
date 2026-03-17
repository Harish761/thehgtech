// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-18T02:24:43.094964+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-18T02:24:42.785423+05:30",
    "lastUpdatedFormatted": "Mar 18, 2026 at 02:24 AM IST",
    "comparisonPeriod": "Mar 17 \u2013 Mar 18, 2026",
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
            "iocCount": 590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 590,
                "newInLastHour": 34,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3b5d8ab8a0e8335bf542bc9e7f7a79360b541c920263de8fa2deb6ea1def361d",
                " \"63c66e2dbbd3d4b77035137d92fbebea562771d2ec15b0d4ba7b16d9b77e512a",
                " \"394428d680417d0ed67819e3f29e0bd472d56fae49615106ca2c426a6336e6f5",
                " \"1e0d76613eac48ebbfc33e869bfcee04b5a1dadef8ae33890daf724db2f65fe4",
                " \"da1350f849d03d07b0b8956bd0498ea4793d782c5c0ddf60a4981762c00db161"
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
                "newInLastHour": 7,
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
                "1[.]163[.]107[.]124",
                "1[.]169[.]241[.]122",
                "1[.]170[.]10[.]139"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5702,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5702,
                "newInLastHour": 5702,
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
            "iocCount": 19907,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19907,
                "newInLastHour": 19907,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]48[.]146[.]72:34536/bin[.]sh",
                "hxxps://petalcra[.]catflat[.]in[.]net/verification[.]google",
                "hxxps://156[.]233[.]71[.]230/Interac_e-transfer[.]bat",
                "hxxps://156[.]233[.]71[.]230/mego2[.]bat",
                "hxxps://156[.]233[.]71[.]230/interac[.]bat"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1956,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1956,
                "newInLastHour": 1920,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"petalcra[.]catflat[.]in[.]net\"",
                " \"nqsl[.]catflat[.]in[.]net\"",
                " \"hxxps://107[.]148[.]158[.]149\"",
                " \"delive-crest[.]catflat[.]in[.]net\"",
                " \"riv3-node[.]catflat[.]in[.]net\""
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
            "iocCount": 9288,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9288,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8fd9243cdc76cff67c1da97c32a30cc868de987c",
                "c5472c7ec6cac644eba170ea2b487e06d127481c",
                "a6424f7b04438f3acec298c9333197df2b3c6526",
                "4f9e60ee24af588adb3d71b7c0617592c7f21b44",
                "5ec0b97b4993394721c873a4e9b8ed52cade22f0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48247,
            "activeSources": 8,
            "criticalAlerts": 29652,
            "activeCampaigns": 209
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20408,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9244,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 562,
                "trend": "stable",
                "percentage": 3
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
                "count": 19820,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]127[.]177[.]145:55513/bin[.]sh",
                    "hxxps://sertideex1[.]sandball[.]in[.]net/verification[.]google",
                    "hxxp://82[.]140[.]232[.]162:36937/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]161[.]142[.]123",
                    "1[.]163[.]107[.]124",
                    "1[.]169[.]241[.]122"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1520,
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
                "count": 641,
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
                "name": " \"unknown\"",
                "count": 602,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://verification-cdn-cloud[.]beer/api/css[.]js\"",
                    " \"verification-cdn-cloud[.]beer\"",
                    " \"a3kvb22nuhfgaluy6uzufrjn3azzsu7tylszdbyne3kiextdmxz4nnyd[.]onion\""
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
                "count": 475,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"znnyfo[.]sandball[.]in[.]net\"",
                    " \"sertideex1[.]sandball[.]in[.]net\"",
                    " \"klvkpw[.]sandball[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 412,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8fd9243cdc76cff67c1da97c32a30cc868de987c",
                    "9a00a12fad770289e318387488aab1f3c5ab0cb6",
                    "4fe4c76644c524e662ba08364bb0405775eab374"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.cobalt_strike\"",
        "totalAttacksThisHour": 42897,
        "lastCalculated": "2026-03-18 02:24 IST"
    }
};
