// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-17T10:14:38.133531+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-17T10:14:37.782242+05:30",
    "lastUpdatedFormatted": "Sep 17, 2026 at 10:14 AM IST",
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
                "hxxps://vmi3269526[.]contaboserver[.]net/",
                "hxxps://security-server-page--heainjus1[.]replit[.]app/",
                "hxxps://oginstagram[.]com/",
                "hxxp://www[.]d[.]oginstagram[.]com/",
                "hxxp://project-windycitylawfirm[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1715,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1715,
                "newInLastHour": 119,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"9db957aab489232fbd081674b6317e9c32a30ea1d6ee3572b275a3c2b72994b5",
                " \"dc8caaee7a1fd32f9f54961e161b1209b458233b509ecda9900090c179c83102",
                " \"9743f6525b96c60db418385ae9d035c8251c62811a381063642bdc9703f6b5bd",
                " \"ac4bab56a5cb00a87d7fdb911d14201a50f01a29e4fa2ff1947acb9fe360a833",
                " \"b80a275eb2c3abe0f0a497eac27c908628f3472f9a3de0e8f4d7518e4c965a2d"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1711,
                "newInLastHour": 13,
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
                "1[.]12[.]56[.]30",
                "1[.]24[.]16[.]137",
                "1[.]24[.]16[.]168",
                "1[.]24[.]16[.]60"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4747,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4747,
                "newInLastHour": 4747,
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
            "iocCount": 12801,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12801,
                "newInLastHour": 12801,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://176[.]119[.]79[.]164:37662/bin[.]sh",
                "hxxp://196[.]189[.]101[.]82:53189/i",
                "hxxp://190[.]109[.]228[.]251:46137/i",
                "hxxp://61[.]53[.]149[.]8:37773/i",
                "hxxp://180[.]244[.]8[.]137:47931/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7228,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7228,
                "newInLastHour": 6023,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"5o1lb12w[.]toxyk[.]store\"",
                " \"toxyk[.]store\"",
                " \"123[.]56[.]124[.]3:80\"",
                " \"123[.]56[.]124[.]3:8080\"",
                " \"123[.]56[.]124[.]3:22\""
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
            "iocCount": 10666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10666,
                "newInLastHour": 101,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1e5bfc073ee72f5ae99507c87f2479ec1d5f43b7",
                "c3e6df2402e57af3e0b7c66f8282efec4a387ac6",
                "ba3714d484afb75fd03911c59aa096cee9595955",
                "90bbe9f7eacacb9bff89bbe1345a2cb4a30d2eed",
                "46b898af8e29cb2fe186de2bfdf60bc01d617720"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49937,
            "activeSources": 8,
            "criticalAlerts": 25510,
            "activeCampaigns": 252
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14918,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10592,
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
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]56[.]30"
                ]
            },
            {
                "name": "malware_download",
                "count": 13221,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]142[.]242[.]76:51781/i",
                    "hxxp://222[.]127[.]53[.]189:44150/i",
                    "hxxp://222[.]142[.]242[.]76:51781/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1701,
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
                "count": 1443,
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
                "count": 1363,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"114[.]215[.]188[.]153:888\"",
                    " \"139[.]196[.]174[.]152:83\"",
                    " \"192[.]3[.]199[.]18:443\""
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
                "name": " \"n/a",
                "count": 753,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"a51cd82b5a79b11cdbdb00cff26c7fd39ad6a4a5b410d2d20d3219527b93e595",
                    " \"40bbdc238176be8fb2fc89145aed45b7d0c0150191d1101a40df85070b0c4398",
                    " \"e020d703bde68b8d587bf7a5345f3e306ad06f1b732c0cf4ebd3950c90da53a0"
                ]
            },
            {
                "name": "Vidar",
                "count": 746,
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
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 39109,
        "lastCalculated": "2026-09-17 10:14 IST"
    }
};
