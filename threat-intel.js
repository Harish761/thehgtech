// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-16T09:00:21.547011+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-16T09:00:21.261613+05:30",
    "lastUpdatedFormatted": "Mar 16, 2026 at 09:00 AM IST",
    "comparisonPeriod": "Mar 15 \u2013 Mar 16, 2026",
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
                "hxxps://www[.]roblox[.]com[.]gl/users/144495656726/profile",
                "hxxps://www[.]robiox[.]com[.]py/users/320243727973/profile",
                "hxxp://gopay[.]layanan-resmi[.]my[.]id/",
                "hxxps://www[.]robiox[.]com[.]py/users/126874490812/profile",
                "hxxp://dana-bantuan[.]layanan-resmii[.]biz[.]id/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 695,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 695,
                "newInLastHour": 37,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c8192cae2f6f67aa4ee7a029b1735545d4f2fdc33cc8ca3e804577747f0a09ba",
                " \"456e84ced88ab5b7e0539a9a5025ee8bfcf618774924a12af8036f73db1deb80",
                " \"3ad5fdc8e4f5e79353fefb680572564a1e1e89a523fb28487a35575b7673f983",
                " \"c5a82588f803980398fd4419c0d4370ba74ae3a9de068baef5b5f413fa4a7546",
                " \"872860e186e030b79c60683afbd1d6714aff97295241b85ce3c24ee2bfdb62f4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1528,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1528,
                "newInLastHour": 3,
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
                "1[.]162[.]147[.]232",
                "1[.]170[.]10[.]139",
                "1[.]190[.]9[.]85",
                "1[.]191[.]127[.]124"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8293,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8293,
                "newInLastHour": 8293,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]141[.]8",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]222[.]42[.]237",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19359,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19359,
                "newInLastHour": 19359,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://q1-core-rock[.]secretovalle[.]in[.]net/verification[.]google",
                "hxxps://b9-base-steel[.]secretovalle[.]in[.]net/verification[.]google",
                "hxxps://n4-orbit-moon[.]secretovalle[.]in[.]net/verification[.]google",
                "hxxps://x0-space-open[.]altasphera[.]in[.]net/verification[.]google",
                "hxxp://117[.]221[.]54[.]194:38886/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1642,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1642,
                "newInLastHour": 1465,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"q1-core-rock[.]secretovalle[.]in[.]net\"",
                " \"osvetlenie[.]net\"",
                " \"b9-base-steel[.]secretovalle[.]in[.]net\"",
                " \"n4-orbit-moon[.]secretovalle[.]in[.]net\"",
                " \"34[.]31[.]248[.]33:6932\""
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
            "totalIndicators": 48380,
            "activeSources": 8,
            "criticalAlerts": 29965,
            "activeCampaigns": 216
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20727,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9238,
                "trend": "up",
                "percentage": 1143
            },
            {
                "category": "Botnet",
                "count": 537,
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
                "count": 19983,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]248[.]108[.]165:47998/i",
                    "hxxps://dist-z02-edge[.]ponteluna[.]in[.]net/verification[.]google",
                    "hxxps://sync-v9-data[.]metallopunto[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]164[.]165",
                    "1[.]12[.]76[.]172",
                    "1[.]15[.]118[.]23"
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
                "name": " \"js.clearfake\"",
                "count": 418,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"node-55-static[.]ponteluna[.]in[.]net\"",
                    " \"sync-v9-meta[.]ponteluna[.]in[.]net\"",
                    " \"srv-x11-host[.]ponteluna[.]in[.]net\""
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
                "name": " \"unknown\"",
                "count": 360,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://ageconsultant[.]pk\"",
                    " \"hxxps://travely[.]mn\"",
                    " \"hxxps://mbswindows[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 44465,
        "lastCalculated": "2026-03-16 09:00 IST"
    }
};
