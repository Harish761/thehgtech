// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-12T08:47:38.132083+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-12T08:47:37.857508+05:30",
    "lastUpdatedFormatted": "Feb 12, 2026 at 08:47 AM IST",
    "comparisonPeriod": "Feb 11 \u2013 Feb 12, 2026",
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
                "hxxp://roblox[.]com[.]ml/communities/5945290923/xXPlayRushXx",
                "hxxps://www[.]roblox[.]com[.]ml/users/4574727453/profile",
                "hxxps://roblox[.]com[.]ly/users/450794491/profile",
                "hxxps://inlogupcold[.]godaddysites[.]com/",
                "hxxps://nke[.]pages[.]dev/%5C%5C%5C%22https:%5C/%5C/t[.]myvisualiq[.]net%5C/impression_pixel?r=739915162&et=i&ago=212&ao=546&aca=26620495&si=4449639&ci=-7&pi=316681543&ad=-7&advt=4470647&chnl=-7&vndr=115&sz=6696&u=[custom_data]&pt=i%5C%5C%5C%22/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 567,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 567,
                "newInLastHour": 71,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4b94331c45d7f23e240f09008d2605884ef37ad8dd4613b0fe6b5811d614da37",
                " \"ec97b21b96e8537340cc3afe513a65ac33aaf971d8e68aa18bd9837fcc52f945",
                " \"90d53828763ce56bf2cef0cd47449a768ff7d3ebbe790c79e5b6ba6e8462020f",
                " \"af1d95a549d195f78af156bfec8a51adff5951c9aa19b35c657c39cb454594f2",
                " \"8910c8ff30f8efb936682d857aafd54f039ac65f850ba8be004ef901f3a25bd2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1483,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1483,
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
                "1[.]15[.]116[.]189",
                "1[.]15[.]14[.]29",
                "1[.]157[.]80[.]72",
                "1[.]157[.]9[.]5",
                "1[.]170[.]37[.]181"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6480,
                "newInLastHour": 6480,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]13[.]79[.]212",
                "1[.]214[.]197[.]163",
                "1[.]220[.]64[.]218",
                "1[.]234[.]83[.]26"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19072,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19072,
                "newInLastHour": 19072,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]213[.]212[.]215:33546/i",
                "hxxp://182[.]127[.]47[.]37:48038/i",
                "hxxps://plasma707[.]promoportal4[.]coupons/new-scheduledtask",
                "hxxp://115[.]63[.]9[.]221:56158/bin[.]sh",
                "hxxps://garnet88[.]promoportal4[.]coupons/new-scheduledtask"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2109,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2109,
                "newInLastHour": 2104,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"23[.]236[.]64[.]252:8888\"",
                " \"27[.]124[.]30[.]18:8080\"",
                " \"164[.]92[.]167[.]237:80\"",
                " \"plasma707[.]promoportal4[.]coupons\"",
                " \"garnet88[.]promoportal4[.]coupons\""
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
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8945,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8945,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a38f2bfbc5ca952122a8e9fd9e5ed3bb2b734063",
                "6c6fcbd08c8130664b80e2282843d693d849f3aa",
                "d12dacaac4984d29ac317f8bc026dfb1187e8aa0",
                "895da3c451b3cf3c9f5f824b0d54af72cbb2b0e8",
                "f7b6ed231ee6c9dc773697ae24f09c559fbee477"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47916,
            "activeSources": 8,
            "criticalAlerts": 29017,
            "activeCampaigns": 197
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20096,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8921,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2027,
                "trend": "stable",
                "percentage": 0
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19530,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://nimbus93[.]overplaymarbles[.]com/new-scheduledtask",
                    "hxxp://122[.]241[.]245[.]13:32838/bin[.]sh",
                    "hxxp://39[.]88[.]1[.]27:57861/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]209[.]130",
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1483,
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
                "name": " \"win.quasar_rat\"",
                "count": 1356,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"172[.]65[.]239[.]53:443\"",
                    " \"zrnyxza[.]ru\"",
                    " \"zrsglol[.]com\""
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
                "count": 619,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f7b6ed231ee6c9dc773697ae24f09c559fbee477",
                    "71f4fecadb5ed6289cca27ffaedd2ec02f4450e0",
                    "1ea8ec48d9f0b8873db62ceb0d56bc89bd5b326e"
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
                "count": 358,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6c6fcbd08c8130664b80e2282843d693d849f3aa",
                    "d12dacaac4984d29ac317f8bc026dfb1187e8aa0",
                    "ed9b5c0b41dcbeb6e74b9ee386ffa01af1085566"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43030,
        "lastCalculated": "2026-02-12 08:47 IST"
    }
};
