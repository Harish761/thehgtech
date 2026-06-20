// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-06-20T16:08:43.428962+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-06-20T16:08:43.081404+05:30",
    "lastUpdatedFormatted": "Jun 20, 2026 at 04:08 PM IST",
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
                "hxxp://acct[.]caixesp-finbk[.]com/es",
                "hxxp://security-indexer--adamlee160686[.]replit[.]app/",
                "hxxps://www[.]roblox[.]com[.]ml/users/212690429527/profile",
                "hxxp://jbapamxtra[.]my/",
                "hxxps://bitly[.]cx/wQATO"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 723,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 723,
                "newInLastHour": 72,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"f62e1fe4e314d0e7e5c82cad9b92573fccb231db6dabd7b4c2c70d0de839b07a",
                " \"cbd321f8ac5eb6a67cf1506b9447c8bf02a91da29558b1197fc023d02110da6d",
                " \"ddb5ff03dc232e15045540e739348b41d53701b23a712137cefbc042c9840714",
                " \"453b9c8b20e60cb0d1645c3c6e971e408bf7f59240d44edb59d98fb58a4f3a23",
                " \"4a8de808ec46dc98c64e2b1bac4a9628b66696343202677d508c565f2429e21b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1662,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1662,
                "newInLastHour": 8,
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
                "1[.]10[.]185[.]224",
                "1[.]119[.]194[.]226",
                "1[.]15[.]14[.]29",
                "1[.]15[.]35[.]79",
                "1[.]169[.]39[.]250"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4838,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4838,
                "newInLastHour": 4838,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]116[.]61[.]217",
                "1[.]14[.]99[.]224",
                "1[.]15[.]32[.]131",
                "1[.]162[.]198[.]223",
                "1[.]162[.]223[.]232"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 16981,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 16981,
                "newInLastHour": 16981,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]50[.]25[.]138:34929/i",
                "hxxp://182[.]121[.]196[.]52:48741/i",
                "hxxps://guo1otbf[.]shartplus[.]com/?ublib=816bcaea-b165-41a7-b019-b56622b06566",
                "hxxp://117[.]90[.]54[.]196:57550/bin[.]sh",
                "hxxp://42[.]239[.]156[.]139:41407/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3348,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3348,
                "newInLastHour": 3266,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://mathlah[.]com:9432\"",
                " \"107[.]173[.]122[.]193:443\"",
                " \"5[.]188[.]61[.]49:44443\"",
                " \"47[.]83[.]254[.]175:4321\"",
                " \"45[.]32[.]64[.]12:4321\""
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
            "iocCount": 9909,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9909,
                "newInLastHour": 70,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "68a81d42abb025f982a44a7caefb588f515b6790",
                "d4ea5c5ed890d658f9ef23555e312c694793d831",
                "8cb01cefc1fb1be2b68c00ad8a801a40ff0dacf3",
                "535bea5950f28c905e73148a5d0d69229eca4ad2",
                "01dcaf71bc0dc821c2df145680dee05578368355"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 47954,
            "activeSources": 8,
            "criticalAlerts": 27548,
            "activeCampaigns": 227
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 17635,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "C2",
                "count": 9913,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3043,
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
            },
            {
                "name": "Government",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 16802,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]76[.]196:43581/i",
                    "hxxp://39[.]79[.]106[.]106:45818/i",
                    "hxxp://119[.]184[.]199[.]232:56835/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]106[.]126",
                    "1[.]15[.]35[.]79"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1697,
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
                "count": 1435,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"81[.]69[.]253[.]132:8080\"",
                    " \"81[.]69[.]253[.]132:443\"",
                    " \"116[.]204[.]36[.]177:8080\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1413,
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
                "count": 678,
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
                "count": 589,
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
                "count": 553,
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
                "count": 473,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"731433356e439a75745c9c064d8d6332c1d9e64c4e642f05e5572340edd70d4f",
                    " \"eb4bf151a3f97f05ca889671cd63b38391fcbae0cbb552c42ad0eef97a6d584c",
                    " \"f8a25095fbd2531cd653e77dd00d4ec5b1978dc75b85619c1c877fca97c91adb"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40540,
        "lastCalculated": "2026-06-20 16:08 IST"
    }
};
