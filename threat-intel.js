// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-27T21:38:01.268105+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-27T21:38:01.059881+05:30",
    "lastUpdatedFormatted": "May 27, 2026 at 09:38 PM IST",
    "comparisonPeriod": "May 26 \u2013 May 27, 2026",
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
                "hxxp://apl-bootstrap-olyad-clone[.]netlify[.]app/",
                "hxxps://8riyashil[.]github[.]io/amazon[.]com-front-page",
                "hxxps://gmotkshop[.]com/h5/#/pages/register/register?code=MHKDE6",
                "hxxps://gmotkshop[.]com/s/MHKDE6",
                "hxxp://www[.]j70g[.]vip/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 804,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 804,
                "newInLastHour": 236,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"855931ed160f9e4b3cb321c96e8454e5b3662859e1829784cd0bb0c71aee4053",
                " \"4c2d532827cd66741885425d186b1c1bea8c77345d2a6b8c339c4b79d9c545d6",
                " \"c0f3d3ae6e668e99303e447f21e1bddd403f31c7908a642622a12a7a8f0ae391",
                " \"7129076f2b648b20cbd7b35eb8612ba4315be053ebcb5fa852b689f1ef72deed",
                " \"3b8ea9cc170de884a12fa38fb9530cf3dfeb03b94ce74859e9c745ae79936447"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1566,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1566,
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
                "1[.]1[.]223[.]16",
                "1[.]162[.]158[.]142",
                "1[.]171[.]150[.]9",
                "1[.]176[.]118[.]246",
                "1[.]177[.]63[.]19"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5598,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5598,
                "newInLastHour": 5598,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]176[.]139",
                "1[.]192[.]191[.]10",
                "1[.]194[.]210[.]131",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21261,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21261,
                "newInLastHour": 21261,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]121[.]14[.]233:47131/i",
                "hxxp://110[.]36[.]80[.]162:47289/bin[.]sh",
                "hxxps://pshcd[.]cannaturalgroup[.]com/f1c2ccfa-4dcb-4c66-a355-7b03985210ff",
                "hxxp://182[.]124[.]128[.]130:57703/i",
                "hxxp://42[.]232[.]179[.]74:46032/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3452,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3452,
                "newInLastHour": 3443,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"8[.]134[.]70[.]73:9999\"",
                " \"47[.]122[.]47[.]221:8081\"",
                " \"pshcd[.]cannaturalgroup[.]com\"",
                " \"gdhex[.]cannaturalgroup[.]com\"",
                " \"listings[.]mildecommercialrealestate[.]com\""
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
            "iocCount": 9747,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9747,
                "newInLastHour": 8589,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "0e5e7e69a3b202c3bcbe3ad00778738ac17b337a",
                "0f2238bc817a0980aad4917bfe0d50f2b722a917",
                "d97825d45bfc538a5d364592bedc811585f20599",
                "80916b4d991f80a56fa11f2664d3f5fa9689b75e",
                "b6fc55e2f22f993595a253f10d9a1c4e5aa2fd96"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 43182,
            "activeSources": 8,
            "criticalAlerts": 22833,
            "activeCampaigns": 138
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21616,
                "trend": "stable",
                "percentage": -4
            },
            {
                "category": "Botnet",
                "count": 2994,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1217,
                "trend": "down",
                "percentage": -87
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
                "percentage": 94
            },
            {
                "name": "Tech",
                "percentage": 5
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 20974,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]60[.]252[.]124:51593/i",
                    "hxxp://123[.]4[.]162[.]183:33442/i",
                    "hxxps://godww[.]accredit[.]hu/62cb720d-ab04-49ec-a37f-bef1a8d65c4e"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]11[.]228[.]4",
                    "1[.]162[.]93[.]188"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1599,
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
                "count": 1452,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"60[.]205[.]109[.]25:51234\"",
                    " \"139[.]196[.]223[.]82:2443\"",
                    " \"134[.]122[.]134[.]243:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 350,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "35948245936a76dac42eb2b622438ff77092390b",
                    "a3bd3a9c3cc6a21af873b9f654799e345a23f8dd",
                    "85e9bfbb8e4e7bb428734141e28f3f9488d274bb"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 297,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://bfa-lkcxz[.]wasmer[.]app/recontrustco",
                    "hxxp://qrco[.]de/bgpVJC",
                    "hxxp://tricky-clicks-320788[.]framer[.]app/"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 290,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fanlo[.]addmagad[.]com\"",
                    " \"dzzpl[.]addmagad[.]com\"",
                    " \"godww[.]accredit[.]hu\""
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 278,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"5[.]101[.]82[.]8:48214\"",
                    " \"190[.]2[.]150[.]52:443\"",
                    " \"182[.]23[.]2[.]163:207\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 269,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bytearmor[.]net\"",
                    " \"clipse-cheats[.]net\"",
                    " \"hxxps://clacndjsvulnarbi[.]beer/api/index[.]php?a=dl&lrj=CX1GB52tuJ&anji=OZXky&cp=a4f989e43e04ed72c38a1a134ab6534d612154d996d0711d999510924873ae0f\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 207,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]202[.]1[.]50:12159\"",
                    " \"50[.]114[.]179[.]165:8043\"",
                    " \"207[.]180[.]250[.]181:20600\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 54443,
        "lastCalculated": "2026-05-27 21:38 IST"
    }
};
