// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-14T20:28:45.633353+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-14T20:28:45.346422+05:30",
    "lastUpdatedFormatted": "Sep 14, 2026 at 08:28 PM IST",
    "comparisonPeriod": "Sep 13 \u2013 Sep 14, 2026",
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
                "hxxps://sub[.]parsnetsecure[.]ir/",
                "hxxps://shopeejkt4782[.]blogspot[.]com/",
                "hxxps://shopee0488[.]blogspot[.]com/",
                "hxxps://www[.]virtualnextpartner[.]com/",
                "hxxp://app-sushiswaps[.]net/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 485,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 485,
                "newInLastHour": 154,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a0909b5a4798f8d9a26c77248b182d6b8072cd2b5d81e1faec9eb112ac65f4c2",
                " \"ea7cd59c0105f693f6d4ba662f901bb509912a4b9ce9fb24cb03983f494abdfb",
                " \"b412f2f6d19da325d7475829f7df16dc86092773d46edaeb4df10b816d390e3a",
                " \"0bb593e4bd1913df2e29d7c39c15fe1042cd1e65f401f9778eb76ca14b5f9464",
                " \"2cb9fd63bea08664c5e9c9b3b72f31e98dbc37a723a868f6cbfa68fd552acedf"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1724,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1724,
                "newInLastHour": 112,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.26.75.0/24",
                "2.27.5.0/24"
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
                "1[.]10[.]172[.]57",
                "1[.]12[.]229[.]231",
                "1[.]14[.]121[.]115",
                "1[.]181[.]200[.]22",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5053,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5053,
                "newInLastHour": 5053,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]59[.]169",
                "1[.]14[.]64[.]225",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12597,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12597,
                "newInLastHour": 12597,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]96[.]143[.]54:59412/i",
                "hxxp://113[.]221[.]27[.]47:39578/i",
                "hxxp://42[.]227[.]159[.]175:54532/bin[.]sh",
                "hxxp://113[.]221[.]27[.]47:39578/bin[.]sh",
                "hxxps://www[.]kammwv[.]cc/LocalOffice[.]zip"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6586,
                "newInLastHour": 5852,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"u014toh8[.]noug[.]store\"",
                " \"x656wum4[.]us-us-us-zensulin[.]com\"",
                " \"64[.]89[.]163[.]63:5173\"",
                " \"91[.]92[.]35[.]7:6969\"",
                " \"152[.]42[.]182[.]175:6728\""
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
            "iocCount": 10696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10696,
                "newInLastHour": 395,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
                "7bc298ef18b49cfd44b5b429209035207250e25e",
                "d8f9205907b3bd3de4fb0513e5c53f167064a452",
                "009a05eaf082d20ae13a65abda12afd959cd76de",
                "e129189e0ed0545baad30c054b5f51301d766516"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 45604,
            "activeSources": 8,
            "criticalAlerts": 22949,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 12664,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 10285,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 4283,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 300,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 99
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]172[.]57",
                    "1[.]14[.]121[.]115",
                    "1[.]181[.]200[.]22"
                ]
            },
            {
                "name": "malware_download",
                "count": 12226,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://221[.]14[.]170[.]47:43520/i",
                    "hxxp://115[.]49[.]17[.]167:60965/i",
                    "hxxp://115[.]42[.]71[.]239:59657/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1612,
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
                "count": 1439,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1338,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]145[.]61[.]81:22\"",
                    " \"212[.]87[.]199[.]197:9090\"",
                    " \"8[.]145[.]61[.]81:8083\""
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
                "name": "Vidar",
                "count": 689,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fcfc3b257b12e4c699e343f4c415b60f642d88f6",
                    "60d55d4ff506bc654814ba6b26308f999766054a",
                    "f567b9fc86b00e059bdfea261466360804fbdb38"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 680,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 600,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]154[.]32[.]24:56003\"",
                    " \"66[.]179[.]29[.]5:9000\"",
                    " \"45[.]139[.]104[.]26:443\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39468,
        "lastCalculated": "2026-09-14 20:28 IST"
    }
};
