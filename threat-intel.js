// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-20T01:46:12.012122+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-20T01:46:11.692300+05:30",
    "lastUpdatedFormatted": "Jun 20, 2026 at 01:46 AM IST",
    "comparisonPeriod": "Jun 19 \u2013 Jun 20, 2026",
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
                "hxxp://ai-start-faq-trezoor[.]typedream[.]app/",
                "hxxp://faq-trezr-public-en[.]typedream[.]app/",
                "hxxps://sarsdar[.]assuredwebtest[.]info/ga/click/2-6756391-9-9824-19244-10568-0e851c108c-f413840706",
                "hxxp://faq-trezo-or-hard-ware-walle-t[.]typedream[.]app/",
                "hxxp://trezoor-io-learn-cdn[.]typedream[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 766,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 766,
                "newInLastHour": 17,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a40fb29ac53233de5e77499447f524e96974630eac6155d78a26c448ed6c0856",
                " \"ea1f63e24fd6ac740765a38afa4419aa75e8d56208ec1aa3034571e915327bbb",
                " \"bb5505b5051a656647c47d774084898fec1da2e50b061964a987affec36a5d6a",
                " \"e509bef525e00f69354c2d6af41839bde34f1b5f1de3bc4cd7541cdec5fefd48",
                " \"7e5ac45a8086ead2dbba28349513b81cfb9fd0d751427cdc7387ae0ab8df7fc4"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1705,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1705,
                "newInLastHour": 31,
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
                "1[.]119[.]194[.]226",
                "1[.]15[.]14[.]29",
                "1[.]15[.]35[.]79",
                "1[.]15[.]36[.]31",
                "1[.]15[.]51[.]236"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4902,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4902,
                "newInLastHour": 4902,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]1[.]220[.]166",
                "1[.]14[.]99[.]224",
                "1[.]15[.]135[.]116",
                "1[.]15[.]32[.]131",
                "1[.]162[.]223[.]232"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 17460,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 17460,
                "newInLastHour": 17460,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://222[.]140[.]131[.]3:45936/bin[.]sh",
                "hxxps://4nd2h8ef[.]bio90[.]football/?ublib=68e63799-94d1-4249-8e3e-b745c613f3e3",
                "hxxp://93[.]157[.]253[.]209:45004/i",
                "hxxp://112[.]232[.]34[.]216:45434/bin[.]sh",
                "hxxp://221[.]200[.]215[.]156:39671/Mozi[.]7"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3588,
                "newInLastHour": 3537,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"97[.]74[.]92[.]237:63334\"",
                " \"45[.]81[.]243[.]44:7089\"",
                " \"211[.]235[.]43[.]192:7707\"",
                " \"205[.]209[.]106[.]158:5228\"",
                " \"2[.]27[.]5[.]37:8912\""
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
            "iocCount": 10001,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10001,
                "newInLastHour": 101,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "01dcaf71bc0dc821c2df145680dee05578368355",
                "070ad9d359151a2de5af7cd41295758bf1f4227a",
                "7125469fa26c30ae4d89eb2a8bec1c7a382dcd7d",
                "a23f624eee7847ff3939994ff8922ba8eb645e26",
                "61102ef78d52d044b8ded80e2ad0471c68e6f962"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48644,
            "activeSources": 8,
            "criticalAlerts": 28082,
            "activeCampaigns": 228
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 18204,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 9878,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3033,
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
                "name": "malware_download",
                "count": 17402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://119[.]113[.]186[.]130:47205/Mozi[.]m",
                    "hxxp://113[.]228[.]157[.]150:50902/bin[.]sh",
                    "hxxp://222[.]139[.]86[.]79:34217/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]224",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]36[.]31"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1674,
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
                "count": 1428,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"81[.]69[.]253[.]132:80\"",
                    " \"47[.]242[.]0[.]207:8080\"",
                    " \"47[.]242[.]0[.]207:9999\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1416,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "49aa56f946089804e2bc8ae77a7b2fbaa5860e50",
                    "6a998d33a87c7b36c2be68ed5c1c63929c0d6be4",
                    "167ddfd671ef30c31528515389cfdd11d9251558"
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
                "count": 682,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "27e3cb5b0043884c7ebc0691e2e73ef3b95339ac",
                    "ae590545961e96de860ea7434c0e8c69b924de6f",
                    "28c3106cd1cec9a5dfec7f2ba3b0dd7e70784429"
                ]
            },
            {
                "name": "Vidar",
                "count": 571,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "7125469fa26c30ae4d89eb2a8bec1c7a382dcd7d",
                    "3a4d0044eed173808eb2c6b86c70d1121318adf0",
                    "59f0554dda32cbf5b5b5b08fe508480d81172f2d"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe",
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e"
                ]
            },
            {
                "name": " \"Mirai",
                "count": 422,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"af3c955832e1ff3b755fbbf7f5d5cccf688e6ce9fbad3a2a2ebc77d215915f41",
                    " \"8f770aa0c277dc1537304b5682bc10f288c00d58a8fa3a63aaab22df3b2ad1ae",
                    " \"ee5e70bbdc61b4d88e790ddd50f088819042262c02d0616b04557d8d820861d0"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 41353,
        "lastCalculated": "2026-06-20 01:46 IST"
    }
};
