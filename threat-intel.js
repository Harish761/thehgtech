// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-01T14:50:00.874836+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-01T14:50:00.577845+05:30",
    "lastUpdatedFormatted": "Apr 01, 2026 at 02:50 PM IST",
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
                "hxxps://amazon-clone-gray-psi[.]vercel[.]app/",
                "hxxps://shankha03[.]github[.]io/Ecommerce_Replica_SD/",
                "hxxp://kkucoinn-i-en[.]webflow[.]io/",
                "hxxp://pub-f116f875e0aa4d7cb9e2ecfa533098af[.]r2[.]dev/index[.]html",
                "hxxps://roblox[.]com[.]ge/users/9431472086/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 708,
                "newInLastHour": 77,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2f4f33b25613b5546d1e80eafece527dd1c6ea626a0e3b9b9fa6ee1be0b78808",
                " \"79906bf915f0223acf95bbf4cca86df0dcf9f128663ad34ed0bda82e5f40d42e",
                " \"d885a1c36b75c4594b020cf7a45ae6f3cd8239af066843836fddd9a0fcf4fc7a",
                " \"a52d7e811609cce5a2aacaf70a63a90f4aebb324f17a224b043069c4f7384ac3",
                " \"d83a5731392da27f2092430ba3c9f0407593ce08397060ec662728be0e23c6f7"
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
                "newInLastHour": 6,
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
                "1[.]14[.]3[.]240",
                "1[.]176[.]134[.]241",
                "1[.]178[.]175[.]72",
                "1[.]182[.]191[.]117",
                "1[.]188[.]102[.]120"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4983,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4983,
                "newInLastHour": 4983,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]192[.]202[.]92",
                "1[.]194[.]238[.]168",
                "1[.]214[.]197[.]163",
                "1[.]214[.]255[.]210",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21347,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21347,
                "newInLastHour": 21347,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://farm-logic[.]combinekabisia[.]in[.]net/verification[.]google",
                "hxxp://182[.]127[.]124[.]243:60222/i",
                "hxxp://219[.]155[.]83[.]117:59085/i",
                "hxxp://182[.]116[.]21[.]30:51230/bin[.]sh",
                "hxxps://root-source[.]maknothplacenta[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 978,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 978,
                "newInLastHour": 956,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"3[.]69[.]49[.]61:80\"",
                " \"farm-logic[.]combinekabisia[.]in[.]net\"",
                " \"root-source[.]maknothplacenta[.]in[.]net\"",
                " \"health-node[.]maknothplacenta[.]in[.]net\"",
                " \"organ-sync[.]maknothplacenta[.]in[.]net\""
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
            "iocCount": 9450,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9450,
                "newInLastHour": 22,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "584bb8216b62ba7f705b500e0d3890b00aa39011",
                "c80cdeac49664ee5442be41849242910d2070480",
                "a153d631044cb3a6e47f781170624fec9552c8c1",
                "bca47a4d874b87ac2ebd5f2284c813daae1a2be9",
                "2820299ec70da9294ae5d637e6a97dfa29eff78e"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49375,
            "activeSources": 8,
            "criticalAlerts": 31393,
            "activeCampaigns": 213
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21986,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9407,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 381,
                "trend": "stable",
                "percentage": 6
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
                "count": 21270,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://117[.]211[.]211[.]140:53242/i",
                    "hxxp://119[.]99[.]87[.]112:36295/i",
                    "hxxps://layer-check[.]dervishpeel[.]in[.]net/verification[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]174[.]69[.]6",
                    "1[.]176[.]134[.]241"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1586,
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
                "count": 493,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"spin-cycle[.]dervishpeel[.]in[.]net\"",
                    " \"source-log[.]needwatka[.]in[.]net\"",
                    " \"hydro-svc[.]needwatka[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "584bb8216b62ba7f705b500e0d3890b00aa39011",
                    "c49a0dbefcbc45334663c2fd9e1830eeadc025f6",
                    "7f36a32024663b19e04cca391d81cccee18e02d1"
                ]
            },
            {
                "name": "OffLoader",
                "count": 374,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a153d631044cb3a6e47f781170624fec9552c8c1",
                    "df46f5d70b9f8af16e2732ca36cc2e5a08bda1a9",
                    "cf4cfdb36fda3047e572f36b474e5a488ffbfdc7"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42696,
        "lastCalculated": "2026-04-01 14:50 IST"
    }
};
