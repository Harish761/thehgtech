// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-19T00:37:42.856952+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-19T00:37:42.485716+05:30",
    "lastUpdatedFormatted": "Aug 19, 2026 at 12:37 AM IST",
    "comparisonPeriod": "Aug 18 \u2013 Aug 19, 2026",
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
                "hxxps://dravixa-gld-belquna-r9t8fw26[.]pages[.]dev/",
                "hxxps://www[.]submid-cotact136336[.]vercel[.]app/",
                "hxxp://xelzora-kxt-qelmavi-r5t2fc97[.]pages[.]dev/",
                "hxxps://roblox[.]com[.]ee/users/61018400/profile",
                "hxxps://phantom-eight-nu[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1095,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1095,
                "newInLastHour": 18,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"eaf3dc2c2daed81473f7fc5067990ffda4cd2e53a52bd31563da6fb3358d4fc3",
                " \"4448629f77ebdd5423a8fdbd11e48f7572601c19ad1009ab539d28965100fb33",
                " \"8d1ce2c612537f4537df7192715a8be98312cd9c6cd60757c294493c7fc180ac",
                " \"86d57ebab870af93c1501db0a6c3404636174d0d5b5bffa493f956d77631c321",
                " \"ab833073dfe2e693216691d77955e36bc67f4b79d2304990ba8b7968b9949642"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
                "newInLastHour": 1172,
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
                "1[.]119[.]158[.]77",
                "1[.]140[.]210[.]242",
                "1[.]15[.]14[.]29",
                "1[.]192[.]177[.]51",
                "1[.]193[.]63[.]11"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4778,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4778,
                "newInLastHour": 4778,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]64[.]225",
                "1[.]2[.]226[.]1",
                "1[.]20[.]150[.]200",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16934,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16934,
                "newInLastHour": 16934,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://103[.]160[.]130[.]178:42478/i",
                "hxxp://85[.]12[.]251[.]50:45018/i",
                "hxxp://103[.]160[.]130[.]178:42478/bin[.]sh",
                "hxxp://46[.]16[.]150[.]139:51622/i",
                "hxxp://85[.]12[.]251[.]50:45018/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8582,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8582,
                "newInLastHour": 8540,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"193-233-126-53[.]sslip[.]io\"",
                " \"wn82o2i1[.]en-usa-bpzone[.]com\"",
                " \"river[.]ch\"",
                " \"bgp[.]ch\"",
                " \"glara[.]info\""
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
            "iocCount": 10432,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10432,
                "newInLastHour": 180,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f351f7dbe9c583f75758b39cd307f5359d110c73",
                "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
                "edbd45e54859ad7082efb79465ba938bb2581132",
                "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                "ffa6be04fe2e9c6b79776dcfc7ad3f41a403a64d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52710,
            "activeSources": 8,
            "criticalAlerts": 28305,
            "activeCampaigns": 233
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18049,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10256,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4673,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16924,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://120[.]84[.]215[.]27:44835/i",
                    "hxxp://176[.]65[.]139[.]212/eclipse[.]sh4",
                    "hxxp://176[.]65[.]139[.]212/eclipse[.]i586"
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
                    "1[.]140[.]210[.]242",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1674,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"eggsjelly[.]space\"",
                    " \"cdn[.]zrorolite[.]com\"",
                    " \"hxxps://cdn[.]zrorolite[.]com/5NPL[.]js\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1436,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"110[.]42[.]255[.]63:9090\"",
                    " \"43[.]136[.]178[.]239:22\"",
                    " \"43[.]136[.]178[.]239:8080\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1432,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6",
                    "f50e245dc1e4a89d6cf5e07e31ae1392a3f9ad20"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1377,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"xylopak[.]com\"",
                    " \"ycn[.]coop\"",
                    " \"ymbforexpro[.]com\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 1043,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"swissrentalselect[.]ch\"",
                    " \"hxxps://bytesolving[.]info/\"",
                    " \"hxxps://3pattipkr[.]com[.]pk/\""
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
                "count": 685,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b4c3ff8dc5891693f443320e3c1167c7cebe2b7",
                    "0f1b05653c3b3ab3bb4ecd772dd024668cbe8df1",
                    "b364395fee8c2e4c9eaf9a2531f6f7ac7bf8e4ae"
                ]
            },
            {
                "name": "Vidar",
                "count": 659,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e39fdf1800919f6dd77d89bcdbc0b1fe8a9352eb",
                    "952bcdeea03ea702626a30069c949581bf2d1b05",
                    "a52e17fe607d1e562e0cb67c6f2342e6b4dbf191"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 46927,
        "lastCalculated": "2026-08-19 00:37 IST"
    }
};
