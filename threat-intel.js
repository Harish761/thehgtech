// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-18T04:19:20.505682+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-18T04:19:20.178536+05:30",
    "lastUpdatedFormatted": "Sep 18, 2026 at 04:19 AM IST",
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
            "iocCount": 1564,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1564,
                "newInLastHour": 57,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ead390aef096c8b9e7f399698440061d343eed7a6ad45612dbe7522f34e06961",
                " \"604480aeb2c6426f2119027067ceb679629687fb5d88d08a55b2f74bfc1da089",
                " \"472a412a64b183e8d9a1704077a94ab65747b014e47220e427fbf76e788aef6d",
                " \"607375157de8bff35e6e2c07f8bfc75f1110172aaec14c8276a4f60a3934dedf",
                " \"3a849baaadfbe2b25f66612a08494536963141499d13d563c3d3b7796d0e1cef"
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
                "1[.]119[.]194[.]253",
                "1[.]15[.]14[.]29",
                "1[.]194[.]161[.]195",
                "1[.]20[.]186[.]172",
                "1[.]24[.]16[.]137"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4707,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4707,
                "newInLastHour": 4707,
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
            "iocCount": 13191,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13191,
                "newInLastHour": 13191,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]234[.]72[.]213:55509/i",
                "hxxp://182[.]116[.]51[.]230:38010/i",
                "hxxp://105[.]184[.]7[.]6:49853/i",
                "hxxp://83[.]228[.]109[.]209:38568/i",
                "hxxp://138[.]204[.]196[.]244:50726/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6848,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6848,
                "newInLastHour": 5421,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"aah3bpf6[.]eng-eng-glucore[.]com\"",
                " \"zhwwd37940[.]workers[.]dev\"",
                " \"192[.]210[.]197[.]13:12313\"",
                " \"47[.]129[.]3[.]232:4433\"",
                " \"185[.]193[.]126[.]143:8084\""
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
            "iocCount": 10722,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10722,
                "newInLastHour": 0,
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
            "totalIndicators": 49372,
            "activeSources": 8,
            "criticalAlerts": 25473,
            "activeCampaigns": 258
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14759,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10714,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4545,
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
                    "1[.]119[.]194[.]253",
                    "1[.]12[.]56[.]30"
                ]
            },
            {
                "name": "malware_download",
                "count": 13186,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://83[.]228[.]109[.]209:38568/bin[.]sh",
                    "hxxp://138[.]204[.]196[.]244:50726/bin[.]sh",
                    "hxxp://42[.]231[.]73[.]143:48507/i"
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
                "name": " \"win.cobalt_strike\"",
                "count": 1361,
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
                "name": "Vidar",
                "count": 786,
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
                "name": " \"n/a",
                "count": 731,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"b01dd26ea954b21374638d1fbd6c2c19663a912b2ba125e4a443b960971c55cb",
                    " \"3c5e7f7f7a69570fd5d7801edcc3d2638dadac0b41a8bee58b6683e4ea56af3f",
                    " \"e72722cbc20fe17b4dec89e39595ee03fa665c00e792cb90da02ec2d2acefa2f"
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
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 38681,
        "lastCalculated": "2026-09-18 04:19 IST"
    }
};
