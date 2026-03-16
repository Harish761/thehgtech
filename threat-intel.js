// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-03-17T01:04:24.637310+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-03-17T01:04:24.366805+05:30",
    "lastUpdatedFormatted": "Mar 17, 2026 at 01:04 AM IST",
    "comparisonPeriod": "Mar 16 \u2013 Mar 17, 2026",
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
                "hxxps://notifyhubss[.]net/yc60dedbdc5b2a46eelac74e3638b1eaf7ca[.]html/",
                "hxxps://carbonellsrl[.]com[.]ar/w/3tiprogetti[.]html",
                "hxxp://onur156[.]github[.]io/instagram-phishing-tool",
                "hxxps://salalatour[.]com/plala[.]or[.]jp/jpn/webmai1/index[.]php/",
                "hxxps://salalatour[.]com/updateplala[.]or[.]jp/jpn/webmai1/index[.]php/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 527,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 527,
                "newInLastHour": 32,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"0ebff63d1f090678bcc898336ad3e3bc98e05c04cc0a5c8476a5e1ec924b6412",
                " \"1ebbb3ef11acd026e0c9b8d9465b8e7d000ace783a12eb275da96ce00e4e69ff",
                " \"b29c710a2a5c70a18fec4c4c54e7b2a588316f8145ed349b82988431a29fff5e",
                " \"51aac523cebbbb644d4086250e7361983249787f6f7dc9485b8dcf9b64d8216a",
                " \"a23faad998ccfd975f0123b836dd65c158f931f1ea3c01e5415c82a148b08f89"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1526,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1526,
                "newInLastHour": 11,
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
                "1[.]0[.]250[.]190",
                "1[.]12[.]76[.]172",
                "1[.]15[.]118[.]23",
                "1[.]15[.]51[.]236",
                "1[.]162[.]147[.]232"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 8110,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 8110,
                "newInLastHour": 8110,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]14[.]141[.]8",
                "1[.]162[.]198[.]143",
                "1[.]222[.]42[.]237",
                "1[.]238[.]106[.]229",
                "1[.]55[.]33[.]86"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 19712,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 19712,
                "newInLastHour": 19712,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://net-v6-global[.]biosphera[.]in[.]net/verification[.]google",
                "hxxp://60[.]21[.]172[.]164:47587/bin[.]sh",
                "hxxps://flow-z0-work[.]biosphera[.]in[.]net/verification[.]google",
                "hxxp://212[.]34[.]111[.]149:56488/i",
                "hxxp://158[.]94[.]208[.]7/files/8167064937/DAIs3ZV[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1655,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1655,
                "newInLastHour": 1620,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"nanatoken[.]lat\"",
                " \"net-v6-global[.]biosphera[.]in[.]net\"",
                " \"missiletoken[.]lat\"",
                " \"nexira[.]lol\"",
                " \"paving[.]phaededllc[.]com\""
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
            "iocCount": 9233,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9233,
                "newInLastHour": 13,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "1a64f31a0cdb3f939ba1e0144b0978e847cef2fc",
                "f1051306c328fd41245695084f8e6d39a478c055",
                "3e663dd4145cbe7d51ce77a973741f60903ff1ad",
                "a5b066de54c5f7d7f4122235fcece077895757f8",
                "254cc30fd479d1338dcc4fc08ff5f8ea491c78f0"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47831,
            "activeSources": 8,
            "criticalAlerts": 29469,
            "activeCampaigns": 193
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 20240,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9229,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 447,
                "trend": "up",
                "percentage": 14
            },
            {
                "category": "Phishing",
                "count": 303,
                "trend": "stable",
                "percentage": 0
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 95
            },
            {
                "name": "Tech",
                "percentage": 4
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 19682,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://f3rn-trace[.]tempink[.]in[.]net/verification[.]google",
                    "hxxp://117[.]244[.]64[.]207:57996/bin[.]sh",
                    "hxxp://27[.]37[.]63[.]88:53303/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]250[.]190",
                    "1[.]12[.]76[.]172",
                    "1[.]15[.]118[.]23"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1518,
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
                "count": 1389,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3e7e73b6c654a979d4e4fe20b4aa24890b4518",
                    "e074dd74eb8eb98468a94eb43b3487fe2b7f5980",
                    "d5a586a42fd4e36396467ae8d16045a5efd6bada"
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
                "count": 640,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7692429d5ce694bd30c57fae26a56dd8fd960faf",
                    "f021dc8a50b47d94a454ff92d78bd1215597a759",
                    "56bad084f7d679dfddbe0f1ac2254b191051d348"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 541,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "da0f6a5937d3c2d365ffeddb881b4136313e1afa",
                    "e30905555de39d1e66f834f672f6f14e9106839b",
                    "f9e8d701de1740086da792e2c9be70df261e1832"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 483,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"studioalign[.]tempink[.]in[.]net\"",
                    " \"f3rn-trace[.]tempink[.]in[.]net\"",
                    " \"norcrestal[.]tempink[.]in[.]net\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 470,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://bcoqinu[.]lol/auth?xc=\"",
                    " \"bcoqinu[.]lol\"",
                    " \"hxxps://animalscoin[.]lol/auth?xc=\""
                ]
            },
            {
                "name": "Vidar",
                "count": 405,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "f1051306c328fd41245695084f8e6d39a478c055",
                    "a5b066de54c5f7d7f4122235fcece077895757f8",
                    "254cc30fd479d1338dcc4fc08ff5f8ea491c78f0"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown\"",
        "totalAttacksThisHour": 44803,
        "lastCalculated": "2026-03-17 01:04 IST"
    }
};
