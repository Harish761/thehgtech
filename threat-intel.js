// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-24T19:35:02.193151+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-24T19:35:01.937331+05:30",
    "lastUpdatedFormatted": "Jul 24, 2026 at 07:35 PM IST",
    "comparisonPeriod": "Jul 23 \u2013 Jul 24, 2026",
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
                "hxxp://sp4ct-rardevon-biz8-lurem-dafok[.]pages[.]dev/",
                "hxxps://accountgetfacebook[.]blogspot[.]com/",
                "hxxp://facebookloginconfirm[.]blogspot[.]com/",
                "hxxp://facebooklogin123[.]blogspot[.]com/",
                "hxxp://www[.]2017-facebook[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 780,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 780,
                "newInLastHour": 146,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3137876e14b1e16f462ddb72f0edfdc460460911294b5fd4ef5e5e152080052d",
                " \"bb23f0cc167c69eb971d2069f8e3c06751a3f9c9e66a34ea12ea30a46dc00d72",
                " \"9450373187894925be70cc62b7d91adefda11b369e39c524f8cb6fad7e6302d8",
                " \"261a6daa4ba6016af869c7c47a8281472f2694909d048015e1b6b8ae12358d2c",
                " \"bc407097ee137184b145516a4830a3a3b768dedf4fb1b8b4a2ad548b4b20d55a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1669,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1669,
                "newInLastHour": 49,
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
                "1[.]10[.]214[.]96",
                "1[.]10[.]247[.]48",
                "1[.]117[.]171[.]170",
                "1[.]119[.]194[.]226"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4596,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4596,
                "newInLastHour": 4596,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]5[.]215",
                "1[.]162[.]62[.]76",
                "1[.]197[.]102[.]62",
                "1[.]20[.]140[.]252"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15311,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15311,
                "newInLastHour": 15311,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://110[.]36[.]75[.]201:39997/i",
                "hxxp://123[.]14[.]208[.]211:40785/bin[.]sh",
                "hxxp://110[.]37[.]21[.]60:40410/i",
                "hxxp://110[.]39[.]239[.]253:52520/i",
                "hxxp://110[.]36[.]75[.]201:39997/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4479,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4479,
                "newInLastHour": 4018,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://sup[.]merahsm188[.]top/\"",
                " \"sup[.]merahsm188[.]top\"",
                " \"efqveeuagmohjnnmvv[.]fidipodiatry[.]com\"",
                " \"fidipodiatry[.]com\"",
                " \"zqknpozhmpdvsuvvhd[.]farmacia-bienestar[.]com\""
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
            "iocCount": 10254,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10254,
                "newInLastHour": 8590,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "7b5604ee44715ba0b4e92c2281f30c5a3416ca41",
                "d08e16884011f6910fe8087a74dac507ff7d2a6a",
                "8f0de55e89d97b4f3581f77805955a2b719563b8",
                "d447d27a879fe80420dc54244870f3f7d25993bb",
                "472239fd43cdfe3b960245672b183c4be200ed7a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 38967,
            "activeSources": 8,
            "criticalAlerts": 17570,
            "activeCampaigns": 166
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15895,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3333,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1675,
                "trend": "down",
                "percentage": -83
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
                "count": 15219,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]12[.]8:57186/i",
                    "hxxp://125[.]40[.]44[.]193:33777/i",
                    "hxxp://42[.]235[.]49[.]63:40981/i"
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
                    "1[.]10[.]211[.]69",
                    "1[.]10[.]247[.]19"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1620,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1391,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]96[.]254[.]114:22\"",
                    " \"47[.]236[.]130[.]154:3443\"",
                    " \"42[.]193[.]22[.]177:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 450,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "472239fd43cdfe3b960245672b183c4be200ed7a",
                    "73202d8d2ac9a9e04c2bdefa6ea8db2860d779a9",
                    "12b3a868314cd43aa8d304a7e529bbd498ee74ee"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 378,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"popelkar[.]pro\"",
                    " \"auth-clo-id[.]cc\"",
                    " \"kinikar[.]pro\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 345,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ifnj[.]intellectualgroupie[.]com\"",
                    " \"intellectualgroupie[.]com\"",
                    " \"stabimodule[.]deckico[.]bet\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 300,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://www[.]b30s[.]top/",
                    "hxxp://www[.]b30p[.]top/",
                    "hxxps://www[.]f27k[.]top/"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"79[.]110[.]49[.]148:7777\"",
                    " \"79[.]110[.]49[.]148:1009\"",
                    " \"79[.]110[.]49[.]148:60\""
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 286,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"155[.]103[.]71[.]115:15609\"",
                    " \"172[.]111[.]163[.]172:65070\"",
                    " \"204[.]44[.]93[.]75:14641\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 48015,
        "lastCalculated": "2026-07-24 19:35 IST"
    }
};
