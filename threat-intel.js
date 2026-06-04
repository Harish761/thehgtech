// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-04T10:30:13.631727+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-04T10:30:13.404723+05:30",
    "lastUpdatedFormatted": "Jun 04, 2026 at 10:30 AM IST",
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
                "hxxp://www[.]ca7033vip[.]com/",
                "hxxps://gogo4wz6qn[.]billbutterworth[.]com/",
                "hxxp://sp1ct6-slapnix-biz-qravtek-plovrax[.]pages[.]dev/",
                "hxxp://www[.]15381[.]xyz/",
                "hxxp://www[.]15416[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 394,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 394,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"993feb68ba43329001a9f60695ffc7816ba2804ae0539dbeff44409949926b23",
                " \"bbc92f8f933dda81bc53163fcb2b2ca906dea06db4c4ab9e1e75b9893ef73378",
                " \"67a7c2d8fedc22591e28b4dbb83be1c172c7fc743e79c1147895c74caaca480f",
                " \"f22d7a054bcb8c79352e514e45bf61d4fccfad62c0c75d1ccedcfa875dba158a",
                " \"fd36970e0fe529f67b04f2c5e9f944f476d79b8e4d1599ffcd3a64d22fd57ede"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1577,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1577,
                "newInLastHour": 20,
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
            "iocCount": 7838,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7838,
                "newInLastHour": 7838,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]176[.]139",
                "1[.]15[.]22[.]22",
                "1[.]162[.]226[.]19"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19289,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19289,
                "newInLastHour": 19289,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]202[.]21[.]128:46010/bin[.]sh",
                "hxxp://182[.]126[.]88[.]91:35864/i",
                "hxxp://42[.]228[.]37[.]11:50863/i",
                "hxxp://112[.]248[.]103[.]32:46711/i",
                "hxxps://emkilzh[.]betcityiran[.]com/ab0a0b6b-2cc2-4a4f-827e-98ab18eb1c06"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3915,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3915,
                "newInLastHour": 3909,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"emkilzh[.]betcityiran[.]com\"",
                " \"!z![.]betcityiran[.]com\"",
                " \"vnacwzz[.]basketballiran[.]app\"",
                " \"04gzr1uh[.]alternatifdekorasyon[.]com\"",
                " \"nllyafb[.]basketballbet[.]org\""
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
            "iocCount": 9796,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9796,
                "newInLastHour": 85,
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
            "totalIndicators": 36070,
            "activeSources": 7,
            "criticalAlerts": 30235,
            "activeCampaigns": 225
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20507,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9728,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3667,
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
                "count": 20075,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]188[.]64[.]6:39760/i",
                    "hxxp://27[.]202[.]186[.]126:41884/i",
                    "hxxps://wjsuzxt[.]arian90bet[.]bet/44e3fbae-4ef2-4ab9-ad12-1577a37a8bf9"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1621,
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
                "count": 682,
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
                "count": 553,
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
                "count": 549,
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
        "fastestRisingThreat": "Generic Phishing",
        "totalAttacksThisHour": 31493,
        "lastCalculated": "2026-06-04 10:30 IST"
    }
};
