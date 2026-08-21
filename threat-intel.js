// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-21T10:19:28.623556+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-21T10:19:28.251154+05:30",
    "lastUpdatedFormatted": "Aug 21, 2026 at 10:19 AM IST",
    "comparisonPeriod": "Aug 20 \u2013 Aug 21, 2026",
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
                "hxxp://swisborrgloginmain[.]webflow[.]io/",
                "hxxp://verifysecurenow[.]weebly[.]com/",
                "hxxps://s4w[.]in/www-roblox-com-users-365698823823-profile",
                "hxxps://www[.]roblox[.]com[.]ml/users/365698823824/profile",
                "hxxps://movie875[.]shop/buy/register[.]php?ref&#61"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1006,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1006,
                "newInLastHour": 37,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"694e00a716423ac95478a859330fb571df26b2f29c82d4591d85b1ebc4f45b61",
                " \"85ed2a23d0064207abd86f72c4f1ed13cd69657fc6f00f6f136f3988d3e39f47",
                " \"61afba94a1147c13ec34b9e0b0589fc7edc926f48de46dd417438ded2c5c33ba",
                " \"402e02014bd2a46913349b5485db8cc1e8a1dc8bb944d9a28e5aa5761a50b265",
                " \"65e42b97f9753f62ab1d09a010d5dd208928a16cd47dd6915b98618919eb19fd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1698,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1698,
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
                "1[.]119[.]158[.]77",
                "1[.]119[.]194[.]226",
                "1[.]140[.]210[.]242",
                "1[.]177[.]162[.]2",
                "1[.]180[.]190[.]250"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5035,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5035,
                "newInLastHour": 5035,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]10[.]222[.]205",
                "1[.]2[.]189[.]132",
                "1[.]20[.]150[.]200",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16377,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16377,
                "newInLastHour": 16377,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]186[.]163[.]117:50795/i",
                "hxxp://105[.]186[.]163[.]117:50795/bin[.]sh",
                "hxxp://78[.]25[.]157[.]124:39654/bin[.]sh",
                "hxxp://42[.]225[.]201[.]235:59633/i",
                "hxxp://182[.]116[.]20[.]246:39870/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6448,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6448,
                "newInLastHour": 6209,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rechsteiner-holzbau[.]ch\"",
                " \"xbcuwv1m[.]defenseflashlight[.]com\"",
                " \"defenseflashlight[.]com\"",
                " \"202[.]61[.]139[.]46:7800\"",
                " \"202[.]61[.]139[.]46:7811\""
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
            "iocCount": 10507,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10507,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7f73eeb03e7df441484d4610c5a0c3a02f166989",
                "3992dd5edcdf2ce5d143f933e2657640e00a58d4",
                "e0ffdffb5d9bf9216ea5e70d4fe2bae919f5a6ca",
                "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
                "0ad6076cb27bcdd5dd26fe56c022f4ab61ea00be"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51501,
            "activeSources": 8,
            "criticalAlerts": 28029,
            "activeCampaigns": 246
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17544,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 10485,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4504,
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
                "count": 16366,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://93[.]113[.]166[.]57:59924/i",
                    "hxxp://123[.]8[.]162[.]45:59164/i",
                    "hxxp://124[.]163[.]212[.]119:800/lilin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]158[.]77",
                    "1[.]140[.]210[.]242",
                    "1[.]165[.]27[.]71"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1698,
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
                "count": 1440,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73",
                    "7bf78d44f61a05e919479a1cf3e0ce158a50a0c6"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1354,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]140[.]219[.]182:80\"",
                    " \"43[.]140[.]219[.]182:8080\"",
                    " \"43[.]140[.]219[.]182:443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1155,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ksr-racingparts[.]com\"",
                    " \"yourcapital[.]co[.]za\"",
                    " \"zeilberger-hartl[.]de\""
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
                "name": "Vidar",
                "count": 726,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e1fadee899789d8e802b8b88dcf67e4cae82ccf1",
                    "732c7efa7d624c30b074e78df6595f54fde9188d",
                    "9ba597b7a850fe598927a226f6ab2efd3050ff95"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 698,
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
                "name": " \"unknown\"",
                "count": 614,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"rblxgivex[.]com\"",
                    " \"hxxps://apartments-review261634860[.]sbs/\"",
                    " \"106[.]54[.]41[.]209:22\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 42963,
        "lastCalculated": "2026-08-21 10:19 IST"
    }
};
