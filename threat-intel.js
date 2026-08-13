// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-13T19:07:54.929884+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-13T19:07:54.569685+05:30",
    "lastUpdatedFormatted": "Aug 13, 2026 at 07:07 PM IST",
    "comparisonPeriod": "Aug 12 \u2013 Aug 13, 2026",
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
                "hxxps://logowanie-facebook[.]vercel[.]app/",
                "hxxp://helpry[.]jp/clxj-blockchain-rqdd-helpry-pgkzw-blockchain-wzojvh",
                "hxxps://logical-words-764346[.]framer[.]app/",
                "hxxps://frequent-industry-913696[.]framer[.]app/",
                "hxxp://www[.]m[.]6442[.]win/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1426,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1426,
                "newInLastHour": 103,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e87d14fd46969a5a2341482f1e1082f00a84520b9d6fe7138807584c83a25269",
                " \"381888ef375d6d7f4121aa156f27cf76cb5e77240a64551ed21b735da98e5dca",
                " \"9abee2f5a7e6d04fc52a47fbec2fb4be163ee262e8f41843cabc200f4609e09f",
                " \"320aad120d57c77b5b0d17ce4315d36d220d6aca9b9a2468700e1922c8fe80bc",
                " \"4aac943dcb338f2a62c0ea00d19093c87285923345663bad620caf162f5f3999"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1685,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1685,
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
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]119[.]194[.]226",
                "1[.]140[.]3[.]11",
                "1[.]15[.]14[.]29",
                "1[.]180[.]190[.]250",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5304,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5304,
                "newInLastHour": 5304,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]12[.]233[.]51",
                "1[.]14[.]106[.]163",
                "1[.]14[.]184[.]80"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17094,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17094,
                "newInLastHour": 17094,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://95[.]9[.]35[.]137:54934/i",
                "hxxp://192[.]109[.]139[.]79/flyudfg[.]png",
                "hxxp://192[.]109[.]139[.]79/hdGFtyu[.]png",
                "hxxps://medicosantiagomarrero[.]com/services/img[.]png",
                "hxxps://munihuacho[.]gob[.]pe/vehiculos/MSI_PRO[.]png"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4786,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4786,
                "newInLastHour": 4512,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"us-tinni-trol[.]com\"",
                " \"dc16h0z3[.]energyrevolutionsystem[.]org\"",
                " \"imkc64pm[.]us-en-us-keyslimdrops[.]com\"",
                " \"us-en-us-keyslimdrops[.]com\"",
                " \"hxxp://shkpiva[.]shop:5627/collections\""
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
            "iocCount": 10420,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10420,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e953a8c7f135a5b8867b9dfcfc2a1b402f1e289e",
                "3c286904e96ada2549fe774aa6eb2d39920219ec",
                "78dc4f50971751cbf98b96219dd56f099095a717",
                "b23101487158938dc99bd731fe372634ad768a0f",
                "1869a727516b162905ef9df32d1ad3fe6ceea9f0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50535,
            "activeSources": 8,
            "criticalAlerts": 28804,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18415,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10389,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3725,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16872,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://mbcasesores[.]com/tap/BBVA_pdf[.]zip",
                    "hxxps://luxcar-24[.]com/zWqbElslFazLfVduLvpacFLw9SplKs3pV4aUiEUv/Update[.]exe",
                    "hxxps://cdn[.]discordapp[.]com/attachments/1537290261195919382/1537290376740741220/Vozolomis_Setup_1[.]2[.]6[.]exe?"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]252[.]216",
                    "1[.]119[.]194[.]226",
                    "1[.]140[.]3[.]11"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1685,
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
                "count": 1436,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b5f071dd28b511f0b4b067507602a779feb4301f",
                    "714c56e9e207d5c8e08e1ca28cd9ba85f079d061",
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1327,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"68[.]64[.]182[.]169:8080\"",
                    " \"159[.]75[.]123[.]199:21\"",
                    " \"68[.]64[.]183[.]127:8090\""
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
                "name": "Vidar",
                "count": 699,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "78dc4f50971751cbf98b96219dd56f099095a717",
                    "5b86c194e3e28190e76652c7a39e9acbf849ada2",
                    "9ea13ee5065114aee007c91c941ac3f8483c4326"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 696,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae",
                    "ece1b6bdc8e62d35188aab274bdb0be28d84c43f",
                    "b14379b3743c37a26289499aca921c99998649f1"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 552,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"aa9c5623175a330c41495536b971fe068a377350de793afd378cd958bbca7358",
                    " \"085d8649a99e636ae9fc5ed6cc425fb436c1eadb8925292b9e3802d69c6a33b8",
                    " \"c46001945c81b1e547c5841d2add515b65af125db0229c8fd3389344cfaf7ef8"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42331,
        "lastCalculated": "2026-08-13 19:07 IST"
    }
};
