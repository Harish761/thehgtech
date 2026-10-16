// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-16T18:41:32.700518+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-16T18:41:32.272514+05:30",
    "lastUpdatedFormatted": "Oct 16, 2026 at 06:41 PM IST",
    "comparisonPeriod": "Oct 15 \u2013 Oct 16, 2026",
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
                "hxxp://help-contact-757643[.]vercel[.]app/",
                "hxxp://vajrapu-rutvika[.]github[.]io/netflix-ui-clone",
                "hxxp://info-resmiid[.]blogspot[.]com/",
                "hxxps://f005[.]backblazeb2[.]com/file/jugueh/SignintoXfinity[.]html",
                "hxxps://f005[.]backblazeb2[.]com/file/Xfinitytvconnect/SignintoXfinity[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1045,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1045,
                "newInLastHour": 113,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c0de153fc5580c1398c6a4ab9ed0cbb2c005fc13c8b0072b38166a3dedf9ce65",
                " \"f160e1359fd03fb5e2aedf35a405756a1f319df8b44316e3bd3c981c1563c5d9",
                " \"b08bff811d20fb95abbb8a09175f33a749c1dff6967b86e583ba5f5ee08872e5",
                " \"ca47e13a2980817e7849ddfef70312542ed11efaeba7b1b583161c06a440baf2",
                " \"7621cb4157d936d44a46f7a089ef86c4e9961c1a75712122bc1be4d547343da9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1673,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1673,
                "newInLastHour": 10,
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
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]183[.]41[.]170"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4248,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4248,
                "newInLastHour": 4248,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]179[.]232[.]194",
                "1[.]180[.]246[.]242",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33748,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33748,
                "newInLastHour": 33748,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://103[.]19[.]49[.]134:37431/bin[.]sh",
                "hxxp://42[.]235[.]91[.]212:50078/bin[.]sh",
                "hxxp://42[.]237[.]44[.]123:57470/i",
                "hxxp://60[.]23[.]179[.]155:39285/i",
                "hxxp://60[.]214[.]241[.]229:46912/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8314,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8314,
                "newInLastHour": 7435,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"38[.]60[.]227[.]210:80\"",
                " \"162[.]14[.]122[.]146:8080\"",
                " \"162[.]14[.]122[.]146:80\"",
                " \"162[.]14[.]122[.]146:22\"",
                " \"hxxps://dg[.]888idrcatchy[.]org/q0\""
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
            "iocCount": 10816,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10816,
                "newInLastHour": 9,
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
            "totalIndicators": 70657,
            "activeSources": 8,
            "criticalAlerts": 45577,
            "activeCampaigns": 295
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34638,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10939,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 6592,
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
                "percentage": 99
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
                "count": 33573,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]235[.]91[.]212:50078/i",
                    "hxxp://203[.]160[.]9[.]182:60611/i",
                    "hxxp://191[.]243[.]174[.]35:36287/i"
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
                "count": 2022,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://ih[.]888-fw[.]com/py\"",
                    " \"hxxps://ih[.]888-fw[.]com/vu\"",
                    " \"hxxps://ih[.]888-fw[.]com/w2/\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1679,
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
                "count": 1276,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"193[.]25[.]217[.]103:80\"",
                    " \"193[.]25[.]217[.]103:22\"",
                    " \"203[.]98[.]68[.]25:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 834,
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
                "count": 718,
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
                "count": 641,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"78[.]142[.]218[.]10:56002\"",
                    " \"5[.]189[.]168[.]42:20001\"",
                    " \"38[.]49[.]214[.]29:56002\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 60868,
        "lastCalculated": "2026-10-16 18:41 IST"
    }
};
