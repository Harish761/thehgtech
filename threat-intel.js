// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-09T08:25:22.416528+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-09T08:25:22.127281+05:30",
    "lastUpdatedFormatted": "Mar 09, 2026 at 08:25 AM IST",
    "comparisonPeriod": "Mar 08 \u2013 Mar 09, 2026",
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
                "hxxps://roblox[.]com[.]ge/games/131306514547473/Sussy-Neko-Obby-ONLY-1-REACH-THE-FINAL?privateServerLinkCode=78817906733575071642525552258439",
                "hxxps://www[.]robiox[.]com[.]gr/games/4924922222/Brookhaven-RP?privateServerLinkCode=80553779994823189053753798129570",
                "hxxps://ferhadbag-maker[.]github[.]io/index[.]/",
                "hxxps://ferhadbag-maker[.]github[.]io/index[.]",
                "hxxps://010365vip[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 568,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 568,
                "newInLastHour": 92,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8e91a2e5e6a396a4a772c8da0a4c8467faa7b7f3d1841289f2f950e7295a92f9",
                " \"7a5c1a710407536af3a44313a332821b384c76191408d82ffcf04a5860608acf",
                " \"84dbbefd653fbfb4f0753ceaa757987098a87bf08f792425470d1e8a43bbe0bc",
                " \"4e23463d49cd6e4ffaf6a896612f6fdd0b992be6911feb1cd1ad236079441bb0",
                " \"778d264261cd4a4f59463458bb23d6ce4af3de3b524e8f588e94bba05f483ad2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1538,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1538,
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
                "1[.]170[.]60[.]81",
                "1[.]180[.]252[.]30",
                "1[.]188[.]101[.]189",
                "1[.]192[.]177[.]65",
                "1[.]192[.]204[.]88"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5806,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5806,
                "newInLastHour": 5806,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]45[.]226",
                "1[.]161[.]39[.]103",
                "1[.]164[.]175[.]17",
                "1[.]194[.]225[.]247",
                "1[.]194[.]238[.]108"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19250,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19250,
                "newInLastHour": 19250,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]234[.]235[.]62:54007/i",
                "hxxp://42[.]235[.]89[.]249:49584/bin[.]sh",
                "hxxps://lumi-v3[.]lumitron[.]in[.]net/verification[.]google",
                "hxxp://110[.]36[.]77[.]15:60973/i",
                "hxxps://ops-gate[.]lumitron[.]in[.]net/verification[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1126,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1126,
                "newInLastHour": 904,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"newlinekitchens[.]hdps[.]co[.]za\"",
                " \"newenergypartnership[.]com\"",
                " \"ops-gate[.]lumitron[.]in[.]net\"",
                " \"zen-flow[.]zenithra[.]in[.]net\"",
                " \"alt-net[.]zenithra[.]in[.]net\""
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
            "iocCount": 9206,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9206,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1906000bcbc6369f6361efa108bb803414e8e130",
                "472eb1f7d78f14512fb0fe4c9f1c62ae4b25d024",
                "fecbcfd7dcdac7eb882a84d60e0a0f8aa8413fe0",
                "d98a4d1dd928b3fa1f070ebc2349b4fc5ea9c893",
                "e2a5b820d463b605090d3d833d12252a22cd4510"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47367,
            "activeSources": 8,
            "criticalAlerts": 29397,
            "activeCampaigns": 227
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20211,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9186,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 433,
                "trend": "down",
                "percentage": -26
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
                "percentage": 97
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19665,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://harvest-map[.]harvestgrove[.]in[.]net/verification[.]google",
                    "hxxp://112[.]232[.]15[.]46:46367/i",
                    "hxxp://182[.]113[.]4[.]159:60238/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]118[.]23",
                    "1[.]170[.]60[.]81",
                    "1[.]180[.]252[.]30"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1538,
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
                "count": 1389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada",
                    "b4f112278f6f59e5e9d0a2aeb252c111a3ae8603"
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
                "count": 634,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6b58bfd60fc3150331254a46d2e75f0856f5d0ae",
                    "78372e9666177fc65dbd5a41286bcd2f22c12bf0",
                    "58d0977e2eb2f58b80c1441ac8a77c7da332b266"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 539,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f9e8d701de1740086da792e2c9be70df261e1832",
                    "20f30e05d2a2de117bdad78811946e112dc4dd6c",
                    "2987e30402370bdcbf291aedc9cd52a9a79bda0c"
                ]
            },
            {
                "name": "Vidar",
                "count": 394,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fc13b72e3fbc49e25fb617047297c3d1bf51da7f",
                    "493192edea58ec659ee270032660c6113e9b448e",
                    "b84f367205c3150a29707120bc237a5161d8886e"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 387,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"harvest-map[.]harvestgrove[.]in[.]net\"",
                    " \"mant-net[.]overtmantram[.]in[.]net\"",
                    " \"overt-base[.]overtmantram[.]in[.]net\""
                ]
            },
            {
                "name": "Rhadamanthys",
                "count": 355,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f999c0da0e983becc1c935444c5e609be26b0bcf",
                    "4101579ae950c954fc1096adf43bdefcf0364cfd",
                    "0c3ee8188ce35b6bb11d5b12a0e1e28310188b4e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 41357,
        "lastCalculated": "2026-03-09 08:25 IST"
    }
};
