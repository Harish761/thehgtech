// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-28T02:03:22.166370+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-28T02:03:21.868778+05:30",
    "lastUpdatedFormatted": "May 28, 2026 at 02:03 AM IST",
    "comparisonPeriod": "May 27 \u2013 May 28, 2026",
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
            "iocCount": 829,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 829,
                "newInLastHour": 74,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a1930444b255e4c7c2cc87777867db7787fe19ccd78edad7a1b164d30d0eaf79",
                " \"b2b94def9498c06eeda051def224345e602ad6509caa770472c9b3c83ae7ce0f",
                " \"43c5ada7003955661753e4947674440bcba923d9994db44f3c25f69645e7adef",
                " \"63df0c35ea180b58f3b39e9bc91d14e33dcc940325aea294c229cb6654294e68",
                " \"99eacd0d28bda2f6c906bf642d42aea8b308d2ca6a2329fabb93e18db565447c"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1588,
                "newInLastHour": 43,
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
                "1[.]15[.]14[.]29",
                "1[.]162[.]158[.]142",
                "1[.]162[.]93[.]188",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5570,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5570,
                "newInLastHour": 5570,
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
            "iocCount": 21494,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21494,
                "newInLastHour": 21494,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://91[.]92[.]42[.]46/svchost[.]vbs",
                "hxxp://89[.]190[.]156[.]61/bins/Akiru[.]x86",
                "hxxp://89[.]190[.]156[.]61/bins/Akiru[.]arm5n",
                "hxxps://gitlab[.]com/notificaciones-judiciales-rama-judicial-colombia1/rama-judicial-del-poder-publico/-/raw/mainclass[.]txt",
                "hxxps://gitlab[.]com/notificaciones-judiciales-rama-judicial-colombia1/rama-judicial-del-poder-publico/-/raw/mainpure31agosto[.]txt"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3499,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3499,
                "newInLastHour": 3491,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"kqfna[.]bonuszugynokseg[.]hu\"",
                " \"zmiac[.]bonuszugynokseg[.]hu\"",
                " \"hxxps://ski[.]matriculadores[.]com/\"",
                " \"ski[.]awansm188[.]top\"",
                " \"hxxps://ski[.]awansm188[.]top/\""
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
            "iocCount": 9716,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9716,
                "newInLastHour": 54,
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
            "totalIndicators": 52135,
            "activeSources": 8,
            "criticalAlerts": 31817,
            "activeCampaigns": 229
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22092,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "C2",
                "count": 9725,
                "trend": "up",
                "percentage": 699
            },
            {
                "category": "Botnet",
                "count": 2998,
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
                "count": 21261,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]121[.]14[.]233:47131/i",
                    "hxxp://110[.]36[.]80[.]162:47289/bin[.]sh",
                    "hxxps://pshcd[.]cannaturalgroup[.]com/f1c2ccfa-4dcb-4c66-a355-7b03985210ff"
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
                    "1[.]162[.]158[.]142",
                    "1[.]171[.]150[.]9"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1566,
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
                "count": 1425,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]134[.]70[.]73:9999\"",
                    " \"47[.]122[.]47[.]221:8081\"",
                    " \"124[.]70[.]184[.]106:8080\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1414,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558",
                    "d42a4a7e721a0503d81e3f47c72a0f93c53e4f2c"
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
                "count": 677,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "493f6dbb48806992e524df2a3a0fa0348cef243b",
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 536,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0e5e7e69a3b202c3bcbe3ad00778738ac17b337a",
                    "35948245936a76dac42eb2b622438ff77092390b",
                    "a3bd3a9c3cc6a21af873b9f654799e345a23f8dd"
                ]
            },
            {
                "name": "OffLoader",
                "count": 413,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3190ff29e738f3a056a97190ae61386c21eddefd",
                    "e9a78163613f7608cc9236ba4cb47ab2861c580e",
                    "9364c682044d04a298c3fdbfa767aaea8fe8d58d"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46031,
        "lastCalculated": "2026-05-28 02:03 IST"
    }
};
