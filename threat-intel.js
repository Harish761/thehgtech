// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-10T11:10:48.914951+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-10T11:10:48.488888+05:30",
    "lastUpdatedFormatted": "Oct 10, 2026 at 11:10 AM IST",
    "comparisonPeriod": "Oct 09 \u2013 Oct 10, 2026",
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
                "hxxps://io-ledger-desk-top-faq[.]pages[.]dev/",
                "hxxps://www[.]roblox[.]com[.]gr/communities/642291738400/Jailbreak-Dupers",
                "hxxps://accountsverifypro1790922476758[.]1990065[.]misitiohostgator[.]com/l/a/h/card[.]php/",
                "hxxps://fervicio-financiero--fnanzanicaragua[.]replit[.]app/",
                "hxxps://diverge[.]finance/empresas/empresas/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 989,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 989,
                "newInLastHour": 191,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"26acdf091d7a9bcf72b056561bc69221de623d43097499a777f59cab859b88a1",
                " \"d2e638270df17ec368adfc71241b8743d5fa10c3f10a708ae90d4eb84ba8e2be",
                " \"3a62ba9d46cb84d3e77a2a45285c6b354bdd7a7944ca30ad6d486939b5a0a729",
                " \"54e56dcd07a5771dd529ed962e25d875efab0089d9b7b9ab249fcce7e46acae3",
                " \"64baec6013414eacd268a91e105e652b8e125e231821100c619d0060a79c37da"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1623,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1623,
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
                "2.27.62.0/24",
                "2.56.192.0/22"
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
                "1[.]0[.]215[.]19",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]215[.]138[.]43",
                "1[.]24[.]16[.]102"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4313,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4313,
                "newInLastHour": 4313,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]0[.]243[.]191",
                "1[.]117[.]72[.]220",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 32711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 32711,
                "newInLastHour": 32711,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://220[.]202[.]91[.]248:55001/i",
                "hxxp://116[.]10[.]133[.]42:48435/i",
                "hxxp://79[.]40[.]75[.]47:38286/i",
                "hxxp://220[.]202[.]91[.]248:55001/bin[.]sh",
                "hxxp://42[.]57[.]42[.]2:38792/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7176,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7176,
                "newInLastHour": 6376,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"check-codbrowse[.]beer\"",
                " \"misle[.]store\"",
                " \"4969607e53fb15d4681f663d521ea0e70f565ed83ffd1042e9c2f2d77a9f5112\"",
                " \"0203fcb09d396bed27adaf248ee33aca03c9e048bfd98555e966b30b122d426a\"",
                " \"90feb8a42116a8687589bcf05e1eb6ad645f55a777931b0436ea58c9e58a97cb\""
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
            "iocCount": 10646,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10646,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "dad953249b7dc6a1491183ca1f790b78038872c8",
                "3013447f5f36ed0c97f878cd6106853088a49ef8",
                "3f7c12ee118bce0a51bcb4c1896fa9a79b30bfb7",
                "f1007872f795727c952c1f2b20966ec193b646a4",
                "f1d3bed8c625dc1785842ced7f1cf6aadb85942a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 69071,
            "activeSources": 8,
            "criticalAlerts": 44934,
            "activeCampaigns": 294
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34023,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10911,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4286,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 302,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 98
            },
            {
                "name": "Tech",
                "percentage": 0
            },
            {
                "name": "Finance",
                "percentage": 0
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 33138,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]113[.]200[.]213:55754/i",
                    "hxxp://101[.]23[.]127[.]18:59328/i",
                    "hxxp://42[.]224[.]148[.]231:42806/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]215[.]19",
                    "1[.]10[.]206[.]21",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1682,
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
                "count": 1459,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"156[.]67[.]105[.]187:5602\"",
                    " \"156[.]67[.]105[.]187:6060\"",
                    " \"156[.]67[.]105[.]187:3210\""
                ]
            },
            {
                "name": "Vidar",
                "count": 826,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dad953249b7dc6a1491183ca1f790b78038872c8",
                    "3013447f5f36ed0c97f878cd6106853088a49ef8",
                    "f1d3bed8c625dc1785842ced7f1cf6aadb85942a"
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
                "count": 715,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 689,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"groupby[.]careers\"",
                    " \"includetraining[.]eu\"",
                    " \"whisperingheavens[.]co[.]uk\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 624,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]88[.]91[.]164:56001\"",
                    " \"45[.]139[.]104[.]26:56015\"",
                    " \"217[.]60[.]77[.]63:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"elf.mirai\"",
        "totalAttacksThisHour": 58900,
        "lastCalculated": "2026-10-10 11:10 IST"
    }
};
