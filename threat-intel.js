// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-06T14:50:16.277482+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-06T14:50:15.989700+05:30",
    "lastUpdatedFormatted": "Apr 06, 2026 at 02:50 PM IST",
    "comparisonPeriod": "Apr 05 \u2013 Apr 06, 2026",
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
                "hxxps://started-trezxio[.]wixstudio[.]com/en-us",
                "hxxps://iostart-trazoiire[.]zapier[.]app/web",
                "hxxps://dpd[.]packageconfirmnotice[.]cfd/dpd[.]com/",
                "hxxps://dpd[.]packageconfirmnotice[.]cfd/dpd[.]com",
                "hxxps://portalofertaspromos[.]com/paga-ofertas/bancolombia/dinamicaMano[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 732,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 732,
                "newInLastHour": 71,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"236144739b557250d3a7f42e9557384b1c561256bbb7a964a9480cdad9db4bd1",
                " \"c5b64fa574c180885ca777b31dc4c401d64a29838e49290f34dae08ea78eafc1",
                " \"afd96b12743f6ff442403067f337abbd3119a7055b03363e7ba6572db00c947f",
                " \"27c0459780fc6a5ba81d40aa60e8afe6316ad28a1627042c7ff0bcbb02b6ba1b",
                " \"f4dc237995e7bec509ddec3aba11b2eee67d28a9decc8342205510473df4b14f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1601,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1601,
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
                "1[.]0[.]248[.]118",
                "1[.]123[.]227[.]253",
                "1[.]14[.]3[.]240",
                "1[.]157[.]102[.]155",
                "1[.]159[.]69[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4035,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4035,
                "newInLastHour": 4035,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]22[.]203",
                "1[.]145[.]124[.]191",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21633,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21633,
                "newInLastHour": 21633,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]5[.]190[.]43:37039/bin[.]sh",
                "hxxps://synth-portal[.]dialecticflux[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://219[.]157[.]155[.]139:60064/i",
                "hxxps://anti-node[.]dialecticflux[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/verification[.]google",
                "hxxp://221[.]15[.]190[.]3:51751/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 688,
                "newInLastHour": 688,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cf0eed666d4a468cec802c3cd8289dce3d4b318c17233c3b40370ce2ded75ec7\"",
                " \"89[.]125[.]50[.]217:443\"",
                " \"tabbysbakescodes[.]ws\"",
                " \"synth-portal[.]dialecticflux[.]in[.]net\"",
                " \"ai[.]latitudeprevalent[.]cfd\""
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
            "iocCount": 9480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9480,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d8a911fd1b2634b8d659c543d750e359c21652fa",
                "786bceb212dcc5473f20079c4671b56d2f742605",
                "5b352f0ac54a23c1827641f994fd3125194bf175",
                "be1ae76af3b16ed1cb465fed1e93318621999edb",
                "0e75046b4c39e98f6ba750304e24556b50f64418"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49112,
            "activeSources": 8,
            "criticalAlerts": 31625,
            "activeCampaigns": 178
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22186,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9439,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 213,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 88
            },
            {
                "name": "Tech",
                "percentage": 11
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21471,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://116[.]248[.]121[.]105:58539/i",
                    "hxxp://117[.]26[.]227[.]108:56557/i",
                    "hxxp://115[.]62[.]149[.]21:40984/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]248[.]118",
                    "1[.]123[.]227[.]253",
                    "1[.]14[.]3[.]240"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1600,
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
                "count": 1395,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06"
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
                "count": 660,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8b6050f589d432c56f05de438e4ec606926c97df",
                    "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                    "4fb81998ac697ab9e998f1c69d89e7ea606850ed"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 550,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a"
                ]
            },
            {
                "name": "Vidar",
                "count": 471,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "deff511f627ab662c23d4ee22cdf78869e1c194f",
                    "6a7082d678a42a1f99e5a0e086bea62a82a3f9fc",
                    "717369000deeef90c52b7c3a0885c0371315847e"
                ]
            },
            {
                "name": "OffLoader",
                "count": 376,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0a81be74d5e74dc517becc16324991db2597f5fb",
                    "a153d631044cb3a6e47f781170624fec9552c8c1",
                    "df46f5d70b9f8af16e2732ca36cc2e5a08bda1a9"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41752,
        "lastCalculated": "2026-04-06 14:50 IST"
    }
};
