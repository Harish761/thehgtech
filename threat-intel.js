// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-14T22:50:02.948281+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-14T22:50:02.580092+05:30",
    "lastUpdatedFormatted": "Apr 14, 2026 at 10:50 PM IST",
    "comparisonPeriod": "Apr 13 \u2013 Apr 14, 2026",
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
                "hxxp://manas-yadav-45[.]github[.]io/amazon-clone",
                "hxxp://eth[.]modefi8o[.]com/",
                "hxxp://publicstart-usa[.]zapier[.]app/",
                "hxxps://ipfs[.]io/ipfs/bafkreie2ywrmnzqxh4sgjgrvd3jl2yy3lvuae7zq27jaxs2vqsou7fc3ki?filename=all-domainhypgy[.]html",
                "hxxp://www[.]dpdlocatf[.]autos/com"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 729,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 729,
                "newInLastHour": 39,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c15ca14de416219eb5ef7e1bdd378fbe9a7795994fe2190bab94500923054ec0",
                " \"950d2f4d60ee5290de30701a96661bd5547eb012b1ddefc1f258cc711b31441b",
                " \"82cc7a25c9f07df2dbde7dd4d2cecc9d46b3af897df6ecc11c956fe2f038336c",
                " \"c68dee9f88e1eddbd6bfcd233f8c136becd1c7418ce9ae06ba457fb5cd5061db",
                " \"8ee914cc7eb7d64acb26984820717c84d7569cec980101f70f62064384380401"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1590,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1590,
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
                "1[.]10[.]255[.]186",
                "1[.]1[.]176[.]58",
                "1[.]123[.]231[.]55",
                "1[.]172[.]42[.]221",
                "1[.]173[.]248[.]59"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 762,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 762,
                "newInLastHour": 762,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]190[.]98[.]62",
                "1[.]64[.]12[.]160",
                "1[.]65[.]136[.]97",
                "101[.]126[.]107[.]237",
                "101[.]126[.]154[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24973,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24973,
                "newInLastHour": 24973,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]177[.]23[.]149:48269/bin[.]sh",
                "hxxps://gate6-site[.]kry8navel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://svc5-relay[.]kry8navel[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://115[.]63[.]23[.]255:44828/i",
                "hxxp://115[.]54[.]114[.]114:56296/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6052,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6052,
                "newInLastHour": 6042,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"wsh[.]sequareeus[.]online\"",
                " \"hxxps://wsh[.]sequareeus[.]online/\"",
                " \"gate6-site[.]kry8navel[.]in[.]net\"",
                " \"svc5-relay[.]kry8navel[.]in[.]net\"",
                " \"bin4-swap[.]kry8navel[.]in[.]net\""
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
            "iocCount": 9586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9586,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1453001dfb3bf2cee3dfdd70352e4c2ede0e9793",
                "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                "40c8ac808a2cf7072bded365f6ef366c95188a35",
                "08715a9d4e9ce7466225ad56845853f652053ab9",
                "62db81002bfaa1cbb0142baf9bac6651fb627aee"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 57473,
            "activeSources": 8,
            "criticalAlerts": 35136,
            "activeCampaigns": 212
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25634,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9502,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 454,
                "trend": "up",
                "percentage": 11
            },
            {
                "category": "Phishing",
                "count": 340,
                "trend": "up",
                "percentage": 12
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 82
            },
            {
                "name": "Tech",
                "percentage": 17
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24899,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://soft3-ring[.]zen4qorin[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://185[.]204[.]154[.]82:59407/i",
                    "hxxp://23[.]92[.]130[.]154:52900/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]123[.]231[.]55",
                    "1[.]175[.]134[.]212",
                    "1[.]178[.]175[.]72"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 4425,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://tasktackleservice[.]com/\"",
                    " \"hxxps://xclusivetravel[.]co[.]uk/\"",
                    " \"hxxps://ytz[.]gca[.]mybluehost[.]me/\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1587,
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
                "count": 1408,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d",
                    "021068795797aa6c83cb175fed0fc5da9247e7ca"
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
                "count": 672,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f91937b78dc36f7f7b9ff70f0f53afeefe7ad31d",
                    "0a5d3ca898ee51340f483aa8f40e06c43813376e",
                    "15027af927e6be2c77fa1083e2ba69ed7ef77ec1"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05"
                ]
            },
            {
                "name": "Vidar",
                "count": 488,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "40c8ac808a2cf7072bded365f6ef366c95188a35",
                    "8ef1132c5f69f71c7a9cd95eae9da41763238767",
                    "9f1acf378f9d9cbefe0cfd1968c5193a6a804237"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 481,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"soft3-ring[.]zen4qorin[.]in[.]net\"",
                    " \"darkspark[.]zen4qorin[.]in[.]net\"",
                    " \"rai16-track[.]zen4qorin[.]in[.]net\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.redline_stealer\"",
        "totalAttacksThisHour": 47186,
        "lastCalculated": "2026-04-14 22:50 IST"
    }
};
