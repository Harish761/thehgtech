// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-23T07:25:31.945791+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-23T07:25:31.582018+05:30",
    "lastUpdatedFormatted": "Aug 23, 2026 at 07:25 AM IST",
    "comparisonPeriod": "Aug 22 \u2013 Aug 23, 2026",
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
                "hxxps://lnk[.]ink/robIox[.]com[.]users-35147531942[.]profile",
                "hxxp://www[.]newsinvest[.]online/",
                "hxxps://click2prize[.]com/walmart1000v4/cz[.]html?lptoken=1700856b24531770179f&cep=n4igdgpg7g+gfgswc4wqexalhangmwdgahaiwbmeazglrpecsnalaaz0cg1rancwdfsy4w7sjgjl2bfiaa0iag4iazslqzsdaebcybdpy308rakzzss1dmrw4z9aoxgdq9kudzfktugqbbcgukdn8abywqmhzbahzhajiiabusekx6ikw8rwa6o3oals8lvsqaewanduiwlrwmjxjtegi0ziitji5halmcpho0jj0yndqil31w9gqaczaa7bxudhy6ndispdrunpxysritr0ovmhkjpzawgbjzy4gyjabpmmnsabl2mdqemdmdyubdgszawaa2jc7iaalrymkviiqaa2eaisagabgfwmwfar3ekw+v3+gpkiuqcwgkhqkrwpbidqgleomqi9aotiioag9g4qkedowt3u8kgaa8kpiqispiaapkusgqspesnu2kaxcrfjbbbsrwrhakll2fieaxix7xw52mawuwombw8aqkvymaavxrkiavn75ccwtawuuyghyudmkacf7kkiwegahkpacsv3dwby8i0lr+iizfwiquhsmdibumcrfyrgkwseqxog8gajsoijgk1xifasjr2cjlba/ua=&cpid=69a00b6213d91100122a1b7f",
                "hxxp://sp23ct-mavik-biz-qelon-purav[.]pages[.]dev/",
                "hxxps://121gle[.]senes[.]at/stakings/?b=yto0ontzoju6imxhymvsijtzoja6iii7czozoij1c3iio2k6mty0ndtzojq6im5vcgqio3m6mtq6injzcziuc2f5bgvylmf0ijtzoje6im8io2k6mteznjt9"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 795,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 795,
                "newInLastHour": 59,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d63e71109ca0a304312ddc21def555dc9f73c71ddae8d7bcd6f94a189a2d8f0b",
                " \"aa5045411ba7da09339ea56b718435ed4db6970b77a2495750427c3e0983f4b5",
                " \"506461eb9cdf0a488c4955188e47b317481932c7427c2994f83192b5f0c0bfd8",
                " \"7a3d2c381a1f24002794f1bf5e7c7a2c73507a04a3741c40f6b7790983892e53",
                " \"98dc1ee834d166396ed8c20ec28f8defd7e8b127b5da6787dba6cba1abfb6f06"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1697,
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
                "1[.]119[.]158[.]77",
                "1[.]180[.]247[.]82",
                "1[.]188[.]29[.]48",
                "1[.]192[.]177[.]135",
                "1[.]193[.]63[.]197"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5233,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5233,
                "newInLastHour": 5233,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]247[.]163",
                "1[.]14[.]64[.]225",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16094,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16094,
                "newInLastHour": 16094,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]11[.]10[.]210:60891/i",
                "hxxp://123[.]11[.]10[.]210:60891/bin[.]sh",
                "hxxp://115[.]55[.]247[.]47:34358/i",
                "hxxp://182[.]116[.]23[.]190:59128/i",
                "hxxp://101[.]29[.]22[.]214:59328/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5248,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5248,
                "newInLastHour": 4904,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"laurentgudel[.]ch\"",
                " \"dollllar881122[.]icu\"",
                " \"strongerpi921[.]life\"",
                " \"thunderstopui912[.]life\"",
                " \"transcripcionespro[.]net\""
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
            "iocCount": 10515,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10515,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9c0a9291be46e42b67835dff9e6c767fd6660287",
                "19cf66baa4727b080e283d10284993170c9b462b",
                "150e9fffc913a1c87bf94e7f2ad0354d4b6afea1",
                "01162aa2c2be7f9d16f646b94a1245726c68b110",
                "d8bdc29b8e9cdd5a849185ca6042d9c6f90d12e7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49939,
            "activeSources": 8,
            "criticalAlerts": 27988,
            "activeCampaigns": 242
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17482,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10506,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4134,
                "trend": "stable",
                "percentage": -1
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
                "count": 16660,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]137[.]198[.]130:51494/bin[.]sh",
                    "hxxp://222[.]140[.]182[.]112:48863/i",
                    "hxxp://182[.]117[.]0[.]179:35408/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]15[.]14[.]29",
                    "1[.]180[.]190[.]250"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1698,
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
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1310,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"150[.]187[.]25[.]242:65534\"",
                    " \"43[.]140[.]219[.]182:8443\"",
                    " \"85[.]175[.]101[.]203:500\""
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
                "count": 730,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "19cf66baa4727b080e283d10284993170c9b462b",
                    "0bb977bf9e0950a1a818660dde009ac9934bd1e2",
                    "0f47d296ca2a764238bfd644c7b716cffafa1352"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 471,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "adfc8dd0c5e99a8e33b1df7d5c10fc9653342491",
                    "0c587f31dc58c33ef2e3632bb161f4d52231b7c1",
                    "b94eb3bcd4a57442c30e14dd2067b0c6c46d9619"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 41595,
        "lastCalculated": "2026-08-23 07:25 IST"
    }
};
