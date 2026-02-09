// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-02-09T11:11:50.085670+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-02-09T11:11:49.805375+05:30",
    "lastUpdatedFormatted": "Feb 09, 2026 at 11:11 AM IST",
    "comparisonPeriod": "Feb 08 \u2013 Feb 09, 2026",
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
                "hxxp://microsoft[.]authorised-support[.]com/login/o_lOSw1XYSCndice1aNeaktBKsc4hTtz5VEA=9CA==1XFhSQ15CXldFbl1eVlhfbkZYRVluQVBCQkZeQ1U=/6cm6AcO974xm5DyQm__OGtKlRTxGxBGB/",
                "hxxp://microsoft[.]authorised-support[.]com/login/o_lOSw1XYSCndice1aNeaktBKsc4hTtz5VEA=9CA==/6cm6AcO974xm5DyQm__OGtKlRTxGxBGB/",
                "hxxp://7665aa[.]com/",
                "hxxps://app-hsbc[.]priiphub[.]com/",
                "hxxps://020239320932steamwo9ea60[.]myclickfunnels[.]com/e1463c0bf3"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 758,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 758,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"db0b6ffcd4dd4972cc001702e202f8889f53e5397534017c1d8f882c10d6508f",
                " \"0a5fbf063d1ae939ed309cb1fba3b66bc71753e0d3a31280e7ed57a5690d38ec",
                " \"aa51fbc2c5f9fc436069453c024a2056fd005010f578920ae635d93a1aebabd3",
                " \"d1a6a07eee57f4896d083640b2e14e45bfb93cfaccc9f56fa93f2e0e0571a727",
                " \"dfbb279301aaf3a86520fe72e6625b2d8bb2128166fe64fe8d56fae017960b8e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1482,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1482,
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
                "1[.]15[.]116[.]189",
                "1[.]15[.]118[.]23",
                "1[.]157[.]80[.]72",
                "1[.]170[.]7[.]241",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6493,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6493,
                "newInLastHour": 6493,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]13[.]79[.]212",
                "1[.]14[.]12[.]141",
                "1[.]15[.]77[.]170",
                "1[.]214[.]197[.]163",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19895,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19895,
                "newInLastHour": 19895,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]13[.]39[.]188:40164/i",
                "hxxp://117[.]196[.]2[.]197:41401/bin[.]sh",
                "hxxp://112[.]248[.]113[.]26:55542/i",
                "hxxp://42[.]224[.]192[.]128:53540/bin[.]sh",
                "hxxp://112[.]140[.]191[.]204:60079/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 731,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 731,
                "newInLastHour": 545,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"195[.]177[.]94[.]12:1012\"",
                " \"185[.]132[.]53[.]123:5000\"",
                " \"192[.]142[.]45[.]103:80\"",
                " \"104[.]223[.]84[.]7:14645\"",
                " \"34[.]7[.]42[.]123:443\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 3,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 3,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "162[.]243[.]103[.]246",
                "172[.]232[.]59[.]14",
                "34[.]204[.]119[.]63"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8894,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8894,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1b604c1794769fa4eccd76b6181d4cd6a80b8ee3",
                "4fb0a49f57168d549995de692422215a610ccdff",
                "809e09b798d3915b7416060208e368794faa2510",
                "76aa0b296ecfb33022395d726768aa7c1cf491bc",
                "8c027aea9f5810c556e38f4fe450504eee4fa910"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47048,
            "activeSources": 8,
            "criticalAlerts": 29535,
            "activeCampaigns": 218
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20664,
                "trend": "stable",
                "percentage": -5
            },
            {
                "category": "C2",
                "count": 8871,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 537,
                "trend": "stable",
                "percentage": -3
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
                "count": 19862,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]224[.]169[.]71:53478/i",
                    "hxxp://117[.]216[.]63[.]11:53832/i",
                    "hxxp://59[.]180[.]177[.]200:50871/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]116[.]189",
                    "1[.]15[.]118[.]23",
                    "1[.]157[.]80[.]72"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1482,
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
                "count": 1381,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "97e58eec776ad990a10d1f4a932e1a4ae48636b3",
                    "f2c2503f8514647aba9776c4e9c3b55a97695d2e",
                    "7ebc8e1cac8c681aad9cfa05c76b0c52ecc87f7c"
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
                "count": 617,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1ea8ec48d9f0b8873db62ceb0d56bc89bd5b326e",
                    "bc3ca9fd7fdab7635c897aa5b61d0de4c471d1b9",
                    "436f02b3a63406707f6467d4880a691a2a3f53ea"
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
                "count": 516,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"85b9425dc07ed241a77f2273d3f4f6df5d2be0a002b085b3d337653a5b477ea2",
                    " \"c662e731d8a0c0f92bf4c006493f17e77d7150e1f790be521450a6915e0c6fe2",
                    " \"9dfe8344b4955e58824071c1ef033569e23815f4d816a223d338222e7c975ecc"
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
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42245,
        "lastCalculated": "2026-02-09 11:11 IST"
    }
};
