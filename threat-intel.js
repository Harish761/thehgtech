// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-12T14:31:10.403039+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-12T14:31:10.141950+05:30",
    "lastUpdatedFormatted": "Feb 12, 2026 at 02:31 PM IST",
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
            "iocCount": 609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 609,
                "newInLastHour": 64,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"02bc826e5bd2812124e601f2377d1dd5ffb9cc10de7f678f0aa12532d340b327",
                " \"e4f2f2267ac09850dbecc02215336f9fc3484b7b2623c87868b98e12bc7e379e",
                " \"b255c9d58838d384276bc5c08e3e3e53fd57997a43c7618c27538bab49a38ffc",
                " \"576692df4bf1c7d8927d3a183f5219a81c3bff3dd22971691f8af6889f80c5a0",
                " \"c927f754a367cec65dde372e6955d1d70e52a04a4bee037e244df2f74125d75f"
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
                "newInLastHour": 1338,
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
                "1[.]15[.]22[.]112",
                "1[.]157[.]80[.]72",
                "1[.]157[.]9[.]5"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5914,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5914,
                "newInLastHour": 5914,
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
            "iocCount": 19332,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19332,
                "newInLastHour": 19332,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://92[.]63[.]185[.]32:54005/bin[.]sh",
                "hxxp://115[.]58[.]175[.]134:40438/bin[.]sh",
                "hxxp://42[.]239[.]153[.]32:57322/i",
                "hxxp://60[.]215[.]160[.]249:44135/i",
                "hxxp://27[.]220[.]209[.]234:47136/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2158,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 2158,
                "newInLastHour": 2153,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"m1w1mwdm[.]dozerebelt[.]digital\"",
                " \"5osnse1q[.]dozerebelt[.]digital\"",
                " \"solstice77[.]reward2rocket[.]coupons\"",
                " \"3[.]33[.]196[.]131:443\"",
                " \"151[.]101[.]171[.]182:443\""
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
            "iocCount": 8950,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8950,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "73a43435a0630572ba472f293cfde3fbc7efecda",
                "c99dd917e7a01d0c7fdbc8edf8fe14b6a4673bf8",
                "3e86dd1b2a8a50c4263271ffbe28deb2837b320f",
                "14c2e39827d5c5850190691eb5b4501256b12e99",
                "a5ed9149808f93889c8c68e55082d39cf24ae8d7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46213,
            "activeSources": 8,
            "criticalAlerts": 28658,
            "activeCampaigns": 200
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19764,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8894,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2000,
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
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19156,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://dhcp-53-248-59-5[.]metro86[.]ru/ohshit[.]sh",
                    "hxxp://dhcp-53-248-59-5[.]metro86[.]ru/bins/main_arm6",
                    "hxxp://dhcp-53-248-59-5[.]metro86[.]ru/bins/main_x86_64"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]14[.]29",
                    "1[.]157[.]80[.]72"
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1382,
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
                "count": 1354,
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
                "count": 618,
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
                "count": 533,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1d28cc6dca52e95f859739c39a04d794671f66d9",
                    "7b7c48a7d10c11ab988801fec68db41f6935ecf4",
                    "b57cc0f34294222d350c45d62c735547c8882195"
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
            },
            {
                "name": "Vidar",
                "count": 347,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6c6fcbd08c8130664b80e2282843d693d849f3aa",
                    "d12dacaac4984d29ac317f8bc026dfb1187e8aa0",
                    "ed9b5c0b41dcbeb6e74b9ee386ffa01af1085566"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 44142,
        "lastCalculated": "2026-02-12 14:31 IST"
    }
};
