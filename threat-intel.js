// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-18T18:25:49.666293+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-18T18:25:49.318704+05:30",
    "lastUpdatedFormatted": "Sep 18, 2026 at 06:25 PM IST",
    "comparisonPeriod": "Sep 17 \u2013 Sep 18, 2026",
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
                "hxxps://www[.]roblox[.]ly/users/8231296959/profile",
                "hxxps://www[.]roblox[.]com[.]am/games/142823291/Murder-Mystery-2?privateServerLinkCode=037625068419256218425781722588",
                "hxxp://pemenang-shopee4[.]blogspot[.]com/",
                "hxxps://ff[.]alwayssecuredhub[.]net/public/assets/jquery/jquery-3[.]3[.]1[.]min[.]js/",
                "hxxp://www[.]blizzcon[.]us[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1373,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1373,
                "newInLastHour": 177,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"8b17b9973deff8917b8d020b7d807712de3752848d95468daa8ebca73dc1ecbc",
                " \"a6ceacda670b88e8a8ec9ff5da6a77d9f1c896d6479b2dadb700474a8c408f80",
                " \"a49fb245bdb46bf18c1eb168fd05a98dd27a7a1a52fca9c26458afea66822704",
                " \"1c69b47660c0824fc9f769aede2c178fe216572ca2d96f338da235ab26f27b3e",
                " \"4a418f334e4831a9150989f79c849ff580ba28a27ae05cd74d8d2d9b25baaf82"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1651,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1651,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.27.62.0/24",
                "2.56.192.0/22"
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
                "1[.]10[.]172[.]57",
                "1[.]117[.]59[.]169",
                "1[.]14[.]121[.]115",
                "1[.]189[.]89[.]243",
                "1[.]194[.]161[.]195"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5257,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5257,
                "newInLastHour": 5257,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]245[.]185",
                "1[.]10[.]244[.]218",
                "1[.]15[.]21[.]86",
                "1[.]161[.]144[.]132"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12980,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12980,
                "newInLastHour": 12980,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://39[.]59[.]57[.]253:43968/i",
                "hxxp://39[.]59[.]57[.]253:43968/bin[.]sh",
                "hxxps://github[.]com/flyingman11/Monero/releases/download/v1[.]0[.]0/Monero-installer-v1[.]0[.]0[.]bat",
                "hxxp://196[.]190[.]105[.]170:39910/i",
                "hxxp://115[.]61[.]118[.]230:46482/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6734,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6734,
                "newInLastHour": 5382,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://homecor[.]click:6527/subscriptions\"",
                " \"hxxp://kipthen[.]shop:9932/webhooks\"",
                " \"mauritaalright[.]workers[.]dev\"",
                " \"mimhq25218[.]workers[.]dev\"",
                " \"154[.]91[.]63[.]108:8084\""
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
            "iocCount": 10450,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10450,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "c8f25096d3b14521a804d30fb8d618f4f0b33950",
                "d260d414670f40733184875b60bb353632e73fcc",
                "6e35a76a571969f0e27a8c8c1c11c8aa21330887",
                "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                "633df5171fe70f3fed9d56136ebfa187879b4fb6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48813,
            "activeSources": 8,
            "criticalAlerts": 25067,
            "activeCampaigns": 252
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14353,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10714,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4533,
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
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]172[.]57",
                    "1[.]14[.]121[.]115",
                    "1[.]194[.]161[.]195"
                ]
            },
            {
                "name": "malware_download",
                "count": 12793,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://112[.]248[.]163[.]165:55998/i",
                    "hxxp://105[.]224[.]111[.]111:58391/bin[.]sh",
                    "hxxp://39[.]74[.]235[.]56:50788/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1713,
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
                "count": 1448,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9700462dfd419d0295b2753079208e939a853dce",
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1369,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"154[.]219[.]101[.]56:18881\"",
                    " \"117[.]72[.]202[.]154:443\"",
                    " \"154[.]219[.]101[.]56:8443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1361,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"128[.]90[.]136[.]246:4444\"",
                    " \"102[.]220[.]163[.]36:7707\"",
                    " \"194[.]26[.]192[.]153:2001\""
                ]
            },
            {
                "name": "Vidar",
                "count": 786,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "894348a13bd989cadc0e7dab223b2d98dd2a2a8f",
                    "513c67627217e9e62bf86dad646acdccca6bae7d",
                    "66e45265f8da905b7538b0a81f1ec9b54ea12dd9"
                ]
            },
            {
                "name": " \"n/a",
                "count": 747,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"09a78eff62566b906a4a41005e1841cee8b43da0d65633c56fb47d8ca6dbd9b9",
                    " \"1dab32c614e9a97a25f8f04841b4ba9fe780369da1b043871b936e8f3c834891",
                    " \"aba4d4dd7ab62fea1849a1ef348bce68d68ce1f28e3b518436a46b8228940461"
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
                "count": 705,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651",
                    "de0a287fb9997f0ffbd36df79b13cfda63f0bfcd"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 39105,
        "lastCalculated": "2026-09-18 18:25 IST"
    }
};
