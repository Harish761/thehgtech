// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-15T18:57:27.314230+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-15T18:57:26.937189+05:30",
    "lastUpdatedFormatted": "Sep 15, 2026 at 06:57 PM IST",
    "comparisonPeriod": "Sep 14 \u2013 Sep 15, 2026",
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
                "hxxps://www[.]site-ma-ga-zine-luiza[.]com/site-ma-ga-zine-luiza[.]com/produt",
                "hxxp://es[.]uevangelica[.]edu[.]ar/",
                "hxxps://paypal-app[.]online/",
                "hxxps://zyexx[.]com/t18674c21q3caa437ak9ae2e39dv1902ec25[.]html",
                "hxxps://manjaresdelmar[.]com[.]ar/DROPBOXX[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 984,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 984,
                "newInLastHour": 380,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4a581cb9efa63bfd66d77befcf70e9f5e90438a7d84f8d663656aa750f4d3354",
                " \"865c003a2a3e860e93e3f52b0c14fb6c4d942b4f7c9c45138daa3dd617e08d89",
                " \"0e6e8004d4c58b14e25faed3693bef22a04ca17a9b12300e8ad119053aec66a2",
                " \"dd6df3d665ec826d113f54f8c571ec51798dd24bf552105bffbb3d8e4223b52c",
                " \"d4874d24410f6559ee2e4fefa5d45ee6cfe7f651a012a5001f6a512a3f3733ad"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1667,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1667,
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
                "1[.]12[.]229[.]231",
                "1[.]181[.]200[.]22",
                "1[.]189[.]89[.]152",
                "1[.]193[.]63[.]83",
                "1[.]213[.]214[.]233"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4935,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4935,
                "newInLastHour": 4935,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]64[.]225",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237",
                "1[.]231[.]29[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12840,
                "newInLastHour": 12840,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]51[.]95[.]94:46145/bin[.]sh",
                "hxxp://27[.]215[.]55[.]48:39346/i",
                "hxxp://196[.]191[.]137[.]44:34151/bin[.]sh",
                "hxxp://175[.]165[.]85[.]14:43147/bin[.]sh",
                "hxxp://27[.]215[.]55[.]48:39346/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 9608,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 9608,
                "newInLastHour": 8873,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"board[.]go-frame89[.]one\"",
                " \"46[.]151[.]182[.]34:7007\"",
                " \"47[.]108[.]225[.]4:8082\"",
                " \"47[.]108[.]225[.]4:8011\"",
                " \"47[.]108[.]225[.]4:443\""
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
            "iocCount": 10515,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10515,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "46b898af8e29cb2fe186de2bfdf60bc01d617720",
                "1ea9baef6f12a280c50e7f473298f326272516d4",
                "cb4e3c26f38c41dee4cbb27b77f46221e71821d1",
                "f166dfb0e185cab2e7bfdfff50edc67f238195c3",
                "7841dc140c85781e29108109b73ab67c276a8eed"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48723,
            "activeSources": 8,
            "criticalAlerts": 23796,
            "activeCampaigns": 278
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13115,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10681,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5351,
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
                    "1[.]181[.]200[.]22",
                    "1[.]193[.]63[.]83"
                ]
            },
            {
                "name": "malware_download",
                "count": 12445,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://80[.]67[.]33[.]209:36384/i",
                    "hxxp://101[.]108[.]96[.]80:50943/bin[.]sh",
                    "hxxp://222[.]136[.]20[.]146:39354/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1724,
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
                "count": 1447,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1436,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"223[.]109[.]142[.]7:8088\"",
                    " \"8[.]163[.]59[.]20:18888\"",
                    " \"5[.]104[.]86[.]108:22\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1133,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]tounderstandthetruth[.]com\"",
                    " \"www[.]unityforconstruction[.]com\"",
                    " \"www[.]videografiko[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 779,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "14bc0ce6c63bf1c1554b4cd1772c60b57c38ab09",
                    "7bc298ef18b49cfd44b5b429209035207250e25e",
                    "fcfc3b257b12e4c699e343f4c415b60f642d88f6"
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
                "count": 704,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd",
                    "22d945ac6c7c00fb7bb5d0dc3618a82d46cfd1e2"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 629,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"42[.]194[.]149[.]138:8888\"",
                    " \"42[.]194[.]149[.]138:443\"",
                    " \"42[.]194[.]149[.]138:80\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.asyncrat\"",
        "totalAttacksThisHour": 42341,
        "lastCalculated": "2026-09-15 18:57 IST"
    }
};
