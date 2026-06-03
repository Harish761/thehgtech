// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-03T18:18:48.909103+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-03T18:18:48.701063+05:30",
    "lastUpdatedFormatted": "Jun 03, 2026 at 06:18 PM IST",
    "comparisonPeriod": "Jun 02 \u2013 Jun 03, 2026",
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
            "iocCount": 414,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 414,
                "newInLastHour": 45,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"30a9f9a9f677e73b8adfc87a7b426317a1e968a320f01addb0d8af794a64282d",
                " \"9e040c45aa797b15b6bf8b0c9baecb9ef947a0644b2a57f9f7eea0a68528cfee",
                " \"e2881e5216805c5d592e1c3f4c20be417249dd9d83ad0d03fc6bce2e7934b54a",
                " \"4a703ea539520212ceb479a73e82e5398589b40d8bcbe7e8ad86f02327ce8555",
                " \"26ac872fe2174266491e187b76a00865f4a3b338b1004c8e9be4758fcc1cfa0d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1602,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1602,
                "newInLastHour": 10,
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
            "iocCount": 8139,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8139,
                "newInLastHour": 8139,
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
            "iocCount": 19933,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19933,
                "newInLastHour": 19933,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]53[.]218[.]48:38203/bin[.]sh",
                "hxxp://61[.]53[.]237[.]227:44265/bin[.]sh",
                "hxxp://125[.]43[.]104[.]117:33982/bin[.]sh",
                "hxxp://110[.]36[.]80[.]173:45864/bin[.]sh",
                "hxxp://42[.]232[.]30[.]93:55652/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3829,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3829,
                "newInLastHour": 3821,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rtfo[.]sa[.]com\"",
                " \"77bet[.]africa\"",
                " \"209[.]200[.]246[.]194:11544\"",
                " \"b33gup3p[.]betbet[.]city\"",
                " \"ozmhw80r[.]adabiyat[.]org\""
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
            "iocCount": 9835,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9835,
                "newInLastHour": 4,
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
            "totalIndicators": 35852,
            "activeSources": 7,
            "criticalAlerts": 30237,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20428,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9809,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3442,
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
                "count": 19821,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://218[.]16[.]164[.]134:53377/i",
                    "hxxp://42[.]226[.]219[.]119:53794/i",
                    "hxxp://39[.]79[.]85[.]182:51542/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1597,
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
                "count": 1418,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"106[.]53[.]61[.]9:443\"",
                    " \"47[.]111[.]227[.]56:443\"",
                    " \"154[.]194[.]251[.]43:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
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
                "count": 683,
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
                "name": "Vidar",
                "count": 568,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d345baf20bd0de3b5004bd6d8d5b72cac4e7d04c",
                    "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                    "7e1b7861379d0043ae42bac6a060e5a230bd2576"
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
                "name": "OffLoader",
                "count": 422,
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
                "count": 370,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"195[.]246[.]230[.]99:7443\"",
                    " \"my-electrum[.]at\"",
                    " \"txtsm188[.]top\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 32257,
        "lastCalculated": "2026-06-03 18:18 IST"
    }
};
