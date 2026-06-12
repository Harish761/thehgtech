// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-12T21:04:48.147257+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-12T21:04:47.786255+05:30",
    "lastUpdatedFormatted": "Jun 12, 2026 at 09:04 PM IST",
    "comparisonPeriod": "Jun 11 \u2013 Jun 12, 2026",
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
                "hxxps://klelnanzeigen-deutsch[.]de-stvc7124[.]info/getpaymentm/195904461/m",
                "hxxps://www[.]roblox[.]com[.]ml/games/12055526085/Unknown-Story-Game-OFFICIAL?privateServerLinkCode=376373476201820323465283384846",
                "hxxps://saicharan-devoju[.]github[.]io/Netflix-clone",
                "hxxp://geminiloginm[.]webflow[.]io/",
                "hxxps://www[.]roblox[.]et/users/6612509654/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 735,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 735,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"060d4594102e3e0e305a532b72e4479f3c3a9da126deece2d780d8fe8a788699",
                " \"65d463e3318e2319d411575597d582b870d79e866dba7efab3ee05f25e30037e",
                " \"f173c120ddaf68276acf21fec4770dc80faaf45b8c4065960c0b6c934bf2982b",
                " \"87218d3a50595e89c351f16eea6b4e3c5dbb6f1251fe2ca0369493baa46f7556",
                " \"9d199918397bdc50141845165f2ae2525ad47c8e96e07c1d9d39e63eda3fd89c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1697,
                "newInLastHour": 31,
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
                "1[.]15[.]36[.]31",
                "1[.]15[.]51[.]236",
                "1[.]159[.]87[.]163",
                "1[.]164[.]107[.]152",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7776,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7776,
                "newInLastHour": 7776,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]116[.]61[.]217",
                "1[.]15[.]227[.]58",
                "1[.]20[.]140[.]252",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17854,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17854,
                "newInLastHour": 17854,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]57[.]182[.]171:44391/i",
                "hxxps://twhjk[.]hazaratkade[.]com/0bf3816c-4185-4fc4-bed7-1034fe957ad5",
                "hxxp://42[.]232[.]24[.]184:45923/bin[.]sh",
                "hxxps://ncom2n7n[.]jetbetkade[.]com/?ublib=1090d905-000b-48dc-9070-2aa14e39cc7d",
                "hxxp://115[.]55[.]129[.]19:54797/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5983,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5983,
                "newInLastHour": 5892,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"twhjk[.]hazaratkade[.]com\"",
                " \"hxxps://ggt[.]glamisrent[.]com/\"",
                " \"ggt[.]glamisrent[.]com\"",
                " \"hxxps://ggt[.]gerbongsm188[.]top/\"",
                " \"ggt[.]gerbongsm188[.]top\""
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
            "iocCount": 9927,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9927,
                "newInLastHour": 101,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e81bedd0d62805a9bcad2b1cd652435cd9a59bcc",
                "48cf152a0f547ca2ee9668e57c7136e157ec96f5",
                "78e36aa21e77cf60799204d1fb0bac1f063aec42",
                "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                "a4f368e4e4c305b60212c016a4f1fa3a3a96a3de"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51208,
            "activeSources": 8,
            "criticalAlerts": 28419,
            "activeCampaigns": 243
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18615,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9804,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3039,
                "trend": "stable",
                "percentage": -4
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
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 2
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 17804,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://163[.]142[.]95[.]226:34093/i",
                    "hxxp://108[.]170[.]136[.]155:47719/i",
                    "hxxp://219[.]155[.]210[.]228:41064/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]224",
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 2262,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"addeg[.]quranmohagegin[.]shop\"",
                    " \"umnbp[.]usoleamoozesh[.]xyz\"",
                    " \"lyrge[.]usoleamoozesh[.]xyz\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1666,
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
                "count": 1434,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"1[.]13[.]141[.]229:8080\"",
                    " \"1[.]13[.]141[.]229:80\"",
                    " \"1[.]13[.]141[.]229:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1415,
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
                "count": 681,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429",
                    "bf26c599e3f5ea932f7b8c592138d42d49837713"
                ]
            },
            {
                "name": "Vidar",
                "count": 556,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e3c434a1fc0269f0ad0fb43cdf93494e726d2f68",
                    "0505fd5b451911f764cd457d591ec4d355e609c8",
                    "a8f5e9a021f8df5a11743cc4ad447ccf81e7c300"
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
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05",
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46997,
        "lastCalculated": "2026-06-12 21:04 IST"
    }
};
