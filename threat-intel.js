// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-18T11:09:16.543133+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-18T11:09:16.247905+05:30",
    "lastUpdatedFormatted": "Mar 18, 2026 at 11:09 AM IST",
    "comparisonPeriod": "Mar 17 \u2013 Mar 18, 2026",
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
                "hxxp://w4b-d4naa[.]cxbb-ofisiaaal[.]biz[.]id/",
                "hxxps://www[.]roblox[.]com[.]gl/users/437234102662/profile",
                "hxxps://www[.]amazon-clone-rho-nine[.]vercel[.]app/",
                "hxxps://www[.]roblox[.]com[.]gl/users/205819886412/profile",
                "hxxps://roblox[.]com[.]ge/users/6019202459/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 658,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 658,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"52dd7821809a226cb3b6a3e17ad9dd4833872b950882ef4c4b2fe0e3ca8f296a",
                " \"ffd2f5c2d39b5b8d5d1d2754e91b1e6181384f05f8f7f4ddac07c6c13d9b97cf",
                " \"bd8d18a7cc1f3ab95ce1c91658e99bb2a4f08a83231887f0d9bc85ca4e3e7075",
                " \"f790794133d4017f9e81125038c6f63845603ba353f36e786f3359f4acf3449b",
                " \"2b2937df3e5ae5465058b45ddaf6e46432613fa5ac678d4d64a8daf0c2f56bfc"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1527,
                "newInLastHour": 2,
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
                "1[.]15[.]118[.]23",
                "1[.]15[.]15[.]189",
                "1[.]162[.]147[.]232",
                "1[.]170[.]10[.]139",
                "1[.]170[.]61[.]83"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 6168,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6168,
                "newInLastHour": 6168,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]162[.]198[.]111",
                "1[.]162[.]198[.]143",
                "1[.]164[.]175[.]189",
                "1[.]189[.]21[.]20",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19679,
                "newInLastHour": 19679,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]44[.]252[.]209:48537/i",
                "hxxp://125[.]41[.]225[.]146:32997/i",
                "hxxps://rim-k11-outer[.]polar-axis[.]cfd/verification[.]google",
                "hxxp://125[.]41[.]225[.]146:32997/bin[.]sh",
                "hxxp://110[.]39[.]252[.]138:45159/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1930,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1930,
                "newInLastHour": 1894,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rim-k11-outer[.]polar-axis[.]cfd\"",
                " \"scan-a9-point[.]curva-flux[.]cfd\"",
                " \"bridge-e1-light[.]curva-flux[.]cfd\"",
                " \"ghost-u9-node[.]nauticbase[.]cfd\"",
                " \"shell-t0-core[.]nauticbase[.]cfd\""
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
            "iocCount": 9288,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9288,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "8fd9243cdc76cff67c1da97c32a30cc868de987c",
                "c5472c7ec6cac644eba170ea2b487e06d127481c",
                "a6424f7b04438f3acec298c9333197df2b3c6526",
                "4f9e60ee24af588adb3d71b7c0617592c7f21b44",
                "5ec0b97b4993394721c873a4e9b8ed52cade22f0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48311,
            "activeSources": 8,
            "criticalAlerts": 29543,
            "activeCampaigns": 214
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20285,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9258,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 788,
                "trend": "stable",
                "percentage": 2
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
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19586,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]196[.]181[.]154:32960/bin[.]sh",
                    "hxxp://175[.]173[.]90[.]64:47108/bin[.]sh",
                    "hxxps://dist-z7-cache[.]ventonodal[.]cfd/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]15[.]15[.]189",
                    "1[.]162[.]147[.]232"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1525,
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
                "count": 1390,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada"
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
                "count": 641,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "d9fa0ea682b5e53c1fcad5edfc64b89fbfd468da",
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 586,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"217[.]60[.]38[.]147:80\"",
                    " \"94[.]249[.]230[.]102:80\"",
                    " \"3[.]141[.]172[.]121:80\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 541,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa",
                    "e30905555de39d1e66f834f672f6f14e9106839b",
                    "f9e8d701de1740086da792e2c9be70df261e1832"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 463,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dist-z7-cache[.]ventonodal[.]cfd\"",
                    " \"node-x911-auth[.]ventonodal[.]cfd\"",
                    " \"breezetide[.]slashbak[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 415,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8fd9243cdc76cff67c1da97c32a30cc868de987c",
                    "9a00a12fad770289e318387488aab1f3c5ab0cb6",
                    "4fe4c76644c524e662ba08364bb0405775eab374"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 43059,
        "lastCalculated": "2026-03-18 11:09 IST"
    }
};
