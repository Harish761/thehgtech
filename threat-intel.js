// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-21T02:04:18.877709+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-21T02:04:18.517801+05:30",
    "lastUpdatedFormatted": "May 21, 2026 at 02:04 AM IST",
    "comparisonPeriod": "May 20 \u2013 May 21, 2026",
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
                "hxxp://www[.]j62n[.]vip/",
                "hxxps://praadconsulting[.]com/xmx/secure_access-5[.]html",
                "hxxps://www[.]robiox[.]com[.]py/users/253685455601/profile",
                "hxxps://cloudappleid[.]sviluppo[.]host/7823120-ACES/",
                "hxxps://auth-netfliix-mov[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2474,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2474,
                "newInLastHour": 818,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"058907a67e9430d97d96fa17422ff8be3d1b038c21dd7c255257cd96cb8a0967",
                " \"12d377e785857d98a58c60ac7308ec16884f97d5f2bb4995e256d902a9d7a39a",
                " \"6d923f5957a268d81539b359e214fd2c09b5b55ad4fa9cf8f2767e0383195228",
                " \"0c18763258102e44f10079be2432033f3b75db8163ac5660d0add293de72b002",
                " \"2f00e4af1416ff524a62fe2144c0c71103f8d2be468dcbfc7cddae37fd5895af"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1614,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1614,
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
                "1[.]156[.]129[.]70",
                "1[.]156[.]181[.]5",
                "1[.]176[.]118[.]246"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5709,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5709,
                "newInLastHour": 5709,
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
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 24754,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 24754,
                "newInLastHour": 24754,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://138[.]204[.]196[.]254:37383/i",
                "hxxps://bedzvnbo[.]ecosystemresourceplatform[.]garden/6aa2b68e-97af-479b-87e4-1c849c5adcae/ggl[.]bsc",
                "hxxp://113[.]224[.]80[.]196:51179/i",
                "hxxps://frcdk4gw[.]deepseahydrothermalvent[.]digital/?ublib=0950cea8-0588-4d93-97c5-e14718431cfe",
                "hxxp://60[.]23[.]239[.]44:50687/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3036,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3036,
                "newInLastHour": 3019,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bedzvnbo[.]ecosystemresourceplatform[.]garden\"",
                " \"qztiboya[.]ecosystemresourceplatform[.]garden\"",
                " \"ecosystemresourceplatform[.]garden\"",
                " \"ns1cdnclaude[.]beer\"",
                " \"bootstrup-cdnmaper[.]beer\""
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
            "iocCount": 9723,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9723,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "50e95582f4719b4eb6c316e332813b41adf449ed",
                "b58e61aaef8465db4eb766b265504bad4288195f",
                "73aa7640cd4b4b4a1adc4feac2b43c4269a869a0",
                "dc56ac0921f789585377f19e9ef12cfa1bc0d6c2",
                "4f391f6181ed04bbb503adffee6259ed57353749"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 55994,
            "activeSources": 8,
            "criticalAlerts": 36101,
            "activeCampaigns": 222
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26437,
                "trend": "stable",
                "percentage": 5
            },
            {
                "category": "C2",
                "count": 9664,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2742,
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
                "percentage": 93
            },
            {
                "name": "Tech",
                "percentage": 6
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24728,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]36[.]25[.]33:52843/i",
                    "hxxp://123[.]170[.]120[.]82:59468/bin[.]sh",
                    "hxxp://42[.]3[.]3[.]190:59677/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]156[.]129[.]70",
                    "1[.]162[.]164[.]41"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1580,
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
                "count": 1412,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a",
                    "fa2598910f8313798f8ee2fbfe84668b718442b6",
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1406,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"1[.]92[.]101[.]103:8088\"",
                    " \"1[.]92[.]101[.]103:443\"",
                    " \"1[.]92[.]101[.]103:80\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 880,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"50fe1f7e7b3ddf96b32f18815a7ee7e4b579d9d1a094d872d8bfcaefe39bc1c8",
                    " \"50d2f2692f2b740d94fc93fbf63f9028ff23b0c6336955341aa555c01bccb2a0",
                    " \"4ff7b6a637b0b5d5512fda978084a0a66f5e41fc6da2014218b359cca75ae32a"
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
                "count": 674,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 552,
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
                "count": 528,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44",
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"n/a",
        "totalAttacksThisHour": 49692,
        "lastCalculated": "2026-05-21 02:04 IST"
    }
};
