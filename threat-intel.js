// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-15T03:23:20.991526+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-15T03:23:20.472548+05:30",
    "lastUpdatedFormatted": "Oct 15, 2026 at 03:23 AM IST",
    "comparisonPeriod": "Oct 14 \u2013 Oct 15, 2026",
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
                "hxxps://facebook[.]tamil[.]bid/",
                "hxxps://tokenimx-cdn-edge-hk07[.]club/",
                "hxxp://qenfelo-mpt-vuzqari-k6x4pe91[.]pages[.]dev/",
                "hxxp://zunquri-mpt-vafqelo-k4x7pe81[.]pages[.]dev/",
                "hxxps://sp21ct-kemvi-biz-ranu-pelo[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1237,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1237,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"b9079c2c87348a8b598496606cb6a6d2f9df53230f4420e8688a3751285b2144",
                " \"604802b26921351110ef475d7708d8e7031b551192f72272effc7bc66bf3abbd",
                " \"3b35d3233e08d7c7a43a0bc0a899ce14cd6797949e96af0c6b3c32f690ab4815",
                " \"4ea01cf424fc8eba2c5c7f2f5283d376cfae4897d20b87ac52a1c949207ae2c9",
                " \"f36e5b52f5fff2806a069f28717d9fedef2a4ec1a91f0d0659c815e801050e7a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1642,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1642,
                "newInLastHour": 29,
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
                "1[.]183[.]41[.]171",
                "1[.]192[.]129[.]106",
                "1[.]192[.]216[.]192",
                "1[.]193[.]58[.]33",
                "1[.]193[.]63[.]3"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4167,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4167,
                "newInLastHour": 4167,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192",
                "1[.]178[.]138[.]99",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34119,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34119,
                "newInLastHour": 34119,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]54[.]43[.]105:55256/i",
                "hxxp://175[.]165[.]84[.]140:60779/i",
                "hxxp://62[.]60[.]226[.]140/files/7299809293/dfXHgmX[.]exe",
                "hxxp://221[.]15[.]88[.]109:47140/i",
                "hxxp://123[.]14[.]176[.]37:37998/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8260,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8260,
                "newInLastHour": 7413,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://t9[.]77tuna[.]org/d1\"",
                " \"hxxps://t9[.]77tuna[.]org/hf\"",
                " \"hxxps://t9[.]77tuna[.]org/a/\"",
                " \"hxxps://t9[.]77tuna[.]org/a\"",
                " \"hxxps://t9[.]77tuna[.]org/y4\""
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
            "iocCount": 10845,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10845,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "09545cca9c36c76f4982c4b648041a1606799b53",
                "d333c0b7e380afd2f156555b8110c00177b62e5d",
                "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
                "4664c47d412c00bf067a325ffa9790db75efbe75",
                "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 71505,
            "activeSources": 8,
            "criticalAlerts": 46324,
            "activeCampaigns": 289
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35380,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10944,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 6384,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 0
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
                "count": 34104,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]184[.]247[.]90:37017/i",
                    "hxxp://219[.]155[.]208[.]94:37290/i",
                    "hxxp://219[.]157[.]18[.]209:57018/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]58[.]215",
                    "1[.]14[.]149[.]30",
                    "1[.]183[.]41[.]171"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 2051,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://t9[.]77tuna[.]org/l3\"",
                    " \"hxxps://t9[.]77tuna[.]org/i9\"",
                    " \"hxxps://t9[.]77tuna[.]org/u/\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1652,
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
                "count": 1459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1287,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"124[.]221[.]141[.]180:123\"",
                    " \"124[.]221[.]141[.]180:8082\"",
                    " \"124[.]221[.]141[.]180:8080\""
                ]
            },
            {
                "name": "Vidar",
                "count": 838,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "09545cca9c36c76f4982c4b648041a1606799b53",
                    "d333c0b7e380afd2f156555b8110c00177b62e5d",
                    "c389945d4fc75250b291953e0abad0662dd9ce7d"
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
                "count": 719,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
                    "64d01c8e86e0a3b51c270743879a1fe966af0db4",
                    "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 638,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]139[.]104[.]222:49001\"",
                    " \"40[.]223[.]85[.]181:443\"",
                    " \"40[.]223[.]85[.]181:56002\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 61050,
        "lastCalculated": "2026-10-15 03:23 IST"
    }
};
