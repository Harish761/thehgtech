// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-19T04:01:14.802415+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-19T04:01:14.497565+05:30",
    "lastUpdatedFormatted": "Sep 19, 2026 at 04:01 AM IST",
    "comparisonPeriod": "Sep 18 \u2013 Sep 19, 2026",
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
                "hxxps://www[.]roblox[.]ly/users/8231296959/profile",
                "hxxps://www[.]roblox[.]com[.]am/games/142823291/Murder-Mystery-2?privateServerLinkCode=037625068419256218425781722588",
                "hxxp://pemenang-shopee4[.]blogspot[.]com/",
                "hxxps://ff[.]alwayssecuredhub[.]net/public/assets/jquery/jquery-3[.]3[.]1[.]min[.]js/",
                "hxxp://www[.]blizzcon[.]us[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1421,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1421,
                "newInLastHour": 56,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"38e455c6c0e4b945e85bc34d895c1d5cd57395efb4c62c6c7a87368a03ef69fc",
                " \"317df9d15a308fd86cb69a3f5a5370107a1dcc80539d96d22e70555616708da5",
                " \"818c7b44551ad9cc75a3b9494a49aa99622040d732ed30832e3f85bf4ed15144",
                " \"f1b98e5f388d1e98045b9b0575e03b767f104108ca10910e38ec91800b454f02",
                " \"aea585dd6cf7e15867a826ef0c22aca50b6ef3563372682b7c6530b2d51b39c0"
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
                "1[.]10[.]172[.]57",
                "1[.]117[.]59[.]169",
                "1[.]14[.]121[.]115",
                "1[.]15[.]14[.]29",
                "1[.]189[.]89[.]243"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5657,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5657,
                "newInLastHour": 5657,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]10[.]244[.]218",
                "1[.]15[.]21[.]86",
                "1[.]161[.]144[.]132",
                "1[.]2[.]222[.]129"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13111,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13111,
                "newInLastHour": 13111,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://150[.]241[.]65[.]250:889/venv/lib64/python3[.]12/site-packages/cryptography/hazmat/bindings/_rust[.]abi3[.]so",
                "hxxp://150[.]241[.]65[.]250:889/venv/bin/python3[.]12",
                "hxxp://219[.]157[.]244[.]150:59913/i",
                "hxxp://125[.]25[.]205[.]234:41954/i",
                "hxxp://219[.]157[.]244[.]150:59913/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6801,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6801,
                "newInLastHour": 5457,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dredibrainy[.]workers[.]dev\"",
                " \"m2jml0yu[.]en-xenburn[.]com\"",
                " \"c5kwvkoh[.]greenestreetchurch[.]com\"",
                " \"www[.]icalicenseuk[.]freebusinessdebtrecovery[.]com\"",
                " \"belser-immo[.]ch\""
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
            "iocCount": 10714,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10714,
                "newInLastHour": 120,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c625552b0cc88337be1533622d895a90d8f2d227",
                "c8f25096d3b14521a804d30fb8d618f4f0b33950",
                "d260d414670f40733184875b60bb353632e73fcc",
                "6e35a76a571969f0e27a8c8c1c11c8aa21330887",
                "894348a13bd989cadc0e7dab223b2d98dd2a2a8f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48926,
            "activeSources": 8,
            "criticalAlerts": 25143,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14545,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10598,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4581,
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
                    "1[.]10[.]172[.]57",
                    "1[.]117[.]59[.]169",
                    "1[.]14[.]121[.]115"
                ]
            },
            {
                "name": "malware_download",
                "count": 13106,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]118[.]244[.]56:47402/bin[.]sh",
                    "hxxp://119[.]179[.]238[.]227:50903/bin[.]sh",
                    "hxxp://175[.]165[.]150[.]216:43891/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1683,
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
                "count": 1442,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9700462dfd419d0295b2753079208e939a853dce",
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1379,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"36[.]255[.]97[.]162:4045\"",
                    " \"8[.]160[.]168[.]147:80\"",
                    " \"8[.]160[.]168[.]147:8080\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1351,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"80[.]190[.]77[.]86:1003\"",
                    " \"128[.]90[.]136[.]246:4444\"",
                    " \"102[.]220[.]163[.]36:7707\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 771,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"f179f0a98187678897112bdd507c7eaef56cf25a420707989e29dd88e428789e",
                    " \"00ba0d5aea129f098b5a609633ac77cd642fddba8b64f6332e49e6d33294992e",
                    " \"a855e0b2c37792f08d340794d874a23be9029745b73e79812b03803d84eaf307"
                ]
            },
            {
                "name": "Vidar",
                "count": 760,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6e35a76a571969f0e27a8c8c1c11c8aa21330887",
                    "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                    "513c67627217e9e62bf86dad646acdccca6bae7d"
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
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 39735,
        "lastCalculated": "2026-09-19 04:01 IST"
    }
};
