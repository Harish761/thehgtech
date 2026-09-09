// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-09T10:00:38.349505+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-09T10:00:37.972151+05:30",
    "lastUpdatedFormatted": "Sep 09, 2026 at 10:00 AM IST",
    "comparisonPeriod": "Sep 08 \u2013 Sep 09, 2026",
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
                "hxxps://www[.]bc8[.]now[.]sh/",
                "hxxps://hmcargollc[.]com/mailsecure/bramespecialty[.]html",
                "hxxps://steamcommunitly-balanceglock[.]shop/workshop/skin/",
                "hxxps://startio-terrzor[.]zapier[.]app/usen",
                "hxxp://zh[.]wave-whatsapp[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 851,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 851,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"481ab3406ddfd6b9cf4c9346b4cb815776fd0d89719344247d0d22c8a20e9e57",
                " \"76361341b7f86862fae2235d1f67de4c0d3f9ec2ba108328d40b18f7800bc591",
                " \"410fe1699749582a576c43d760128856be27a6cf04a80c0e3ad880ab41aa7c62",
                " \"a5af2c9eead719aae42ef1fd7a8e78b3a1caebd7f053e3bb34cd74a1e5c470ef",
                " \"dbf8a577d037022a5c8834874be21590b399b0dc5e5103241b3d34d723d05186"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1706,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1706,
                "newInLastHour": 1164,
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
                "1[.]119[.]194[.]253",
                "1[.]181[.]200[.]22",
                "1[.]193[.]37[.]103",
                "1[.]202[.]198[.]86",
                "1[.]220[.]119[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5393,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5393,
                "newInLastHour": 5393,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]174[.]197[.]92",
                "1[.]20[.]94[.]169",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13606,
                "newInLastHour": 13606,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]53[.]116[.]110:44210/i",
                "hxxp://61[.]53[.]116[.]110:44210/bin[.]sh",
                "hxxp://112[.]229[.]207[.]15:55943/i",
                "hxxp://103[.]44[.]137[.]13:48345/i",
                "hxxp://42[.]7[.]145[.]82:34836/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9744,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9744,
                "newInLastHour": 9476,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"pykoza[.]workers[.]dev\"",
                " \"neroji[.]workers[.]dev\"",
                " \"elitedevelopmentllc[.]com\"",
                " \"154[.]91[.]59[.]125:8094\"",
                " \"154[.]91[.]59[.]120:8094\""
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
            "iocCount": 10664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10664,
                "newInLastHour": 180,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "44c6dc94a23e05350af1ff687fef8b78cb089b8b",
                "32c779b627c28c168bcf744948c35f45462e9307",
                "cb2d6049ca9e2a20d92f8ee6ae28060d9d460b85",
                "bd12ed0d3f8dac14cb7de27202b10331831dc8c7",
                "4c12b6aa784f92a3c50fb7d99289ca32fe21ad4c"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 50776,
            "activeSources": 8,
            "criticalAlerts": 25256,
            "activeCampaigns": 258
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14794,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10462,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4198,
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
            },
            {
                "name": "Government",
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
                    "1[.]145[.]32[.]156",
                    "1[.]177[.]63[.]23"
                ]
            },
            {
                "name": "malware_download",
                "count": 13937,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]44[.]60[.]118:38038/i",
                    "hxxp://119[.]127[.]7[.]102:56002/bin[.]sh",
                    "hxxp://125[.]44[.]214[.]233:54441/i"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2257,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rug[.]betweenthebunz[.]co\"",
                    " \"remoteitprofessional[.]com\"",
                    " \"ialphai[.]com\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1970,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"foldstation[.]cfd\"",
                    " \"fleshproduce[.]xyz\"",
                    " \"goldenseatnwa[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1437,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b7c32dab3a4cd691ddcfee4bc1fed6d1d6f81c18",
                    "7fa3afaafe3b7c5eab63712e58c9414a86d559ec",
                    "78527fc92bcf8d188b3bcab1b35ac5881e2aaa43"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1294,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"42[.]194[.]241[.]92:80\"",
                    " \"42[.]194[.]241[.]92:8080\"",
                    " \"23[.]155[.]44[.]53:8080\""
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
                "name": "Vidar",
                "count": 712,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b1709ae370ca3fb7ddb3fb49b6c1fca1303a4a97",
                    "1baea4f8295715f075d3c0510b61017840047ae3",
                    "4454daf3ef7f7d71cf8e4ce8067c880f9976c952"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 703,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"leonardshow[.]clmcloud[.]app\"",
                    " \"51fjllnm[.]composition-fleurs-et-plumes[.]com\"",
                    " \"aszdgo8b[.]www-trumpgoldenbadge[.]com\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 690,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2",
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 45186,
        "lastCalculated": "2026-09-09 10:00 IST"
    }
};
