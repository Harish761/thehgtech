// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-30T02:17:48.414046+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-30T02:17:48.120293+05:30",
    "lastUpdatedFormatted": "Mar 30, 2026 at 02:17 AM IST",
    "comparisonPeriod": "Mar 29 \u2013 Mar 30, 2026",
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
                "hxxp://sso-eng-neetcoins-com-cdnn-auth[.]webflow[.]io/",
                "hxxp://easybank-landing-page-redo[.]vercel[.]app/",
                "hxxp://amazon-clone-neon-ten-70[.]vercel[.]app/",
                "hxxp://spotify-clone-lime[.]vercel[.]app/",
                "hxxp://mandirienergikonsultan[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 341,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 341,
                "newInLastHour": 12,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1eb1c7ec7f5e135172848f45bc7c4bc467d6fc2c6eadcaeb65be620013d0640f",
                " \"a379a924dcd9b5df70fd7678d748cbfb81ca83e7e1d7a2381d7927748469caca",
                " \"6bb3897eee87674c14a9ce7034bb63532b83c30e2546caadfeb50beeb7d4f43d",
                " \"38fb1c66f6d0d2203d4ffcc24f978af5ceaec3c89acc82ac59c90456d88044a6",
                " \"01df83db7cc64db33ba0e1f16b7dea49d0e7c8f5f72a75558177ad23a04fdbb8"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1541,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1541,
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
                "1[.]10[.]202[.]221",
                "1[.]177[.]162[.]2",
                "1[.]182[.]191[.]117",
                "1[.]188[.]102[.]120",
                "1[.]191[.]127[.]124"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4229,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4229,
                "newInLastHour": 4229,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]15[.]33[.]90",
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]194[.]219[.]159",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21177,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21177,
                "newInLastHour": 21177,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://archive-site[.]alignmentstorage[.]in[.]net/verification[.]google",
                "hxxp://110[.]37[.]82[.]79:56951/bin[.]sh",
                "hxxp://185[.]50[.]148[.]169:42129/i",
                "hxxps://backup-hub[.]alignmentstorage[.]in[.]net/verification[.]google",
                "hxxp://219[.]155[.]203[.]107:48310/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1108,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1108,
                "newInLastHour": 1093,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"archive-site[.]alignmentstorage[.]in[.]net\"",
                " \"backup-hub[.]alignmentstorage[.]in[.]net\"",
                " \"cache-node[.]alignmentstorage[.]in[.]net\"",
                " \"file-share[.]alignmentstorage[.]in[.]net\"",
                " \"block-storage[.]alignmentstorage[.]in[.]net\""
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
            "iocCount": 9400,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9400,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                "8501fab6623b7b8f968d2b522da81c514918df66",
                "77af6e6bafaf9effbba2f8cb33c80effe6efe773",
                "be1e2e424052ffaf96e10700d5acd79eceba25e4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48852,
            "activeSources": 8,
            "criticalAlerts": 30839,
            "activeCampaigns": 194
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21457,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9382,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 428,
                "trend": "stable",
                "percentage": 4
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
                "percentage": 89
            },
            {
                "name": "Tech",
                "percentage": 10
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21089,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]137[.]161[.]32:42982/i",
                    "hxxps://mapping-svc[.]navigationalpath[.]in[.]net/verification[.]google",
                    "hxxps://github[.]com/El1asz/osu-on-linux/raw/refs/heads/main/tint2/on-osu-linux-2[.]2[.]zip"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]177[.]162[.]2",
                    "1[.]180[.]116[.]17",
                    "1[.]182[.]191[.]117"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1550,
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
                "count": 1392,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                    "7aa15098c33be8eea90c57dba4443afba38bce40",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06"
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
                "count": 655,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "77af6e6bafaf9effbba2f8cb33c80effe6efe773",
                    "38e6803834672d7669a414b41a68a80800041309",
                    "b39ef781d5025993ed84ed86715d0e1ad16e3520"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 550,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584",
                    "f05a2876d9129ec057ecaedfac9cc37ebe2138ad",
                    "460e554589554e5dbaeb2c6f4c6aaf93e31da41a"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 493,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"mapping-svc[.]navigationalpath[.]in[.]net\"",
                    " \"vector-base[.]navigationalpath[.]in[.]net\"",
                    " \"trace-beacon[.]navigationalpath[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 455,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8501fab6623b7b8f968d2b522da81c514918df66",
                    "be1e2e424052ffaf96e10700d5acd79eceba25e4",
                    "cfbf57b8861a2ecb82c130d7815e61aabfa08c84"
                ]
            },
            {
                "name": "OffLoader",
                "count": 366,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cfdefb9b571940cbf746e3ff7a8d159e75c3daad",
                    "f72b15a90b86d3b726a98c4b54b1912ff67f0014",
                    "f9c3b7e52c81b2001740f7fcdb39339549af04dc"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41834,
        "lastCalculated": "2026-03-30 02:17 IST"
    }
};
