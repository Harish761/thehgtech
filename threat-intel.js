// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-20T02:20:58.193631+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-20T02:20:57.883143+05:30",
    "lastUpdatedFormatted": "Apr 20, 2026 at 02:20 AM IST",
    "comparisonPeriod": "Apr 19 \u2013 Apr 20, 2026",
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
                "hxxp://get-trezer-bridge-io[.]pages[.]dev/",
                "hxxp://salleryonlnejbhomesiite[.]net/",
                "hxxps://redir[.]mailreference[.]fr/c/119/9109040/14264/0/887326426/9125/479632/cf87a9bb62[.]html",
                "hxxps://cutt[.]ly/itAx35LH",
                "hxxps://www[.]roblox[.]com[.]ml/users/323223411351/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 744,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 744,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"61aa79fd39a47238d1a8597501eee0e8bad49a86aa93eba77c90ffd5891ef41b",
                " \"0270c76c010e9b66c19d2d06cbff2b95a7b558296afe8e1172cc001f4f3aa3ee",
                " \"67956925064568976430a27020b0f5e0be99726a64f21bbd91939dc05513a674",
                " \"eaed836b3832b27aedc12e2413b915d7b27128f5cadaec3f4745e9ce7cb14f4a",
                " \"fdfb78bea8539b00528dfbcdc02a05a178ec05d36b5abe2b926c955422a9f7c2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1573,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1573,
                "newInLastHour": 3,
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
                "1[.]1[.]176[.]58",
                "1[.]119[.]192[.]78",
                "1[.]157[.]110[.]54",
                "1[.]176[.]118[.]246",
                "1[.]176[.]238[.]107"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 735,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 735,
                "newInLastHour": 735,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]20[.]174[.]45",
                "1[.]82[.]55[.]239",
                "1[.]92[.]151[.]38",
                "1[.]94[.]215[.]60",
                "1[.]95[.]148[.]123"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25827,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25827,
                "newInLastHour": 25827,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]37[.]108[.]110:60944/i",
                "hxxps://air-flight5[.]elephant-harv[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://36[.]64[.]174[.]50:60361/bin[.]sh",
                "hxxp://115[.]49[.]4[.]124:56199/i",
                "hxxps://global-ship4[.]elephant-harv[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 897,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 897,
                "newInLastHour": 897,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"large-box6[.]elephant-harv[.]in[.]net\"",
                " \"air-flight5[.]elephant-harv[.]in[.]net\"",
                " \"global-ship4[.]elephant-harv[.]in[.]net\"",
                " \"safe-store3[.]elephant-harv[.]in[.]net\"",
                " \"fast-cargo2[.]elephant-harv[.]in[.]net\""
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
            "iocCount": 9609,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9609,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7744bcd680050c7c33f8e1d6b8ba239174ccfa0e",
                "5eae97dda45d2d2e5f056a5490cf31d7c8c6d10c",
                "143869dfe5d39a552b1960012a6efb89821b7b39",
                "f78be258c92a94888f2e283ddb807dcc22689c86",
                "ba27d3fc47d6aa4c0760bb0df84ba2fbb222a7e1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53942,
            "activeSources": 8,
            "criticalAlerts": 36114,
            "activeCampaigns": 169
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26524,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9590,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 100,
                "trend": "down",
                "percentage": -30
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 81
            },
            {
                "name": "Tech",
                "percentage": 18
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
                "name": "malware_download",
                "count": 25780,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://p0rt-hold[.]heaton-stolid[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://163[.]142[.]84[.]73:36056/i",
                    "hxxp://61[.]163[.]128[.]183:43524/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]119[.]192[.]78",
                    "1[.]157[.]110[.]54"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1585,
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
                "count": 1407,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
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
                "count": 676,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03",
                    "54cd35dc5d5f8e7068ccd2c1d24222187784f90a"
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
                "count": 500,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5eae97dda45d2d2e5f056a5490cf31d7c8c6d10c",
                    "a37f6c18cf9097917437a4ac38798dee443f302e",
                    "70be78023c4e1f0f4a94b4c65929de136ad55275"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 445,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"p0rt-hold[.]heaton-stolid[.]in[.]net\"",
                    " \"casca-frame[.]heaton-stolid[.]in[.]net\"",
                    " \"spatra[.]desa1inatcount[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 403,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3",
                    "a04036db29a3c4ab6e89e5a535baecc8b678fbb9"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42779,
        "lastCalculated": "2026-04-20 02:20 IST"
    }
};
