// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-15T18:43:54.176875+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-15T18:43:53.892781+05:30",
    "lastUpdatedFormatted": "Mar 15, 2026 at 06:43 PM IST",
    "comparisonPeriod": "Mar 14 \u2013 Mar 15, 2026",
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
                "hxxps://t50a[.]xyz/",
                "hxxps://b253c[.]xyz/",
                "hxxps://63390[.]xyz/",
                "hxxp://g89g[.]xyz/",
                "hxxps://p208a[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 751,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 751,
                "newInLastHour": 40,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"add2bfd7477e846b561bfd448f051ab1e7fcfc5a9f31fb5fdb7d793db1c5dbaf",
                " \"8d385e7b91c3cdd6c17a071f238602d4837d5deed5f213f93d02c15674367a10",
                " \"d6e0c5f65d7f33c1ff0b777c9c261ceb9f513db3914511171b5fb4ada52d0feb",
                " \"5627c8f9d689b5e7cd763e966b2457eabfaa501938d6e2df3cd0c149d13c36e8",
                " \"415f061c5e10d19dbf808f21c51d4e8d2fcd7b589c435c93df4d0534dbbb5ce5"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1519,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1519,
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
                "1[.]123[.]154[.]151",
                "1[.]15[.]118[.]23",
                "1[.]162[.]147[.]232",
                "1[.]170[.]10[.]139",
                "1[.]173[.]253[.]157"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7178,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7178,
                "newInLastHour": 7178,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]141[.]8",
                "1[.]162[.]198[.]143",
                "1[.]164[.]175[.]25",
                "1[.]192[.]189[.]251",
                "1[.]204[.]166[.]3"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19837,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19837,
                "newInLastHour": 19837,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://shoalthorn[.]gobright[.]in[.]net/verification[.]google",
                "hxxp://120[.]33[.]246[.]240:54630/bin[.]sh",
                "hxxps://9kmz1s[.]highligh[.]in[.]net/verification[.]google",
                "hxxp://222[.]127[.]251[.]163:54865/i",
                "hxxps://quorcore5et[.]highligh[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1388,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1388,
                "newInLastHour": 1230,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"shoalthorn[.]gobright[.]in[.]net\"",
                " \"9kmz1s[.]highligh[.]in[.]net\"",
                " \"quorcore5et[.]highligh[.]in[.]net\"",
                " \"18[.]117[.]70[.]136:4449\"",
                " \"mooinne[.]highligh[.]in[.]net\""
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
            "iocCount": 9245,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9245,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f1051306c328fd41245695084f8e6d39a478c055",
                "3e663dd4145cbe7d51ce77a973741f60903ff1ad",
                "a5b066de54c5f7d7f4122235fcece077895757f8",
                "254cc30fd479d1338dcc4fc08ff5f8ea491c78f0",
                "d2f4982983fd81cfc3ae9fb15d779f994470801a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48547,
            "activeSources": 8,
            "criticalAlerts": 29764,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20538,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9226,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1135,
                "trend": "stable",
                "percentage": 1
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
                "percentage": 96
            },
            {
                "name": "Tech",
                "percentage": 3
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19747,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]227[.]200[.]97:47576/bin[.]sh",
                    "hxxp://222[.]138[.]116[.]39:36199/bin[.]sh",
                    "hxxp://115[.]58[.]135[.]123:34848/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]154[.]151",
                    "1[.]15[.]118[.]23",
                    "1[.]162[.]147[.]232"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1531,
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
                "count": 1387,
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
                "name": " \"win.asyncrat\"",
                "count": 700,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]216[.]88[.]76:7770\"",
                    " \"hxxps://selot[.]jp[.]net/\"",
                    " \"hxxps://xn--gmq90amm486bwinn5dqrt[.]jp[.]net/\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 639,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759",
                    "56bad084f7d679dfddbe0f1ac2254b191051d348"
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
                "name": "Vidar",
                "count": 408,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f1051306c328fd41245695084f8e6d39a478c055",
                    "a5b066de54c5f7d7f4122235fcece077895757f8",
                    "254cc30fd479d1338dcc4fc08ff5f8ea491c78f0"
                ]
            },
            {
                "name": "OffLoader",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3e663dd4145cbe7d51ce77a973741f60903ff1ad",
                    "9310dd2c06171769e79a51c4897dc963a7c11ff6",
                    "bf5979b0b266808abb4a59b22a60c8611787d851"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43606,
        "lastCalculated": "2026-03-15 18:43 IST"
    }
};
