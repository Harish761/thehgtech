// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-18T10:02:33.797196+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-18T10:02:33.468734+05:30",
    "lastUpdatedFormatted": "Sep 18, 2026 at 10:02 AM IST",
    "comparisonPeriod": "Sep 17 \u2013 Sep 18, 2026",
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
                "hxxps://shopeejkt4017[.]blogspot[.]com/",
                "hxxp://background-check-status[.]com/6197094-oH1faBZb-PKS9Q",
                "hxxp://my-xfinity-signin[.]weebly[.]com/",
                "hxxps://steacmconmmunity[.]icu/Id/7656193595673752",
                "hxxps://s4w[.]in/roblox-com-users-50352346-profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1533,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1533,
                "newInLastHour": 142,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"09a78eff62566b906a4a41005e1841cee8b43da0d65633c56fb47d8ca6dbd9b9",
                " \"2f093f8d688bec29b1944ece953d4b60c428388152ddf12d973343750db93aa3",
                " \"1dab32c614e9a97a25f8f04841b4ba9fe780369da1b043871b936e8f3c834891",
                " \"aba4d4dd7ab62fea1849a1ef348bce68d68ce1f28e3b518436a46b8228940461",
                " \"b410d33efc86ced799284522e3bebfe020e00f6203977a055225680b045856b9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1713,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1713,
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
                "1[.]10[.]172[.]57",
                "1[.]14[.]121[.]115",
                "1[.]194[.]161[.]195",
                "1[.]2[.]228[.]248",
                "1[.]24[.]16[.]103"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4719,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4719,
                "newInLastHour": 4719,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]245[.]185",
                "1[.]10[.]244[.]218",
                "1[.]161[.]144[.]132",
                "1[.]20[.]82[.]225"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12793,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12793,
                "newInLastHour": 12793,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]248[.]163[.]165:55998/i",
                "hxxp://105[.]224[.]111[.]111:58391/bin[.]sh",
                "hxxp://39[.]74[.]235[.]56:50788/i",
                "hxxp://123[.]10[.]153[.]208:54004/i",
                "hxxp://112[.]248[.]163[.]165:55998/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6733,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6733,
                "newInLastHour": 5360,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"marquesuavisita[.]com[.]br\"",
                " \"pastoralresume[.]proclaimdesign[.]com\"",
                " \"www[.]fitness-magazine[.]com\"",
                " \"154[.]219[.]101[.]56:18881\"",
                " \"117[.]72[.]202[.]154:443\""
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
            "iocCount": 10736,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10736,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                "633df5171fe70f3fed9d56136ebfa187879b4fb6",
                "96d6ce0654736e23138f54e29acbdb72ed65b5c2",
                "0e764db7ce91a22898f0083832b93da4d3b5d19e",
                "56054f201f4b39e290583877f7cc026f0649605f"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49343,
            "activeSources": 8,
            "criticalAlerts": 25482,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14782,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10700,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4544,
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
                    "1[.]119[.]194[.]253",
                    "1[.]15[.]14[.]29",
                    "1[.]194[.]161[.]195"
                ]
            },
            {
                "name": "malware_download",
                "count": 13191,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]234[.]72[.]213:55509/i",
                    "hxxp://182[.]116[.]51[.]230:38010/i",
                    "hxxp://105[.]184[.]7[.]6:49853/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1713,
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
                "count": 1448,
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
                "name": " \"win.asyncrat\"",
                "count": 1361,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"128[.]90[.]136[.]246:4444\"",
                    " \"102[.]220[.]163[.]36:7707\"",
                    " \"194[.]26[.]192[.]153:2001\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1360,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]239[.]224[.]131:443\"",
                    " \"156[.]239[.]224[.]131:8080\"",
                    " \"101[.]43[.]31[.]60:8082\""
                ]
            },
            {
                "name": "Vidar",
                "count": 780,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                    "513c67627217e9e62bf86dad646acdccca6bae7d",
                    "66e45265f8da905b7538b0a81f1ec9b54ea12dd9"
                ]
            },
            {
                "name": " \"n/a",
                "count": 762,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ead390aef096c8b9e7f399698440061d343eed7a6ad45612dbe7522f34e06961",
                    " \"472a412a64b183e8d9a1704077a94ab65747b014e47220e427fbf76e788aef6d",
                    " \"607375157de8bff35e6e2c07f8bfc75f1110172aaec14c8276a4f60a3934dedf"
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
                "count": 705,
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
        "fastestRisingThreat": " \"Mirai",
        "totalAttacksThisHour": 38333,
        "lastCalculated": "2026-09-18 10:02 IST"
    }
};
