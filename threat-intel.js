// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-02T04:20:48.269967+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-02T04:20:47.960674+05:30",
    "lastUpdatedFormatted": "Oct 02, 2026 at 04:20 AM IST",
    "comparisonPeriod": "Oct 01 \u2013 Oct 02, 2026",
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
                "hxxps://webmail-ionos-auth-app-suite-didactic-carnival-production[.]up[.]railway[.]app/#janet1@6323c2d225fb097144f275f1c83df280b552[.]com",
                "hxxps://sendbscusdtbnb[.]vercel[.]app/",
                "hxxps://ka-importexportmicroframework[.]vercel[.]app/",
                "hxxp://www[.]ka-importexportmicroframework[.]vercel[.]app/",
                "hxxps://www[.]xhwdone[.]xyz/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1425,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1425,
                "newInLastHour": 36,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"691fbfcab92967dc5d2b1c063c20adf89789a84f698055cd50f09611a0adec34",
                " \"303ce8e1d845477561bfa83d80672b552683f0231e0819a1858e026f8c7712d6",
                " \"dcf932ee3436bd34d8408a04ea0578eae7254fc23ce8f7e78dcd0256292f5fae",
                " \"946b1984d3f13f0747b474534e36bedac8fb13abc524774d1e423348d54a894d",
                " \"b515ddfae69cd484d523feb2544704b2df62e029e00d9f646410eef4bd6832ba"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1690,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1690,
                "newInLastHour": 16,
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
                "1[.]15[.]14[.]29",
                "1[.]165[.]215[.]231",
                "1[.]203[.]186[.]149",
                "1[.]213[.]214[.]233",
                "1[.]220[.]119[.]115"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3808,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3808,
                "newInLastHour": 3808,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]162[.]216[.]37",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15922,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15922,
                "newInLastHour": 15922,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]41[.]240[.]155:47349/bin[.]sh",
                "hxxp://119[.]115[.]166[.]198:48650/i",
                "hxxp://94[.]183[.]174[.]75/bins/morte[.]m68k",
                "hxxp://94[.]183[.]174[.]75/bins/morte[.]mips",
                "hxxp://94[.]183[.]174[.]75/bins/morte[.]arm7"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6638,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6638,
                "newInLastHour": 5873,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"e70745807f277cf046c8ec352b296f748a3fd497f4f0b2e0f6818e37608051a6\"",
                " \"d445fbca8303ea2e7cd8fa3544dba4c13e4cc6c38c90ec60579cf3374fcf53da\"",
                " \"a8d5fe2fc077e3385a64f1d75ebbed2c75f1c98897b2a205ecc4ab49280f1d6e\"",
                " \"504a8cb701a8c8e90589a72a3f52d9efc33abd65913d20ad8774ddc88bb18c1b\"",
                " \"e33c374022736ffd062776b005e1d9666e73c580dc0c3b26921c9ac75e7b7207\""
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
            "iocCount": 10809,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10809,
                "newInLastHour": 154,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d2bf0b9b894431307b05b47812645ef42cf169e6",
                "b4d984de5a6fad2a262360fede253124b6d08b41",
                "fae032e423544ab9e33d6e656d1a239e74b04637",
                "983cbec3d48ec620539fe07e608568279fe973ec",
                "cc3986460c930a304c6f86172dbafe27e3ab5ff7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51187,
            "activeSources": 8,
            "criticalAlerts": 28003,
            "activeCampaigns": 263
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17312,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10691,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4661,
                "trend": "stable",
                "percentage": 0
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
                "name": "malware_download",
                "count": 15864,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://221[.]225[.]253[.]118:47327/bin[.]sh",
                    "hxxp://42[.]237[.]252[.]225:53425/bin[.]sh",
                    "hxxp://60[.]18[.]1[.]146:39352/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1676,
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
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1322,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]139[.]239[.]108:443\"",
                    " \"93[.]185[.]165[.]104:22\"",
                    " \"93[.]185[.]165[.]104:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 768,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8bc45d63603370c41a2d7d352cdecb01281f5264",
                    "4f2559300051882eff69dc21bc3d27da6f988751",
                    "5e64c59a01d6dbe03bd0b794c1d505663451c393"
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
                "count": 710,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 628,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]41[.]92:56003\"",
                    " \"45[.]139[.]104[.]232:443\"",
                    " \"45[.]139[.]104[.]199:443\""
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
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
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 41114,
        "lastCalculated": "2026-10-02 04:20 IST"
    }
};
