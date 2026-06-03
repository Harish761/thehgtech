// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-04T04:01:41.089726+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-04T04:01:40.872975+05:30",
    "lastUpdatedFormatted": "Jun 04, 2026 at 04:01 AM IST",
    "comparisonPeriod": "Jun 03 \u2013 Jun 04, 2026",
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
                "hxxps://billiway[.]netlify[.]app/",
                "hxxps://theuber[.]com[.]au/",
                "hxxps://patterndomain[.]info/420-1524-290526/[email%C2%A0protected",
                "hxxps://ledgers[.]at/",
                "hxxps://portal[.]rodiviasdigital[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 405,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 405,
                "newInLastHour": 27,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9f90fbe389fedf9d06d38707f651670c954ca842e22156347a87e64eec960a81",
                " \"68021bb546d19a1c4b57447d0826ed47b545ba9685e0d0c3d7bdff87927a62be",
                " \"db6c67a4692e111e94a5d275d8c5b7f8a763f41696c8aeacabacb5254c9857cc",
                " \"563573b47a7c78670736bec9ca0bd3a8ed2d815e5bc2836c37b21b3772b7c929",
                " \"99a7e360b0568778137ad883a5f53d75bc962d2543d958a0aa9f18974d3d0bdb"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1621,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1621,
                "newInLastHour": 54,
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
            "iocCount": 0,
            "iocDataUrl": "https://thehgtech.com/ioc-data/cins-army.json",
            "stats": {
                "total": 0,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [],
            "sampleIndicators": []
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7930,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7930,
                "newInLastHour": 7930,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]176[.]139",
                "1[.]14[.]192[.]95",
                "1[.]15[.]22[.]22"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20075,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20075,
                "newInLastHour": 20075,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]188[.]64[.]6:39760/i",
                "hxxp://27[.]202[.]186[.]126:41884/i",
                "hxxps://wjsuzxt[.]arian90bet[.]bet/44e3fbae-4ef2-4ab9-ad12-1577a37a8bf9",
                "hxxp://27[.]215[.]178[.]128:53896/i",
                "hxxp://110[.]85[.]110[.]38:41787/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3914,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3914,
                "newInLastHour": 3908,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"wjsuzxt[.]arian90bet[.]bet\"",
                " \"hxxps://web[.]duitsm188[.]top/\"",
                " \"web[.]canamrental[.]com\"",
                " \"hxxps://web[.]canamrental[.]com/\"",
                " \"web[.]duitsm188[.]top\""
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
            "iocCount": 9750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9750,
                "newInLastHour": 8643,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b932f3633355320830591118f0ef6fec40d6c536",
                "ef62de5b7cd581e8b995d7d9807726a3ea173c04",
                "fc8bf49f99720cd6306cd7ab89e52c3c0b947443",
                "5ab8823e55b248078126b1927464faa4f6387368",
                "d345baf20bd0de3b5004bd6d8d5b72cac4e7d04c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 36078,
            "activeSources": 7,
            "criticalAlerts": 30268,
            "activeCampaigns": 224
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20509,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9759,
                "trend": "up",
                "percentage": 680
            },
            {
                "category": "Botnet",
                "count": 3661,
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
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20071,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]85[.]110[.]38:41787/bin[.]sh",
                    "hxxp://120[.]84[.]215[.]239:48456/i",
                    "hxxps://pmieubk[.]arabs[.]promo/0ab89340-ef43-4c4e-9f48-0b4cb954e3d4"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1598,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1427,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"155[.]94[.]193[.]170:443\"",
                    " \"155[.]94[.]193[.]170:80\"",
                    " \"118[.]89[.]203[.]103:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
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
                "count": 679,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8e733b34e95a7b98ada40292b8d35e9040016e65",
                    "9f0d33c1eaa7afd41009d0ec594c0a408d2df123",
                    "493f6dbb48806992e524df2a3a0fa0348cef243b"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 550,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b932f3633355320830591118f0ef6fec40d6c536",
                    "d345baf20bd0de3b5004bd6d8d5b72cac4e7d04c",
                    "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08"
                ]
            },
            {
                "name": "OffLoader",
                "count": 414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 391,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"168[.]144[.]36[.]228:7443\"",
                    " \"47[.]245[.]115[.]13:60000\"",
                    " \"206[.]189[.]84[.]116:8080\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 40942,
        "lastCalculated": "2026-06-04 04:01 IST"
    }
};
