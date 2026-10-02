// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-02T10:55:33.887455+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-02T10:55:33.545877+05:30",
    "lastUpdatedFormatted": "Oct 02, 2026 at 10:55 AM IST",
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
                "hxxps://2mdinfissi[.]it/",
                "hxxps://cherryshinde99-hash[.]github[.]io/My-first-website-/",
                "hxxps://fatimamajeeddd[.]github[.]io/amazone-clone/",
                "hxxps://paaqk-p0f-sbr5-i4w1j-25-09-2026-hh[.]pages[.]dev/",
                "hxxps://myvu4-l59-67vd-l0ycf-25-09-2026-hh[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1352,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1352,
                "newInLastHour": 79,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"c80debfcc13b6b9dc675b48154f331cfa9aba5af149d3899a9f23a1e09cdc64a",
                " \"7bac68e19b279f768e36b194f39de21f17dcdb6dacdcf27fa6f14d851fe9733d",
                " \"ebe315f58648a2d4a30e607230fd07cebd6251a054d4b7fe3e1078e8991857d7",
                " \"bfad966f4b09e89b20d72d2fa16d2bc0a305297621d2eb88f4d8768d7ed92633",
                " \"c69576b1daa1246563e2391f84ad603c6fba454adc363146712a2e77f7b09510"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1687,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1687,
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
                "1[.]117[.]171[.]170",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]193[.]63[.]239",
                "1[.]193[.]63[.]84"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3231,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3231,
                "newInLastHour": 3231,
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
            "iocCount": 15591,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15591,
                "newInLastHour": 15591,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://31[.]4[.]254[.]241:49417/bin[.]sh",
                "hxxp://117[.]131[.]92[.]150:36075/i",
                "hxxp://42[.]237[.]63[.]135:43965/i",
                "hxxp://115[.]50[.]7[.]28:59792/bin[.]sh",
                "hxxp://210[.]97[.]100[.]192:58715/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6536,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6536,
                "newInLastHour": 5759,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"203[.]88[.]118[.]26:80\"",
                " \"203[.]88[.]118[.]26:8080\"",
                " \"203[.]88[.]118[.]26:443\"",
                " \"185[.]33[.]86[.]141:8080\"",
                " \"zu[.]369jk[.]org\""
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
            "iocCount": 10856,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10856,
                "newInLastHour": 58,
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
            "totalIndicators": 51789,
            "activeSources": 8,
            "criticalAlerts": 28160,
            "activeCampaigns": 263
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17373,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10787,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4662,
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
                "count": 15922,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]41[.]240[.]155:47349/bin[.]sh",
                    "hxxp://119[.]115[.]166[.]198:48650/i",
                    "hxxp://94[.]183[.]174[.]75/bins/morte[.]m68k"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]165[.]215[.]231",
                    "1[.]203[.]186[.]149"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1690,
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
                "count": 1456,
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
                "count": 792,
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
                "count": 712,
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
                "name": " \"js.iclickfix\"",
                "count": 571,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"wishindopratamaabadi[.]com\"",
                    " \"wtf-info[.]com\"",
                    " \"wuzzhosting[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 40025,
        "lastCalculated": "2026-10-02 10:55 IST"
    }
};
