// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-11T10:24:42.211660+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-11T10:24:41.945055+05:30",
    "lastUpdatedFormatted": "Jun 11, 2026 at 10:24 AM IST",
    "comparisonPeriod": "Jun 10 \u2013 Jun 11, 2026",
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
                "hxxps://www[.]roblox[.]com[.]ml/users/346582866646/profile",
                "hxxps://www[.]sun6888[.]com/",
                "hxxp://registrasitokivlt2[.]zzxe[.]biz[.]id/",
                "hxxp://ajukanpinjamanvlt4[.]zzxe[.]biz[.]id/",
                "hxxp://allegrolokalnie[.]lokalne-ogloszenie126382738[.]sbs/oferta/balia-ogrodowa-powystawowa-full-opcja-dostawa/631620301"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1056,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1056,
                "newInLastHour": 86,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"003a9dc4eced7813bbfa6db61e0dfe36bd496ddbe6fa61328e33bf4bc319e72a",
                " \"fd42ddcc1b4107863ee362d48cf68262176995c88c65969c957f2a16fb7c22e0",
                " \"bf265af40f99d3466f6eb88c40e70ce8c97d6c5b4f63ae0b034fb51bc4adf112",
                " \"b886bbb4f4fc626b0c2656be62b713d62118a90e93a2695a582d213cb8755353",
                " \"71e947d830bdb4f9aec4b6dbdf36cd04222791defbced6f489800acee3eeed15"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1617,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1617,
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
                "1[.]0[.]203[.]197",
                "1[.]15[.]35[.]79",
                "1[.]159[.]65[.]249",
                "1[.]164[.]107[.]152",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 7642,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 7642,
                "newInLastHour": 7642,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]116[.]110[.]170",
                "1[.]116[.]61[.]217",
                "1[.]15[.]227[.]58"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17833,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17833,
                "newInLastHour": 17833,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]59[.]8[.]55:48575/bin[.]sh",
                "hxxps://iznukhb[.]hesabdari2[.]xyz/13e33441-5d5f-40f0-a159-333cff5e21d3",
                "hxxp://202[.]107[.]96[.]28:50487/i",
                "hxxps://zo4t1q36[.]moarefeslami[.]xyz/?ublib=8fa6cda4-73a4-4f89-8dc5-01df568f4daf",
                "hxxp://182[.]90[.]192[.]6:56722/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4276,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4276,
                "newInLastHour": 4242,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"iznukhb[.]hesabdari2[.]xyz\"",
                " \"zo4t1q36[.]moarefeslami[.]xyz\"",
                " \"43[.]160[.]193[.]90:6666\"",
                " \"m2bu2yf9[.]ansuyemarg[.]xyz\"",
                " \"18[.]162[.]74[.]188:112\""
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
            "iocCount": 9865,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9865,
                "newInLastHour": 8589,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e2fdfc3f1a9e23e7ce2f26868f8c7065a4896dc8",
                "845f3e3a700d5018e36f523e23d75b7c43cabea0",
                "14a5975bdcb2ad65a1db0f0809c18a8d89a0276e",
                "99bc361047301dd49afbfe7f8ee38e1736cad160",
                "185ba0134595e7e8fa4ba332d6eb3582b90e6cc8"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 42114,
            "activeSources": 8,
            "criticalAlerts": 20864,
            "activeCampaigns": 159
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 19529,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3247,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 1335,
                "trend": "down",
                "percentage": -86
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
                "percentage": 96
            },
            {
                "name": "Tech",
                "percentage": 3
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 18487,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://196[.]251[.]107[.]104/10x06x2026_x32[.]exe",
                    "hxxp://163[.]142[.]79[.]122:53751/i",
                    "hxxp://196[.]251[.]107[.]104/10x06x2026_x64[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]140[.]118[.]126",
                    "1[.]140[.]98[.]29",
                    "1[.]141[.]131[.]155"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1649,
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
                "count": 1397,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"1364170351-5ezc7c8ssf[.]ap-guangzhou[.]tencentscf[.]com\"",
                    " \"193[.]233[.]202[.]16:3389\"",
                    " \"8[.]148[.]201[.]210:10553\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 506,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"boldthrives[.]com\"",
                    " \"allcountiesroofingltd[.]co[.]uk\"",
                    " \"altecva[.]com\""
                ]
            },
            {
                "name": "Vidar",
                "count": 381,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "39c142adbc6b401266f5cb025b7218246e36df74",
                    "cf62ecd77ed61f4b597c5a0fb29912f9d80a2d6b",
                    "244fab9da420579102b57ce615f0304b64c76d6b"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 330,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"2ca505600e3613d1b23567b70bdf3f73b3683675691a19c089d32dd05b8a5ebf",
                    " \"78979a82a8d06eecac13d9b5044ef1361dfff33850966a655fac6a712015fe78",
                    " \"db31d33c4f89802ec63c8dcbb82a8251af7f68623c426e535ccc13a6778d056b"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://track-ghk[.]click/gh",
                    "hxxps://lnk[.]ink/eBflI",
                    "hxxps://pahdidj[.]one/gh"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 285,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://kik[.]glamisdunesrentals[.]com/\"",
                    " \"kik[.]glamisdunesrentals[.]com\"",
                    " \"hxxps://kik[.]gagahsm188[.]top/\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 270,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"getbrowseronline[.]com\"",
                    " \"autoupdateing[.]com\"",
                    " \"fastonlineupdate[.]com\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 53708,
        "lastCalculated": "2026-06-11 10:24 IST"
    }
};
