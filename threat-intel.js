// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-05T00:28:09.376429+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-05T00:28:09.026735+05:30",
    "lastUpdatedFormatted": "Sep 05, 2026 at 12:28 AM IST",
    "comparisonPeriod": "Sep 04 \u2013 Sep 05, 2026",
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
            "iocCount": 670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 670,
                "newInLastHour": 146,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"79d68cfc989a96c9c94596dff25473070578dad0d5403dfc4e59dd737d686610",
                " \"4ccd5910a55c2c4ae320a9c0cb1f8def0de99071a37ac1f4b121c9cf90cc633b",
                " \"f2d0975c4af3ffd02a4de768e14258c7477742805e3e4662c49896d0ec2eaa6a",
                " \"f08af2a93a831e7fd17df6ce6498b731a2af4d7705feb92748edd383bc0f78af",
                " \"eeb40a35270ae1ed3a189ee5223d95a31391a254cd0a1b4112d74bfa5f1179ff"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1708,
                "newInLastHour": 62,
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
                "1[.]119[.]194[.]253",
                "1[.]15[.]14[.]29",
                "1[.]193[.]37[.]207",
                "1[.]193[.]63[.]212",
                "1[.]197[.]254[.]165"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11085,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11085,
                "newInLastHour": 11085,
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
            "iocCount": 15229,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15229,
                "newInLastHour": 15229,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://124[.]131[.]133[.]51:53693/bin[.]sh",
                "hxxp://125[.]41[.]229[.]38:58416/bin[.]sh",
                "hxxp://218[.]29[.]147[.]41:58663/bin[.]sh",
                "hxxp://105[.]184[.]42[.]145:36337/i",
                "hxxp://115[.]63[.]245[.]146:39613/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5741,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5741,
                "newInLastHour": 5526,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"9w9ntvyw[.]usa-bloodarmor[.]us\"",
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/cowenrty/issue/google\"",
                " \"almanimo[.]ch\"",
                " \"cuop9xy2zp[.]workers[.]dev\"",
                " \"jagyny[.]workers[.]dev\""
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
            "iocCount": 10632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10632,
                "newInLastHour": 26,
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
            "totalIndicators": 49452,
            "activeSources": 8,
            "criticalAlerts": 26538,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15954,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10584,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4295,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 15181,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]201[.]224[.]34:59464/i",
                    "hxxp://62[.]60[.]226[.]140/files/6306648329/ZO7FDgg[.]exe",
                    "hxxp://180[.]244[.]61[.]239:60849/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]181[.]200[.]22",
                    "1[.]183[.]148[.]62"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1648,
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
                "count": 1437,
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
                "count": 1286,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]113[.]206[.]140:22\"",
                    " \"47[.]113[.]206[.]140:8888\"",
                    " \"154[.]94[.]224[.]35:8080\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 928,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fallow-willow-diogdaiyn[.]xyz\"",
                    " \"immersionzone[.]info\"",
                    " \"85[.]239[.]147[.]30:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 752,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "09cc432d307b2b2d67a102c9a579f24b511cfea2",
                    "1bf12565f5b66f9f938f92411d31aea37d9676e8",
                    "5e9de84aab8968d3a10710904a0844d0c360d2a8"
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
                "count": 699,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac",
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 47379,
        "lastCalculated": "2026-09-05 00:28 IST"
    }
};
