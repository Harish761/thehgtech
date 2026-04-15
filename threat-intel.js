// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-16T02:32:48.172741+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-16T02:32:47.779668+05:30",
    "lastUpdatedFormatted": "Apr 16, 2026 at 02:32 AM IST",
    "comparisonPeriod": "Apr 15 \u2013 Apr 16, 2026",
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
                "hxxp://pub-341f5624d2bc4c8297dedbe9f6b13d25[.]r2[.]dev/index[.]html",
                "hxxp://chaitanya-92[.]github[.]io/NETFLIX-CLONE-Frontend/",
                "hxxp://en---lldgerlive-auth[.]webflow[.]io/",
                "hxxp://homepageclone-netflix[.]vercel[.]app/",
                "hxxp://mata-masxxk-logijiiz[.]godaddysites[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 763,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 763,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4a3f21b2f0b0c4d4e5d43cfdcd8fb800c95a4ad7ec582d714ccd9480df826e2c",
                " \"9333c323c3fe82695c58625412e5163cf0db4804e3740b941bde6aef4375999a",
                " \"0e700e3150840d3b985303efe0fc523a671d89bde346aeeb9771aff888daa971",
                " \"6b7ff061eebeb9ead8812c410247768a7ba90786aeeb1bafa6412cc5b08237b5",
                " \"3ade1a199c74c3360cc24f9e1471b31fe1240753225a7ed3b70fc7e36953fed7"
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
                "1[.]10[.]255[.]186",
                "1[.]1[.]176[.]58",
                "1[.]15[.]51[.]236",
                "1[.]159[.]245[.]226",
                "1[.]178[.]175[.]72"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 723,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 723,
                "newInLastHour": 723,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]65[.]136[.]97",
                "100[.]31[.]213[.]204",
                "101[.]126[.]154[.]252",
                "101[.]132[.]144[.]220",
                "101[.]200[.]220[.]63"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25861,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25861,
                "newInLastHour": 25861,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://driftvoic[.]parchm-susyuka[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://m0ti9-route[.]parchm-susyuka[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://112[.]248[.]0[.]232:58816/bin[.]sh",
                "hxxp://187[.]45[.]95[.]254:55392/bin[.]sh",
                "hxxp://42[.]242[.]128[.]126:43145/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7043,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7043,
                "newInLastHour": 6380,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"driftvoic[.]parchm-susyuka[.]in[.]net\"",
                " \"m0ti9-route[.]parchm-susyuka[.]in[.]net\"",
                " \"civi1-flow[.]parchm-susyuka[.]in[.]net\"",
                " \"un1oad-sync[.]parchm-susyuka[.]in[.]net\"",
                " \"185[.]167[.]61[.]11:14600\""
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
            "iocCount": 9598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9598,
                "newInLastHour": 64,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "88c1ef23b741f6701204f8d79dcc8cede3f28c3f",
                "c41b9af97db6c261ebd747f97b334a780bb2667d",
                "6b9710d5bb761d4f36d1f99ee108052dee0a6b86",
                "a04036db29a3c4ab6e89e5a535baecc8b678fbb9",
                "4d303a7858b8d0411d6f171866329cdcb69e81d3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 59875,
            "activeSources": 8,
            "criticalAlerts": 36005,
            "activeCampaigns": 227
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26493,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9512,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 1047,
                "trend": "stable",
                "percentage": -1
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
                "count": 25739,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://github[.]com/FacundoNimes/linkedin-playwright-auto-job-application-agent/raw/refs/heads/main/unlassoed/job-application-linkedin-playwright-auto-agent-v1[.]1[.]zip",
                    "hxxps://github[.]com/celin213/FastAPITutorials/raw/refs/heads/main/example_06/domain/API-Tutorials-Fast-v1[.]5[.]zip",
                    "hxxps://raw[.]githubusercontent[.]com/ArgyaSR/Auction-App-Data-Processing_AWS-Pipeline/refs/heads/main/sql/Auction_App_AW_Data_Processing_Pipeline_v1[.]4[.]zip"
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
                    "1[.]1[.]176[.]58",
                    "1[.]14[.]3[.]240"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 4632,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://jpdigitalindia[.]com/\"",
                    " \"hxxps://thebrisbanetimes[.]com[.]au/\"",
                    " \"hxxps://vstkia[.]mktng-int[.]com/\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1557,
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
                "count": 1407,
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
                "count": 671,
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
                "count": 659,
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
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05",
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 492,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"2cpd365m[.]plaque5tucco[.]digital\"",
                    " \"wsxrcpse[.]plaque5tucco[.]digital\"",
                    " \"geo-dec0d[.]expect-runes[.]in[.]net\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48370,
        "lastCalculated": "2026-04-16 02:32 IST"
    }
};
