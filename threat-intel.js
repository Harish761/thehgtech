// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-13T22:24:18.159146+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-13T22:24:17.874919+05:30",
    "lastUpdatedFormatted": "Mar 13, 2026 at 10:24 PM IST",
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
                "hxxp://roblox[.]com[.]ge/communities/5773131333/",
                "hxxps://mayankkumarw201-afk[.]github[.]io/netflix/",
                "hxxp://pub-e7b64c658d8647888de66296dd65df4a[.]r2[.]dev/index[.]html",
                "hxxps://94050105[.]xyz/",
                "hxxp://httpss-roblox[.]co/users/1721859/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 679,
                "newInLastHour": 63,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"35f2b6cf64cfe6e60064d9569a8c7ff37d232cdc982c8916531d44bb09319e96",
                " \"ccaafcaadb06eea5842be23273ebffda66b4126ceae5869090733b2232aadb76",
                " \"b583e88fa3fd971a809fb4ecca121cc24f3324b325b231b0c57f1bfa10b24a77",
                " \"c760f216d571e7378e5df349b5fb36c4bff67a17e27e275e8f3ce8a857fdb62c",
                " \"42d33186168e9f554793939d2cf79625c02da87edcfe9bda99e5d02253636ad8"
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
                "1[.]159[.]119[.]106",
                "1[.]170[.]10[.]139",
                "1[.]170[.]227[.]213"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6529,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6529,
                "newInLastHour": 6529,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]162[.]231[.]28",
                "1[.]164[.]175[.]79",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19566,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19566,
                "newInLastHour": 19566,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]239[.]230[.]180:50648/bin[.]sh",
                "hxxp://182[.]126[.]115[.]113:52478/i",
                "hxxp://59[.]103[.]86[.]150:39914/i",
                "hxxp://117[.]211[.]147[.]30:59996/i",
                "hxxp://158[.]94[.]208[.]7/files/1781548144/okR3iq0[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1464,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1464,
                "newInLastHour": 1460,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://dretryout[.]top/role/logout-storage[.]js\"",
                " \"dretryout[.]top\"",
                " \"hxxps://dretryout[.]top/role/tenant-header[.]php\"",
                " \"hxxps://dretryout[.]top/role/realm-sessionstore[.]js\"",
                " \"217[.]69[.]0[.]159:4789\""
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
            "iocCount": 9243,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9243,
                "newInLastHour": 2,
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
            "totalIndicators": 47849,
            "activeSources": 8,
            "criticalAlerts": 29403,
            "activeCampaigns": 195
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20184,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9219,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1074,
                "trend": "up",
                "percentage": 121
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
                "count": 19476,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]209[.]31[.]72:34322/bin[.]sh",
                    "hxxp://123[.]11[.]76[.]99:54743/bin[.]sh",
                    "hxxp://125[.]161[.]166[.]159:51393/bin[.]sh"
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
                    "1[.]159[.]119[.]106"
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
                "name": " \"win.asyncrat\"",
                "count": 525,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"194[.]163[.]168[.]11:9999\"",
                    " \"108[.]62[.]141[.]15:8010\"",
                    " \"zbot[.]latelierduchocolat[.]com[.]mx\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42925,
        "lastCalculated": "2026-03-13 22:24 IST"
    }
};
