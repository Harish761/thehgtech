// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-18T01:11:51.113592+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-18T01:11:50.778239+05:30",
    "lastUpdatedFormatted": "Sep 18, 2026 at 01:11 AM IST",
    "comparisonPeriod": "Sep 17 \u2013 Sep 18, 2026",
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
                "hxxps://rss[.]sayler[.]at/go/y2c4y254/z274x264",
                "hxxps://rss2[.]sayler[.]at/go/y2c4y254/z274x264",
                "hxxps://tarifas-pagban[.]lovable[.]app/",
                "hxxps://facebook-login-it[.]blogspot[.]com/?m=1",
                "hxxps://www[.]facebook-login-it[.]blogspot[.]com/?m=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1541,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1541,
                "newInLastHour": 244,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3487cf7be602c15d0037651d0276d3ea5efaa7df68feda6ec0f3af18b8a655d7",
                " \"544a25989162c9ada5a741e693602b2821f2524a87358515dd37de74fa2f5e31",
                " \"cd5beae5ffe2db6f3e6452d6f3642cb20abecf44b6bd113a1971175aaa616b58",
                " \"c7c71e0287d20f430b16930c0584080be0fae71c59ccd1babba70c62df952b20",
                " \"deddb909e3a5b0b89bf525636ca7fc4a7d560956767bae59e0f807fae28e6c9c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1707,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1707,
                "newInLastHour": 2,
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
                "1[.]10[.]172[.]57",
                "1[.]119[.]194[.]253",
                "1[.]14[.]96[.]105",
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4679,
                "newInLastHour": 4679,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]245[.]185",
                "1[.]10[.]244[.]218",
                "1[.]14[.]64[.]225",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13168,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13168,
                "newInLastHour": 13168,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://120[.]28[.]189[.]248:52467/i",
                "hxxps://pub-e95a23a0e3944ef49a26647f1ec168e0[.]r2[.]dev/Docusign_Install_file[.]zip",
                "hxxp://123[.]135[.]157[.]215:38284/i",
                "hxxp://77[.]79[.]160[.]210:40029/i",
                "hxxp://120[.]28[.]189[.]248:52467/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7074,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7074,
                "newInLastHour": 5733,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"ef934adf694468560d1c78ec13639dbe21bc5cb93cefee0d1949043479dff61a\"",
                " \"kaiangelsystems[.]rest\"",
                " \"hxxps://kaiangelsystems[.]rest/\"",
                " \"agostinobruno[.]com\"",
                " \"hxxp://tfoyses[.]shop:3452/reports\""
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
            "iocCount": 10725,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10725,
                "newInLastHour": 58,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                "633df5171fe70f3fed9d56136ebfa187879b4fb6",
                "96d6ce0654736e23138f54e29acbdb72ed65b5c2",
                "0e764db7ce91a22898f0083832b93da4d3b5d19e",
                "56054f201f4b39e290583877f7cc026f0649605f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49067,
            "activeSources": 8,
            "criticalAlerts": 25061,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14405,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10656,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4543,
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
                    "1[.]119[.]194[.]253",
                    "1[.]12[.]56[.]30",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 12878,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]31[.]103[.]204:47741/i",
                    "hxxp://222[.]127[.]68[.]176:53259/i",
                    "hxxp://175[.]150[.]92[.]98:60118/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1712,
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
                "count": 1447,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9700462dfd419d0295b2753079208e939a853dce",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1367,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]148[.]187[.]55:8080\"",
                    " \"8[.]148[.]187[.]55:80\"",
                    " \"8[.]148[.]187[.]55:22\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1360,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"194[.]26[.]192[.]153:2001\"",
                    " \"147[.]124[.]202[.]216:7707\"",
                    " \"147[.]124[.]202[.]216:8808\""
                ]
            },
            {
                "name": "Vidar",
                "count": 767,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f87bd5bde3e0a713e8554f419f7c80768c5ea60",
                    "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
                    "f166dfb0e185cab2e7bfdfff50edc67f238195c3"
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
                "name": " \"n/a",
                "count": 713,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a46f525b9160b4144bf61eef8132fc97e523844cf2e1b88ac33d003999c3b8a9",
                    " \"7e112f38891d43ebbe3676b0eed897835c1fe40a6c6d46a1b65791be07a469f5",
                    " \"6b6a26fea353609f5ca6986eb23b79e07eb1c861c67d3c330f95fa7c1fe8cef2"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 704,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39189,
        "lastCalculated": "2026-09-18 01:11 IST"
    }
};
