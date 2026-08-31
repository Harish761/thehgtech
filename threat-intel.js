// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-31T10:52:32.037634+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-31T10:52:31.713286+05:30",
    "lastUpdatedFormatted": "Aug 31, 2026 at 10:52 AM IST",
    "comparisonPeriod": "Aug 30 \u2013 Aug 31, 2026",
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
                "hxxps://pichinchamil[.]shop/ec",
                "hxxps://facebook-seven-alpha[.]vercel[.]app/",
                "hxxps://lnstagramchecker[.]github[.]io/reels",
                "hxxps://lnk[.]ink/yiGJI",
                "hxxps://www[.]borderclick[.]com/BC/media/Borderclick/Files/tiktokfollower2026[.]htm"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 761,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 761,
                "newInLastHour": 61,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a2e5983090f76e9686379b266af0aa237973d0f4705dcb09806356da4b6ae142",
                " \"eb55e38de8ed4cd753ae895d232f9a0d6967eeafc726518e1c33b1b2acb18b82",
                " \"eef5d0dea6356bf0b05852eca3cefd3fdb87b06ebff7578496a2824f966ca4e8",
                " \"d945cf407650717fb6a880b8fda9f5daa623c33a5efb08cbed5ea01c9346131d",
                " \"5c7357a1261582b7a2d796dd7b5d2ff76a9dc0c70995edf91c06433701d20d1e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1705,
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
                "1[.]181[.]200[.]22",
                "1[.]183[.]160[.]23",
                "1[.]192[.]176[.]104",
                "1[.]193[.]63[.]118",
                "1[.]198[.]31[.]248"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7496,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7496,
                "newInLastHour": 7496,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]212[.]190",
                "1[.]193[.]63[.]184",
                "1[.]2[.]174[.]204",
                "1[.]20[.]150[.]200"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15260,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15260,
                "newInLastHour": 15260,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://203[.]204[.]158[.]100:48107/bin[.]sh",
                "hxxp://222[.]141[.]127[.]225:42871/bin[.]sh",
                "hxxp://115[.]50[.]31[.]109:50819/i",
                "hxxp://123[.]5[.]127[.]210:55188/i",
                "hxxp://123[.]5[.]127[.]210:55188/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4548,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4548,
                "newInLastHour": 4411,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"vyivy22522[.]workers[.]dev\"",
                " \"106[.]15[.]10[.]2:5672\"",
                " \"fyjilowu[.]workers[.]dev\"",
                " \"prgfeg84[.]getdsm[.]com\"",
                " \"rlltn52176[.]workers[.]dev\""
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
            "iocCount": 10589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10589,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a974b9d90161d8c5221961c65a975d81959cdb40",
                "ca8a5bbb1e6b22fa9ad9757c50f1bdaf2c22011d",
                "bfbcd2802186b6c5707f7ff6341b87c12b97f4a4",
                "a7fa6117a38135c4d9c26ec7e37f15b361535edf",
                "711c3a7bd15ae5377f4c395e23b3d8b8f1327ced"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48605,
            "activeSources": 8,
            "criticalAlerts": 27062,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16493,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10569,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4164,
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
                "count": 15668,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]149[.]67[.]160:36060/i",
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_d0440b96a87305e5[.]exe",
                    "hxxp://219[.]154[.]174[.]39:60220/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]177[.]162[.]4",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1705,
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
                "count": 1288,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"150[.]158[.]102[.]111:80\"",
                    " \"150[.]158[.]102[.]111:8080\"",
                    " \"150[.]158[.]102[.]111:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 749,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a974b9d90161d8c5221961c65a975d81959cdb40",
                    "a7fa6117a38135c4d9c26ec7e37f15b361535edf",
                    "711c3a7bd15ae5377f4c395e23b3d8b8f1327ced"
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
                "count": 700,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14",
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
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 539,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]228[.]166[.]168:56002\"",
                    " \"45[.]225[.]135[.]156:56003\"",
                    " \"217[.]60[.]195[.]109:56001\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"php.shin_webshell\"",
        "totalAttacksThisHour": 42533,
        "lastCalculated": "2026-08-31 10:52 IST"
    }
};
