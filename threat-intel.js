// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-01T04:29:04.165437+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-01T04:29:03.816700+05:30",
    "lastUpdatedFormatted": "Sep 01, 2026 at 04:29 AM IST",
    "comparisonPeriod": "Aug 31 \u2013 Sep 01, 2026",
    "vendors": {
        "OpenPhish": {
            "description": "Real-time phishing URL feed updated every 15 minutes. Tracks active phishing sites targeting major brands and financial institutions.",
            "website": "https://openphish.com/",
            "updateFrequency": "Every 15 minutes",
            "iocCount": 297,
            "iocDataUrl": "https://thehgtech.com/ioc-data/openphish.json",
            "stats": {
                "total": 297,
                "newInLastHour": 297,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://urlto[.]me/2Bvde",
                "hxxp://new-click-app-99[.]surge[.]sh/",
                "hxxps://bsccoin-transfer[.]vercel[.]app/",
                "hxxp://www[.]cancelacionoutlook-two[.]vercel[.]app/",
                "hxxps://obonteeeezip--opticaperichi[.]replit[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 730,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 730,
                "newInLastHour": 127,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1d64be0ba1bd9924c3e29ae460db9407e4e33afeb864c9e39377ae4a87fa09db",
                " \"2c46bade40bf7b255dcd7846f3969c697cc82325f9381e0089163415eb81716e",
                " \"6da954cca9bff4eeed5d6506fdd80d70a0bb80882327ab8de7f10dc95df8693e",
                " \"69b8be812307119aea9a2d41192765d5b51e27b61ec13b946953af68c065c287",
                " \"f4f93f133a02d0016e359f3e21da4c35a49e773dac78796d261f2bc06018837a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1655,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1655,
                "newInLastHour": 3,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]183[.]41[.]170",
                "1[.]193[.]37[.]207"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6895,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6895,
                "newInLastHour": 6895,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]237[.]203",
                "1[.]2[.]174[.]204",
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15659,
                "newInLastHour": 15659,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://218[.]28[.]151[.]239:60344/i",
                "hxxp://196[.]189[.]9[.]27:45275/bin[.]sh",
                "hxxp://189[.]127[.]169[.]20:55533/i",
                "hxxp://218[.]28[.]151[.]239:60344/bin[.]sh",
                "hxxp://123[.]245[.]99[.]52:39875/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4617,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4617,
                "newInLastHour": 4482,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ecuador[.]embajada[.]gob[.]ve\"",
                " \"edpartnerspk[.]com\"",
                " \"dalotypi[.]workers[.]dev\"",
                " \"electroste99[.]life\"",
                " \"ecortiella[.]com\""
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
            "iocCount": 10421,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10421,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a7a6a1125d19a58e8b9ca2c7d187915e06c0adce",
                "52a61a5bae1d5d4fb771c4d8ab668c3570c77283",
                "ed312f7ad58a9faec6d3c93aabf598335fdf494c",
                "b1382377a32ee6c85e47edf264f1f6ef5b49e2a3",
                "d268bd42f68634bb226be6b56dc4b7c13e930d2a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48559,
            "activeSources": 8,
            "criticalAlerts": 26944,
            "activeCampaigns": 227
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16368,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10576,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4273,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Phishing",
                "count": 297,
                "trend": "stable",
                "percentage": -1
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
                "count": 15578,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]242[.]12[.]244:37332/i",
                    "hxxp://112[.]242[.]12[.]244:37332/bin[.]sh",
                    "hxxp://39[.]90[.]185[.]198:50020/i"
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
                    "1[.]183[.]160[.]23",
                    "1[.]183[.]41[.]170"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1704,
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
                "count": 1441,
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
                "count": 1302,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"101[.]42[.]136[.]73:123\"",
                    " \"101[.]42[.]136[.]73:4433\"",
                    " \"129[.]204[.]11[.]247:8888\""
                ]
            },
            {
                "name": "Vidar",
                "count": 747,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ed312f7ad58a9faec6d3c93aabf598335fdf494c",
                    "dac0432f5f74d7d465966420968c96166217923f",
                    "4af902fc388e5b848db1767a6c708e2ada0ad99a"
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
                "count": 537,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42475,
        "lastCalculated": "2026-09-01 04:29 IST"
    }
};
