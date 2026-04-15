// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-15T19:29:46.302251+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-15T19:29:45.918745+05:30",
    "lastUpdatedFormatted": "Apr 15, 2026 at 07:29 PM IST",
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
            "iocCount": 774,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 774,
                "newInLastHour": 108,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2eda2c838ea696f6ab1e74d2a1fa3c265234a32416a666f0efa3d065d0185552",
                " \"39901ffa746a6f6ac3de2b36d9e61e0d60b221f4d9510436fd3cb3d2d7362130",
                " \"050537a47b5463e96a9f3e7ba79c607017faceeb668cef8aa1d5e11a19ff4990",
                " \"ffcfee12bd160dc67f9b0fbd4462e46e5932840297c611ad2646139295ea019c",
                " \"ee90df061740b8cf0cdce8dba04ff34c205adf3271695e5310d04723dd9a2a47"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1588,
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
                "1[.]123[.]131[.]149",
                "1[.]14[.]3[.]240",
                "1[.]162[.]81[.]96"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 721,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 721,
                "newInLastHour": 721,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]64[.]12[.]160",
                "1[.]65[.]136[.]97",
                "100[.]31[.]213[.]204",
                "101[.]126[.]154[.]252",
                "101[.]132[.]144[.]220"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25404,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25404,
                "newInLastHour": 25404,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://221[.]3[.]70[.]107:49607/i",
                "hxxps://t0mbk[.]xel5navin[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://gtps4change[.]org//wp-admin/maint/image[.]png",
                "hxxps://corwineagles[.]com/deskes[.]png",
                "hxxps://vor-coreum[.]xel5navin[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6906,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6906,
                "newInLastHour": 6243,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"valleydispatcher[.]nor8tavil[.]in[.]net\"",
                " \"t0mbk[.]xel5navin[.]in[.]net\"",
                " \"vor-coreum[.]xel5navin[.]in[.]net\"",
                " \"motmolecu[.]xel5navin[.]in[.]net\"",
                " \"pb64[.]duckdns[.]org\""
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
            "iocCount": 9584,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9584,
                "newInLastHour": 89,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c41b9af97db6c261ebd747f97b334a780bb2667d",
                "6b9710d5bb761d4f36d1f99ee108052dee0a6b86",
                "a04036db29a3c4ab6e89e5a535baecc8b678fbb9",
                "4d303a7858b8d0411d6f171866329cdcb69e81d3",
                "0db9a318abda4351b84491535bd4d9ee01a88bfa"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 58978,
            "activeSources": 8,
            "criticalAlerts": 35477,
            "activeCampaigns": 220
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25991,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9486,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 747,
                "trend": "up",
                "percentage": 19
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
                "count": 25266,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]229[.]145[.]175:38494/i",
                    "hxxps://c0rnpute-stream[.]zor4melax[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://110[.]37[.]78[.]200:41934/bin[.]sh"
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
                "count": 4575,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"venom[.]summertunnel[.]shop\"",
                    " \"hxxp://venom[.]summertunnel[.]shop\"",
                    " \"hxxps://jpsdischool[.]in/\""
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
                "count": 1406,
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
                "count": 669,
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
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 495,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"compre-node[.]zor4melax[.]in[.]net\"",
                    " \"c0rnpute-stream[.]zor4melax[.]in[.]net\"",
                    " \"wygb7[.]zor4melax[.]in[.]net\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vshell\"",
        "totalAttacksThisHour": 47873,
        "lastCalculated": "2026-04-15 19:29 IST"
    }
};
