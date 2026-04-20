// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-20T09:17:24.375228+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-20T09:17:24.052196+05:30",
    "lastUpdatedFormatted": "Apr 20, 2026 at 09:17 AM IST",
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
                "hxxps://www[.]robiox[.]com[.]py/games/126960861976786/so-crying-rn?privateServerLinkCode=632328529812134415514713844494",
                "hxxp://www[.]blockchain-clone-lyart[.]vercel[.]app/",
                "hxxp://mailer05-tra[.]mdbgo[.]io/",
                "hxxp://www[.]68750[.]xyz/",
                "hxxps://roblox[.]com[.]ge/games/106024161385859/DiegoldDiegowd2128s-Place-111320252?privateServerLinkCode=50989019406415528505404972627024"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 694,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 694,
                "newInLastHour": 75,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"94e9c184bacfd60f5756515d39cbe3293dd8b33f5841976eafb4e64c91467004",
                " \"8584b2e6eef70b24e504421c0a2adca0d2a065dd63ad30ba84ee50f92d1c82ce",
                " \"c7c506ed3e073c24a1e9999dfd6c99ef6f1eb37878d0055d5710445280feac46",
                " \"53ce6a4f580b7b9d572bb0cc6c1b9814c2538aabf58429e3f258548a54f0514a",
                " \"c8911d6381a1556effbee662943551ef3685fa115f1121c4c378f2ac6d3f9cf1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1588,
                "newInLastHour": 15,
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
                "1[.]157[.]110[.]54",
                "1[.]176[.]118[.]246",
                "1[.]176[.]238[.]107",
                "1[.]176[.]44[.]251",
                "1[.]180[.]153[.]254"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 2113,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 2113,
                "newInLastHour": 2113,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]255[.]199",
                "1[.]20[.]174[.]45",
                "1[.]214[.]117[.]218",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25428,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25428,
                "newInLastHour": 25428,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://113[.]239[.]74[.]216:37394/i",
                "hxxp://95[.]65[.]234[.]57:55607/i",
                "hxxp://113[.]239[.]74[.]216:37394/bin[.]sh",
                "hxxps://final-step6[.]sizar-sniffy[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://182[.]202[.]14[.]89:33403/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 807,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 807,
                "newInLastHour": 807,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"child-care1[.]big2mychild[.]in[.]net\"",
                " \"final-step6[.]sizar-sniffy[.]in[.]net\"",
                " \"user-test5[.]sizar-sniffy[.]in[.]net\"",
                " \"error-log4[.]sizar-sniffy[.]in[.]net\"",
                " \"data-point3[.]sizar-sniffy[.]in[.]net\""
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
            "iocCount": 9615,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9615,
                "newInLastHour": 6,
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
            "totalIndicators": 53955,
            "activeSources": 8,
            "criticalAlerts": 36146,
            "activeCampaigns": 168
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26559,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9587,
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
                "count": 91,
                "trend": "stable",
                "percentage": -9
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
                "count": 25827,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]37[.]108[.]110:60944/i",
                    "hxxps://air-flight5[.]elephant-harv[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://36[.]64[.]174[.]50:60361/bin[.]sh"
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
                "count": 1573,
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
                "count": 1405,
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
                "count": 498,
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
                "count": 449,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"large-box6[.]elephant-harv[.]in[.]net\"",
                    " \"air-flight5[.]elephant-harv[.]in[.]net\"",
                    " \"global-ship4[.]elephant-harv[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 402,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43749,
        "lastCalculated": "2026-04-20 09:17 IST"
    }
};
