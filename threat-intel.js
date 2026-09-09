// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-09T18:25:24.041020+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-09T18:25:23.675094+05:30",
    "lastUpdatedFormatted": "Sep 09, 2026 at 06:25 PM IST",
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
                "hxxps://www[.]facebooklogin21[.]blogspot[.]com/",
                "hxxps://ledgrr-live-io-faq[.]pages[.]dev/",
                "hxxp://ledgrr--live[.]pages[.]dev/",
                "hxxp://ledgrr-livv-app[.]pages[.]dev/",
                "hxxps://ledgrr-iolive[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 785,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 785,
                "newInLastHour": 150,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c204b31a2682b45fcd4d8cc6d347ea6effdec8eab1607ad18df6433c54f2a275",
                " \"d6dbc73627d0b1a9beec2e114c85ef4fd2788262dbe6796f4b803b6daccd3231",
                " \"b35d2861ee9cb3c8f746964d93c0e392341003eb895841f27be11ea0e1d30ed4",
                " \"9eeda179920277a1756857016918d246a0ac0289074464843eeb486cb473bece",
                " \"2e261b3bda31076b64a40637f2c76b0980f3d7a534865aae6cbb54f64ec7bf7b"
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
                "1[.]117[.]59[.]169",
                "1[.]12[.]229[.]231",
                "1[.]181[.]200[.]22",
                "1[.]183[.]41[.]170",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5280,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5280,
                "newInLastHour": 5280,
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
            "iocCount": 13981,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13981,
                "newInLastHour": 13981,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://37[.]112[.]51[.]183:39000/i",
                "hxxp://27[.]222[.]243[.]52:39549/bin[.]sh",
                "hxxp://61[.]54[.]173[.]114:56222/i",
                "hxxp://196[.]191[.]233[.]24:47579/bin[.]sh",
                "hxxp://119[.]189[.]215[.]204:39465/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9137,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9137,
                "newInLastHour": 8962,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"yi4ip7ew[.]everythingisephemere[.]com\"",
                " \"eymjf56765[.]workers[.]dev\"",
                " \"everythingisephemere[.]com\"",
                " \"coolify-api[.]eaglegpt[.]ai\"",
                " \"mwaespe[.]ch\""
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
            "iocCount": 10644,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10644,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1edaae5bb268c6ec2f90076a7c47b7bfbc531a15",
                "077be211823898ed4eb3d3faf920781321f7ca5c",
                "8d2a3d5cb72fac2e04ef51b3e056ab6b75e3f408",
                "629ea8772f7b1e8bf216dfc3b2170eb903ee8faa",
                "d359f356ed88b04089b7afe53f13a913382bd4da"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51876,
            "activeSources": 8,
            "criticalAlerts": 25126,
            "activeCampaigns": 258
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14484,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10642,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4193,
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
                    "1[.]181[.]200[.]22",
                    "1[.]193[.]37[.]103"
                ]
            },
            {
                "name": "malware_download",
                "count": 13606,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://61[.]53[.]116[.]110:44210/i",
                    "hxxp://61[.]53[.]116[.]110:44210/bin[.]sh",
                    "hxxp://112[.]229[.]207[.]15:55943/i"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2256,
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
                "name": "Spamhaus DROP List",
                "count": 1706,
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
                "count": 1444,
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
                "count": 1296,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"42[.]193[.]123[.]90:16631\"",
                    " \"113[.]250[.]188[.]15:6784\"",
                    " \"42[.]194[.]241[.]92:80\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 771,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"elitedevelopmentllc[.]com\"",
                    " \"elevatets[.]ca\"",
                    " \"ebcmedia[.]vn\""
                ]
            },
            {
                "name": "Vidar",
                "count": 770,
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43689,
        "lastCalculated": "2026-09-09 18:25 IST"
    }
};
