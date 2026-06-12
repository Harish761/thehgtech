// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-12T07:50:36.831692+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-12T07:50:36.506434+05:30",
    "lastUpdatedFormatted": "Jun 12, 2026 at 07:50 AM IST",
    "comparisonPeriod": "Jun 11 \u2013 Jun 12, 2026",
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
                "hxxps://noticias[.]almacen[.]nodo12c[.]radiosnet[.]com[.]ar/Office/",
                "hxxps://store[.]communitysectionsgames[.]shop/workshop/AK47-EternalDecay/",
                "hxxps://pub-11d577e12813445bad862b39ec2c7cb4[.]r2[.]dev/index[.]html?id=dulc9hk0w5",
                "hxxp://app[.]adskin[.]vip/",
                "hxxp://aktiffkan-paylater[.]vdd[.]my[.]id/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 984,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 984,
                "newInLastHour": 187,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6e08a9b19df98e36da4409a8ae5990bde3ed6dc583fbea9f112cbc55421aec59",
                " \"8ce3fb88aac1ae474d01d8831e526cf80c2a7bdb69a457df8e0871ec00c082dd",
                " \"7f1f8162977db79019decd993a7ef9e3ad1d36a1111567a4ff0f11096d1ace01",
                " \"b99ede1149e6fccf761b7ad5bc0664a013510c88c53ec304b3531322500808d9",
                " \"46eaa8f2589f3bfaa97c9cdde1f204d8d2d1c144df963ce655e1c4cbad0e8de5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1698,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1698,
                "newInLastHour": 89,
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
                "1[.]0[.]203[.]197",
                "1[.]12[.]229[.]231",
                "1[.]15[.]35[.]79",
                "1[.]159[.]65[.]249",
                "1[.]159[.]87[.]163"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7653,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7653,
                "newInLastHour": 7653,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]116[.]110[.]170",
                "1[.]116[.]61[.]217",
                "1[.]15[.]227[.]58",
                "1[.]192[.]61[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17543,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17543,
                "newInLastHour": 17543,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://119[.]152[.]35[.]151:46489/bin[.]sh",
                "hxxps://oxcydtg[.]1x1[.]cash/ea103b0c-1067-44fa-883c-b4872f2f96ed",
                "hxxp://210[.]10[.]180[.]247:56456/i",
                "hxxp://113[.]238[.]112[.]233:49590/bin[.]sh",
                "hxxps://kn46xsmt[.]readthisintro[.]xyz/?ublib=9e28d762-78a6-4478-a19d-f285fd4febc9"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6381,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6381,
                "newInLastHour": 6350,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"kn46xsmt[.]readthisintro[.]xyz\"",
                " \"45[.]205[.]2[.]45:80\"",
                " \"bjuo48bq[.]ravanroshd[.]shop\"",
                " \"kdphdmr[.]rahnemayenegaresh[.]site\"",
                " \"uqknomxs[.]karbordriyaziyat[.]xyz\""
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
            "iocCount": 9926,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9926,
                "newInLastHour": 275,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "48cf152a0f547ca2ee9668e57c7136e157ec96f5",
                "78e36aa21e77cf60799204d1fb0bac1f063aec42",
                "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                "a4f368e4e4c305b60212c016a4f1fa3a3a96a3de",
                "0505fd5b451911f764cd457d591ec4d355e609c8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51695,
            "activeSources": 8,
            "criticalAlerts": 28320,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18546,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9774,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3178,
                "trend": "stable",
                "percentage": 4
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
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 17535,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://lkhpttfj[.]leaguejazire[.]com/563fbe24-3ecc-4f90-b09a-ea567dac9d27",
                    "hxxps://bjuo48bq[.]ravanroshd[.]shop/?ublib=ba163f4a-116c-4d6d-936d-82cbac12aab8",
                    "hxxp://113[.]237[.]107[.]93:50774/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]203[.]197",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 2257,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bjuo48bq[.]ravanroshd[.]shop\"",
                    " \"kdphdmr[.]rahnemayenegaresh[.]site\"",
                    " \"uqknomxs[.]karbordriyaziyat[.]xyz\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1691,
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
                "count": 1444,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]132[.]89[.]132:8080\"",
                    " \"114[.]132[.]89[.]132:443\"",
                    " \"114[.]132[.]89[.]132:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1413,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a"
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
                "count": 678,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713",
                    "5b27051d67aa2cce9314596003b68709a13fc003"
                ]
            },
            {
                "name": "Vidar",
                "count": 569,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                    "0505fd5b451911f764cd457d591ec4d355e609c8",
                    "a8f5e9a021f8df5a11743cc4ad447ccf81e7c300"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "OffLoader",
        "totalAttacksThisHour": 47402,
        "lastCalculated": "2026-06-12 07:50 IST"
    }
};
