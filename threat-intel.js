// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-08T08:23:39.701115+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-08T08:23:39.431728+05:30",
    "lastUpdatedFormatted": "Mar 08, 2026 at 08:23 AM IST",
    "comparisonPeriod": "Mar 07 \u2013 Mar 08, 2026",
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
                "hxxps://insta-clone-application[.]vercel[.]app/",
                "hxxps://insta-clone-application[.]vercel[.]app/auth/login",
                "hxxps://roblox[.]com[.]ge/games/16146832113/UPD-11-Anime-Vanguards?privateServerLinkCode=70868005475466543045084535414192",
                "hxxps://center[.]verificationsupportmetaidentity[.]cfd/requestbadgeconfirm-100019012357",
                "hxxps://www[.]robiox[.]com[.]ps/games/8832438757/PVP-Sword-Fighting?privateServerLinkCode=78903422417323090225937144668524"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1387,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1387,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e6a4812c44710292cb26d5bfcadded3212d9261b624c67b2ec61d821ba21805e",
                " \"c8f181f5233d1cf0a2ccf4cb7335c6e8b7d4c7dc18ae32a73295d829e79197c7",
                " \"acc233f051c11e0d9bc215bd018a31edc0b95d55094bc44cdb1e4213065a04a5",
                " \"d7f045fa2b486cd10dd5ee9cdf348e92f5764989d91c9ec472d306e523477830",
                " \"9b0ab236f901d2cd91d29f7dfbd411702a525d7dcb07194ee3ff2d0ec4a9d81a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1537,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1537,
                "newInLastHour": 17,
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
                "1[.]170[.]60[.]81",
                "1[.]180[.]252[.]30",
                "1[.]188[.]101[.]189",
                "1[.]190[.]9[.]42",
                "1[.]192[.]177[.]65"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6637,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6637,
                "newInLastHour": 6637,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]75[.]174",
                "1[.]15[.]136[.]101",
                "1[.]15[.]136[.]28",
                "1[.]161[.]39[.]103",
                "1[.]162[.]247[.]213"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 18857,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 18857,
                "newInLastHour": 18857,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]36[.]93[.]182:57821/i",
                "hxxp://112[.]248[.]162[.]44:39960/i",
                "hxxp://110[.]36[.]80[.]169:45094/bin[.]sh",
                "hxxp://110[.]39[.]235[.]153:42694/bin[.]sh",
                "hxxp://124[.]131[.]187[.]176:36079/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1782,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1782,
                "newInLastHour": 1560,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"marketingaudit[.]buena[.]io\"",
                " \"stab-v33[.]stabulis[.]in[.]net\"",
                " \"maritbosman[.]nl\"",
                " \"quan-sys[.]quantoris[.]in[.]net\"",
                " \"marinmedya[.]com\""
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
            "iocCount": 9201,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9201,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1f0736f9b04b5580fae76c56ad9b5b4d3db31171",
                "fc13b72e3fbc49e25fb617047297c3d1bf51da7f",
                "493192edea58ec659ee270032660c6113e9b448e",
                "f9e8d701de1740086da792e2c9be70df261e1832",
                "f8a1e818bbf73503bfd83ab3f81850ef797fd2b7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48439,
            "activeSources": 8,
            "criticalAlerts": 29847,
            "activeCampaigns": 237
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20674,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9173,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1133,
                "trend": "down",
                "percentage": -14
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19268,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]8[.]158[.]227:37634/bin[.]sh",
                    "hxxps://grove-flow[.]mistgrove[.]in[.]net/verification[.]google",
                    "hxxp://42[.]225[.]202[.]95:55581/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]170[.]60[.]81",
                    "1[.]177[.]63[.]24"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1522,
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
                "count": 1386,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603"
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
                "name": " \"unknown\"",
                "count": 647,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"18[.]189[.]107[.]122:80\"",
                    " \"178[.]208[.]187[.]77:666\"",
                    " \"sdn-inapi-server[.]sbs\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 634,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6b58bfd60fc3150331254a46d2e75f0856f5d0ae",
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
                    "58d0977e2eb2f58b80c1441ac8a77c7da332b266"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c",
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c"
                ]
            },
            {
                "name": " \"n/a",
                "count": 405,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"6064742f07e20c04ba5944cb8c3998779f8fe8d138f918040401386d78c49771",
                    " \"b2c175da97468ff5cf77c004753b5be8c5d20bc8d9966d62b0c4551e7fd6599f",
                    " \"79fc3da9b21349f2c77195a287374ece5a1978b07ca3f61bd12ff4657048d48c"
                ]
            },
            {
                "name": "Vidar",
                "count": 392,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fc13b72e3fbc49e25fb617047297c3d1bf51da7f",
                    "493192edea58ec659ee270032660c6113e9b448e",
                    "b84f367205c3150a29707120bc237a5161d8886e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42411,
        "lastCalculated": "2026-03-08 08:23 IST"
    }
};
