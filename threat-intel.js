// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-29T22:55:48.264635+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-29T22:55:47.921675+05:30",
    "lastUpdatedFormatted": "Jul 29, 2026 at 10:55 PM IST",
    "comparisonPeriod": "Jul 28 \u2013 Jul 29, 2026",
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
                "hxxp://zerointerestpromo[.]com/",
                "hxxps://paket[.]info[.]158-158-1-61[.]cpanel[.]site/pl/kasse[.]php?2kh6by2fuuo3z",
                "hxxps://www[.]roblox[.]com[.]mu/users/6525325044/profile",
                "hxxps://s4w[.]in/www-roblox-com-users-321759054-profile",
                "hxxps://pw[.]pypexqb[.]net/EngTgred[.]html"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 988,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 988,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"40717c6dd9e3d28afd7937b8651efa2096c77478633ca1039f23c624ea322045",
                " \"aa1e87294fdee8bb644eefa9d72dfc8751aec4aeb47104edaf83447f397f3802",
                " \"43e782d8c5b308ecc64aa65004d0165ff2ef3a0be3c659a2a02e1a4b5777094a",
                " \"eb42d41b5d7fee9a040b863110ff675b6e907a4e570a3d2489728fe61ff8feac",
                " \"e9d45ec597fd2f9ac69d259f8f03c4646cf34b59ab07fe2aaf942174d727a8fd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1666,
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
                "1[.]10[.]185[.]51",
                "1[.]119[.]194[.]226",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]15[.]24[.]165"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 9511,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 9511,
                "newInLastHour": 9511,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]180[.]246[.]242",
                "1[.]192[.]61[.]70"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15688,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15688,
                "newInLastHour": 15688,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://104[.]249[.]10[.]66/malw5500[.]msi",
                "hxxp://123[.]13[.]48[.]160:33892/i",
                "hxxps://vmwrvtools[.]com/rvtools4[.]8[.]1[.]msi",
                "hxxp://175[.]9[.]165[.]126:50484/bin[.]sh",
                "hxxp://5[.]182[.]210[.]61/449ce2"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5912,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5912,
                "newInLastHour": 5172,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"117[.]72[.]72[.]254:21116\"",
                " \"117[.]72[.]72[.]254:21118\"",
                " \"160[.]25[.]134[.]148:8964\"",
                " \"118[.]31[.]18[.]77:2053\"",
                " \"69[.]167[.]7[.]72:443\""
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
            "iocCount": 10267,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10267,
                "newInLastHour": 68,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0b260881d660a14c3c0b2e61a6685839c8053bc9",
                "11a9b0c571e681f4f9e7780e3aff1fe8c2f3d676",
                "e15c7bdeb747a9fff47c514a10229a2a59d1157d",
                "283042355c89f2c59e260246d1488a73a8bef7b2",
                "e6cc4eebe2d73c7174be4be73bc00d4642122ac4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49856,
            "activeSources": 8,
            "criticalAlerts": 26867,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16690,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "C2",
                "count": 10177,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3673,
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
                "name": "malware_download",
                "count": 15637,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]45[.]64[.]153:35082/bin[.]sh",
                    "hxxp://125[.]44[.]62[.]231:47335/i",
                    "hxxp://115[.]58[.]140[.]184:54228/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]119[.]194[.]226",
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1666,
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
                "count": 1427,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1352,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"118[.]31[.]18[.]77:8080\"",
                    " \"118[.]195[.]198[.]186:8080\"",
                    " \"118[.]195[.]198[.]186:443\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 790,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cbrldu[.]phoenixfactory[.]org\"",
                    " \"lgteexx[.]witchwatchchapters[.]com\"",
                    " \"phoenixfactory[.]org\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 769,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zerodansleau[.]fr\"",
                    " \"zeronervepain[.]com\"",
                    " \"ziegler-partner[.]eu\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 742,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bs-deliver-e817[.]61d8f0e6ac62c139abd08ba5[.]workers[.]dev\"",
                    " \"mexproudhipping[.]com\"",
                    " \"yellow-smoke-3d0d[.]yellow-smoke[.]workers[.]dev\""
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
                "count": 690,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45767,
        "lastCalculated": "2026-07-29 22:55 IST"
    }
};
