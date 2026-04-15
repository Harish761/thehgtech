// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-15T15:15:50.721274+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-15T15:15:50.350256+05:30",
    "lastUpdatedFormatted": "Apr 15, 2026 at 03:15 PM IST",
    "comparisonPeriod": "Apr 14 \u2013 Apr 15, 2026",
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
                "hxxps://facebook-login-app[.]blogspot[.]com/",
                "hxxp://www[.]facebook-faq[.]se/",
                "hxxps://www[.]facebook-project-seven[.]vercel[.]app/",
                "hxxps://facebook-clone-rho-six[.]vercel[.]app/signin",
                "hxxps://facebook-clone-rho-six[.]vercel[.]app/forgot"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 737,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 737,
                "newInLastHour": 137,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3a9019bc4d0b77313357a86ef0045b19ae35fd6eabe7f9a24eca7fe49bc6a2b5",
                " \"86aaf69bc8b82fde31ffbf766086a159420961df3d06f8c905a4bdbbcdc5b86e",
                " \"cfd0c55ad575f071d84864fe0ab927a532838ed012974924ce6eb6394d8536fa",
                " \"b1219afe9c02ae5c55f7e827af3901358f8e9b0037f9073cbaae358b1b870099",
                " \"2736be1bd234d0a7ced4976356702df6ead3a294ca1ad8ce8dd124b09cf6e465"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1587,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1587,
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
                "1[.]10[.]255[.]186",
                "1[.]123[.]131[.]149",
                "1[.]123[.]231[.]55",
                "1[.]14[.]3[.]240",
                "1[.]162[.]81[.]96"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 753,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 753,
                "newInLastHour": 753,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]64[.]12[.]160",
                "1[.]65[.]136[.]97",
                "100[.]31[.]213[.]204",
                "101[.]126[.]107[.]237",
                "101[.]126[.]154[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25266,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25266,
                "newInLastHour": 25266,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]229[.]145[.]175:38494/i",
                "hxxps://c0rnpute-stream[.]zor4melax[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://110[.]37[.]78[.]200:41934/bin[.]sh",
                "hxxp://115[.]60[.]252[.]86:60563/i",
                "hxxps://wygb7[.]zor4melax[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6575,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6575,
                "newInLastHour": 5907,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"compre-node[.]zor4melax[.]in[.]net\"",
                " \"c0rnpute-stream[.]zor4melax[.]in[.]net\"",
                " \"wygb7[.]zor4melax[.]in[.]net\"",
                " \"5pro4-vector[.]zor4melax[.]in[.]net\"",
                " \"tfovt[.]prax5litor[.]in[.]net\""
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
            "iocCount": 9508,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9508,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "4d303a7858b8d0411d6f171866329cdcb69e81d3",
                "0db9a318abda4351b84491535bd4d9ee01a88bfa",
                "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                "55cbbc80d889fa59b5b473a4215f05f7273b76c4",
                "4fd73d3921ff83cf350667813040a50f53198e59"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 58597,
            "activeSources": 8,
            "criticalAlerts": 35267,
            "activeCampaigns": 211
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25701,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9566,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 626,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 83
            },
            {
                "name": "Tech",
                "percentage": 16
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
                "count": 25039,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://gift1[.]daily-bonus[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxps://124[.]198[.]131[.]88/bin/support[.]client[.]exe",
                    "hxxps://gate6[.]smartchoice[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]255[.]186",
                    "1[.]123[.]131[.]149",
                    "1[.]123[.]231[.]55"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 4574,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://lumigo-ai[.]com/\"",
                    " \"hxxps://onefilmproductions[.]it/\"",
                    " \"hxxps://bellacasashade[.]com/\""
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
                "count": 674,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "54cd35dc5d5f8e7068ccd2c1d24222187784f90a",
                    "f91937b78dc36f7f7b9ff70f0f53afeefe7ad31d",
                    "0a5d3ca898ee51340f483aa8f40e06c43813376e"
                ]
            },
            {
                "name": " \"win.redline_stealer\"",
                "count": 660,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"0e723233c9ad0a9b0fd7f27622bdf53704a0a2a22b5f86bda8ac2a6a289e2f98\"",
                    " \"636c33acef02ce821e506200d9051350b56ad63c18683cf389e2e9aba7ae912d\"",
                    " \"a00de33c41dfa9ad1a98f7e6957e5d52e0007b8c96e5578ed10e4c10eaadf103\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
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
                "count": 495,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "40c8ac808a2cf7072bded365f6ef366c95188a35",
                    "8ef1132c5f69f71c7a9cd95eae9da41763238767",
                    "9f1acf378f9d9cbefe0cfd1968c5193a6a804237"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47374,
        "lastCalculated": "2026-04-15 15:15 IST"
    }
};
