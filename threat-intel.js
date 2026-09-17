// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-17T18:52:41.082150+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-17T18:52:40.743221+05:30",
    "lastUpdatedFormatted": "Sep 17, 2026 at 06:52 PM IST",
    "comparisonPeriod": "Sep 16 \u2013 Sep 17, 2026",
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
                "hxxps://rss[.]sayler[.]at/go/y2c4y254/z274x264",
                "hxxps://rss2[.]sayler[.]at/go/y2c4y254/z274x264",
                "hxxps://tarifas-pagban[.]lovable[.]app/",
                "hxxps://facebook-login-it[.]blogspot[.]com/?m=1",
                "hxxps://www[.]facebook-login-it[.]blogspot[.]com/?m=1"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1500,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1500,
                "newInLastHour": 232,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a46f525b9160b4144bf61eef8132fc97e523844cf2e1b88ac33d003999c3b8a9",
                " \"7e112f38891d43ebbe3676b0eed897835c1fe40a6c6d46a1b65791be07a469f5",
                " \"38d037df5a3fc9efa34e0a67a5e40eaf2456348dccc9e7e00e0ed0375db3056a",
                " \"dbbea98a875d8b00f7169dd2a53ea62a690f11e41fa84a64b480290d3988b02a",
                " \"6cda99ba17354145ed1734a58998070f832f92ee9435a95c4665de700ef2e161"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1712,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1712,
                "newInLastHour": 3,
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
                "1[.]12[.]56[.]30",
                "1[.]15[.]14[.]29",
                "1[.]24[.]16[.]137",
                "1[.]24[.]16[.]168"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4726,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4726,
                "newInLastHour": 4726,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]245[.]185",
                "1[.]10[.]244[.]218",
                "1[.]14[.]64[.]225",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12878,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12878,
                "newInLastHour": 12878,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://103[.]31[.]103[.]204:47741/i",
                "hxxp://222[.]127[.]68[.]176:53259/i",
                "hxxp://175[.]150[.]92[.]98:60118/bin[.]sh",
                "hxxp://119[.]114[.]152[.]239:34836/i",
                "hxxp://119[.]116[.]251[.]152:58006/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6994,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6994,
                "newInLastHour": 6808,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rmm[.]smartscreen[.]lifestyle\"",
                " \"119[.]3[.]156[.]192:8084\"",
                " \"141[.]11[.]139[.]233:8081\"",
                " \"43[.]251[.]227[.]131:8084\"",
                " \"8[.]148[.]187[.]55:8080\""
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
            "iocCount": 10678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10678,
                "newInLastHour": 53,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f87bd5bde3e0a713e8554f419f7c80768c5ea60",
                "9700462dfd419d0295b2753079208e939a853dce",
                "45082929b125b5fb1336345d27ace6b7b85d1f77",
                "f419fdfce448a7313ebd93fe4d93ea7d07a1e56d",
                "1e5bfc073ee72f5ae99507c87f2479ec1d5f43b7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49426,
            "activeSources": 8,
            "criticalAlerts": 25187,
            "activeCampaigns": 254
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14543,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10644,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4501,
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
                    "1[.]12[.]56[.]30",
                    "1[.]24[.]16[.]137"
                ]
            },
            {
                "name": "malware_download",
                "count": 12801,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://176[.]119[.]79[.]164:37662/bin[.]sh",
                    "hxxp://196[.]189[.]101[.]82:53189/i",
                    "hxxp://190[.]109[.]228[.]251:46137/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1711,
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
                "count": 1444,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1364,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]220[.]163[.]36:443\"",
                    " \"benaditahd[.]duckdns[.]org\"",
                    " \"172[.]94[.]18[.]103:78\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1359,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"123[.]56[.]124[.]3:80\"",
                    " \"123[.]56[.]124[.]3:8080\"",
                    " \"123[.]56[.]124[.]3:22\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1058,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"dc834c0c0982771016202f3ca1808d3bba329379eba79e1d04db31cafb1f43e1\"",
                    " \"afd47ef7378e573c8e575b2030355a2b65a888bdaf56c00a1e6f8e5dc980e7e5\"",
                    " \"1a0c3d520e16ae12ffa918032e608f573b716f009a05c35f64b53f128bf7376d\""
                ]
            },
            {
                "name": "Vidar",
                "count": 774,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
                    "f166dfb0e185cab2e7bfdfff50edc67f238195c3",
                    "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09"
                ]
            },
            {
                "name": " \"n/a",
                "count": 767,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"9db957aab489232fbd081674b6317e9c32a30ea1d6ee3572b275a3c2b72994b5",
                    " \"9743f6525b96c60db418385ae9d035c8251c62811a381063642bdc9703f6b5bd",
                    " \"ac4bab56a5cb00a87d7fdb911d14201a50f01a29e4fa2ff1947acb9fe360a833"
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_stealer\"",
        "totalAttacksThisHour": 40005,
        "lastCalculated": "2026-09-17 18:52 IST"
    }
};
