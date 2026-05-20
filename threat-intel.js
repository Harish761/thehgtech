// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-20T09:52:29.823237+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-20T09:52:29.542308+05:30",
    "lastUpdatedFormatted": "May 20, 2026 at 09:52 AM IST",
    "comparisonPeriod": "May 19 \u2013 May 20, 2026",
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
                "hxxps://s4w[.]in/roblox-com-users-9696597261-profile",
                "hxxps://www[.]roblox[.]et/users/1336597261/profile",
                "hxxp://www[.]apex-bet365[.]com/",
                "hxxps://lnk[.]ink/www[.]robIox[.]com[.]users-8137420814-profile",
                "hxxps://robloxc[.]com[.]es/users/570224686/profile"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 683,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 683,
                "newInLastHour": 74,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"907cd5033f777af64a32a90c35512a0829c325f7ef1f3ef6192e8de73af7ed95",
                " \"a1bb4a095c8ef449b6dd79caf3fabdece150f26d09f127c4b14e768eec85f016",
                " \"31e6bef3cc130bcbe312ce7d8558b8ffd61decf4f2ccd55033bf957a841e13ee",
                " \"79923ef39d8c35237ac2a784b5b24a21729182f8f34c8d77b252b2610a3197f5",
                " \"e01a2e8a9282e1d31e48c9e03a9369c75b0b8b69ec23387b703f05ffc0d46c06"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1586,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1586,
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
                "1[.]156[.]141[.]253",
                "1[.]156[.]181[.]5",
                "1[.]171[.]164[.]57",
                "1[.]176[.]118[.]246",
                "1[.]180[.]148[.]140"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5817,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5817,
                "newInLastHour": 5817,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]58[.]48",
                "1[.]162[.]225[.]185",
                "1[.]194[.]210[.]131",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24116,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24116,
                "newInLastHour": 24116,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://vintage-telemetry-receiver[.]garden/4f8006b4-9542-4bdc-8297-abe7ef4b020c/google[.]ct",
                "hxxp://27[.]220[.]76[.]50:46843/bin[.]sh",
                "hxxp://115[.]59[.]80[.]140:37482/i",
                "hxxp://112[.]242[.]90[.]238:55190/bin[.]sh",
                "hxxp://113[.]239[.]237[.]55:46567/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3088,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3088,
                "newInLastHour": 3069,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"vintage-telemetry-receiver[.]garden\"",
                " \"myrrupr[.]duckdns[.]org\"",
                " \"isochronous-cyclotron-beam[.]garden\"",
                " \"gothic-vault-engineering[.]garden\"",
                " \"submerged-continental-shelf[.]garden\""
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
            "iocCount": 9670,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9670,
                "newInLastHour": 8586,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "b58e61aaef8465db4eb766b265504bad4288195f",
                "73aa7640cd4b4b4a1adc4feac2b43c4269a869a0",
                "dc56ac0921f789585377f19e9ef12cfa1bc0d6c2",
                "4f391f6181ed04bbb503adffee6259ed57353749",
                "c4af518b550a6b1489d87ac39e317e3c16f1f7a7"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 46527,
            "activeSources": 8,
            "criticalAlerts": 26525,
            "activeCampaigns": 127
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 25383,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2817,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 1142,
                "trend": "down",
                "percentage": -88
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
                "percentage": 91
            },
            {
                "name": "Tech",
                "percentage": 8
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
                "count": 24695,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]228[.]37[.]99:46774/i",
                    "hxxp://110[.]36[.]70[.]47:39783/bin[.]sh",
                    "hxxp://39[.]73[.]17[.]241:47095/i"
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
                    "1[.]123[.]236[.]95"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1618,
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
                "count": 1440,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"43[.]142[.]137[.]169:18443\"",
                    " \"8[.]222[.]147[.]42:443\"",
                    " \"8[.]222[.]147[.]42:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 331,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44",
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661"
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 300,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://srv-creator[.]github[.]io/insta/",
                    "hxxp://ahmedhelalia[.]github[.]io/js-amazon-clone/",
                    "hxxp://notifyhubss[.]net/5296be205e47db40576a96a4e6bqd7449634[.]html"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 256,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"67[.]217[.]228[.]3:443\"",
                    " \"hxxps://u3hqns4msrc4hei[.]top/1[.]php?s=580e250d-effb-401a-b981-fb7fd80635a2\"",
                    " \"u3hqns4msrc4hei[.]top\""
                ]
            },
            {
                "name": " \"win.remcos\"",
                "count": 235,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"5[.]101[.]81[.]163:47524\"",
                    " \"144[.]172[.]94[.]91:1122\"",
                    " \"144[.]172[.]94[.]91:2255\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 221,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"d9c2c2d1513831f3ea9fb436917606169d14f21359dd09a5fa277c82171ea6cb",
                    " \"ab57d68527b85cb8ca12247b2b9f0d6f7d0cda2e9273ec70aa4cc1c9607f52ad",
                    " \"b312aa01446c95a067558b1a8da4513db28d313529f06da1a076bb85a87719e3"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 213,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"fccfac75141967ecd10c2286054324e62b872b282ec1398c3134cd43afafc87a",
                    " \"1b8085075c6707426f2a22072f58e484ee5bf513015051020ff3d1fbe99c8edd",
                    " \"a6feb0c766167be56b8aac503dd687f5553ff838833340ec5a367bc450e23e24"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 56978,
        "lastCalculated": "2026-05-20 09:52 IST"
    }
};
