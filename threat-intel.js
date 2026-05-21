// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-21T17:04:42.791315+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-21T17:04:42.419643+05:30",
    "lastUpdatedFormatted": "May 21, 2026 at 05:04 PM IST",
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
                "hxxp://live-join-gooqle-meet[.]4-c4[.]com/",
                "hxxp://ecortbabylon[.]site/gmail/asdasd",
                "hxxp://livemeetcall[.]xyz/",
                "hxxp://ecortbabylon[.]site/login/test",
                "hxxp://ecortbabylon[.]site/duo/test"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2532,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2532,
                "newInLastHour": 145,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"db9fb488a99fb9d029d9751bc4edb204c51bc91e3066ec3d23c03144efa4f376",
                " \"1667fc6f28dc820c19c37fb2afe7258be6ff4628249c26ce18b09fd4af5840cc",
                " \"a30e49e1f71c70c4bc72f62e80be05b837c4a01a8fcc12e0c5a4c2cf52e270fa",
                " \"5a0b6ad41ef410c4182d0a0bdafd108f17bb397b4ab126c59b209e86664a85a7",
                " \"04016d3ac1b30375de773a8fd63a4d7f60aa36ab5679b1714e2d98ac88979505"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1629,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1629,
                "newInLastHour": 3,
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
                "1[.]15[.]14[.]29",
                "1[.]156[.]129[.]70",
                "1[.]162[.]164[.]41",
                "1[.]180[.]148[.]140",
                "1[.]180[.]183[.]158"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5865,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5865,
                "newInLastHour": 5865,
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
            "iocCount": 23999,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23999,
                "newInLastHour": 23999,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://61[.]54[.]236[.]125:34217/i",
                "hxxps://busbytesadd[.]christmas/6464871c-26f3-41a3-8974-ebe3c9c23ad6/zone[.]id",
                "hxxp://27[.]215[.]182[.]166:53016/i",
                "hxxps://22goulm8[.]runtime-nexus[.]digital/?ublib=45f1c6fa-fbf7-4e22-8cee-f9058ff59366",
                "hxxp://182[.]126[.]89[.]85:45355/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3021,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3021,
                "newInLastHour": 3014,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"22goulm8[.]runtime-nexus[.]digital\"",
                " \"lq5oouw7[.]runtime-nexus[.]digital\"",
                " \"runtime-nexus[.]digital\"",
                " \"graphnewclass[.]christmas\"",
                " \"207[.]154[.]243[.]85:8443\""
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
            "iocCount": 9738,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9738,
                "newInLastHour": 103,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "53c0f0608e2d03a10eab7e3a98d1de6c4ff534e6",
                "eb6901b9b0d7f6f53fcc09172d5182305ca358f9",
                "158cd4701d337bfb42199fa6f6c448633007175f",
                "493f6dbb48806992e524df2a3a0fa0348cef243b",
                "00c4f579eecf9667648c6df1dddeca622092dc85"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56003,
            "activeSources": 8,
            "criticalAlerts": 36031,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 26418,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 9613,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2753,
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
                "count": 23874,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]132[.]166[.]119:45562/i",
                    "hxxps://hasmysql[.]christmas/fa603fda-db92-4076-9c6c-a89fa306b822/zone[.]id",
                    "hxxp://110[.]36[.]1[.]80:51745/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]156[.]129[.]70",
                    "1[.]176[.]118[.]246",
                    "1[.]180[.]148[.]140"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1626,
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
                "count": 1411,
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
                "count": 1401,
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
                "count": 1019,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"ca70bc178c645aa50bb22b4845b552fedeea69d4023922cfbc57d79ce27b31d4",
                    " \"3683d673395b2ef445ea80d604af15a7d05c5d21cdcbbb02fc933298ba9b9862",
                    " \"87fea5ec96401dd614b9b8cac663292cba330ec4a08fd852ec1f9bc5190c1b03"
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
                "count": 675,
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
                "count": 521,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48434,
        "lastCalculated": "2026-05-21 17:04 IST"
    }
};
