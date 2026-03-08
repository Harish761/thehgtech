// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-08T14:16:16.355792+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-08T14:16:16.067342+05:30",
    "lastUpdatedFormatted": "Mar 08, 2026 at 02:16 PM IST",
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
            "iocCount": 1437,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1437,
                "newInLastHour": 99,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e14a3f2ffb3bab0d5358536f09b90d39899718ee9f24799f4e240b312c8ca33a",
                " \"be2f466f6f56e69a50dfd5d93c5baae9762201baa72fc1d9274cc6eb61323672",
                " \"0022b8de27d1a1cdc91f3ba895f261023d597c9a2617131f89ce13d93e29e309",
                " \"ba0aae542414c20619e72b7e2f82d9269d1bee955b93318cc942684358637b24",
                " \"a97ec3794ee02e8c9a22d872152f276274237d11cf132cdab2fa346167bf815f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1526,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1526,
                "newInLastHour": 1,
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
                "1[.]188[.]23[.]25",
                "1[.]190[.]9[.]42"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6458,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6458,
                "newInLastHour": 6458,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]75[.]174",
                "1[.]12[.]45[.]226",
                "1[.]15[.]136[.]101",
                "1[.]15[.]136[.]28",
                "1[.]162[.]247[.]213"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19069,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19069,
                "newInLastHour": 19069,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://solcoreet3[.]excitfollower[.]in[.]net/verification[.]google",
                "hxxp://110[.]37[.]61[.]44:34207/bin[.]sh",
                "hxxp://110[.]37[.]45[.]161:49884/i",
                "hxxp://123[.]11[.]74[.]16:33094/bin[.]sh",
                "hxxp://175[.]165[.]73[.]110:44759/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1102,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1102,
                "newInLastHour": 880,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"109[.]107[.]168[.]236:443\"",
                " \"solcoreet3[.]excitfollower[.]in[.]net\"",
                " \"kel-draum[.]excitfollower[.]in[.]net\"",
                " \"43[.]98[.]243[.]193:8888\"",
                " \"57jhj[.]navignord[.]in[.]net\""
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
            "iocCount": 9187,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9187,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d98a4d1dd928b3fa1f070ebc2349b4fc5ea9c893",
                "e2a5b820d463b605090d3d833d12252a22cd4510",
                "f78a257ac3bdf0503c3c8e10b84fcee62452df64",
                "1ace32f015a4033140d846ea8c663a5d207804cb",
                "1f0736f9b04b5580fae76c56ad9b5b4d3db31171"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48138,
            "activeSources": 8,
            "criticalAlerts": 29507,
            "activeCampaigns": 239
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9168,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1126,
                "trend": "stable",
                "percentage": 0
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
                "count": 18944,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://github[.]com/YelitzaMarcano79/DOOMQL/raw/refs/heads/main/data/Software_3[.]8-beta[.]1[.]zip",
                    "hxxps://raw[.]githubusercontent[.]com/YelitzaMarcano79/DOOMQL/main/data/Software_3[.]8-beta[.]1[.]zip",
                    "hxxps://sub-node[.]kinetica[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]170[.]60[.]81",
                    "1[.]180[.]252[.]30",
                    "1[.]188[.]101[.]189"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1537,
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
                "count": 646,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"176[.]65[.]132[.]206:7443\"",
                    " \"18[.]189[.]113[.]48:80\"",
                    " \"18[.]189[.]107[.]122:80\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 633,
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
                "count": 409,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"9f094dfe2cd494ccaedbe44470578e67bcd74b6279f6abb7b393b6afdbeaae36",
                    " \"d2b94db6cb08e2b659d81e7746d669d09e70ae5d3bd675a011eced94ad66a7e0",
                    " \"e6a4812c44710292cb26d5bfcadded3212d9261b624c67b2ec61d821ba21805e"
                ]
            },
            {
                "name": "Vidar",
                "count": 391,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41827,
        "lastCalculated": "2026-03-08 14:16 IST"
    }
};
