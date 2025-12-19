// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2025-12-19T18:30:41.016123+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2025-12-19T18:30:40.758223+05:30",
    "lastUpdatedFormatted": "Dec 19, 2025 at 06:30 PM IST",
    "comparisonPeriod": "Dec 18 \u2013 Dec 19, 2025",
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
                "hxxps://layanan-dana[.]teps[.]my[.]id/",
                "hxxps://husrevaraci[.]com/",
                "hxxps://www[.]conceptbutikotel[.]com/index-en",
                "hxxps://bluewhaleusen[.]com/",
                "hxxps://uk[.]paying-lt[.]vip/i"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 752,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 752,
                "newInLastHour": 121,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"51d2be83760edb354ca4661498c4ad8a1afb9ddb18018530e85ddd96c998852c",
                " \"a7c4b700d55ace0c0b6e2005a507aa4cec3e76e23e33a5a22cd3e004cc18f652",
                " \"881289c50b0da2430a3d87eb7dc5d788910f0c2b415159604628eb097bc85423",
                " \"c980a3850b50bada6ec09594db224684971db13e1a58f9f0a942d3ea0c1293ac",
                " \"8b25edef9fbe562a259d1e185d94c0351615bcc34a7194db833eb7bee1bf864c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1469,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1469,
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
                "1[.]10[.]223[.]148",
                "1[.]10[.]247[.]85",
                "1[.]1[.]179[.]25",
                "1[.]117[.]17[.]128",
                "1[.]15[.]118[.]23"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5651,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5651,
                "newInLastHour": 5651,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]12[.]64[.]80",
                "1[.]14[.]95[.]153",
                "1[.]171[.]34[.]59",
                "1[.]197[.]102[.]62",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 25465,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 25465,
                "newInLastHour": 25465,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://hudrex[.]b2tnikpu1yar[.]ru/vabj87jj",
                "hxxp://221[.]13[.]250[.]146:48111/bin[.]sh",
                "hxxps://hudrex[.]b2tnikpu1yar[.]ru/43jj4hhq",
                "hxxps://kylv0n[.]b2tnikpu1yar[.]ru/kvjbwz58",
                "hxxp://110[.]39[.]231[.]36:40350/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1139,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1139,
                "newInLastHour": 938,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"67[.]215[.]255[.]41:80\"",
                " \"hudrex[.]b2tnikpu1yar[.]ru\"",
                " \"update[.]microsoft-safe[.]com\"",
                " \"support[.]microsoft-safe[.]com\"",
                " \"156[.]255[.]3[.]33:80\""
            ]
        },
        "Feodo Tracker": {
            "description": "Botnet C2 server IPs from Feodo Tracker. Tracks Dridex, Emotet, TrickBot, QakBot, and BazarLoader.",
            "website": "https://feodotracker.abuse.ch/",
            "updateFrequency": "Hourly",
            "iocCount": 4,
            "iocDataUrl": "https://thehgtech.com/ioc-data/feodo-tracker.json",
            "stats": {
                "total": 4,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "15[.]204[.]219[.]215",
                "162[.]243[.]103[.]246",
                "167[.]86[.]75[.]145",
                "51[.]210[.]96[.]48"
            ]
        },
        "SSL Blacklist": {
            "description": "Malicious SSL certificates used by botnet C2 servers. Helps detect encrypted malware communications.",
            "website": "https://sslbl.abuse.ch/",
            "updateFrequency": "Daily",
            "iocCount": 8659,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 8659,
                "newInLastHour": 8523,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "bb69bc0904d3300cc556bb5775e549677aeac371",
                "8a542e015117f2254f098cce2b471b592d4f56e8",
                "cb789c5fc5dfd28c4ca174e1569f00fb985c2751",
                "ce45edd9833acf5ed64d6c16acb355c3b71459a6",
                "42865538586255fae2d0a07ca739c92ce188c475"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 44094,
            "activeSources": 8,
            "criticalAlerts": 26146,
            "activeCampaigns": 97
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26006,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 651,
                "trend": "stable",
                "percentage": 8
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 140,
                "trend": "down",
                "percentage": -98
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 1
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 25281,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://tavern[.]drau8htl0dg[.]ru/o2cp5744",
                    "hxxps://cadence[.]ch0reo8fin[.]ru/qynhefw4",
                    "hxxp://113[.]64[.]250[.]1:39780/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]223[.]148",
                    "1[.]10[.]247[.]85",
                    "1[.]1[.]179[.]25"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1473,
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
                "name": " \"Mirai",
                "count": 432,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"55478ba26121a160ac9fa3680c430c1ae64a4f46a3c5d2e24cae99a44a2aecb4",
                    " \"e52f0ce6a973cd09345ab3dee9b39418606eb496d4c62b851e1656b68e1888dc",
                    " \"4f278033b6eb279ac8644b54bd41e2618f096938224cda1430de2655c5a7087d"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 304,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"tavern[.]drau8htl0dg[.]ru\"",
                    " \"cadence[.]ch0reo8fin[.]ru\"",
                    " \"pivot8[.]ch0reo8fin[.]ru\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://www[.]6366uu[.]com/",
                    "hxxps://bet73047[.]com/about/cookies",
                    "hxxps://www[.]by[.]4qiuj[.]com/"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 201,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"116[.]62[.]151[.]244:80\"",
                    " \"45[.]121[.]51[.]26:443\"",
                    " \"113[.]44[.]172[.]238:80\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 113,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ee9912616b28d17b6a9974c167b05c293b589c286c9039caa9a1f6e5ca94d970",
                    " \"bdf7479ed9d15ad280dbdec59efcb1c9e122d0db24a7cbe32ea4542e4bd0fcd2",
                    " \"cc330539646dd2236211292f682a59f045a9ebaaf0b36ecca8e0fd6ab3f16e81"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 89,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"34[.]199[.]239[.]75:443\"",
                    " \"91[.]189[.]119[.]125:80\"",
                    " \"176[.]117[.]107[.]187:443\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 77,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://95[.]217[.]29[.]230/\"",
                    " \"hxxps://192[.]177[.]26[.]119/\"",
                    " \"hxxps://65[.]109[.]242[.]161/\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 56002,
        "lastCalculated": "2025-12-19 18:30 IST"
    }
};
