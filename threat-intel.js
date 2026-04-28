// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-28T12:09:43.596500+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-28T12:09:43.327046+05:30",
    "lastUpdatedFormatted": "Apr 28, 2026 at 12:09 PM IST",
    "comparisonPeriod": "Apr 27 \u2013 Apr 28, 2026",
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
                "hxxp://raunak1022[.]github[.]io/my-first-project",
                "hxxps://verifyverifying-44024c[.]webflow[.]io/",
                "hxxps://ledgercomstart[.]vercel[.]app/",
                "hxxp://www[.]ledgercomstart[.]vercel[.]app/",
                "hxxp://healthyemployee[.]me/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 952,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 952,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b40c2a5cc76e4c63a57f52b963baa33e8802a90891a76eab455001265475eefe",
                " \"5300e3303b8d3213380216de0de7f3321cac74a6a8e5c7f2d506d3a5db92b42d",
                " \"397dc318a3dacac1afec36eb6cacf0ce4dd8ede9741301ebfd20b9890849d123",
                " \"d3be2f32d31d5797b6ed5f69b8ad71550592de0b945a11ff4ecd84f6d4abcc99",
                " \"1e0229d2616423c9e0d9f7a461e93c8a351de065b5ce1111c821dee9e75794d8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1593,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1593,
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
                "1[.]141[.]16[.]115",
                "1[.]169[.]39[.]171",
                "1[.]169[.]9[.]130",
                "1[.]180[.]183[.]158",
                "1[.]188[.]102[.]82"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3928,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3928,
                "newInLastHour": 3928,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]227[.]58",
                "1[.]2[.]213[.]105",
                "1[.]2[.]214[.]104",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26240,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26240,
                "newInLastHour": 26240,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]59[.]86[.]111:44283/bin[.]sh",
                "hxxp://175[.]165[.]81[.]244:38042/bin[.]sh",
                "hxxp://27[.]215[.]127[.]225:58880/bin[.]sh",
                "hxxps://vastlogicweb[.]orbitmeshunit[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                "hxxps://stellar5bitnode[.]orbitmeshunit[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 924,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 924,
                "newInLastHour": 922,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://www[.]diamondexchangeus[.]store[.]goooggle[.]click/download[.]php\"",
                " \"hxxp://www[.]diamondexchangeus[.]store[.]goooggle[.]click\"",
                " \"diamondexchangeus[.]store[.]goooggle[.]click\"",
                " \"hxxps://web-view[.]org/get/adobe/Reader_en_install[.]exe\"",
                " \"hxxps://web-view[.]org/get/adobe/\""
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
            "iocCount": 9610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9610,
                "newInLastHour": 8539,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "273c74ce7170a85b37f91741ce7faa534639e29a",
                "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                "baec0b516b841d0291da5463777d12e63c0851a9",
                "6b3dc8ea0ad9cf783a6542661b85560c17abe94d",
                "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 45928,
            "activeSources": 8,
            "criticalAlerts": 28197,
            "activeCampaigns": 100
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27090,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 1107,
                "trend": "down",
                "percentage": -88
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 206,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 80
            },
            {
                "name": "Tech",
                "percentage": 19
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
                "name": "malware_download",
                "count": 26161,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]179[.]153[.]183:49601/bin[.]sh",
                    "hxxps://vertbaumview[.]mivontechzone[.]garden/cdk-msdn-3457325-null/load-file0dsdf567[.]chk",
                    "hxxp://37[.]48[.]216[.]209:41605/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]201",
                    "1[.]141[.]16[.]115",
                    "1[.]169[.]9[.]130"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1598,
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
                "name": " \"n/a",
                "count": 500,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"aa6ca59a847a4cfce509bf8b87c4f9c35f063a2db61837358b725413e10e84f5",
                    " \"68a6c348585fec6f7709edf87f657b502fb3422fe82b5cae239b249595a3862d",
                    " \"e90cf4e769a0e61d6aa7099090604ba79ab399823991fa6d718b492609030f37"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 441,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"winopenhaus[.]vortextaskbit[.]garden\"",
                    " \"scanvertzeit1[.]vortextaskbit[.]garden\"",
                    " \"gategoldberg[.]vortextaskbit[.]garden\""
                ]
            },
            {
                "name": "Vidar",
                "count": 320,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7aa9efcff318eb419f2e54bd93aa2e061e70d1c",
                    "3ccd1090364addc6f2cd6ee15cbb9b57cdc11777",
                    "513656d150a201936049c3d3ff4f1c6efb7a8cc7"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 300,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://raunak1022[.]github[.]io/my-first-project",
                    "hxxps://verifyverifying-44024c[.]webflow[.]io/",
                    "hxxps://ledgercomstart[.]vercel[.]app/"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 285,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2f677ea54ff98b9976e5a057cd8e94d4498856d7aa5a6bc777b8d085b7429929",
                    " \"74cb08ca2bb13465ea052e2734bc7b694e1fe6407a53ea0e196ffa2fd0516296",
                    " \"2849dbfb60f5ee047ffb5c91f00d029349a95f31d8afe17cd3892136da2b5690"
                ]
            },
            {
                "name": "OffLoader",
                "count": 159,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 103,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://isn[.]jornaltribunadearaxa[.]com[.]br/\"",
                    " \"isn[.]jornaltribunadearaxa[.]com[.]br\"",
                    " \"hxxps://isn[.]trbombom[.]com/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 54950,
        "lastCalculated": "2026-04-28 12:09 IST"
    }
};
