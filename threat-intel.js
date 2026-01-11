// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-11T10:24:10.859972+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-11T10:24:10.512648+05:30",
    "lastUpdatedFormatted": "Jan 11, 2026 at 10:24 AM IST",
    "comparisonPeriod": "Jan 10 \u2013 Jan 11, 2026",
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
                "hxxp://kucoinlogin_[.]godaddysites[.]com/",
                "hxxp://p84u[.]xyz/",
                "hxxp://www[.]easybank-landing-page-pearl[.]vercel[.]app/",
                "hxxps://paypal[.]hgweb[.]ru/confirmation/",
                "hxxp://www[.]84632[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 774,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 774,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cc6b885b8af7d3ca9cfdd537d5923881a761af637098e75cbb4347924e1b3e40",
                " \"99119aaf01d3b317ca0e6cf7a8912f4980b6071211483242336795337cfe17e0",
                " \"90832ad3f8a90b71a4d37f1740bd0f7497adbe9888ce18b026f9cdda54c94ed6",
                " \"78e260a5118578e0b4d1a55374c217c218c48ab8f7455dd5a28a70746f99f715",
                " \"59e6fd149ca6818266cbf07402ae02d1afad35af9e45a68732b74546ee5a1681"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1466,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1466,
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
                "1[.]10[.]247[.]1",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66",
                "1[.]170[.]47[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5847,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5847,
                "newInLastHour": 5847,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]161[.]39[.]103",
                "1[.]194[.]236[.]11",
                "1[.]196[.]177[.]49",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23722,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23722,
                "newInLastHour": 23722,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://24[.]54[.]85[.]143:48436/bin[.]sh",
                "hxxp://146[.]0[.]74[.]122/001010101010010110101011101010101101010111010101/nwfaiehg4ewijfgriehgirehaughrarg[.]arm7",
                "hxxp://146[.]0[.]74[.]122/001010101010010110101011101010101101010111010101/nwfaiehg4ewijfgriehgirehaughrarg[.]arm6",
                "hxxp://146[.]0[.]74[.]122/001010101010010110101011101010101101010111010101/nwfaiehg4ewijfgriehgirehaughrarg[.]mpsl",
                "hxxp://146[.]0[.]74[.]122/001010101010010110101011101010101101010111010101/nwfaiehg4ewijfgriehgirehaughrarg[.]mips"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7322,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7322,
                "newInLastHour": 7115,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://cdn[.]jsdelivr[.]net/gh/id-core-rs-com/err2/local\"",
                " \"54[.]236[.]229[.]118:9201\"",
                " \"199[.]101[.]111[.]41:3790\"",
                " \"196[.]75[.]135[.]191:2222\"",
                " \"gd0[.]com[.]co\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8763,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8763,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9485d84666facdf62f9eb83088e526261477ca02",
                "e0ea6068f391170ab5ed0eec7f81183d6b9597e0",
                "aa32c04a00de32843bacb96f60c60a3ce34cbf05",
                "754974f9c9b1d75b2492ae363e7289124728d5b1",
                "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57324,
            "activeSources": 8,
            "criticalAlerts": 33239,
            "activeCampaigns": 209
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 24499,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 8740,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 6906,
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
                "count": 23672,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]37[.]105:49982/bin[.]sh",
                    "hxxp://42[.]237[.]48[.]186:53805/bin[.]sh",
                    "hxxp://222[.]137[.]4[.]223:53632/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]247[.]1",
                    "1[.]15[.]14[.]29",
                    "1[.]170[.]47[.]115"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 6573,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]242[.]247[.]151:3333\"",
                    " \"13[.]61[.]144[.]55:3333\"",
                    " \"41[.]59[.]227[.]252:3333\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1466,
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
                "count": 1368,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e0ea6068f391170ab5ed0eec7f81183d6b9597e0",
                    "8fa8b4de2a18dbf3bb43585b71891faf4c3ca8fc",
                    "7be9dbcc29554dd70c69f108d7763a35d7128ab1"
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
                "count": 603,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa",
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0",
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4"
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
                "name": " \"Mirai",
                "count": 405,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"729af5bbfa0cc53422aa7c3bc8f109f7ed6b6aabf7f91c8d0f31592ac9159593",
                    " \"9e85bab585e1dd558cce3f16f33a94bb7ecc4fadac9811dbde92a2995c587e9a",
                    " \"5c0e5800da22a18321304948a01e9c83b011a4a8d46300603642d046a6fab0ef"
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 52010,
        "lastCalculated": "2026-01-11 10:24 IST"
    }
};
