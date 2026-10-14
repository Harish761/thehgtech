// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-15T01:39:23.211925+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-15T01:39:22.664088+05:30",
    "lastUpdatedFormatted": "Oct 15, 2026 at 01:39 AM IST",
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
            "iocCount": 1251,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1251,
                "newInLastHour": 531,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"752df87d1bae9fa745c502ebc1ef2aada919a30900fffec63e40bf4b94bdf6cb",
                " \"148b8058c5b60c81ebc4364cde6a72a0e1d34ee47d66d3e99b6ff6a0fbb2f795",
                " \"87fa7666999e745d183a6e33ad4b9a5dca6309de6822d8e9ce4c52369fa4e74d",
                " \"2fe60b18bb97ad7ea8bc8f746be851205e59ed68cd2244784ef0d052758e4346",
                " \"fa88ed7a4f817bd82d8c992abc559075261492bcab83abbead6d0dacdbffda7a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1652,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1652,
                "newInLastHour": 56,
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
                "1[.]117[.]58[.]215",
                "1[.]14[.]149[.]30",
                "1[.]183[.]41[.]171",
                "1[.]192[.]129[.]106",
                "1[.]192[.]216[.]192"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4164,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4164,
                "newInLastHour": 4164,
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
            "iocCount": 34104,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34104,
                "newInLastHour": 34104,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]184[.]247[.]90:37017/i",
                "hxxp://219[.]155[.]208[.]94:37290/i",
                "hxxp://219[.]157[.]18[.]209:57018/bin[.]sh",
                "hxxp://60[.]23[.]232[.]97:34316/i",
                "hxxp://182[.]113[.]207[.]181:34455/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8227,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8227,
                "newInLastHour": 7413,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://t9[.]77tuna[.]org/l3\"",
                " \"hxxps://t9[.]77tuna[.]org/i9\"",
                " \"r82uywn7[.]mbaconsultingus[.]net\"",
                " \"hxxps://t9[.]77tuna[.]org/u/\"",
                " \"hxxps://t9[.]77tuna[.]org/u\""
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
            "iocCount": 10966,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10966,
                "newInLastHour": 233,
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
            "totalIndicators": 70843,
            "activeSources": 8,
            "criticalAlerts": 45652,
            "activeCampaigns": 281
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34937,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10715,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 6398,
                "trend": "stable",
                "percentage": 7
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
                "count": 33986,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://175[.]146[.]1[.]197:37163/i",
                    "hxxp://105[.]225[.]189[.]31:40545/i",
                    "hxxp://45[.]198[.]224[.]60/abuse-antirobot/pentagon"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]192[.]129[.]106",
                    "1[.]192[.]216[.]192"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 1820,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://cq[.]777wins[.]org/oj\"",
                    " \"hxxps://cq[.]777wins[.]org/n7\"",
                    " \"hxxps://cq[.]777wins[.]org/gg\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1625,
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
                "count": 1447,
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
                "count": 1319,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"158[.]94[.]210[.]215:8080\"",
                    " \"158[.]94[.]210[.]215:22\"",
                    " \"158[.]94[.]210[.]215:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 772,
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
                "count": 700,
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
                "count": 628,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]127[.]61[.]125:56003\"",
                    " \"38[.]127[.]61[.]125:443\"",
                    " \"38[.]127[.]61[.]125:56001\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 61806,
        "lastCalculated": "2026-10-15 01:39 IST"
    }
};
