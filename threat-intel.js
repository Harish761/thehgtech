// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-14T03:52:04.863418+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-14T03:52:04.500197+05:30",
    "lastUpdatedFormatted": "Sep 14, 2026 at 03:52 AM IST",
    "comparisonPeriod": "Sep 13 \u2013 Sep 14, 2026",
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
                "hxxps://kqid7e1vkh3d0r88k3d[.]vercel[.]app/nsvw35re4hbarefsdbvzxcv",
                "hxxps://kqid7e1vkh3d0r88k3d[.]vercel[.]app/nsvw35re4hbarefsdbvzxcv[.]html",
                "hxxps://www[.]welcome-trezor-bridge[.]godaddysites[.]com/",
                "hxxps://iamivanaalawicash[.]blogspot[.]com/",
                "hxxps://www[.]iamivanaalawicash[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 414,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 414,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e5c7b3d6dec0c89701fa8c94cdc5d1353770a04edd5eeaf987c45630647e74d8",
                " \"a2a067ca282f9034391e2cf1b4d2fe681cbe0326588d507b3cff5b2fab70bc7e",
                " \"994b914dc77a84a9adbe5ba1c49cd6bab320924c4d0938134d5c47ce9cedee8b",
                " \"c66e9d85ddd7bb98a60b1823e1cc7cb27035da727744c03735317f2106da80e8",
                " \"f50d920a6bd6b6c12fd4f6ffb828b5528a14c6f371c08ac43b213291bf2937a7"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1721,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1721,
                "newInLastHour": 1,
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
                "1[.]188[.]100[.]134",
                "1[.]205[.]52[.]2",
                "1[.]24[.]16[.]102",
                "1[.]24[.]16[.]104",
                "1[.]24[.]16[.]110"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11482,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11482,
                "newInLastHour": 11482,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]59[.]169",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12675,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12675,
                "newInLastHour": 12675,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://66[.]212[.]187[.]214:58335/i",
                "hxxp://105[.]186[.]143[.]114:35689/bin[.]sh",
                "hxxp://66[.]212[.]187[.]214:58335/bin[.]sh",
                "hxxp://115[.]58[.]121[.]22:46152/bin[.]sh",
                "hxxp://42[.]56[.]161[.]20:38561/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10729,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10729,
                "newInLastHour": 7428,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://bteahop[.]shop:9932/profiles\"",
                " \"hxxp://srtylab[.]shop:8213/comments\"",
                " \"hxxp://gyadazs[.]shop:5627/teams\"",
                " \"45[.]144[.]136[.]97:21\"",
                " \"43[.]155[.]246[.]58:8888\""
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
            "iocCount": 10695,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10695,
                "newInLastHour": 20,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "009a05eaf082d20ae13a65abda12afd959cd76de",
                "e129189e0ed0545baad30c054b5f51301d766516",
                "fcfc3b257b12e4c699e343f4c415b60f642d88f6",
                "db7000ad8c148580941840ce41d8efb95f478854",
                "60d55d4ff506bc654814ba6b26308f999766054a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51665,
            "activeSources": 8,
            "criticalAlerts": 23758,
            "activeCampaigns": 265
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13101,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10657,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4308,
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
                    "1[.]12[.]229[.]231",
                    "1[.]188[.]100[.]134"
                ]
            },
            {
                "name": "malware_download",
                "count": 12671,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]56[.]161[.]20:38561/i",
                    "hxxp://182[.]121[.]59[.]52:33634/bin[.]sh",
                    "hxxp://182[.]116[.]48[.]4:52963/bin[.]sh"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 2865,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]247[.]187[.]47:6660\"",
                    " \"192[.]162[.]199[.]179:6606\"",
                    " \"c1e2ba7b65d7e8611f83d0ffbef4412083bcbdb8d26a496d82c98c635f64fddd\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1723,
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
                "count": 1446,
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
                "count": 1328,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"178[.]128[.]196[.]79:8443\"",
                    " \"45[.]144[.]136[.]97:57777\"",
                    " \"112[.]124[.]22[.]77:22\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1244,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]sioutsider[.]com\"",
                    " \"www[.]sitecnasnc[.]it\"",
                    " \"www[.]teesstation[.]com\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1108,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"prairielink[.]cfd\"",
                    " \"zouwemmig[.]cfd\"",
                    " \"8aee7a413af09d4409da870471da4f6af7f93cae25e1837f8b34e170b0309cb8\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 778,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://qbsad[.]pages[.]dev/\"",
                    " \"www[.]digitalisierung-schule[.]ch\"",
                    " \"rzmi7dyf[.]khive[.]store\""
                ]
            },
            {
                "name": "Vidar",
                "count": 770,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "fcfc3b257b12e4c699e343f4c415b60f642d88f6",
                    "60d55d4ff506bc654814ba6b26308f999766054a",
                    "f567b9fc86b00e059bdfea261466360804fbdb38"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 46926,
        "lastCalculated": "2026-09-14 03:52 IST"
    }
};
