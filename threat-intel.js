// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-18T03:07:48.754552+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-18T03:07:48.511050+05:30",
    "lastUpdatedFormatted": "Sep 18, 2026 at 03:07 AM IST",
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
            "iocCount": 1546,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1546,
                "newInLastHour": 33,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b01dd26ea954b21374638d1fbd6c2c19663a912b2ba125e4a443b960971c55cb",
                " \"3c5e7f7f7a69570fd5d7801edcc3d2638dadac0b41a8bee58b6683e4ea56af3f",
                " \"e72722cbc20fe17b4dec89e39595ee03fa665c00e792cb90da02ec2d2acefa2f",
                " \"be22a6f14a1daf3d3aaf2165b27b541264adc45f3887999abbb5e683693f85f5",
                " \"30a24a15079d6c1401bb31c12d645f40f11a04398661b4bce851183c465b5808"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1713,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1713,
                "newInLastHour": 6,
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
                "1[.]12[.]56[.]30",
                "1[.]15[.]14[.]29",
                "1[.]194[.]161[.]195"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4711,
                "newInLastHour": 4711,
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
            "iocCount": 13186,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13186,
                "newInLastHour": 13186,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://83[.]228[.]109[.]209:38568/bin[.]sh",
                "hxxp://138[.]204[.]196[.]244:50726/bin[.]sh",
                "hxxp://42[.]231[.]73[.]143:48507/i",
                "hxxp://119[.]116[.]87[.]232:48737/i",
                "hxxp://59[.]97[.]248[.]180:36849/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6886,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6886,
                "newInLastHour": 5459,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"124[.]222[.]77[.]67:8018\"",
                " \"38[.]22[.]88[.]155:443\"",
                " \"42[.]192[.]54[.]109:8084\"",
                " \"suibzkdc[.]wece[.]store\"",
                " \"wece[.]store\""
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
            "iocCount": 10736,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10736,
                "newInLastHour": 11,
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
            "totalIndicators": 49520,
            "activeSources": 8,
            "criticalAlerts": 25439,
            "activeCampaigns": 259
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14736,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 10703,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4577,
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
                    "1[.]10[.]172[.]57",
                    "1[.]119[.]194[.]253",
                    "1[.]14[.]96[.]105"
                ]
            },
            {
                "name": "malware_download",
                "count": 13168,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://120[.]28[.]189[.]248:52467/i",
                    "hxxps://pub-e95a23a0e3944ef49a26647f1ec168e0[.]r2[.]dev/Docusign_Install_file[.]zip",
                    "hxxp://123[.]135[.]157[.]215:38284/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1707,
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
                "count": 1448,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9700462dfd419d0295b2753079208e939a853dce",
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1362,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]239[.]224[.]131:22\"",
                    " \"101[.]43[.]31[.]60:443\"",
                    " \"101[.]43[.]31[.]60:8080\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1358,
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
                "count": 780,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                    "513c67627217e9e62bf86dad646acdccca6bae7d",
                    "66e45265f8da905b7538b0a81f1ec9b54ea12dd9"
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
                "count": 724,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"3487cf7be602c15d0037651d0276d3ea5efaa7df68feda6ec0f3af18b8a655d7",
                    " \"544a25989162c9ada5a741e693602b2821f2524a87358515dd37de74fa2f5e31",
                    " \"c7c71e0287d20f430b16930c0584080be0fae71c59ccd1babba70c62df952b20"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 705,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 38711,
        "lastCalculated": "2026-09-18 03:07 IST"
    }
};
