// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-13T22:46:06.703357+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-13T22:46:06.395656+05:30",
    "lastUpdatedFormatted": "Apr 13, 2026 at 10:46 PM IST",
    "comparisonPeriod": "Apr 12 \u2013 Apr 13, 2026",
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
                "hxxp://www[.]easy-bank-landing-page-pi[.]vercel[.]app/",
                "hxxp://ldgeer-ledger[.]webflow[.]io/",
                "hxxp://facebook-login-page-clone-gamma[.]vercel[.]app/",
                "hxxps://netflix-clone-azure-nine[.]vercel[.]app/",
                "hxxp://www[.]netflix-clone-azure-nine[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 675,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 675,
                "newInLastHour": 31,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"06a78211f928ea083284effbff4ed629e840dd5bcd14d61965a58cd6175a2ea1",
                " \"3ccdd76e9c0ee814fc0461111b5c7cc7e7c7f8cd69d9eb16ee669078e5b9f5c6",
                " \"b7002aa3750f1558f84702faf82416d3dbb5cd3b77c26bd577d14778c5acdb9b",
                " \"cb636808cf6ea68f8732c59bee276d024c75e8c143e153a6f8351f9b2f9cd858",
                " \"e2c72920b15258deaaef003cca1defdce6f6db00ad2f6c5e396a112815bea9eb"
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
                "1[.]180[.]153[.]254",
                "1[.]182[.]190[.]117",
                "1[.]183[.]0[.]10",
                "1[.]191[.]127[.]124",
                "1[.]192[.]179[.]172"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 1047,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 1047,
                "newInLastHour": 1047,
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
                "101[.]126[.]128[.]223"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25143,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25143,
                "newInLastHour": 25143,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://mh4j[.]onepal-liat[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://61[.]53[.]72[.]47:48943/i",
                "hxxp://61[.]53[.]72[.]47:48943/bin[.]sh",
                "hxxp://185[.]139[.]215[.]64:9090/shell[.]aspx[.]jpg",
                "hxxp://185[.]139[.]215[.]64:9090/shell[.]jpg"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 900,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 900,
                "newInLastHour": 893,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"mh4j[.]onepal-liat[.]in[.]net\"",
                " \"gmzhuq[.]phoniche1lo[.]in[.]net\"",
                " \"4kreqbfj[.]phoniche1lo[.]in[.]net\"",
                " \"d1malk[.]phoniche1lo[.]in[.]net\"",
                " \"grid6-layer[.]phoniche1lo[.]in[.]net\""
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
            "iocCount": 1026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 1026,
                "newInLastHour": 18,
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
            "totalIndicators": 53038,
            "activeSources": 8,
            "criticalAlerts": 35298,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25773,
                "trend": "up",
                "percentage": 13
            },
            {
                "category": "C2",
                "count": 9525,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 293,
                "trend": "stable",
                "percentage": 4
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
                "count": 25064,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]239[.]154[.]221:50950/bin[.]sh",
                    "hxxps://03i6[.]desola-tidle[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://180[.]120[.]0[.]89:44129/bin[.]sh"
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
                    "1[.]15[.]51[.]236"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1548,
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
                "count": 670,
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
                "count": 489,
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
                "count": 474,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"03i6[.]desola-tidle[.]in[.]net\"",
                    " \"3nx4gks[.]desola-tidle[.]in[.]net\"",
                    " \"huvki[.]echi6under[.]in[.]net\""
                ]
            },
            {
                "name": "OffLoader",
                "count": 390,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42440,
        "lastCalculated": "2026-04-13 22:46 IST"
    }
};
