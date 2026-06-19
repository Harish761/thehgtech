// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-19T10:49:23.219986+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-19T10:49:22.914054+05:30",
    "lastUpdatedFormatted": "Jun 19, 2026 at 10:49 AM IST",
    "comparisonPeriod": "Jun 18 \u2013 Jun 19, 2026",
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
                "hxxp://www[.]familydine[.]icu/",
                "hxxps://fuv[.]jbw[.]temporary[.]site/112/NRD/1364f3c/",
                "hxxps://enfermeriacanaria[.]com/112/NRD/1b1fd37/",
                "hxxps://copacomlimitedecampeao11[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://aumentoja94[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 700,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 700,
                "newInLastHour": 51,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"27a60835e9cac833ed550ab42cfc2e84c48a4fc641f29a57dd4cf5b6dd0ca00a",
                " \"c29585b234c1fe56725558319d151ba9d2536603ef05fccae8a5a788c26408a4",
                " \"3f8ae1560a9f02dab2687e3caf56ce5c03b7e928aeb47b8927f1917f57d21c65",
                " \"476ac4f9d423610f0333442c82c885914d09f241a01be68427e436f7dad99717",
                " \"85a5109380dee438f649de286411d991f17020007f960d0f17cf030328ce3fff"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1616,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1616,
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
                "1[.]10[.]185[.]224",
                "1[.]15[.]14[.]29",
                "1[.]15[.]35[.]79",
                "1[.]164[.]110[.]70",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5980,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5980,
                "newInLastHour": 5980,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]229[.]57",
                "1[.]15[.]135[.]116",
                "1[.]15[.]32[.]131",
                "1[.]162[.]223[.]232",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16883,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16883,
                "newInLastHour": 16883,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]191[.]63[.]124:55440/bin[.]sh",
                "hxxp://42[.]226[.]71[.]20:42571/bin[.]sh",
                "hxxp://27[.]215[.]120[.]23:34081/i",
                "hxxp://27[.]215[.]140[.]130:39579/i",
                "hxxp://115[.]48[.]147[.]64:34902/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3565,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3565,
                "newInLastHour": 3466,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"106[.]13[.]63[.]211:8080\"",
                " \"47[.]108[.]198[.]74:60000\"",
                " \"106[.]13[.]63[.]211:443\"",
                " \"aulvud5j[.]dancebetyek[.]app\"",
                " \"51[.]250[.]100[.]14:8080\""
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
            "iocCount": 9725,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9725,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "070ad9d359151a2de5af7cd41295758bf1f4227a",
                "7125469fa26c30ae4d89eb2a8bec1c7a382dcd7d",
                "a23f624eee7847ff3939994ff8922ba8eb645e26",
                "61102ef78d52d044b8ded80e2ad0471c68e6f962",
                "49aa56f946089804e2bc8ae77a7b2fbaa5860e50"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48860,
            "activeSources": 8,
            "criticalAlerts": 28128,
            "activeCampaigns": 239
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18150,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9978,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3002,
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
                "count": 17316,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]44[.]180[.]180:55970/i",
                    "hxxp://42[.]238[.]243[.]89:38164/i",
                    "hxxp://110[.]36[.]13[.]156:36786/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]51[.]236",
                    "1[.]164[.]107[.]152",
                    "1[.]176[.]134[.]235"
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
                "count": 1417,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50",
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1415,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"188[.]227[.]14[.]105:547\"",
                    " \"84[.]252[.]139[.]94:80\"",
                    " \"84[.]252[.]139[.]94:8080\""
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
                "count": 688,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 604,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7125469fa26c30ae4d89eb2a8bec1c7a382dcd7d",
                    "3a4d0044eed173808eb2c6b86c70d1121318adf0",
                    "59f0554dda32cbf5b5b5b08fe508480d81172f2d"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b7fca0fbc8179ef52e3239907257dcd0315cb2f1",
                    "8f15e3e07c691ae493b4059222638003e0bf0a9b",
                    "031af28814511239c0172b71c2c5092660676632"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.cobalt_strike\"",
        "totalAttacksThisHour": 41685,
        "lastCalculated": "2026-06-19 10:49 IST"
    }
};
