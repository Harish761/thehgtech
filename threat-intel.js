// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-09T08:53:22.640659+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-09T08:53:22.339860+05:30",
    "lastUpdatedFormatted": "Apr 09, 2026 at 08:53 AM IST",
    "comparisonPeriod": "Apr 08 \u2013 Apr 09, 2026",
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
                "hxxp://dpd[.]boxupx[.]cfd/com",
                "hxxps://applene-jp[.]buzz/ja",
                "hxxps://ressourceshumains[.]com/?r=5bd3b478-11db-4b76-9498-a0e46353e12b&rg=eu",
                "hxxp://ipfs[.]io/ipfs/bafkreicinwga2mu43qseu4w4l7qjodxfybxu2qxsz4kdvgsuu5r76kbq3u?eta=3mail@a[.]b[.]c0",
                "hxxps://kksave[.]com/open/ig/3817558989496429588/DT6say2CKwU"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 734,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 734,
                "newInLastHour": 43,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"db20340ec14ba9f06684529efe9e9616938d049848eb6f627bef91018b08a8db",
                " \"cc82f453a128d9060c6579e69940df7e281f9df6d6d23458535c2622df94799f",
                " \"7f34b90ecf5690463fdc3a5e44ee45723779c179e886d647fa00985ad57bfbbb",
                " \"d9a17f4d70a7178e259f1bb9d101aa3821d3f02bca2776fefaaa3693516600d9",
                " \"8c6298e2e814c64ee75b0de25a23821832ecbad4283b5c8b2673cf4aecd278cb"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1584,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1584,
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
                "1[.]14[.]197[.]142",
                "1[.]173[.]64[.]98",
                "1[.]178[.]175[.]72"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3516,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3516,
                "newInLastHour": 3516,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163",
                "1[.]222[.]42[.]237",
                "1[.]245[.]207[.]104",
                "1[.]30[.]199[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21275,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21275,
                "newInLastHour": 21275,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://stream-svc[.]axiomatrixflow[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://shift-node[.]axiomatrixflow[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://182[.]119[.]60[.]108:38299/bin[.]sh",
                "hxxp://222[.]142[.]208[.]17:36803/i",
                "hxxps://data-api[.]axiomatrixflow[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1054,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1054,
                "newInLastHour": 1054,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"shift-node[.]axiomatrixflow[.]in[.]net\"",
                " \"158[.]160[.]75[.]185:40441\"",
                " \"data-api[.]axiomatrixflow[.]in[.]net\"",
                " \"matrix-flow[.]axiomatrixflow[.]in[.]net\"",
                " \"link-gate[.]ontocorex[.]in[.]net\""
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
            "iocCount": 9460,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9460,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6c05fc4f3c4d499c66f8eb1fe92b85bb24c8eb36",
                "41d24d7d852ee6f28502895bd88cb67cafd485f3",
                "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                "7ce02a4df627573696141e40970ef60e246f9f3f",
                "ab6e202e46c7a303b0183cafb694774877b560dd"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49942,
            "activeSources": 8,
            "criticalAlerts": 32000,
            "activeCampaigns": 200
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22505,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9495,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 358,
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
                "count": 21711,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]126[.]124[.]205:45589/i",
                    "hxxp://59[.]101[.]213[.]99:42905/bin[.]sh",
                    "hxxps://grid-core[.]ontoversegrid[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
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
                    "1[.]123[.]227[.]253",
                    "1[.]14[.]197[.]142"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1590,
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
                "count": 1401,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c9efd5520dce50014bcd13b73569034d0e3971f2",
                    "e7decd829f1c348a1d04ac6d5ce1470aa2ef4cea",
                    "42f9fb369604befacac247a220b2275c8e3dbb00"
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
                "count": 666,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ac45fe719d822c245e21c7feb1589a058798ab36",
                    "dcc40fee2faa2a722cf639524a942a8cdfcdcf84",
                    "3873395f0d38d252571338283d55d332d853286d"
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
                "name": " \"js.clearfake\"",
                "count": 489,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"grid-core[.]ontoversegrid[.]in[.]net\"",
                    " \"drift-gate[.]epistemiconflux[.]in[.]net\"",
                    " \"shift-svc[.]epistemiconflux[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 483,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "19475fe405f20f1a346647ad71edb76bf9640797",
                    "1e7353a4873db7f099b9be0bbcdbd790e9b6014c",
                    "ae8ad53efcfcd551c9f41eebf44d0c35e9eff9d4"
                ]
            },
            {
                "name": "OffLoader",
                "count": 387,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "927e7a993c4e839007a5d10c4f97907cf436ca97",
                    "91218c3dfa270cfad49a8b89b573809da6f9002b",
                    "448e34bdaa4390ecde578cf01c491ed16d6563a0"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown\"",
        "totalAttacksThisHour": 41193,
        "lastCalculated": "2026-04-09 08:53 IST"
    }
};
