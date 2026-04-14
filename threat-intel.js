// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-14T09:05:57.413472+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-14T09:05:57.101805+05:30",
    "lastUpdatedFormatted": "Apr 14, 2026 at 09:05 AM IST",
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
                "hxxp://deepflix-ui[.]vercel[.]app/",
                "hxxp://statement[.]amazingholidaycoupons[.]com/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a",
                "hxxp://uditkumar-99[.]github[.]io/amazon-clone",
                "hxxp://ak20051908[.]github[.]io/netflix_home_page-",
                "hxxp://webmail[.]alertas-de-viaje[.]mx/s/63BZGFSVBWSFCDX7Y9/584dd8/90eab167-7429-489f-99f6-ce86e8d0d81a"
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
                "newInLastHour": 71,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5f9f9b11d66f51e06801468019ca6a43ce4bce0fd1bbdf12c3863c7252a37096",
                " \"a69a3e149d3953527bf129af100268c7cd0b2b954b453024ed360efe8b79e26b",
                " \"c79da59b2fe597fea7329fc14a586713a0525d8e3be8227394f71660a52f9ab4",
                " \"d1a8d4df5c49d6416a4b55f27699fbbbaec07f3bcc2e15e7a38a54d9ea57d1c0",
                " \"78eeed83d81521f15bfe3f2c29666f4125d578dc3d8641891562d7da56c1be27"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1551,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1551,
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
                "1[.]123[.]231[.]55",
                "1[.]15[.]51[.]236",
                "1[.]173[.]248[.]59",
                "1[.]175[.]134[.]212",
                "1[.]178[.]175[.]72"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 934,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 934,
                "newInLastHour": 934,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]190[.]98[.]62",
                "1[.]53[.]110[.]158",
                "1[.]64[.]12[.]160",
                "101[.]126[.]107[.]237",
                "101[.]126[.]154[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24471,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24471,
                "newInLastHour": 24471,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://stat1-set[.]data-metric-flow[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://39[.]74[.]86[.]126:59399/i",
                "hxxp://112[.]248[.]125[.]252:52670/bin[.]sh",
                "hxxps://gate6-web[.]tech-support-desk[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://222[.]139[.]125[.]60:34637/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 899,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 899,
                "newInLastHour": 891,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"stat1-set[.]data-metric-flow[.]in[.]net\"",
                " \"gate6-web[.]tech-support-desk[.]in[.]net\"",
                " \"svc5-auth[.]tech-support-desk[.]in[.]net\"",
                " \"vault4-id[.]tech-support-desk[.]in[.]net\"",
                " \"api3-call[.]tech-support-desk[.]in[.]net\""
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
            "iocCount": 9565,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9565,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "021068795797aa6c83cb175fed0fc5da9247e7ca",
                "c02490981880a8827ecc22ee918275d443173cf9",
                "e3555b48a77af5b8012ecc54676f7123783f7549",
                "1895b08f5a49e666e1ed20d115b4960b05a2c01c",
                "fddec1007b0bfffee14304afaeff19a985c3b4c8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 53203,
            "activeSources": 8,
            "criticalAlerts": 35460,
            "activeCampaigns": 198
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25926,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9534,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 310,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 81
            },
            {
                "name": "Tech",
                "percentage": 18
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 25222,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]14[.]38[.]161:55419/bin[.]sh",
                    "hxxp://115[.]50[.]254[.]26:35075/i",
                    "hxxp://94[.]156[.]152[.]67:83/w2[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]176[.]58",
                    "1[.]123[.]231[.]55",
                    "1[.]180[.]153[.]254"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1549,
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
                    "021068795797aa6c83cb175fed0fc5da9247e7ca",
                    "6e76ede9fb607e6701bf05cdf72378a0bd082d0f",
                    "a017b686ecf8d93d89bb2b46627c2c99d1aa7801"
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
                    "0a5d3ca898ee51340f483aa8f40e06c43813376e",
                    "15027af927e6be2c77fa1083e2ba69ed7ef77ec1",
                    "ee4dd385bf849f7621deed67382e64c17b864e20"
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
                "count": 490,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f8f2497277c03b96a3b4a8ef77e0a0792478fae5",
                    "e43ef806fe5a6767cd9fd7391d11e7db88a22efe",
                    "877b74f2ae6c1758dab9b5ef1bb45472b02dbc56"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 475,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"neo-c0upon[.]kazan-saddle[.]in[.]net\"",
                    " \"zmxa[.]kazan-saddle[.]in[.]net\"",
                    " \"nvgsw[.]kazan-saddle[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 395,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c02490981880a8827ecc22ee918275d443173cf9",
                    "d99c3d7ed9e8aa5947b8675eadbee2ae11085f38",
                    "3963ac632a72fd088e1e2089573b8f5c5cf6faa6"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_stealer\"",
        "totalAttacksThisHour": 41683,
        "lastCalculated": "2026-04-14 09:05 IST"
    }
};
