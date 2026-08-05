// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-05T08:56:00.486047+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-05T08:56:00.200706+05:30",
    "lastUpdatedFormatted": "Aug 05, 2026 at 08:56 AM IST",
    "comparisonPeriod": "Aug 04 \u2013 Aug 05, 2026",
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
                "hxxps://rbcode[.]net/v/26497cb67cbd07c6bdab07ccf711632f",
                "hxxp://yhinesl[.]com/",
                "hxxps://campaingofficial[.]vercel[.]app/front/",
                "hxxps://buildofficial[.]vercel[.]app/front/",
                "hxxps://www[.]campofficial[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 988,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 988,
                "newInLastHour": 97,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8c0495b2595aff4244c1c157a3f2594f12275d776509a6b49224f357b88f4270",
                " \"9b1c0cb8ac7704452f06292398a65ffe9b3c901329f93ac716d7486ed8798d94",
                " \"ab1b6934bc586d442ec14067cb8075b94f66e0981c41fb308758ba7949eaa437",
                " \"28b4e8084fd3eb35aa0fcf362c87c43b7b380379643c209b40015e744f5df425",
                " \"6db4914bfa06a112892250974b42abde5c7a096050c970a1dcbb23172ff863f6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1664,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1664,
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
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]10[.]185[.]51",
                "1[.]119[.]194[.]226",
                "1[.]15[.]14[.]29",
                "1[.]15[.]82[.]219",
                "1[.]159[.]48[.]69"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5026,
                "newInLastHour": 5026,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]192[.]61[.]70",
                "1[.]192[.]63[.]178",
                "1[.]194[.]233[.]49",
                "1[.]20[.]228[.]110"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15216,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15216,
                "newInLastHour": 15216,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://95[.]155[.]151[.]113/renzo[.]sh",
                "hxxp://95[.]155[.]151[.]113/sensi_totolink[.]sh",
                "hxxp://95[.]155[.]151[.]113/netgear",
                "hxxp://95[.]155[.]151[.]113/mips",
                "hxxp://95[.]155[.]151[.]113/arm"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4170,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4170,
                "newInLastHour": 4088,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"38[.]55[.]145[.]42:8081\"",
                " \"38[.]55[.]145[.]42:80\"",
                " \"38[.]55[.]145[.]42:443\"",
                " \"rybmyip[.]osbratstvojedinstvo[.]com\"",
                " \"t36jqqkc[.]nesplowell[.]com\""
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
            "iocCount": 10307,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10307,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "ca9e642c1028f3a7fa79947493c34a981705a05d",
                "f5c8ee530b1fd817432a4bafad12126d1ae744d4",
                "92bebc09af464e669c68d95052916e76f989e043",
                "9b5e0b2f2acb07fb226b8805b3a5fb5a28035e6e",
                "942c595db95914eb4987a1e7ddd6f728fbc674ec"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47767,
            "activeSources": 8,
            "criticalAlerts": 26653,
            "activeCampaigns": 240
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16377,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10276,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3693,
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
                "percentage": 99
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 15392,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://94[.]154[.]43[.]231:3001/bins/boatnet[.]arm6",
                    "hxxp://94[.]154[.]43[.]231:3001/bins/boatnet[.]mpsl",
                    "hxxp://113[.]221[.]58[.]195:45339/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]12[.]229[.]231",
                    "1[.]159[.]48[.]69"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1664,
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
                "count": 1434,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6647f9e4a2e273d7b78ff02be7114b0e9e2a719f",
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1370,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"116[.]212[.]123[.]164:8080\"",
                    " \"116[.]212[.]123[.]164:80\"",
                    " \"116[.]212[.]123[.]164:443\""
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b14379b3743c37a26289499aca921c99998649f1",
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053"
                ]
            },
            {
                "name": "Vidar",
                "count": 663,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "61042420cd71b5edcdd9ef7ff070deef7398a725",
                    "b2e42b1a036329fa6fef4477d35887b1d357711e",
                    "58243e4728cadacb308dfa0b964571e374ac3c1c"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            },
            {
                "name": "ConnectWise",
                "count": 446,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9bfa1f9e8d990faec4c91c5b9eaeb15898aff2e7",
                    "dcf9b87b04998fde1fa03e83bfb8fec67ab1e1e1",
                    "dd95dacb4419bad92d3d39fa274af4acc1cb6988"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 39741,
        "lastCalculated": "2026-08-05 08:56 IST"
    }
};
