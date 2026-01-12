// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-01-12T08:01:51.342472+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-01-12T08:01:51.038843+05:30",
    "lastUpdatedFormatted": "Jan 12, 2026 at 08:01 AM IST",
    "comparisonPeriod": "Jan 11 \u2013 Jan 12, 2026",
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
                "hxxps://www[.]roblox[.]com[.]ml/communities/4187419966/GiveawayCom",
                "hxxps://thisisloom[.]com/team/",
                "hxxp://www[.]homepirch[.]net/",
                "hxxps://spybeast07[.]github[.]io/netflix-onboarding-page-clone/",
                "hxxps://easybank-landing-bage-six[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 907,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 907,
                "newInLastHour": 111,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"35ce82f7b6ec7af31b60bfec54daf7307fe963b36dc26e3c349cd4b6eb60bc18",
                " \"4b8b81cc06f476cbce62fc9afadb4260891aaabcfe75308db3c0ce9cd36792e8",
                " \"a81cc73d764986c262ec9b66cfca9b54165a9211c9dbe7b41f449ee4346f212c",
                " \"5144206994d9f645ae4fb20d602b8a41e9ec20ace5fd07df033fc4913e6bd5a7",
                " \"19430120c35a479e9fe510ac0537ecaa9653870f938c0b0189919e1942253b70"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1465,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1465,
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
                "1[.]10[.]247[.]1",
                "1[.]14[.]3[.]240",
                "1[.]15[.]14[.]29",
                "1[.]15[.]51[.]236",
                "1[.]157[.]99[.]66"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5726,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5726,
                "newInLastHour": 5726,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]90[.]220",
                "1[.]159[.]145[.]162",
                "1[.]194[.]236[.]11",
                "1[.]196[.]177[.]49",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23791,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23791,
                "newInLastHour": 23791,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]205[.]92[.]242:58113/bin[.]sh",
                "hxxp://110[.]36[.]16[.]78:45326/i",
                "hxxp://175[.]148[.]159[.]146:51447/i",
                "hxxp://39[.]79[.]3[.]69:56454/bin[.]sh",
                "hxxp://61[.]53[.]109[.]139:58467/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 826,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 826,
                "newInLastHour": 619,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"visa[.]br[.]com\"",
                " \"hitclub[.]ru[.]com\"",
                " \"gamers[.]uk[.]net\"",
                " \"feq[.]uk[.]com\"",
                " \"eastwell[.]uk[.]com\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "137[.]184[.]9[.]29",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "50[.]16[.]16[.]211"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8755,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8755,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9485d84666facdf62f9eb83088e526261477ca02",
                "e0ea6068f391170ab5ed0eec7f81183d6b9597e0",
                "aa32c04a00de32843bacb96f60c60a3ce34cbf05",
                "754974f9c9b1d75b2492ae363e7289124728d5b1",
                "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51533,
            "activeSources": 8,
            "criticalAlerts": 34045,
            "activeCampaigns": 201
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25305,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 8740,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 441,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 99
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24379,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]127[.]30[.]211:55380/i",
                    "hxxp://42[.]224[.]171[.]205:34334/i",
                    "hxxp://42[.]224[.]171[.]205:34334/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]247[.]1",
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1466,
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
                "count": 1368,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e0ea6068f391170ab5ed0eec7f81183d6b9597e0",
                    "8fa8b4de2a18dbf3bb43585b71891faf4c3ca8fc",
                    "7be9dbcc29554dd70c69f108d7763a35d7128ab1"
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
                "name": " \"Mirai",
                "count": 653,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"39476b310c31c78e76d3a0d7819ed73bf7c7d8c9e56461b108b34f76752cddfd",
                    " \"683396da3b65e11d1b66861a0254cfb7bc47b0eec426e246cdcd0b11b1f0b2a3",
                    " \"f73fc87c8211c12d1b6cbfde7a83e8f10c98d480a811a2add668ebf9b91191c6"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 603,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab3f93138fcf2dbaad6e32fe4a5e8c06ca499cfa",
                    "659e6830e2b4abbaacfd7a6b8b16637dbc5465e0",
                    "f14faecdb4b6a8e4722eff35b08ea8dfadf7b5f4"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 535,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e2293f74d8d72bde90bb0424038259a9e3126e1b",
                    "69101b8edfa5d5e2ead4512a6d71c84748b0c012",
                    "1d28cc6dca52e95f859739c39a04d794671f66d9"
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            },
            {
                "name": "Gozi",
                "count": 349,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61d991d7063e5e7470daa3059357f8282e680bb7",
                    "68b4fc7da837c64332b9f019adaef4c7038ec85d",
                    "e0f7072057c5deeb21c598673740debc7f6eb8a1"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45551,
        "lastCalculated": "2026-01-12 08:01 IST"
    }
};
