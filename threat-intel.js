// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-15T18:50:17.317191+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-15T18:50:16.745389+05:30",
    "lastUpdatedFormatted": "Oct 15, 2026 at 06:50 PM IST",
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
                "hxxp://sp22ct-zarur-biz-loru-kemu[.]pages[.]dev/",
                "hxxps://sp33ct-fenaru-biz-kelovi-maneto[.]pages[.]dev/",
                "hxxps://buzqari-mpt-felvuno-p4d9ka86[.]pages[.]dev/",
                "hxxp://mt1xv-55n-xil2-hbkcy-30-09-2026-hh[.]pages[.]dev/",
                "hxxp://sp22ct-vemak-biz-keli-pazu[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1152,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1152,
                "newInLastHour": 100,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fe286eb882d9fcd70e471e35cce570b2862199d377588070abe6b4521d3c8fce",
                " \"2538c962c062638c7ab2562195254a605dc34894c341bf41f2e1b1e388d76d14",
                " \"6b68a1f5df0a2e64d8d5092dacf355a35bbab4e7d5d6c193234a05bc5037dcbc",
                " \"831653f7c74cc040f33a5fe19ab52db17f49c654c401cbd61ce006750ae5864a",
                " \"42169bf27014012a01236104febd2106e54f874d570a2536f30bfc5bbd139283"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 536,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "2.26.75.0/24",
                "2.27.5.0/24",
                "2.27.62.0/24",
                "2.58.56.0/24",
                "2.59.152.0/24"
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
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]192[.]129[.]106",
                "1[.]215[.]138[.]43",
                "1[.]215[.]43[.]201"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4080,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4080,
                "newInLastHour": 4080,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]240[.]247",
                "1[.]178[.]138[.]99",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33892,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33892,
                "newInLastHour": 33892,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]127[.]64[.]151:40844/bin[.]sh",
                "hxxp://61[.]52[.]182[.]76:44809/i",
                "hxxp://27[.]45[.]183[.]118:52733/i",
                "hxxp://115[.]55[.]130[.]202:34606/bin[.]sh",
                "hxxp://61[.]243[.]141[.]19:41846/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8585,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8585,
                "newInLastHour": 7881,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://eo[.]7dewaslot[.]org/gg\"",
                " \"hxxps://eo[.]7dewaslot[.]org/l1q/\"",
                " \"hxxps://eo[.]7dewaslot[.]org/l1q\"",
                " \"hxxps://eo[.]7dewaslot[.]org/x\"",
                " \"hxxps://eo[.]7dewaslot[.]org/xa\""
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
            "iocCount": 10760,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10760,
                "newInLastHour": 18,
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
            "totalIndicators": 71141,
            "activeSources": 8,
            "criticalAlerts": 45994,
            "activeCampaigns": 284
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35064,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10930,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 6381,
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
                "count": 33785,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]12[.]226[.]4:57201/bin[.]sh",
                    "hxxp://203[.]204[.]246[.]77:54733/i",
                    "hxxp://120[.]28[.]194[.]30:34491/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]192[.]129[.]106",
                    "1[.]192[.]216[.]192",
                    "1[.]193[.]58[.]33"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 2068,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://jx[.]78royal[.]org/eb9\"",
                    " \"hxxps://jx[.]78royal[.]org/xj0\"",
                    " \"hxxps://jx[.]78royal[.]org/mt\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1681,
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
                "count": 1457,
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
                "count": 1286,
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
                "count": 835,
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
                "count": 717,
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
        "fastestRisingThreat": " \"win.vshell\"",
        "totalAttacksThisHour": 61276,
        "lastCalculated": "2026-10-15 18:50 IST"
    }
};
