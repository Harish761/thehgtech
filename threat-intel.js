// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-31T22:41:15.763218+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-31T22:41:15.471665+05:30",
    "lastUpdatedFormatted": "Mar 31, 2026 at 10:41 PM IST",
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
            "iocCount": 716,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 716,
                "newInLastHour": 61,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"6f71f386d698041999d5d5435b6f6e333755680acc320a1ce5005d4cc11cc08d",
                " \"b7daa46b77f75188579b593906c597198726f0e6e57c7df79e31db3abc6e93ab",
                " \"1164be3850808e9b4a26dca24da350dc0d91dc3d8526414fbaba38ca1b914c89",
                " \"d07587127b553dfcb94fb20cca4f1830debe619a735759359a2bf4f96aad406b",
                " \"2f810da956fed7faf74c8ce2cf65638ccdaa92b282dc7492592d7aedce280c44"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1592,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1592,
                "newInLastHour": 33,
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
                "1[.]188[.]102[.]120",
                "1[.]192[.]177[.]194"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4638,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4638,
                "newInLastHour": 4638,
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
                "1[.]194[.]238[.]168"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21392,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21392,
                "newInLastHour": 21392,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://plasma-node[.]novaforge[.]in[.]net/verification[.]google",
                "hxxp://27[.]37[.]103[.]199:44175/i",
                "hxxp://42[.]54[.]11[.]123:34666/bin[.]sh",
                "hxxps://blast-zone[.]novaforge[.]in[.]net/verification[.]google",
                "hxxp://110[.]39[.]236[.]58:59893/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1030,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1030,
                "newInLastHour": 1013,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"smelt-logic[.]novaforge[.]in[.]net\"",
                " \"plasma-node[.]novaforge[.]in[.]net\"",
                " \"blast-zone[.]novaforge[.]in[.]net\"",
                " \"heavy-metal[.]novaforge[.]in[.]net\"",
                " \"fusion-core[.]novaforge[.]in[.]net\""
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
            "iocCount": 9443,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9443,
                "newInLastHour": 20,
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
            "totalIndicators": 49399,
            "activeSources": 8,
            "criticalAlerts": 31407,
            "activeCampaigns": 206
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22006,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9401,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 426,
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
                "count": 21310,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://gentle5-crest[.]codcomparable[.]in[.]net/verification[.]google",
                    "hxxps://j30k[.]codcomparable[.]in[.]net/verification[.]google",
                    "hxxp://110[.]37[.]95[.]41:59422/i"
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
                "count": 1559,
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
                "count": 657,
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
                "count": 489,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"theor-spool[.]codcomparable[.]in[.]net\"",
                    " \"sp0o-forge[.]codcomparable[.]in[.]net\"",
                    " \"c0nvoy5-field[.]codcomparable[.]in[.]net\""
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
                "count": 374,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 42462,
        "lastCalculated": "2026-03-31 22:41 IST"
    }
};
