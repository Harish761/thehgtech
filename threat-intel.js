// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-04T18:10:57.459971+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-04T18:10:57.111737+05:30",
    "lastUpdatedFormatted": "Sep 04, 2026 at 06:10 PM IST",
    "comparisonPeriod": "Sep 03 \u2013 Sep 04, 2026",
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
                "hxxp://www[.]apple-fruit[.]xyz/",
                "hxxps://kxlrq170nhw-fghzdfyn-3y8x0g-wp611a[.]pages[.]dev/welcome_aboard?welcome=1004568689256840&token248=1004568689256840&name_token136=FoodieLand%20-%20Portland",
                "hxxps://sso-trezor-com-start-x-auth[.]typedream[.]app/en-us",
                "hxxp://www[.]mart-homebd[.]com/",
                "hxxps://www[.]roblox[.]ly/games/8737602449/PLS-DONATE?privateServerLinkCode=49536050381234738964619792612634"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 746,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 746,
                "newInLastHour": 139,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"37c2c5d56cc763a7731523541ea9b206beb80dace89e1615b0cab7d5afa1ffe5",
                " \"6fab10a28e140639c224e5c0a4a01bc7a7b8d80c681426de911e7125de61106e",
                " \"842921048e3bf2b21d0dea531ef91a4dd00c76b266011dbef51eb048dbd1d4b9",
                " \"7c6e12b47449a6fc24f5d5b47944fb203cb9935251a182ed031897933f71e574",
                " \"2b619dc0b6f585f22c37d32e53d72871ad473b50d24e16f8578504886a0c3675"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1648,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1648,
                "newInLastHour": 22,
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
                "1[.]15[.]14[.]29",
                "1[.]181[.]200[.]22",
                "1[.]183[.]148[.]62",
                "1[.]183[.]160[.]23",
                "1[.]193[.]37[.]207"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11138,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11138,
                "newInLastHour": 11138,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]237[.]203",
                "1[.]162[.]247[.]182",
                "1[.]174[.]208[.]30"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15181,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15181,
                "newInLastHour": 15181,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]201[.]224[.]34:59464/i",
                "hxxp://62[.]60[.]226[.]140/files/6306648329/ZO7FDgg[.]exe",
                "hxxp://180[.]244[.]61[.]239:60849/bin[.]sh",
                "hxxp://124[.]6[.]169[.]46:58258/i",
                "hxxp://117[.]201[.]224[.]34:59464/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5966,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5966,
                "newInLastHour": 5754,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"us-en-us-geniusbrainsignal[.]com\"",
                " \"techycarterpiller[.]kozow[.]com\"",
                " \"n5def881[.]us-en-us--puraboost[.]com\"",
                " \"us-en-us--puraboost[.]com\"",
                " \"154[.]91[.]57[.]103:8084\""
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
            "iocCount": 10606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10606,
                "newInLastHour": 120,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "755c81877937861388f42dc73d5a6bf24c96e13b",
                "972c98978e420c02a8d8c5f87930dadc70adbbd8",
                "cd4fbb7112546836c61911e6b3a09770b6aebf29",
                "09cc432d307b2b2d67a102c9a579f24b511cfea2",
                "17ee516f7e99548d2b4d735f2100f2754d814288"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49246,
            "activeSources": 8,
            "criticalAlerts": 26095,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15605,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 10490,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4338,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]183[.]148[.]62",
                    "1[.]192[.]176[.]104"
                ]
            },
            {
                "name": "malware_download",
                "count": 14884,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://94[.]244[.]36[.]34:34585/bin[.]sh",
                    "hxxp://115[.]57[.]80[.]149:55734/bin[.]sh",
                    "hxxp://115[.]58[.]91[.]176:40931/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1687,
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
                "count": 1435,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1294,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"154[.]94[.]224[.]35:8080\"",
                    " \"101[.]42[.]136[.]73:82\"",
                    " \"165[.]99[.]43[.]101:8080\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 926,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"immersionzone[.]info\"",
                    " \"85[.]239[.]147[.]30:443\"",
                    " \"mytds1029380[.]com\""
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
                "count": 734,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5e9de84aab8968d3a10710904a0844d0c360d2a8",
                    "145f0fa0f6134e66fa5c80989c13987baf799bda",
                    "6ddb71e5a27eccf80773188066ac92d9d39506d7"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 696,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac",
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 555,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47659,
        "lastCalculated": "2026-09-04 18:10 IST"
    }
};
