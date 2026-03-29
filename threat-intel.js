// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-29T09:01:47.224091+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-29T09:01:46.929486+05:30",
    "lastUpdatedFormatted": "Mar 29, 2026 at 09:01 AM IST",
    "comparisonPeriod": "Mar 28 \u2013 Mar 29, 2026",
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
                "hxxps://icloud[.]sa[.]com/verify[.]php",
                "hxxp://icloud[.]sa[.]com/plr",
                "hxxps://linkurl[.]pk/a8s-5RW1",
                "hxxps://sing-w-w[.]webcindario[.]com/",
                "hxxp://krakenlogin[.]co[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 545,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 545,
                "newInLastHour": 47,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e7849f6d5aeeae9c6d965098075c2fcf0233f6d3231d2f5cbabd0a0f168dd101",
                " \"be1762627070078722cff01af73a388017283b0aa87f4c34e86fa0ceb8012b2d",
                " \"bc34abe585f6b04c90b55e4b1361d7c2d05b30977f6a67611d3d7f94fa7b2210",
                " \"52ba679694fa019918e32b699fa4f23a30221802a982bc61204072d69f5d9648",
                " \"c577e555067b875117ef87f01de5b2305dfb794cfbd8cbc1107a95ca143a9aa1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1553,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1553,
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
                "1[.]191[.]127[.]124",
                "1[.]192[.]177[.]194",
                "1[.]20[.]174[.]180",
                "1[.]203[.]97[.]227",
                "1[.]234[.]19[.]107"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3907,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3907,
                "newInLastHour": 3907,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]192[.]189[.]251",
                "1[.]192[.]202[.]92",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 20659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 20659,
                "newInLastHour": 20659,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://binarydelive[.]zenithprospera[.]in[.]net/verification[.]google",
                "hxxp://61[.]1[.]194[.]130:53596/i",
                "hxxps://proto-wi1d[.]zenithprospera[.]in[.]net/verification[.]google",
                "hxxp://196[.]189[.]197[.]131:39004/bin[.]sh",
                "hxxps://svc4link[.]vertexharbinger[.]in[.]net/verification[.]google"
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
                "newInLastHour": 1026,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"54[.]172[.]72[.]215:4443\"",
                " \"binarydelive[.]zenithprospera[.]in[.]net\"",
                " \"proto-wi1d[.]zenithprospera[.]in[.]net\"",
                " \"svc4link[.]vertexharbinger[.]in[.]net\"",
                " \"svc3user[.]vertexharbinger[.]in[.]net\""
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
            "iocCount": 9405,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9405,
                "newInLastHour": 40,
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
            "totalIndicators": 49232,
            "activeSources": 8,
            "criticalAlerts": 31301,
            "activeCampaigns": 204
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21944,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9357,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 262,
                "trend": "stable",
                "percentage": -4
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
                "count": 21310,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://dev2outer[.]permanentancillary[.]in[.]net/verification[.]google",
                    "hxxp://117[.]216[.]178[.]96:44006/i",
                    "hxxp://113[.]221[.]24[.]138:40886/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]191[.]127[.]124",
                    "1[.]192[.]177[.]194",
                    "1[.]193[.]63[.]107"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1553,
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
                "count": 653,
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
                "count": 501,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dev2outer[.]permanentancillary[.]in[.]net\"",
                    " \"dev1proc[.]permanentancillary[.]in[.]net\"",
                    " \"cl4path[.]ubiquitousfoundry[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 442,
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
                "count": 364,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 40984,
        "lastCalculated": "2026-03-29 09:01 IST"
    }
};
