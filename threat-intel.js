// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-27T00:04:52.164626+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-27T00:04:51.859069+05:30",
    "lastUpdatedFormatted": "May 27, 2026 at 12:04 AM IST",
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
            "iocCount": 655,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 655,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"17a884c17360f1c91907b844601671dca7e3842fc7dc7a29ce5ac0d1e9ddb57e",
                " \"b776849398a144c97f6b903d2376f06c8fe06564e64412048410737e45f133e6",
                " \"1280cb0d807ad5bcfcc45bd65fba3c30eb9cd928adbacbfee99b38908cf2cb7c",
                " \"767019409a67bd05b77a81dadd3e7b4430f5700bc24f68416828da508d26b061",
                " \"5d1d22f92b87dc8d5a4d0603da456b8b35432a1bcaa646fead9df2d5a5b01d02"
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
                "newInLastHour": 30,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]162[.]158[.]142",
                "1[.]162[.]93[.]188"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4803,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4803,
                "newInLastHour": 4803,
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
            "iocCount": 21775,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21775,
                "newInLastHour": 21775,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://topbo[.]cannatural[.]eu/4fc3e1d5-4515-466b-a767-857988d9032e",
                "hxxp://27[.]215[.]215[.]33:50033/i",
                "hxxp://182[.]127[.]4[.]86:43759/bin[.]sh",
                "hxxp://193[.]24[.]123[.]4/api[.]php",
                "hxxps://pub-41eee9d53a324f038367d5d36f45d18b[.]r2[.]dev/4[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3349,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3349,
                "newInLastHour": 3338,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"topbo[.]cannatural[.]eu\"",
                " \"cannatural[.]eu\"",
                " \"bytearmor[.]net\"",
                " \"clipse-cheats[.]net\"",
                " \"contentremixrr[.]com\""
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
            "iocCount": 9794,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9794,
                "newInLastHour": 83,
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
            "totalIndicators": 52280,
            "activeSources": 8,
            "criticalAlerts": 32088,
            "activeCampaigns": 225
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22395,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9693,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2870,
                "trend": "stable",
                "percentage": 1
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
                "count": 21720,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://115[.]58[.]90[.]247:41590/bin[.]sh",
                    "hxxp://182[.]126[.]118[.]154:42721/i",
                    "hxxps://a7px1y1v[.]container-pulse[.]digital/?ublib=48e87da3-8794-4ffb-a89b-4f48bccd5691"
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
                    "1[.]15[.]14[.]29",
                    "1[.]162[.]158[.]142"
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
                "name": " \"win.cobalt_strike\"",
                "count": 1448,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"47[.]122[.]47[.]221:18443\"",
                    " \"5[.]252[.]153[.]0:443\"",
                    " \"5[.]252[.]153[.]0:80\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1406,
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
                "count": 673,
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
                "count": 553,
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
                "count": 535,
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
                "count": 407,
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
        "totalAttacksThisHour": 45349,
        "lastCalculated": "2026-05-27 00:04 IST"
    }
};
