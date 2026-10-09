// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-10T02:18:02.309275+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-10T02:18:01.842570+05:30",
    "lastUpdatedFormatted": "Oct 10, 2026 at 02:18 AM IST",
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
                "hxxps://feybnjuezzdd[.]jimdofree[.]com/",
                "hxxps://ipgrussia[.]run/",
                "hxxps://demspogo[.]com/d/page/login[.]php",
                "hxxps://pay-network[.]vercel[.]app/",
                "hxxp://paypall-login[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 864,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 864,
                "newInLastHour": 140,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a6ce6af0f1f7bf4119262e4aefb1cffc874e3a340143e58ee0831e300d1b56b8",
                " \"a7c881fdaa4f1f465d2656dfa51b245f3c3823943a796508fd0906a264ab7553",
                " \"9fe84328554e02c9aae80f9fda0fb6c06e8b16bde91f6070a991a619bfc61238",
                " \"1abc6c3179e41284ce7cf54e94748b32375c14e916f59d87a22bd45e2ca5997c",
                " \"489109095909eb9b3d60db1a01178080073b068e535735a026d351d446bef1d2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1683,
                "newInLastHour": 7,
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
                "1[.]0[.]215[.]19",
                "1[.]10[.]206[.]21",
                "1[.]12[.]229[.]231",
                "1[.]13[.]156[.]8",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4256,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4256,
                "newInLastHour": 4256,
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
            "iocCount": 33088,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33088,
                "newInLastHour": 33088,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]127[.]111[.]22:56903/bin[.]sh",
                "hxxp://182[.]117[.]76[.]135:52817/bin[.]sh",
                "hxxp://125[.]44[.]215[.]216:39964/bin[.]sh",
                "hxxp://61[.]53[.]93[.]49:38979/bin[.]sh",
                "hxxp://182[.]112[.]41[.]50:41326/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6836,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6836,
                "newInLastHour": 6327,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"transfy[.]cloud\"",
                " \"throttletechnologies[.]net\"",
                " \"tourdasgalaxias[.]com[.]br\"",
                " \"tmd12[.]top\"",
                " \"topvisionmarketing[.]com\""
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
            "iocCount": 10915,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10915,
                "newInLastHour": 17,
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
            "totalIndicators": 68203,
            "activeSources": 8,
            "criticalAlerts": 44827,
            "activeCampaigns": 294
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33930,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10897,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4316,
                "trend": "stable",
                "percentage": -1
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
                "count": 32987,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://downloads[.]go-xlr[.]com/GoXLR[.]zip",
                    "hxxps://hardwood-studio-obviously-briefing[.]trycloudflare[.]com/download/winhost",
                    "hxxp://175[.]149[.]88[.]179:34166/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]13[.]156[.]8",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1676,
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
                "count": 1291,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"185[.]212[.]44[.]20:443\"",
                    " \"103[.]72[.]56[.]236:443\"",
                    " \"39[.]106[.]221[.]81:8088\""
                ]
            },
            {
                "name": "Vidar",
                "count": 818,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f1d3bed8c625dc1785842ced7f1cf6aadb85942a",
                    "f9ec94288d3a56dcecced514f673587156167472",
                    "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18"
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
                "name": " \"win.pure_rat\"",
                "count": 621,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"95[.]133[.]228[.]144:443\"",
                    " \"46[.]151[.]182[.]67:56003\"",
                    " \"45[.]88[.]91[.]164:56002\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 593,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"14d07d38c1a6f8625e80568fbe3b081c6c53e42b9f953f84dc18c1bebc92df85\"",
                    " \"ikovrsps[.]com\"",
                    " \"coppertrack[.]cfd\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 59140,
        "lastCalculated": "2026-10-10 02:18 IST"
    }
};
