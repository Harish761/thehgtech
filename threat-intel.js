// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-10T07:51:19.052188+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-10T07:51:18.770368+05:30",
    "lastUpdatedFormatted": "Jan 10, 2026 at 07:51 AM IST",
    "comparisonPeriod": "Jan 09 \u2013 Jan 10, 2026",
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
                "hxxps://coinsecurity[.]ca/",
                "hxxps://regist-id[.]biz[.]id/4a[.]lol/Formulir-pembatalan-dan-pengajuan-paylater/",
                "hxxps://robinhoodimaging[.]com/breast-cancer-screening-survey/",
                "hxxps://mohammed-saqhib[.]github[.]io/Holiday",
                "hxxps://auth-secure[.]me/Tp4fhL9s_WfsYzyMGQ"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 698,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 698,
                "newInLastHour": 104,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"373bb1eae163c5766e0ed061f2373ef79866f10eae441657fc54cfcac9996224",
                " \"6492877174515af3a9a3a8afab7d940fac7cf1ae8b0094527efec500ba6e1988",
                " \"87833480c0097231366a873fe3c90db36d558e4a50abc998dbdaec640a463f26",
                " \"b4acd870a0c58c3e0e8639cf73b5ade6e1249fe063654b08d34a7d7339eee973",
                " \"ca7123ca2ac08f281c40bcf69e7b5c5c96c20f293702486ba20440249f001e1e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1466,
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
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66",
                "1[.]170[.]47[.]115",
                "1[.]176[.]134[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5340,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5340,
                "newInLastHour": 5340,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]194[.]236[.]11",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172",
                "1[.]220[.]64[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23560,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23560,
                "newInLastHour": 23560,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]112[.]31[.]246:58454/bin[.]sh",
                "hxxp://42[.]228[.]39[.]201:42842/bin[.]sh",
                "hxxp://112[.]252[.]171[.]171:46032/i",
                "hxxp://115[.]63[.]10[.]159:40285/i",
                "hxxps://cdn[.]jsdelivr[.]net/gh/identity-hub-rs-com/svc457-api357-metadata-regist8/tBNB-morf"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7476,
                "newInLastHour": 7290,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/identity-hub-rs-com/svc457-api357-metadata-regist8/tbnb-morf\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/identity-hub-rs-com/svc457-api357-metadata-regist8/tbnb\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/identity-hub-rs-com/svc457-api357-metadata-regist8/404\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/identity-hub-rs-com/svc457-api357-metadata-regist8/bnb\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/identity-hub-rs-com/svc457-api357-metadata-regist8/ghhhhdhhh\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8756,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8756,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1c3edc0204ea789eef91aa7efa0dfe33b02bf7ef",
                "6da2919ee8ad8c6303f5db0f646510365c65a995",
                "5c4d91dc8735b4dabe0154b050ef49ed50ba1e2e",
                "8fa8b4de2a18dbf3bb43585b71891faf4c3ca8fc",
                "b172eb83a40e4012713db152e3f9e78fcc6822ed"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49612,
            "activeSources": 8,
            "criticalAlerts": 25403,
            "activeCampaigns": 118
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25166,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 7092,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 237,
                "trend": "down",
                "percentage": -97
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
                "count": 24553,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]174[.]4[.]223:55204/bin[.]sh",
                    "hxxp://115[.]61[.]112[.]226:57898/bin[.]sh",
                    "hxxp://42[.]229[.]161[.]122:52189/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]51[.]236",
                    "1[.]157[.]99[.]66"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 6542,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"18[.]202[.]117[.]177:443\"",
                    " \"74[.]81[.]45[.]130:80\"",
                    " \"47[.]95[.]169[.]152:60000\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1466,
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
                "name": "Generic Phishing",
                "count": 292,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://bit[.]proxette[.]cc/info?b=YTo0OntzOjU6ImxhYmVsIjtzOjA6IiI7czozOiJ1c3IiO2k6Mjk3O3M6NDoibm9wZCI7czoxMToiZmxleHByb3guY2MiO3M6MToibyI7aTozNTt9",
                    "hxxp://davvnig[.]github[.]io/restpassword-login",
                    "hxxp://sshekhar758[.]github[.]io/Projects"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 192,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"8a41051d4c713ded84e23da06d7315ef07e5c0f6fc72884d42e038fd10b0ace6",
                    " \"c7c5e8cffeb4b85cbb6227cf5dd4e1eccc901672dcc0589b9b1164193deb6b54",
                    " \"ec24e53b8bfddfd038c33e689b9ee31e5cfb68d57e31fd4946bad04946e35d01"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 179,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"wto[.]azl[.]one\"",
                    " \"wto[.]mir-massage[.]kiev[.]ua\"",
                    " \"hxxps://wto[.]azl[.]one/\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 120,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"4f8ce641199c9064995018ffceb96c0fa69c79ad197f2b1ec987d47982e53bb6",
                    " \"96255435487aed789e83c051197432ee1aff880e3e9758660cd67735880706b5",
                    " \"8a330b78954bcc3befbc4702617a61f201d874b57551928e795b2e70330e1a38"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 91,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"api[.]alexanderprojectmanagement[.]uk[.]com\"",
                    " \"logs[.]go88[.]se[.]net\"",
                    " \"91[.]219[.]238[.]169:8808\""
                ]
            },
            {
                "name": " \"js.gootloader\"",
                "count": 90,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"27001-online[.]com\"",
                    " \"tarabridals[.]com\"",
                    " \"tenforjustice[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 60121,
        "lastCalculated": "2026-01-10 07:51 IST"
    }
};
