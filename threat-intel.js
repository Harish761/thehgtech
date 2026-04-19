// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-20T00:54:04.509650+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-20T00:54:04.204383+05:30",
    "lastUpdatedFormatted": "Apr 20, 2026 at 12:54 AM IST",
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
            "iocCount": 756,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 756,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2127fbfb9d1642c634a5c4e348cdc5e86b12df2a9ffb0b49f1b5c292284db882",
                " \"5b2d6095f2d26881273bffb4b9e1f80e214fa66a38c94cfd51a37bce7549d404",
                " \"41f05097e0ca53a83ccbce5e2d293324084e9434611d0d81fbb6e600d4967d95",
                " \"a6b4b9163aa5ef2efc4b2d4e6ada904a0e5736ed2bfb860641417688a48b6cd5",
                " \"8bb51f6df905803f01ea0f7a201a65c144e2c274030109033a3be75c49416f36"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1585,
                "newInLastHour": 6,
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
            "iocCount": 750,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 750,
                "newInLastHour": 750,
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
            "iocCount": 25780,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25780,
                "newInLastHour": 25780,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://p0rt-hold[.]heaton-stolid[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://163[.]142[.]84[.]73:36056/i",
                "hxxp://61[.]163[.]128[.]183:43524/bin[.]sh",
                "hxxps://casca-frame[.]heaton-stolid[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://59[.]97[.]252[.]176:58392/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 904,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 904,
                "newInLastHour": 904,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"p0rt-hold[.]heaton-stolid[.]in[.]net\"",
                " \"casca-frame[.]heaton-stolid[.]in[.]net\"",
                " \"spatra[.]desa1inatcount[.]in[.]net\"",
                " \"rur4-watch[.]desa1inatcount[.]in[.]net\"",
                " \"builrai[.]desa1inatcount[.]in[.]net\""
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
            "iocCount": 9612,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9612,
                "newInLastHour": 38,
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
            "totalIndicators": 53875,
            "activeSources": 8,
            "criticalAlerts": 36006,
            "activeCampaigns": 183
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26451,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9555,
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
                "count": 144,
                "trend": "stable",
                "percentage": -5
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
                "count": 25714,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://8rv3pcd[.]cabmic7on[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxps://hsipz[.]cabmic7on[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://175[.]165[.]199[.]109:59490/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]129",
                    "1[.]1[.]176[.]58",
                    "1[.]119[.]192[.]78"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1582,
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
                "count": 1404,
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
                "count": 673,
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
                "count": 552,
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
                "count": 491,
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
                "count": 435,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8rv3pcd[.]cabmic7on[.]in[.]net\"",
                    " \"hsipz[.]cabmic7on[.]in[.]net\"",
                    " \"oz557xfr[.]cabmic7on[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 401,
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
        "totalAttacksThisHour": 42830,
        "lastCalculated": "2026-04-20 00:54 IST"
    }
};
