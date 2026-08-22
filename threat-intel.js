// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-22T14:11:18.326144+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-22T14:11:18.043376+05:30",
    "lastUpdatedFormatted": "Aug 22, 2026 at 02:11 PM IST",
    "comparisonPeriod": "Aug 21 \u2013 Aug 22, 2026",
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
                "hxxp://btinternet-maintenance-update106043-104089[.]weeblysite[.]com/",
                "hxxp://courageous-paletas-6e47c2[.]netlify[.]app/",
                "hxxp://luxury-frangollo-2d3521[.]netlify[.]app/",
                "hxxp://classy-kulfi-c3cd9f[.]netlify[.]app/",
                "hxxp://simple-security-page--aphroditesaless[.]replit[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 801,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 801,
                "newInLastHour": 14,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7a68cc7821a35b8f3bd1eec7293c00988e555b76d63d49d9dd4543ee70de95d9",
                " \"2cedfae6f7bda0b57f9f2135eaa06220a55157dde7c46212619f50e17f4ab525",
                " \"5d5fd1339b8c8013cf65496e9c2686d9e75724bdbdb7a499c5292d8228e70abd",
                " \"10e00b5609e2579472202fa80d3f7cb27d3d5f6e975c5497107dde55237b4ae0",
                " \"91702decfaf0d0501941ec71e9d9db522fb293aab485a766a5a9f0ccde3d983d"
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
                "1[.]119[.]158[.]77",
                "1[.]180[.]190[.]250",
                "1[.]180[.]247[.]82",
                "1[.]188[.]101[.]117",
                "1[.]188[.]101[.]185"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5241,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5241,
                "newInLastHour": 5241,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]20[.]150[.]200",
                "1[.]20[.]215[.]65",
                "1[.]209[.]110[.]147",
                "1[.]214[.]214[.]114",
                "1[.]220[.]233[.]171"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16358,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16358,
                "newInLastHour": 16358,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://60[.]18[.]84[.]125:39736/bin[.]sh",
                "hxxp://125[.]47[.]87[.]135:56962/i",
                "hxxp://196[.]190[.]105[.]170:51134/i",
                "hxxp://27[.]202[.]245[.]161:52186/i",
                "hxxp://39[.]74[.]145[.]166:55070/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4767,
                "newInLastHour": 4745,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"poussin[.]ch\"",
                " \"nomadstreetfood[.]ch\"",
                " \"hxxps://krem[.]mesoptik[.]com/static/modules/\"",
                " \"86b7654226949a31ae3b98e93647dd583c06777f8d168381e910ca01096070e6\"",
                " \"e5e0c20f0ecb7eb56737b2f8f85620ce477342b14a7cf95549ff362eac981173\""
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
            "iocCount": 10514,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10514,
                "newInLastHour": 8590,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "de7567aa2ce367cb0915ffd8eb55b1e320e726c9",
                "b95285b6b061fd0acf6a5ae95433d703f52d1872",
                "5b276d28106cb7d91dd5f810e61d9523d34c7804",
                "1cdb18c33da65a40adad7b51808edf66f3e180e5",
                "bf192adc3dcaba7412e15b567de22e3f3150bbf7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 40968,
            "activeSources": 8,
            "criticalAlerts": 19179,
            "activeCampaigns": 147
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17244,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4178,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1935,
                "trend": "down",
                "percentage": -81
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
                "count": 16308,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://27[.]44[.]145[.]231:40959/i",
                    "hxxp://42[.]231[.]89[.]132:55455/i",
                    "hxxp://42[.]231[.]89[.]132:55455/bin[.]sh"
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
                    "1[.]177[.]162[.]4"
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
                "count": 1337,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"199[.]187[.]25[.]93:443\"",
                    " \"199[.]187[.]25[.]93:80\"",
                    " \"118[.]25[.]37[.]47:8081\""
                ]
            },
            {
                "name": "Vidar",
                "count": 524,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0bb977bf9e0950a1a818660dde009ac9934bd1e2",
                    "0f47d296ca2a764238bfd644c7b716cffafa1352",
                    "aa50e1b4a6e7c66ba2ce4c1c82e62f8d74cd7202"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 489,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"31[.]57[.]184[.]154:56003\"",
                    " \"104[.]249[.]10[.]86:56001\"",
                    " \"104[.]249[.]10[.]86:56002\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 403,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"31[.]59[.]41[.]79:7443\"",
                    " \"hxxp://45[.]150[.]195[.]235/tarm\"",
                    " \"hxxp://45[.]150[.]195[.]235/tarm5\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 369,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]247[.]165[.]127:8880\"",
                    " \"38[.]247[.]165[.]127:9090\"",
                    " \"185[.]34[.]147[.]35:80\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 299,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://btinternet-maintenance-update106043-104089[.]weeblysite[.]com/",
                    "hxxp://courageous-paletas-6e47c2[.]netlify[.]app/",
                    "hxxp://luxury-frangollo-2d3521[.]netlify[.]app/"
                ]
            },
            {
                "name": " \"n/a",
                "count": 286,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e766006dbda523bcab41079e4d69495a373506910b497012377f540e5b2412c6",
                    " \"adaaeae5751344edbe24efc363c3c4e6b6cfea00f4a19fd0e59e20b8c9db0cc2",
                    " \"8a51b7c9a5ca3ffd8919e92434c6758c8f00f433f5e03fecd169ff052eaeb5d3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 50302,
        "lastCalculated": "2026-08-22 14:11 IST"
    }
};
