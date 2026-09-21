// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-22T03:38:06.470767+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-22T03:38:06.145587+05:30",
    "lastUpdatedFormatted": "Sep 22, 2026 at 03:38 AM IST",
    "comparisonPeriod": "Sep 21 \u2013 Sep 22, 2026",
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
                "hxxps://fedexs[.]vip/",
                "hxxp://harshalkadav19[.]github[.]io/spotify",
                "hxxp://aniket055[.]github[.]io/Amazon",
                "hxxps://zara-two-theta[.]vercel[.]app/",
                "hxxps://zara-self-kappa[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1524,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1524,
                "newInLastHour": 53,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2db9688c5f1081b575507cd270eb79e6df9cb3eb16abaf428cc303a633e310ac",
                " \"791b9b6510d61e71c0c3c50b485125d532bb5a1f377710b0ebec0140b69b34fe",
                " \"f813d309920d6109c1bfe88f1020d44814123e884a6a9fdb9bccb8a406c799cc",
                " \"f38f1d07d1c1ca7f7e88d0c26d9d6c69f8e1b913f18d99f3e16a155ff48134ef",
                " \"0071a891148bb7ef7c17e5a1b7caf2119613fc0a7ae1cdc898e8dd0ac5f00e51"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1715,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1715,
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
                "1[.]119[.]194[.]253",
                "1[.]15[.]1[.]125",
                "1[.]189[.]89[.]243",
                "1[.]192[.]110[.]50",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5710,
                "newInLastHour": 5710,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]14[.]122[.]79",
                "1[.]14[.]192[.]95",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13558,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13558,
                "newInLastHour": 13558,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]227[.]200[.]245:37860/bin[.]sh",
                "hxxp://175[.]165[.]80[.]174:39631/i",
                "hxxp://124[.]6[.]167[.]121:39544/i",
                "hxxp://123[.]188[.]104[.]11:33110/i",
                "hxxp://42[.]229[.]168[.]229:53805/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6112,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6112,
                "newInLastHour": 4835,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"101[.]34[.]208[.]175:80\"",
                " \"101[.]34[.]208[.]175:8080\"",
                " \"221[.]236[.]125[.]241:60000\"",
                " \"101[.]34[.]208[.]175:443\"",
                " \"221[.]236[.]125[.]241:9192\""
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
            "iocCount": 10764,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10764,
                "newInLastHour": 7,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "adcff1c66a3ba1c9446886eb9f6efdbec4f17688",
                "99500e5de097a58d95775e1f9da85597851bdb71",
                "54e1ddda090bff894e88ccc2a784f0e9f4c46d97",
                "9b798f7d87edcf42680454660f593afd696ef8ca",
                "e20ecba521fd923644d154963d32d5cd29f4c0b1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48875,
            "activeSources": 8,
            "criticalAlerts": 25835,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15100,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10735,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 4313,
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
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]1[.]125",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13521,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]126[.]249[.]231:50800/bin[.]sh",
                    "hxxp://113[.]231[.]205[.]57:43235/bin[.]sh",
                    "hxxp://125[.]40[.]86[.]231:41619/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1715,
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
                "count": 1449,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "99500e5de097a58d95775e1f9da85597851bdb71",
                    "372b91c0d31a75b4e1765af998d984881e34dab1",
                    "9700462dfd419d0295b2753079208e939a853dce"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1389,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"124[.]223[.]177[.]82:9999\"",
                    " \"109[.]74[.]195[.]111:9002\"",
                    " \"109[.]74[.]195[.]111:8080\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1366,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"147[.]93[.]191[.]75:40100\"",
                    " \"128[.]90[.]135[.]172:4444\"",
                    " \"84[.]247[.]187[.]47:80\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 964,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a05eae6d07b82e2e5451a72266f21fbaf76486ef4920a820988de93e15353a10",
                    " \"25a018cf6bcd998e73608d13e7ec2f917bbe826214a9e7666aa2a3a993e32adf",
                    " \"309387109766fbd31b0bd613d5e22c65d8ff7ccb3a8043b05848e9bce17ca7c8"
                ]
            },
            {
                "name": "Vidar",
                "count": 792,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0bf61cf448206d51a0b7a0cdece647df3ea1196f",
                    "a7bc5bdb50a33449b1f9c6037a703e58caa406bf",
                    "dec7517543aba8ea73a1b336a0e72230bdfab6cc"
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
                "count": 706,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b798f7d87edcf42680454660f593afd696ef8ca",
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vskimmer\"",
        "totalAttacksThisHour": 39468,
        "lastCalculated": "2026-09-22 03:38 IST"
    }
};
