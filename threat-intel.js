// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-23T19:36:50.300548+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-23T19:36:49.921375+05:30",
    "lastUpdatedFormatted": "Apr 23, 2026 at 07:36 PM IST",
    "comparisonPeriod": "Apr 22 \u2013 Apr 23, 2026",
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
                "hxxp://www[.]instagram-clone-five[.]vercel[.]app/",
                "hxxp://www[.]spotify-clone-lime[.]vercel[.]app/",
                "hxxp://oklahomaweddingpros[.]com/repaour/asumme/codir/index[.]html",
                "hxxp://ecommerce-clone-phi[.]vercel[.]app/",
                "hxxp://bafybeiej3ntsxyjofgabr7fwsfnasqkcx6gfzocf2ncresca5jlzv4tkzy[.]ipfs[.]infura-ipfs[.]io/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1105,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1105,
                "newInLastHour": 113,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d97418be9ee255e58da119e11febca256dffece3023783c940bc400140d2b45f",
                " \"791dcc176d228f425955ae154a4648c7258e314f0655005ab17f021c12c45443",
                " \"e5ef37868df28f2b2f56e377d0b53d95014fe08be4ec1df97714277c3f59c268",
                " \"5ab10f0e3dc4e7eedda9a2354061d8f3a93772a7251681e3a92af32a793053b1",
                " \"6e7375bde1198e0a95e7f3d9a3a9a60ab6ddf08535d7dea38d55abd234f66e0d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1591,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1591,
                "newInLastHour": 8,
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
                "1[.]10[.]133[.]201",
                "1[.]120[.]3[.]95",
                "1[.]15[.]51[.]236",
                "1[.]180[.]183[.]158",
                "1[.]183[.]161[.]87"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5049,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5049,
                "newInLastHour": 5049,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]145[.]124[.]191",
                "1[.]162[.]228[.]225",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25945,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25945,
                "newInLastHour": 25945,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://175[.]165[.]81[.]137:55900/bin[.]sh",
                "hxxp://222[.]127[.]254[.]114:32853/i",
                "hxxp://104[.]32[.]65[.]48:39960/bin[.]sh",
                "hxxp://222[.]137[.]145[.]112:54496/i",
                "hxxp://182[.]126[.]119[.]46:43984/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 956,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 956,
                "newInLastHour": 942,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"nzwgpxkc[.]kymle6rax[.]in[.]net\"",
                " \"hxxps://orantow[.]com/file[.]js\"",
                " \"hxxp://europaspremna[.]com:5632/\"",
                " \"europaspremna[.]com\"",
                " \"hxxps://cryptex-core[.]net/public/cryptex1[.]4[.]zip\""
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
            "iocCount": 9635,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9635,
                "newInLastHour": 65,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                "d01e5c2a9987277bfd045839b37c6b9944109e87",
                "282f3ef6e708184f7f5607348879e4442fa44181",
                "6715ad3eb2bf27bc3d853c2ebad3257a6e6cf04f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54388,
            "activeSources": 8,
            "criticalAlerts": 36483,
            "activeCampaigns": 195
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26935,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9548,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 177,
                "trend": "stable",
                "percentage": -1
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
                "count": 25873,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://80qqgwqb[.]wertbash[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://125[.]43[.]32[.]102:47368/i",
                    "hxxp://158[.]94[.]210[.]65:6275/dat[.]wsf"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]133[.]201",
                    "1[.]120[.]3[.]95",
                    "1[.]169[.]9[.]130"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1583,
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
                "count": 1404,
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
                "count": 667,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 551,
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
                "name": " \"n/a",
                "count": 500,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"9b2637b8fefeedf8dca8a0ace491de05b6d937ea7463b48562cd1a0f25abb9f5",
                    " \"1439d30ebeac3a6ccb9545acaa350783a83cc08746cb575e59ddb0efc77d412a",
                    " \"7c2a9ad5fcf489d1844f51830242f6dd9dfc203be6de3ceb07a4f6dd21c9f1a3"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 498,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"80qqgwqb[.]wertbash[.]in[.]net\"",
                    " \"sdk-focus[.]sasdherk[.]in[.]net\"",
                    " \"dynspirea2[.]sasdherk[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 498,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                    "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                    "d01e5c2a9987277bfd045839b37c6b9944109e87"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47427,
        "lastCalculated": "2026-04-23 19:36 IST"
    }
};
