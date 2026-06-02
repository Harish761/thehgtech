// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-03T03:03:06.355975+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-03T03:03:06.140555+05:30",
    "lastUpdatedFormatted": "Jun 03, 2026 at 03:03 AM IST",
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
                "hxxp://galeripemenangshopee012[.]blogspot[.]com/",
                "hxxp://galeri-promo2021[.]blogspot[.]com/",
                "hxxps://bafkreiegbqbcfv3bye424hhdqirq2wqiftdkjywtxlivtmx4zyhzkotcta[.]ipfs[.]dweb[.]link/",
                "hxxp://t-mobile[.]rxomdi[.]top/pay",
                "hxxp://t-mobile[.]cvnghb[.]top/pay"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 632,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b41ba217f19bee7cf3526c7bb840034cb6e91e725f48eb53da18385cca49cb55",
                " \"aaa9aacd2f1297dc2429d24641ce98efd59a070535283439783c7acf4d773da1",
                " \"bb93a456ab8706c0f22f22d59ca613a7a14ba2a4c19b2f461fced5db0059577f",
                " \"2181637818db1566030dcf44a72c7fd33a96dcc77fd79e86da42b10811ddd392",
                " \"abd712a8bf49f35d5669696cd86ffdd971289fef50339f0e9235eeb0b962a5c0"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1597,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1597,
                "newInLastHour": 34,
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
            "iocCount": 6158,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6158,
                "newInLastHour": 6158,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]176[.]139",
                "1[.]14[.]180[.]163",
                "1[.]14[.]192[.]95",
                "1[.]15[.]22[.]22"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20330,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20330,
                "newInLastHour": 20330,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://218[.]59[.]12[.]12:58386/bin[.]sh",
                "hxxp://125[.]40[.]83[.]68:56750/bin[.]sh",
                "hxxp://221[.]15[.]22[.]104:39479/i",
                "hxxp://115[.]51[.]37[.]39:53658/i",
                "hxxp://42[.]238[.]248[.]148:52409/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3742,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3742,
                "newInLastHour": 3734,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"0u9irsk6[.]luxerabet10[.]com\"",
                " \"zs42pkd6[.]luxerabet10[.]com\"",
                " \"45[.]198[.]224[.]19:4321\"",
                " \"195[.]246[.]230[.]99:7443\"",
                " \"155[.]103[.]70[.]198:13407\""
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
            "iocCount": 9827,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9827,
                "newInLastHour": 122,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d345baf20bd0de3b5004bd6d8d5b72cac4e7d04c",
                "c977d795cf06f3bdb9e88ec4700aebe3d3bbaf08",
                "7e1b7861379d0043ae42bac6a060e5a230bd2576",
                "b733673f2c221400c4e14bb6cea0f528a5dff337",
                "3b8b88139678299948bf1ccc9c0fbb2b4cb5e861"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 36315,
            "activeSources": 7,
            "criticalAlerts": 30701,
            "activeCampaigns": 217
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21014,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9687,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 3443,
                "trend": "up",
                "percentage": 20
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
                "count": 20315,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_0326a71c1857de0a[.]exe",
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_6bac2fb194aa2b36[.]exe",
                    "hxxps://wwiiiss[.]oss-ap-northeast-1[.]aliyuncs[.]com/soggou_ofice_word[.]zip"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1563,
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
                "count": 1406,
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
                "count": 674,
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
                "count": 538,
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
                "name": "OffLoader",
                "count": 405,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134",
                    "9364c682044d04a298c3fdbfa767aaea8fe8d58d",
                    "b6f3f71f5af8c7ead92da17e9c952910ce4466cd"
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
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 30689,
        "lastCalculated": "2026-06-03 03:03 IST"
    }
};
