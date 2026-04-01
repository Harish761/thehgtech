// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-01T11:32:16.857260+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-01T11:32:16.561089+05:30",
    "lastUpdatedFormatted": "Apr 01, 2026 at 11:32 AM IST",
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
            "iocCount": 692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 692,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"338dea3ea0f9fc3b7718bff345fc3b705b287b615161f357c5b15ecd630ab4a4",
                " \"ff8546c70bd0c5c92117b5e453c417a85d7dd43bc170d5479ffb8d3f398ee494",
                " \"bba584c9c26bfe14083256f4f2ec9ea6bcf12db3cf7e1b7424f90fccced508be",
                " \"5dfca625893c0215fd5aabc7be6dfdc7534fd579e2e72a7e58e14dbb3750097c",
                " \"bc5a3c85389bd5622f69605687fbaa401643805f189a3bec12cb5913f7eec3fd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1586,
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
                "1[.]14[.]3[.]240",
                "1[.]174[.]69[.]6",
                "1[.]176[.]134[.]241",
                "1[.]178[.]175[.]72",
                "1[.]182[.]191[.]117"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4950,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4950,
                "newInLastHour": 4950,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]145[.]126[.]185",
                "1[.]192[.]202[.]92",
                "1[.]194[.]238[.]168",
                "1[.]214[.]197[.]163",
                "1[.]214[.]255[.]210"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21270,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21270,
                "newInLastHour": 21270,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://117[.]211[.]211[.]140:53242/i",
                "hxxp://119[.]99[.]87[.]112:36295/i",
                "hxxps://layer-check[.]dervishpeel[.]in[.]net/verification[.]google",
                "hxxp://119[.]4[.]9[.]144:60731/bin[.]sh",
                "hxxp://111[.]38[.]106[.]19:56345/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1093,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1093,
                "newInLastHour": 1076,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cyrsite[.]top\"",
                " \"spin-cycle[.]dervishpeel[.]in[.]net\"",
                " \"hxxps://204[.]168[.]172[.]164\"",
                " \"source-log[.]needwatka[.]in[.]net\"",
                " \"31[.]57[.]216[.]28:424\""
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
            "iocCount": 9429,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9429,
                "newInLastHour": 13,
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
            "totalIndicators": 49239,
            "activeSources": 8,
            "criticalAlerts": 31308,
            "activeCampaigns": 211
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21892,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 9416,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 359,
                "trend": "stable",
                "percentage": 0
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
                "count": 21181,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]114[.]51[.]196:58528/i",
                    "hxxp://120[.]61[.]244[.]250:41211/i",
                    "hxxp://185[.]50[.]148[.]169:34321/i"
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
                    "1[.]178[.]175[.]72"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1590,
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
                "count": 469,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"static-cdn[.]digisphere[.]in[.]net\"",
                    " \"web-portal[.]digisphere[.]in[.]net\"",
                    " \"info-orbit[.]digisphere[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 461,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42630,
        "lastCalculated": "2026-04-01 11:32 IST"
    }
};
