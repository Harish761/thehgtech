// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-21T20:33:33.640994+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-21T20:33:33.319041+05:30",
    "lastUpdatedFormatted": "Sep 21, 2026 at 08:33 PM IST",
    "comparisonPeriod": "Sep 20 \u2013 Sep 21, 2026",
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
                "hxxps://fedexs[.]vip/",
                "hxxp://harshalkadav19[.]github[.]io/spotify",
                "hxxp://aniket055[.]github[.]io/Amazon",
                "hxxps://zara-two-theta[.]vercel[.]app/",
                "hxxps://zara-self-kappa[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1568,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1568,
                "newInLastHour": 281,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e5ced85c3d7fd2f78e042dc587d243b99aaac918a44c08352cbac9b248ff8762",
                " \"1414af67bb30e2c5da4d6de8aa64cafc661c9fff7b7c23fb8750fbfeca08ab0c",
                " \"41403cab56d69722096be9052c4715c3ff04e631b9c3084e6be62b2f09318611",
                " \"741d395290b73a723eae8e9a4283c89a7425c6e0712ea94ebfcbb220c6577fa6",
                " \"9f52d99305ad85a9c8603587d7741a1c3f299387cfb4157cbf970cfa546d47bd"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1600,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1600,
                "newInLastHour": 4,
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
                "1[.]119[.]194[.]253",
                "1[.]15[.]1[.]125",
                "1[.]15[.]14[.]29",
                "1[.]192[.]110[.]50",
                "1[.]192[.]129[.]106"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5753,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5753,
                "newInLastHour": 5753,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]192[.]95",
                "1[.]161[.]144[.]132",
                "1[.]180[.]246[.]242",
                "1[.]209[.]110[.]147"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13289,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13289,
                "newInLastHour": 13289,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://125[.]41[.]169[.]115:52942/i",
                "hxxp://175[.]9[.]152[.]47:60966/i",
                "hxxp://42[.]86[.]62[.]73:33915/bin[.]sh",
                "hxxp://42[.]227[.]202[.]186:55036/i",
                "hxxp://182[.]121[.]18[.]115:60556/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6449,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6449,
                "newInLastHour": 5342,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://beercade[.]ca\"",
                " \"hxxps://entry-code-cdn[.]codes\"",
                " \"hxxps://entry-code-cdn[.]codes/api[.]php\"",
                " \"176[.]12[.]71[.]122:443\"",
                " \"mindandbodyhealing[.]in\""
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
            "iocCount": 10362,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10362,
                "newInLastHour": 9,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "9b798f7d87edcf42680454660f593afd696ef8ca",
                "e20ecba521fd923644d154963d32d5cd29f4c0b1",
                "9028baa7a4f17d812e2c497cdc6dbe5594780325",
                "31ce37e696cdff32d3042b1f9be493c1e43b4b6e",
                "ea74c0bba5834a0445661f91c3a220811eb965a3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48638,
            "activeSources": 8,
            "criticalAlerts": 25344,
            "activeCampaigns": 239
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14614,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10730,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4166,
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
                    "1[.]14[.]69[.]226",
                    "1[.]15[.]1[.]125",
                    "1[.]173[.]106[.]65"
                ]
            },
            {
                "name": "malware_download",
                "count": 12937,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://113[.]168[.]88[.]3:33032/i",
                    "hxxp://36[.]88[.]164[.]82:58641/i",
                    "hxxp://120[.]28[.]200[.]110:42645/i"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1711,
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
                "count": 1449,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "372b91c0d31a75b4e1765af998d984881e34dab1",
                    "9700462dfd419d0295b2753079208e939a853dce",
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1386,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8[.]145[.]60[.]56:22\"",
                    " \"177[.]5[.]67[.]37:8080\"",
                    " \"177[.]5[.]67[.]37:80\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1359,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"52[.]47[.]77[.]229:2000\"",
                    " \"102[.]220[.]163[.]36:6606\"",
                    " \"1746a28841e6de3faad920079ff9b2b041e2fbcfa43c15a0bd9de5901a5f2c49\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 1007,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"9e7d77c7df21abcdf0ff7a6f78c9fa47084f070306b6286fccc2c7a8199b1c56",
                    " \"9087e723c9aea3ec4d8fca4c410fe41941b8eb158dccff432b8973332ed51ddc",
                    " \"f160f29ffe64663daeaa7f669eb6a2f67624d7c1308069aa57c2219a714dbf16"
                ]
            },
            {
                "name": "Vidar",
                "count": 790,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dec7517543aba8ea73a1b336a0e72230bdfab6cc",
                    "4c48cf2aee29c6b3dd9aceb27ae6674b27cec999",
                    "ed64fe5bf9ba187fb8b7a54fce4a986d6681f4f2"
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39983,
        "lastCalculated": "2026-09-21 20:33 IST"
    }
};
