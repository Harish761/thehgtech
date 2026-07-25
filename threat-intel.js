// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-26T02:34:57.928980+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-26T02:34:57.606767+05:30",
    "lastUpdatedFormatted": "Jul 26, 2026 at 02:34 AM IST",
    "comparisonPeriod": "Jul 25 \u2013 Jul 26, 2026",
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
                "hxxps://sp5ct-hurev-biz8-lorem-safik[.]pages[.]dev/",
                "hxxps://inicio-cad[.]pages[.]dev/",
                "hxxps://pegaixa[.]sbs/offer/",
                "hxxps://aligma[.]sbs/offer/",
                "hxxp://fugusa[.]sbs/offer/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 870,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 870,
                "newInLastHour": 26,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"afc5fa1343a544b6a918ed331efc7ba9ee88c045bc6fd8fb9ac662107c552295",
                " \"ca7fa72c6642d5cb83ea60ce873964eff752e6ad66aac959da25d722ce19256e",
                " \"bcee095afc805eb5f164059598f97b5b01d1015afb496b19c640a4d01766765c",
                " \"3100f5931301a7968b274bc718c8363fe8b73cab7b997cf4ae161e39d06197ef",
                " \"be24e3ff143568fc82e42ed4aeee92e3f6f58c5fe3c5bb442cf4b998c90463d2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1669,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1669,
                "newInLastHour": 32,
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
                "1[.]12[.]229[.]231",
                "1[.]12[.]65[.]23",
                "1[.]15[.]14[.]29",
                "1[.]15[.]227[.]58"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4586,
                "newInLastHour": 4586,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]209[.]20",
                "1[.]162[.]5[.]215",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15098,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15098,
                "newInLastHour": 15098,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]57[.]254[.]177:40779/i",
                "hxxp://115[.]55[.]218[.]131:33616/i",
                "hxxp://115[.]57[.]254[.]177:40779/bin[.]sh",
                "hxxp://182[.]113[.]193[.]242:56108/bin[.]sh",
                "hxxp://125[.]43[.]107[.]168:57386/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4638,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4638,
                "newInLastHour": 4211,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"47[.]76[.]51[.]107:5677\"",
                " \"812c33061b418ef74dc6be4522dc9d7f0efb284d\"",
                " \"731219563f05a61e639b645f4892d6cb\"",
                " \"2b0e4a9a122db7e489d927f526f21dbd775c42e3\"",
                " \"41faa6070b56ee395b5f811008213b03\""
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
            "iocCount": 10259,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10259,
                "newInLastHour": 108,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "45bbc5ebc131cca9663c35c95459564007049d07",
                "7b5604ee44715ba0b4e92c2281f30c5a3416ca41",
                "d08e16884011f6910fe8087a74dac507ff7d2a6a",
                "8f0de55e89d97b4f3581f77805955a2b719563b8",
                "d447d27a879fe80420dc54244870f3f7d25993bb"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47480,
            "activeSources": 8,
            "criticalAlerts": 26141,
            "activeCampaigns": 249
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16010,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10131,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3306,
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
                "count": 15089,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://46[.]236[.]65[.]43:41753/i",
                    "hxxp://119[.]183[.]25[.]240:40130/bin[.]sh",
                    "hxxp://115[.]55[.]239[.]136:53259/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]131[.]224",
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]65[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1637,
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
                "count": 1431,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1399,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]132[.]89[.]132:22\"",
                    " \"106[.]75[.]11[.]70:8080\"",
                    " \"106[.]75[.]11[.]70:135\""
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
                "count": 687,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 623,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "45bbc5ebc131cca9663c35c95459564007049d07",
                    "472239fd43cdfe3b960245672b183c4be200ed7a",
                    "73202d8d2ac9a9e04c2bdefa6ea8db2860d779a9"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 555,
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
                "name": " \"unknown\"",
                "count": 527,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"67[.]216[.]197[.]83:2053\"",
                    " \"contextio[.]one\"",
                    " \"hxxps://contextio[.]one/trfbvzqmny/assets/js/script[.]php\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.salatstealer\"",
        "totalAttacksThisHour": 39366,
        "lastCalculated": "2026-07-26 02:34 IST"
    }
};
