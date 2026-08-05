// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-05T23:20:57.366450+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-05T23:20:57.057403+05:30",
    "lastUpdatedFormatted": "Aug 05, 2026 at 11:20 PM IST",
    "comparisonPeriod": "Aug 04 \u2013 Aug 05, 2026",
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
                "hxxp://site-7lhik3ohd[.]godaddysites[.]com/",
                "hxxps://www[.]roblox[.]com[.]ml/users/471184536693/profile",
                "hxxps://paidopinion[.]xyz/",
                "hxxps://coinvasxtension[.]webflow[.]io/",
                "hxxp://fortcheck[.]club/id/login"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1137,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1137,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"25478a9071197f02413da108ed6a4a18fcb343c0fce7bed73aef5993cc3c0ba4",
                " \"d897d6eacd63f138cdfe540265abdc747ec9ae8da8ed3f3e3e1b029a94b2c18d",
                " \"843eec789f90f15c13e6905f36f54c32a0dbf767d9715aef1387d232aa11ab93",
                " \"a5f5b7f2eed63b2fad2962b3a2077ddb38530bcbf49e7ad6cd70addefa573958",
                " \"1320ba4c289d844b5d724fa5af97d129bc8d103c48011952df911ec0d089acee"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1673,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1673,
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
                "1[.]10[.]185[.]51",
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]178[.]120[.]110",
                "1[.]191[.]146[.]184"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5190,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5190,
                "newInLastHour": 5190,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]192[.]63[.]178",
                "1[.]194[.]233[.]49",
                "1[.]20[.]228[.]110",
                "1[.]204[.]201[.]198"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15516,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15516,
                "newInLastHour": 15516,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://39[.]74[.]245[.]69:59336/bin[.]sh",
                "hxxp://42[.]227[.]236[.]78:45896/bin[.]sh",
                "hxxp://42[.]86[.]120[.]110:36469/bin[.]sh",
                "hxxp://60[.]18[.]96[.]224:35125/i",
                "hxxp://60[.]18[.]96[.]224:35125/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4286,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4286,
                "newInLastHour": 4198,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://opeaadn[.]click:2993\"",
                " \"jirhjn1r[.]fungame777[.]co\"",
                " \"relay0[.]aquadisplay[.]lol\"",
                " \"tfqmi9dx[.]hanovereyephotography[.]com\"",
                " \"sltrtc[.]shopmakeit[.]com\""
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
            "iocCount": 10247,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10247,
                "newInLastHour": 54,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "01cc79c660e1677fc17665e6d8169b5fdad75668",
                "5dcd3232fc9873ebedca38f8ba5992fce6dccb61",
                "3ddf56dd624309d956cccb6c41eb6fcfbb3c6364",
                "ded1fe95801f3c3fd8a1c73360fbaef6697bcf34",
                "30ae51f106a573be769968e15c0a6f56a2878a16"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48091,
            "activeSources": 8,
            "criticalAlerts": 26903,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16664,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10239,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3686,
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
                "count": 15488,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]116[.]113[.]103:50232/i",
                    "hxxp://45[.]135[.]193[.]217/bins/psh4",
                    "hxxp://210[.]208[.]110[.]172:57475/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]82[.]219",
                    "1[.]159[.]103[.]245"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1671,
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
                "count": 1434,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1374,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]83[.]3[.]103:10443\"",
                    " \"45[.]8[.]159[.]205:8596\"",
                    " \"209[.]200[.]246[.]194:16556\""
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053"
                ]
            },
            {
                "name": "Vidar",
                "count": 647,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "30ae51f106a573be769968e15c0a6f56a2878a16",
                    "97dd1d6a2bc5769af6e0a7999bfaf2aeaf5452a1",
                    "964d86f575c50b29d2b7157331d556859dd43e5e"
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
                "count": 482,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a808d20075435a81c2e0bdb07266af18906418f5f0726d86f33ef6d663102cfd",
                    " \"23c9540df000ae1e50dd5977c24b1f8b96f3d8c858696bdd26d2f2e0a9ce4730",
                    " \"78a57de8eb7d70af3d44dda3ea3fc11ed44879d34db45fb8c22211b852398763"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 40287,
        "lastCalculated": "2026-08-05 23:20 IST"
    }
};
