// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-31T19:27:26.740560+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-31T19:27:26.453033+05:30",
    "lastUpdatedFormatted": "Mar 31, 2026 at 07:27 PM IST",
    "comparisonPeriod": "Mar 30 \u2013 Mar 31, 2026",
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
                "hxxps://one[.]link/oiumnmbn/",
                "hxxps://bowyensr-3927ckoidz-conarjt[.]pages[.]dev/help/contact/178380501634687",
                "hxxps://kita-quote-wt6k5i5yoz[.]edgeone[.]dev/xmx[.]html",
                "hxxp://codingsid[.]github[.]io/Netflix_clone",
                "hxxp://zgx-1ny[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 672,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 672,
                "newInLastHour": 178,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"62422d922905d43ae0ca2917f7b6f95a539f3e477e084430aa643f0069b0054c",
                " \"e0c0ff1a67b4aef85616887a3dc62612a20d599a7315fc29eacec29c8306783b",
                " \"10043a81860273c5903891860bd93cdc06ae5139c19033a4c2fb339e1f903ac0",
                " \"a0dfd88d6209e14c971713ccee2c6b4dd1dfd5eae40fd894e43917c41f456103",
                " \"32f152ba15f960c54be6fa2ebaeadcb20211ae5aef0d3986dedc2578a7dc38a2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1559,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1559,
                "newInLastHour": 14,
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
                "1[.]174[.]69[.]6",
                "1[.]176[.]134[.]251",
                "1[.]178[.]175[.]72",
                "1[.]188[.]102[.]120",
                "1[.]192[.]177[.]194"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4536,
                "newInLastHour": 4536,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]145[.]126[.]185",
                "1[.]15[.]33[.]90",
                "1[.]192[.]202[.]92",
                "1[.]194[.]219[.]159"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21310,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21310,
                "newInLastHour": 21310,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://gentle5-crest[.]codcomparable[.]in[.]net/verification[.]google",
                "hxxps://j30k[.]codcomparable[.]in[.]net/verification[.]google",
                "hxxp://110[.]37[.]95[.]41:59422/i",
                "hxxps://theor-spool[.]codcomparable[.]in[.]net/verification[.]google",
                "hxxp://42[.]230[.]40[.]84:32883/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1130,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1130,
                "newInLastHour": 1105,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://65[.]108[.]55[.]35\"",
                " \"theor-spool[.]codcomparable[.]in[.]net\"",
                " \"sp0o-forge[.]codcomparable[.]in[.]net\"",
                " \"hxxp://158[.]94[.]209[.]253\"",
                " \"c0nvoy5-field[.]codcomparable[.]in[.]net\""
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
            "iocCount": 9423,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9423,
                "newInLastHour": 16,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "68394a235c2fec3f8935219e2f5aded5d9dbda04",
                "df46f5d70b9f8af16e2732ca36cc2e5a08bda1a9",
                "cf4cfdb36fda3047e572f36b474e5a488ffbfdc7",
                "d483f3925c593dca3dc11ae02beded7ebe127a2e",
                "a7e8d4159dfd1d4de048b6751d0e125ca7721d63"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48947,
            "activeSources": 8,
            "criticalAlerts": 31017,
            "activeCampaigns": 205
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21613,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9404,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 406,
                "trend": "down",
                "percentage": -25
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
                "percentage": 88
            },
            {
                "name": "Tech",
                "percentage": 11
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21087,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]147[.]157[.]129:55169/i",
                    "hxxps://dyn-valeal[.]paleontraglan[.]in[.]net/verification[.]google",
                    "hxxps://hardexte[.]paleontraglan[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]174[.]69[.]6",
                    "1[.]176[.]134[.]251",
                    "1[.]178[.]175[.]72"
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
                "count": 1394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b940adeda4f1d48f5560f76bb8bfc6e46202d3b",
                    "97ab9a73024e527aed8a20bbb1c573a21e35cc06",
                    "51f20540cd77caa36702bb359c8c06949aecea02"
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
                "count": 658,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8b6050f589d432c56f05de438e4ec606926c97df",
                    "e1305a89f7c83c0204edeae7bb063f73c4a80612",
                    "4fb81998ac697ab9e998f1c69d89e7ea606850ed"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 548,
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
                "count": 479,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"oasitre[.]paleontraglan[.]in[.]net\"",
                    " \"dyn-valeal[.]paleontraglan[.]in[.]net\"",
                    " \"l4b-mesh[.]paleontraglan[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "68394a235c2fec3f8935219e2f5aded5d9dbda04",
                    "a7e8d4159dfd1d4de048b6751d0e125ca7721d63",
                    "426f482e33309401ce4ecf7958f5ae28e8ff1423"
                ]
            },
            {
                "name": "OffLoader",
                "count": 375,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "df46f5d70b9f8af16e2732ca36cc2e5a08bda1a9",
                    "cf4cfdb36fda3047e572f36b474e5a488ffbfdc7",
                    "9a39dd3fec6c66ce980dbc07e4ad5103b2d0b09b"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42464,
        "lastCalculated": "2026-03-31 19:27 IST"
    }
};
