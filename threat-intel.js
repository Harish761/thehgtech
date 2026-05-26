// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-27T02:00:18.055285+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-27T02:00:17.759201+05:30",
    "lastUpdatedFormatted": "May 27, 2026 at 02:00 AM IST",
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
                "hxxps://nlink[.]at/iFuM",
                "hxxp://mettaum-miskelgin8[.]godaddysites[.]com/",
                "hxxp://b7dlgxvbswqj8uvie4o[.]framer[.]ai/",
                "hxxps://rax-fewqa[.]wasmer[.]app/",
                "hxxp://bybit-exchange[.]github[.]io/docs/v5/user/page-subuid"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 608,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 608,
                "newInLastHour": 44,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"32536d5c6177c05d66257a957bd7e8d2724ca77735e6d4559a39a46ab525bf5f",
                " \"3b6dca60889a2d3cd3a1ab766fef24bfcac74da9be30a55f74f5b626e9c0be3c",
                " \"4cce5aa6c0a0645054efc70da02fc793f7d6ad9ebabc873892867b69f229fa20",
                " \"0c69afe39e636cab46012ed722b4b48710ec2af81042c7b84f87915c4a9ba0b9",
                " \"73a8126b8d5443295250815df160f550effeedf1f8adfd0ac2d5160824ca8f37"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1610,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1610,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]162[.]93[.]188",
                "1[.]176[.]118[.]246",
                "1[.]177[.]63[.]19"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4936,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4936,
                "newInLastHour": 4936,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]51[.]198",
                "1[.]14[.]176[.]139",
                "1[.]192[.]191[.]10",
                "1[.]194[.]210[.]131"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21840,
                "newInLastHour": 21840,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]4[.]205[.]5:33029/bin[.]sh",
                "hxxp://222[.]140[.]161[.]65:41561/i",
                "hxxp://123[.]10[.]4[.]2:39062/i",
                "hxxp://182[.]117[.]77[.]228:36876/bin[.]sh",
                "hxxps://cdpus[.]vikstore[.]hu/7f151d58-332c-4f37-910a-d5947af518ed"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3362,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3362,
                "newInLastHour": 3351,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"cdpus[.]vikstore[.]hu\"",
                " \"fzori[.]vikstore[.]hu\"",
                " \"fgpjr[.]vigaf[.]hu\"",
                " \"50[.]114[.]179[.]165:8043\"",
                " \"5[.]101[.]82[.]8:48214\""
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
            "iocCount": 9798,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9798,
                "newInLastHour": 4,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "80916b4d991f80a56fa11f2664d3f5fa9689b75e",
                "b6fc55e2f22f993595a253f10d9a1c4e5aa2fd96",
                "ee93d89e9658b9ee069e20491302032339559903",
                "3be7926b71e07cde1a741f2da6ec60c9a2c8fe4f",
                "13b4e1a1fbb1cc7dc142c7b9e244312011ebef31"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52488,
            "activeSources": 8,
            "criticalAlerts": 32229,
            "activeCampaigns": 224
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22457,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9772,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2891,
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
                "count": 21775,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://topbo[.]cannatural[.]eu/4fc3e1d5-4515-466b-a767-857988d9032e",
                    "hxxp://27[.]215[.]215[.]33:50033/i",
                    "hxxp://182[.]127[.]4[.]86:43759/bin[.]sh"
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
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1610,
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
                "count": 1449,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"166[.]88[.]95[.]98:8085\"",
                    " \"47[.]122[.]47[.]221:18443\"",
                    " \"5[.]252[.]153[.]0:443\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
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
                "count": 681,
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
                "count": 551,
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
                "name": "OffLoader",
                "count": 421,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 45480,
        "lastCalculated": "2026-05-27 02:00 IST"
    }
};
