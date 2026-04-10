// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-10T09:06:11.458773+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-10T09:06:11.150329+05:30",
    "lastUpdatedFormatted": "Apr 10, 2026 at 09:06 AM IST",
    "comparisonPeriod": "Apr 09 \u2013 Apr 10, 2026",
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
                "hxxp://nguyenminhhoangc[.]github[.]io/test/",
                "hxxp://s117x[.]xyz/",
                "hxxps://netflix-clone-olive-ten[.]vercel[.]app/",
                "hxxps://mial[.]suport-apple[.]cloud/signIn/jp-ja/shop/TP4fUx7y6/",
                "hxxps://acc[.]muralhasolene[.]pt/Latine_promo/auth/cancel[.]php"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 601,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 601,
                "newInLastHour": 45,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1ebb03f11c7356520fc8bac4a7b49c83760740a3e00eb00309096cacca50bcc0",
                " \"474ed00146a66c81612448ed264e53e790cf2f12e5f6d90be7ad02791e8b6f77",
                " \"81e70aac5e3b1450e9a1ecee78924e69160d6586d76479810e2617ae9b3b17eb",
                " \"052ff826f594640830e8785073dc5d34567029fb085984b8aa72ef04fd24c9f8",
                " \"d66447d601033553dc41cffb648697ee43d55c4fb238350c9dd7671e55d21ea7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1580,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1580,
                "newInLastHour": 18,
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
                "1[.]0[.]248[.]118",
                "1[.]123[.]227[.]253",
                "1[.]159[.]69[.]241",
                "1[.]173[.]64[.]98",
                "1[.]178[.]175[.]72"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 1611,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 1611,
                "newInLastHour": 1611,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]214[.]197[.]163",
                "1[.]222[.]42[.]237",
                "1[.]54[.]84[.]154",
                "1[.]65[.]137[.]250"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21386,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21386,
                "newInLastHour": 21386,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://38[.]156[.]90[.]30:45109/i",
                "hxxps://link-gate[.]symposiumwash[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://125[.]47[.]222[.]153:35159/bin[.]sh",
                "hxxps://site-hub[.]symposiumwash[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://clean-svc[.]symposiumwash[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1069,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1069,
                "newInLastHour": 1063,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"art-api[.]choreograpshrew[.]in[.]net\"",
                " \"link-gate[.]symposiumwash[.]in[.]net\"",
                " \"site-hub[.]symposiumwash[.]in[.]net\"",
                " \"clean-svc[.]symposiumwash[.]in[.]net\"",
                " \"wash-vault[.]symposiumwash[.]in[.]net\""
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
            "iocCount": 9480,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9480,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "64887c68018383ce388d77b04d08fd918f97b3c1",
                "ee4dd385bf849f7621deed67382e64c17b864e20",
                "05f047ee67a239b926284ff3cafb7edd8af328e0",
                "3787ee8b1d038bf52620e33956b452f4aa38214f",
                "047f23f9ad2edaa5e34ae660ac30cd4ec5975e18"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49892,
            "activeSources": 8,
            "criticalAlerts": 31938,
            "activeCampaigns": 201
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22444,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9494,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 410,
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
                "percentage": 87
            },
            {
                "name": "Tech",
                "percentage": 12
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21792,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://shadowneural[.]citizenconjunct[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxp://85[.]239[.]147[.]6/files/6749237131/WjRZCsK[.]msi",
                    "hxxp://85[.]239[.]147[.]6/files/1781548144/cWyzSxe[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]3[.]240",
                    "1[.]15[.]227[.]58",
                    "1[.]159[.]69[.]241"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1565,
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
                "count": 1402,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "05f047ee67a239b926284ff3cafb7edd8af328e0",
                    "c9efd5520dce50014bcd13b73569034d0e3971f2",
                    "e7decd829f1c348a1d04ac6d5ce1470aa2ef4cea"
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
                "count": 669,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ee4dd385bf849f7621deed67382e64c17b864e20",
                    "3787ee8b1d038bf52620e33956b452f4aa38214f",
                    "f4c8b11947963395a1a1624aa04e8a717693f297"
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
                "name": " \"js.clearfake\"",
                "count": 486,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"shadowneural[.]citizenconjunct[.]in[.]net\"",
                    " \"17qaxj2h[.]citizenconjunct[.]in[.]net\"",
                    " \"ultra-tr4d[.]citizenconjunct[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 475,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "047f23f9ad2edaa5e34ae660ac30cd4ec5975e18",
                    "19475fe405f20f1a346647ad71edb76bf9640797",
                    "1e7353a4873db7f099b9be0bbcdbd790e9b6014c"
                ]
            },
            {
                "name": "OffLoader",
                "count": 389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e0a27ce50876b546c868d31dc2dc7a5688e4af9d",
                    "69b227d6aa7c8ac8710744ff4947d044d3c454c7",
                    "927e7a993c4e839007a5d10c4f97907cf436ca97"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 39442,
        "lastCalculated": "2026-04-10 09:06 IST"
    }
};
