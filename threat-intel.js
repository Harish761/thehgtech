// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-18T22:45:42.407827+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-18T22:45:42.125786+05:30",
    "lastUpdatedFormatted": "Feb 18, 2026 at 10:45 PM IST",
    "comparisonPeriod": "Feb 17 \u2013 Feb 18, 2026",
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
                "hxxps://webmail-linkdatacenter-net[.]weebly[.]com/",
                "hxxps://saktlxcnet[.]weebly[.]com/",
                "hxxps://bellsouth-att-sign-in-7629da[.]webflow[.]io/",
                "hxxp://owa[.]careerpost[.]us/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxps://sidharthrawat10[.]github[.]io/Amazon-UI-Clone/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1131,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1131,
                "newInLastHour": 52,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1aa26af6db8f8bbbb7715c8a3b9ed5d96960f3288908254d345db5299799dcc4",
                " \"a70e389336554845cf466e5e921232974e9910c2572a89bbfb82a6417a3c431d",
                " \"44a88b810323b1daaa76543881a4adacbb8f8c69808a279a2952f4642eecb6d7",
                " \"2babb5268496a4b5231d8d58e3f84ebe220ab2ddea277ec9910bdbdffb572f4d",
                " \"e45b92aff9c9fdd7b46b738273a1d1cbe91bd4c90bef48280c7fbbc68fc18b28"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1472,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1472,
                "newInLastHour": 1,
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
                "1[.]10[.]211[.]66",
                "1[.]11[.]132[.]194",
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23",
                "1[.]15[.]22[.]112"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6788,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6788,
                "newInLastHour": 6788,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]11[.]218",
                "1[.]15[.]77[.]170",
                "1[.]162[.]225[.]217",
                "1[.]165[.]130[.]37",
                "1[.]165[.]130[.]39"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20405,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20405,
                "newInLastHour": 20405,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://localhub[.]pack1kiwi[.]coupons/area_scan",
                "hxxps://boxstream[.]pack1kiwi[.]coupons/sort_data",
                "hxxp://110[.]246[.]225[.]30:41988/bin[.]sh",
                "hxxps://supplyline[.]pack1kiwi[.]coupons/weight_ref",
                "hxxps://fruitline[.]kiwi5pack[.]coupons/box_ref"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 923,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 923,
                "newInLastHour": 672,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"localhub[.]pack1kiwi[.]coupons\"",
                " \"r3d[.]gadgetwalabd[.]com\"",
                " \"r3d[.]alpinematters[.]com\"",
                " \"hxxps://r3d[.]gadgetwalabd[.]com/\"",
                " \"hxxps://r3d[.]alpinematters[.]com/\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "178[.]62[.]3[.]223"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8955,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8955,
                "newInLastHour": 5,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "66afb632b2131a12c4ee5896e88bc485662077eb",
                "6fee95d4146c24f6e3135638d0154a6365a09b97",
                "75598cc7651868766a5aefb311671bf02e6236de",
                "adf3f697ee22a8dc8ea8706f940bcdde0a72b6a5",
                "9b64cd9e6bd74585beeb263fcff0e91988921f88"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48154,
            "activeSources": 8,
            "criticalAlerts": 30431,
            "activeCampaigns": 229
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21471,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8960,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 449,
                "trend": "stable",
                "percentage": -10
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 20283,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]207[.]186[.]110:53673/i",
                    "hxxps://container[.]pear6box[.]coupons/cqpfysil",
                    "hxxp://27[.]207[.]186[.]110:53673/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]10[.]211[.]66",
                    "1[.]11[.]132[.]194"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1474,
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
                "count": 1383,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bef81c1fd26e84e5e25a4182bf668304ba2891da",
                    "adb1b31a6283691b205839f5e3ce4f8ed7aa5f54",
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3"
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
                "count": 621,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "313aa465da1c887d1189e74be08d3e79306192c2",
                    "4091cdf235522076668c6f698479d4af4e5d2bf8",
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": "Vidar",
                "count": 369,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "adf3f697ee22a8dc8ea8706f940bcdde0a72b6a5",
                    "9b64cd9e6bd74585beeb263fcff0e91988921f88",
                    "e89906297ea54d3a4d9648c9b2602552d24f050e"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43226,
        "lastCalculated": "2026-02-18 22:45 IST"
    }
};
