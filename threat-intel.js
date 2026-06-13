// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-14T02:53:58.810805+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-14T02:53:58.473286+05:30",
    "lastUpdatedFormatted": "Jun 14, 2026 at 02:53 AM IST",
    "comparisonPeriod": "Jun 13 \u2013 Jun 14, 2026",
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
                "hxxp://sim-app[.]info/WhS",
                "hxxp://bloodravenzone[.]web[.]id/",
                "hxxps://beneficioexclusivo[.]s3[.]us-east-005[.]backblazeb2[.]com/aumento[.]html",
                "hxxps://bafkreibym46z7vd4aovjmufkopyilxkmhu2nm4iucykhgvplzo5pmnw52i[.]ipfs[.]dweb[.]link/",
                "hxxp://www[.]info-resmi991[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 485,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 485,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fd0825c1334d8d3d247e09b9dddc717b6006bcbda4d110ab9769a71aca68db5c",
                " \"ac9963695eb09277a356e8e14b3cd11415533e2d75e0e08a7bf1989b7eeed389",
                " \"6efa9cd8415265024059a63ef1cb4ac6b060f6949805bc5849f73d46299a15a0",
                " \"7747af7cc821341d62e88d21c71cf518bc2e9dd890328c89e5d16357eace1a14",
                " \"983511f8bd00898038ff56d4eb41aac90187e8802fc73bc02c16c2423302813d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1696,
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
                "1[.]15[.]35[.]79",
                "1[.]164[.]107[.]152",
                "1[.]177[.]162[.]3",
                "1[.]181[.]114[.]38",
                "1[.]190[.]65[.]182"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5644,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5644,
                "newInLastHour": 5644,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]117[.]229[.]57",
                "1[.]14[.]28[.]29",
                "1[.]15[.]134[.]139",
                "1[.]15[.]221[.]192"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17790,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17790,
                "newInLastHour": 17790,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]229[.]186[.]82:44836/i",
                "hxxps://igrbuyo[.]pokerkade[.]online/c898c073-9e03-4ca3-a721-c4083f4a3753",
                "hxxps://kl23rl6f[.]nahjolbalage[.]xyz/?ublib=6d861f61-8ec0-46a4-9305-e7027cc46536",
                "hxxps://hfolz[.]bookdrive[.]xyz/c3e57f49-0f75-4258-a0fd-e232eb134d2e",
                "hxxp://42[.]227[.]7[.]82:37228/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3634,
                "newInLastHour": 3538,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"igrbuyo[.]pokerkade[.]online\"",
                " \"kl23rl6f[.]nahjolbalage[.]xyz\"",
                " \"hfolz[.]bookdrive[.]xyz\"",
                " \"38[.]190[.]198[.]37:8084\"",
                " \"103[.]47[.]83[.]115:10001\""
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
                "newInLastHour": 0,
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
            "totalIndicators": 48844,
            "activeSources": 8,
            "criticalAlerts": 28211,
            "activeCampaigns": 227
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18306,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9905,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3033,
                "trend": "stable",
                "percentage": 0
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
                "count": 17771,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://60[.]16[.]171[.]122:51179/i",
                    "hxxps://vhsqohyd[.]hugugdaryayi[.]xyz/f69a6d79-790d-4532-903a-12e90829c1c4",
                    "hxxp://46[.]146[.]176[.]251:57435/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]159[.]37[.]133",
                    "1[.]164[.]107[.]152",
                    "1[.]164[.]110[.]70"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1697,
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
                "count": 1416,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"111[.]90[.]143[.]196:8081\"",
                    " \"8[.]141[.]121[.]30:80\"",
                    " \"47[.]107[.]106[.]178:8000\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
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
                "count": 687,
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
                "count": 589,
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
                "name": "OffLoader",
                "count": 424,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "736a1766d64ab37f96483dcbcd159c86fc49834e",
                    "fb65cb3929bf5df8ed6de3cb5b2c6b87b3f6e3d9",
                    "7bba8eb1da43142534144a1aaf30b1be8a5ed134"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42280,
        "lastCalculated": "2026-06-14 02:53 IST"
    }
};
