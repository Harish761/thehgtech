// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-15T11:11:22.105875+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-15T11:11:21.822732+05:30",
    "lastUpdatedFormatted": "Mar 15, 2026 at 11:11 AM IST",
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
                "hxxps://arshpreetsingh6103[.]github[.]io/Netflix-clone/",
                "hxxps://sumitawatade1718[.]github[.]io/Netflix/",
                "hxxps://httppss-roblox[.]com/users/57714023/profile",
                "hxxps://000www-formulario-davivienda-d1e419f4b[.]duckdns[.]org/00203732/",
                "hxxps://tazeen-shaikh[.]github[.]io/netflix/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 736,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 736,
                "newInLastHour": 27,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fc075a04586519306868d0089966425e7824be432fc74a1d9e8fa1a5358a1bc7",
                " \"6b0c56540499051ab350a31f417b99859da7ed7286b9e77503711c6aabafbe03",
                " \"64f8772403580b8b04540f070b3f964fee58b106c1da08138815cde82c8da8c6",
                " \"12b3cfb959b03997387e60e9fc4e7aa1ed59ed811cb0770347f29ec2f779ea3a",
                " \"5d2d7935d6fac745234eea85e2a83ba31d71509727bf01ec6f418980dfae6167"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1532,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1532,
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
            "iocCount": 6521,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6521,
                "newInLastHour": 6521,
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
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19672,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19672,
                "newInLastHour": 19672,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]12[.]238[.]172:54953/i",
                "hxxp://115[.]61[.]9[.]48:57243/i",
                "hxxps://sync-z0-vision[.]altotensione[.]in[.]net/verification[.]google",
                "hxxp://117[.]235[.]140[.]192:58805/bin[.]sh",
                "hxxps://point-x2-scan[.]altotensione[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1762,
                "newInLastHour": 1606,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"point-x2-scan[.]altotensione[.]in[.]net\"",
                " \"bridge-v4-light[.]altotensione[.]in[.]net\"",
                " \"room-51-dark[.]altotensione[.]in[.]net\"",
                " \"vision-x8-sync[.]froidelumiere[.]in[.]net\"",
                " \"ghost-z1-node[.]froidelumiere[.]in[.]net\""
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
            "iocCount": 9263,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9263,
                "newInLastHour": 6,
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
            "totalIndicators": 48190,
            "activeSources": 8,
            "criticalAlerts": 29616,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20381,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 9235,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1125,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 302,
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
                "count": 19619,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]36[.]95[.]246:45059/i",
                    "hxxps://api-v0-remote[.]petitniveaux[.]in[.]net/verification[.]google",
                    "hxxp://117[.]208[.]244[.]60:43391/i"
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
                "count": 1517,
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
                "count": 687,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"137[.]184[.]38[.]192:8088\"",
                    " \"137[.]184[.]38[.]192:6000\"",
                    " \"178[.]16[.]52[.]58:4444\""
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 640,
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
                "count": 409,
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
                "count": 358,
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 43152,
        "lastCalculated": "2026-03-15 11:11 IST"
    }
};
