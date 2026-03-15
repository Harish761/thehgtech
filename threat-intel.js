// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-15T08:57:49.247752+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-15T08:57:48.957946+05:30",
    "lastUpdatedFormatted": "Mar 15, 2026 at 08:57 AM IST",
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
            "iocCount": 737,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 737,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"56ebaf8922749b9a9a7fa2575f691c53a6170662a8f747faeed11291d475c422",
                " \"be60e407cde68178a7112d457a517486bf41d9a4bb475d3f6808569c745132e3",
                " \"01d397bf60b8abc00a81abf7b07aad3081d21edfbd5d3094201737ff4c4a7287",
                " \"0caacc324e93026344068c2d7ea168c5b87b58640e98cb1f657230a8436d9765",
                " \"5175ae4c75a8e1d10decb0a787d31784a986cafe5e4a24d3aa0eb7e7748f916f"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1517,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1517,
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
            "iocCount": 6252,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 6252,
                "newInLastHour": 6252,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]141[.]8",
                "1[.]162[.]198[.]143",
                "1[.]192[.]189[.]251",
                "1[.]197[.]102[.]62",
                "1[.]204[.]166[.]3"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19619,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19619,
                "newInLastHour": 19619,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]36[.]95[.]246:45059/i",
                "hxxps://api-v0-remote[.]petitniveaux[.]in[.]net/verification[.]google",
                "hxxp://117[.]208[.]244[.]60:43391/i",
                "hxxp://45[.]120[.]55[.]37:8181/rckklmnop/charliekirk[.]arm7",
                "hxxps://cloud-z1-store[.]petitniveaux[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1755,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1755,
                "newInLastHour": 1599,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dev-x7-host[.]petitniveaux[.]in[.]net\"",
                " \"api-v0-remote[.]petitniveaux[.]in[.]net\"",
                " \"nuphizeta[.]nuphizeta[.]org\"",
                " \"nuovimondi[.]involucra[.]it\"",
                " \"cloud-z1-store[.]petitniveaux[.]in[.]net\""
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
            "iocCount": 9257,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9257,
                "newInLastHour": 3,
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
            "totalIndicators": 48680,
            "activeSources": 8,
            "criticalAlerts": 30098,
            "activeCampaigns": 214
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20860,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9238,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1130,
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
                "count": 20029,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://39[.]187[.]82[.]244:35064/bin[.]sh",
                    "hxxps://open-space-1[.]silberpfad[.]in[.]net/verification[.]google",
                    "hxxp://115[.]51[.]242[.]112:38512/i"
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
                "count": 1530,
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
                "count": 1389,
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
                "count": 686,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"137[.]184[.]38[.]192:6000\"",
                    " \"178[.]16[.]52[.]58:4444\"",
                    " \"f0b410ca0ba79d284cf7f88327818a62\""
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
                "count": 411,
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
                "count": 359,
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
        "totalAttacksThisHour": 42794,
        "lastCalculated": "2026-03-15 08:57 IST"
    }
};
