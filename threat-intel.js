// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-09T14:51:25.216570+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-09T14:51:24.907108+05:30",
    "lastUpdatedFormatted": "Apr 09, 2026 at 02:51 PM IST",
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
            "iocCount": 794,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 794,
                "newInLastHour": 135,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9cf9403b0141d986622879b72f8049f55cd6bfb2588c25b5eeb05a0d839bb507",
                " \"642687daf4a3bd204fa418cde7b2db2d95afb1dbfc82ef52ddbe63b204d8352b",
                " \"97dfe97161a223b71ddbc56f8dd723aa705c2fd2a79f2b35d861037fba2d571b",
                " \"d993dfac5e0f31b06b6c44c4737fa78d642d25f82c8a5d49af8c3beadcf5804d",
                " \"cd65e39372824319e0c3697ff51857c2a79ed61df51d637a1983167c1827d84e"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1582,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1582,
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
                "1[.]173[.]64[.]98",
                "1[.]178[.]175[.]72",
                "1[.]182[.]190[.]117"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3153,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3153,
                "newInLastHour": 3153,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]214[.]197[.]163",
                "1[.]222[.]42[.]237",
                "1[.]245[.]207[.]104",
                "1[.]65[.]137[.]250",
                "1[.]94[.]18[.]250"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21476,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21476,
                "newInLastHour": 21476,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://fold-sync[.]crumpledzev[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://222[.]138[.]150[.]240:34110/i",
                "hxxps://i[.]postimg[.]cc/R0B3TQyB/image-1[.]png",
                "hxxps://files[.]catbox[.]moe/7esw3p[.]dat",
                "hxxps://path-hub[.]desertpract[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1038,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1038,
                "newInLastHour": 1032,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"fold-sync[.]crumpledzev[.]in[.]net\"",
                " \"path-hub[.]desertpract[.]in[.]net\"",
                " \"46[.]226[.]162[.]100:3000\"",
                " \"site-svc[.]desertpract[.]in[.]net\"",
                " \"dry-vault[.]desertpract[.]in[.]net\""
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
            "iocCount": 9501,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9501,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "05f047ee67a239b926284ff3cafb7edd8af328e0",
                "3787ee8b1d038bf52620e33956b452f4aa38214f",
                "047f23f9ad2edaa5e34ae660ac30cd4ec5975e18",
                "f4c8b11947963395a1a1624aa04e8a717693f297",
                "decc8cd1ba84392f1054e0d1394f4f0a9f64b7fa"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49591,
            "activeSources": 8,
            "criticalAlerts": 31606,
            "activeCampaigns": 202
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22103,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9503,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 368,
                "trend": "stable",
                "percentage": 6
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
                "count": 21346,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://83[.]219[.]1[.]198:33984/i",
                    "hxxps://main-gate[.]systemoraengine[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                    "hxxps://core-hub[.]systemoraengine[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]248[.]118",
                    "1[.]123[.]227[.]253",
                    "1[.]173[.]64[.]98"
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
                "count": 668,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f4c8b11947963395a1a1624aa04e8a717693f297",
                    "da6a5ce53cf7938615910d7e9ffb8cf4ab474efd",
                    "ac45fe719d822c245e21c7feb1589a058798ab36"
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
                "count": 490,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"main-gate[.]systemoraengine[.]in[.]net\"",
                    " \"core-hub[.]systemoraengine[.]in[.]net\"",
                    " \"order-svc[.]systemoraengine[.]in[.]net\""
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41104,
        "lastCalculated": "2026-04-09 14:51 IST"
    }
};
