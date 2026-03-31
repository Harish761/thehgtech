// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-01T02:24:28.141009+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-01T02:24:27.843847+05:30",
    "lastUpdatedFormatted": "Apr 01, 2026 at 02:24 AM IST",
    "comparisonPeriod": "Mar 31 \u2013 Apr 01, 2026",
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
            "iocCount": 755,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 755,
                "newInLastHour": 35,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b3e9ada12ec44777ca75204386492e8efabc5e17e7b8a204a97ff8a0c1c32ba8",
                " \"29cb13b83596f358c18357c5159cba1155087257e4b8a6a5d2cc69ba8f7d3f43",
                " \"292579b940c837a51f74bc1c065c69e570f6f0f8bdf682cf08e82a9c933734ac",
                " \"597de43d9bf52baf4d183d232008bba134b7dbb161f3c6c1a2acbc8c266d1916",
                " \"b7409c444539c3cb3b63809db8359543e19af9c43ff2f36543651fb6d7e041d9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1589,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1589,
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
                "1[.]174[.]69[.]6",
                "1[.]176[.]134[.]251",
                "1[.]177[.]162[.]3",
                "1[.]178[.]175[.]72",
                "1[.]188[.]102[.]120"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5077,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5077,
                "newInLastHour": 5077,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]217[.]80",
                "1[.]145[.]126[.]185",
                "1[.]192[.]202[.]92",
                "1[.]194[.]238[.]168",
                "1[.]197[.]102[.]62"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21487,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21487,
                "newInLastHour": 21487,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]32[.]199[.]244:50607/i",
                "hxxps://archive-top[.]datacrest[.]in[.]net/verification[.]google",
                "hxxp://114[.]228[.]132[.]87:39486/bin[.]sh",
                "hxxp://117[.]220[.]151[.]22:53549/bin[.]sh",
                "hxxps://high-ridge[.]datacrest[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1046,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1046,
                "newInLastHour": 1029,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"iopajkflorta[.]com\"",
                " \"bulk-export[.]datacrest[.]in[.]net\"",
                " \"zarnoflidfgvv[.]com\"",
                " \"archive-top[.]datacrest[.]in[.]net\"",
                " \"high-ridge[.]datacrest[.]in[.]net\""
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
            "iocCount": 9357,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9357,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f36a32024663b19e04cca391d81cccee18e02d1",
                "68394a235c2fec3f8935219e2f5aded5d9dbda04",
                "df46f5d70b9f8af16e2732ca36cc2e5a08bda1a9",
                "cf4cfdb36fda3047e572f36b474e5a488ffbfdc7",
                "d483f3925c593dca3dc11ae02beded7ebe127a2e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49563,
            "activeSources": 8,
            "criticalAlerts": 31619,
            "activeCampaigns": 207
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22198,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9421,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 368,
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
                "count": 21442,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://bit-stream[.]quantaflux[.]in[.]net/verification[.]google",
                    "hxxps://packet-flow[.]quantaflux[.]in[.]net/verification[.]google",
                    "hxxp://124[.]94[.]231[.]19:53077/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]176[.]134[.]251",
                    "1[.]177[.]162[.]3",
                    "1[.]178[.]175[.]72"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1592,
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
                "count": 1395,
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
                "count": 660,
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
                "count": 490,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bit-stream[.]quantaflux[.]in[.]net\"",
                    " \"packet-flow[.]quantaflux[.]in[.]net\"",
                    " \"speed-test[.]quantaflux[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 463,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f36a32024663b19e04cca391d81cccee18e02d1",
                    "68394a235c2fec3f8935219e2f5aded5d9dbda04",
                    "a7e8d4159dfd1d4de048b6751d0e125ca7721d63"
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
        "totalAttacksThisHour": 42933,
        "lastCalculated": "2026-04-01 02:24 IST"
    }
};
