// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-17T19:23:56.129513+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-17T19:23:55.795630+05:30",
    "lastUpdatedFormatted": "Apr 17, 2026 at 07:23 PM IST",
    "comparisonPeriod": "Apr 16 \u2013 Apr 17, 2026",
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
                "hxxp://usssapplicanttrackerext[.]ciamlogin[.]com/05b0b4ef-8861-4cae-a842-b16dd0a91ef2/oauth2/v2[.]0/authorize",
                "hxxps://cn[.]314manx[.]com/home/forbidden",
                "hxxps://iiinstagramlink[.]github[.]io/verbose-memory/",
                "hxxps://insta-clon-jet[.]vercel[.]app/",
                "hxxps://tashmakhanbetmadiyar-cmd[.]github[.]io/insta-security-project/index[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 553,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 553,
                "newInLastHour": 44,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0ac143da7accb2fa62363146eebc676628d4095614f9d416fdb81ef456348d1c",
                " \"b22660a71f7ec32d151d1c0b330734ef453d65f6eec786c6876ce96e51808fdc",
                " \"85eafddddc17a03f7be9261b28ab49b2566cedf9d0b96d22d27f758b22cae828",
                " \"840f83d4272b30a07e1c946d2ff3522e8a0489cca46a5efec59c2b1a58cc032b",
                " \"3bcc3ea4dfc287d8ef2801434b546699583a472dc234aa91ebde62abe64f3775"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1581,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1581,
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
                "1[.]1[.]176[.]58",
                "1[.]162[.]81[.]96",
                "1[.]182[.]190[.]117",
                "1[.]183[.]161[.]87",
                "1[.]192[.]197[.]38"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 628,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 628,
                "newInLastHour": 628,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]94[.]196[.]254",
                "1[.]95[.]13[.]173",
                "101[.]200[.]148[.]8",
                "101[.]206[.]210[.]140",
                "101[.]245[.]100[.]231"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26116,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26116,
                "newInLastHour": 26116,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]45[.]10[.]193:43192/i",
                "hxxps://river-bank3[.]rav2piren[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://112[.]113[.]204[.]187:40649/i",
                "hxxps://mountain-top2[.]rav2piren[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://overly[.]dinergysolutions[.]org"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1382,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1382,
                "newInLastHour": 1378,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"river-bank3[.]rav2piren[.]in[.]net\"",
                " \"mountain-top2[.]rav2piren[.]in[.]net\"",
                " \"209[.]99[.]187[.]182:63244\"",
                " \"forest-walk1[.]rav2piren[.]in[.]net\"",
                " \"91[.]92[.]241[.]242:80\""
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
            "iocCount": 9610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9610,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "fbcc12262a5020c472cea81fd415980a42d1eeaa",
                "eca99021f65f962d0ffc0d4cda1a9fe9456750df",
                "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                "037598803e2603499edbf7275e43f7dd82abd8f3",
                "11344933894b37ecf2ba315ded6d752eff899716"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54731,
            "activeSources": 8,
            "criticalAlerts": 36064,
            "activeCampaigns": 208
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26480,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9584,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 611,
                "trend": "stable",
                "percentage": -10
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
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
                "count": 25872,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://read-more2[.]qim8dorel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://123[.]12[.]234[.]121:58938/i",
                    "hxxp://222[.]127[.]169[.]111:45647/i"
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
                    "1[.]162[.]81[.]96",
                    "1[.]180[.]153[.]254"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1589,
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
                "count": 675,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03",
                    "54cd35dc5d5f8e7068ccd2c1d24222187784f90a",
                    "f91937b78dc36f7f7b9ff70f0f53afeefe7ad31d"
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
                "name": " \"js.clearfake\"",
                "count": 510,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"page-number3[.]qim8dorel[.]in[.]net\"",
                    " \"read-more2[.]qim8dorel[.]in[.]net\"",
                    " \"open-book1[.]qim8dorel[.]in[.]net\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 506,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://yourrenovationplan[.]au/\"",
                    " \"hxxps://sammatson[.]net/\"",
                    " \"hxxps://aquastreet[.]com[.]vn/\""
                ]
            },
            {
                "name": "Vidar",
                "count": 499,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a37f6c18cf9097917437a4ac38798dee443f302e",
                    "70be78023c4e1f0f4a94b4c65929de136ad55275",
                    "c1298a4447ff2d5dc3b13b39257a66b52e178f77"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43475,
        "lastCalculated": "2026-04-17 19:23 IST"
    }
};
