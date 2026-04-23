// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-24T02:31:45.728804+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-24T02:31:45.276765+05:30",
    "lastUpdatedFormatted": "Apr 24, 2026 at 02:31 AM IST",
    "comparisonPeriod": "Apr 23 \u2013 Apr 24, 2026",
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
            "iocCount": 1163,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1163,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d62ad76a9841e710ce783c4f8313f134a1e6a726eb5b441b9cd49c7ae14b251a",
                " \"bfe8be3bbf2e578b4f50ea7dab279b241b82a1f37753e979eac0474c92fc0c86",
                " \"67f4a344ca29e3d8e8331697973943e740e17fe4582d873e3333d4f92099d0df",
                " \"53d20f7aa40a593ab595be2512589048a2cd9e99ac802f468f597637df9cb665",
                " \"8f51b5248323cb05faba550c4d350eeef30babe9d322e4ad127783efd4a13906"
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
                "1[.]10[.]133[.]201",
                "1[.]10[.]247[.]194",
                "1[.]120[.]3[.]95",
                "1[.]15[.]51[.]236",
                "1[.]169[.]9[.]130"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4908,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4908,
                "newInLastHour": 4908,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]145[.]124[.]191",
                "1[.]214[.]117[.]218",
                "1[.]214[.]255[.]210",
                "1[.]214[.]42[.]172"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 26150,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 26150,
                "newInLastHour": 26150,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]44[.]48[.]119:59280/bin[.]sh",
                "hxxps://lmk4z[.]through7esid[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://191[.]37[.]19[.]74:34549/i",
                "hxxp://123[.]132[.]166[.]255:59261/bin[.]sh",
                "hxxps://meta-rn0du[.]through7esid[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 985,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 985,
                "newInLastHour": 968,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"yxex4i[.]alexand-trouble[.]in[.]net\"",
                " \"lmk4z[.]through7esid[.]in[.]net\"",
                " \"www[.]vyzvapropokrocile[.]cz\"",
                " \"meta-rn0du[.]through7esid[.]in[.]net\"",
                " \"www[.]usaclibenevento[.]com\""
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
                "newInLastHour": 42,
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
            "totalIndicators": 54685,
            "activeSources": 8,
            "criticalAlerts": 36819,
            "activeCampaigns": 215
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27248,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9571,
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
                "count": 173,
                "trend": "stable",
                "percentage": -2
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
                "count": 26098,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://vel-lineet[.]polyate-eye[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://27[.]218[.]57[.]214:60999/bin[.]sh",
                    "hxxps://primeree[.]obli8edanger[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]180[.]183[.]158",
                    "1[.]183[.]161[.]87",
                    "1[.]183[.]17[.]214"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1588,
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
                "count": 1405,
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
                    "bb085af0610557f877683616d87b7345b59c4f54",
                    "f78be258c92a94888f2e283ddb807dcc22689c86",
                    "e0127cb029c9d3778d15d3948b41ecdc8b44fb03"
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
                "name": "Vidar",
                "count": 500,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "386e3878708b3662a447b7e33cc91a0466e9b8a8",
                    "ea714daf2e106b7297763178ab7c6e38753ac5bd",
                    "d01e5c2a9987277bfd045839b37c6b9944109e87"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 477,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"vel-lineet[.]polyate-eye[.]in[.]net\"",
                    " \"primeree[.]obli8edanger[.]in[.]net\"",
                    " \"parcelpow[.]obli8edanger[.]in[.]net\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 475,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"cb6809137e1b06b4885552b7e8da630152783cdba50acffba31930ee09145af9",
                    " \"832772b0e5f33cdf854675641f7bf705817665c3b803a81f94a63aff8690b222",
                    " \"b13a41d094c4d26b413c3dc1c7d180a9e164f599964e114a78e2bb219c578f2e"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47387,
        "lastCalculated": "2026-04-24 02:31 IST"
    }
};
