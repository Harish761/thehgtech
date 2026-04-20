// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-20T11:55:04.876645+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-20T11:55:04.570812+05:30",
    "lastUpdatedFormatted": "Apr 20, 2026 at 11:55 AM IST",
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
            "iocCount": 655,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 655,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5f2118495bbb74f0946f1476465d717ec5b6f35bf629fd3423f785479fe61202",
                " \"12eeb42b6c685304e9619f3988146b5a68db3fbe7f0ac28b1c5fda9481315c46",
                " \"67133a4a49576c342dd3f8cbd58b49f9ab3b4c456c75327d64ec9ffaede4632b",
                " \"fef8ab38ca1a3bd67fd930140241d6a30f0245bbba6184a3448736ddc39c7aa9",
                " \"f37e60e60a3e504f555444ced745e7224cc83625a29582d29217b8a4ab7341a4"
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
                "1[.]157[.]110[.]54",
                "1[.]176[.]118[.]246",
                "1[.]176[.]238[.]107",
                "1[.]180[.]153[.]254",
                "1[.]180[.]183[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 2481,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 2481,
                "newInLastHour": 2481,
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
            "iocCount": 25486,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25486,
                "newInLastHour": 25486,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://high-roof5[.]hai1owhiten[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://42[.]235[.]91[.]0:46595/i",
                "hxxp://182[.]127[.]127[.]117:40518/i",
                "hxxp://42[.]235[.]91[.]0:46595/bin[.]sh",
                "hxxps://open-door4[.]hai1owhiten[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 858,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 858,
                "newInLastHour": 858,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"high-roof5[.]hai1owhiten[.]in[.]net\"",
                " \"open-door4[.]hai1owhiten[.]in[.]net\"",
                " \"hxxps://6p1anuri2[.]6xkmet[.]cc/DklzrHrb2m043ko5d87o85dt6/ldtkqtglibsfudt\"",
                " \"hxxps://htijv[.]66uc4x[.]cc/D6omfH97p50pldw5lf158ug81/dbqobfyasmyhnpfbvm\"",
                " \"hxxps://pdmh48ixc[.]6oxj9t[.]cc/D49wjHdt530afog5sebu8chz7/uuaeljxnxqxd\""
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
                "newInLastHour": 0,
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
            "totalIndicators": 53437,
            "activeSources": 8,
            "criticalAlerts": 35703,
            "activeCampaigns": 164
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26110,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9593,
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
                "count": 92,
                "trend": "stable",
                "percentage": 1
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
                "count": 25428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]239[.]74[.]216:37394/i",
                    "hxxp://95[.]65[.]234[.]57:55607/i",
                    "hxxp://113[.]239[.]74[.]216:37394/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]157[.]110[.]54",
                    "1[.]176[.]118[.]246",
                    "1[.]176[.]238[.]107"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1588,
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
                "count": 1408,
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
                "count": 468,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"child-care1[.]big2mychild[.]in[.]net\"",
                    " \"final-step6[.]sizar-sniffy[.]in[.]net\"",
                    " \"user-test5[.]sizar-sniffy[.]in[.]net\""
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44150,
        "lastCalculated": "2026-04-20 11:55 IST"
    }
};
