// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-22T01:53:55.230444+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-22T01:53:54.936479+05:30",
    "lastUpdatedFormatted": "Sep 22, 2026 at 01:53 AM IST",
    "comparisonPeriod": "Sep 21 \u2013 Sep 22, 2026",
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
            "iocCount": 1552,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1552,
                "newInLastHour": 189,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"84bac7418200370d3c865dfdcdb8af78449b9eab8d0ccecc6577d4a7c76ed517",
                " \"a05eae6d07b82e2e5451a72266f21fbaf76486ef4920a820988de93e15353a10",
                " \"c062ac021106deaecc4902203a323946e4ffc38644ebe68c263931739cd42a1c",
                " \"b63e4c97c1a2fe872f82f781dfa4179d200ff4e0ec6e650dc1e42134f38903b3",
                " \"9727349443f01a5698c04810ff940ce90efa02421c375c6cff728fa4468a5214"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1715,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1715,
                "newInLastHour": 115,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]1[.]125",
                "1[.]15[.]14[.]29",
                "1[.]189[.]89[.]243",
                "1[.]192[.]110[.]50"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5702,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5702,
                "newInLastHour": 5702,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]14[.]192[.]95",
                "1[.]161[.]144[.]132",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13521,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13521,
                "newInLastHour": 13521,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]126[.]249[.]231:50800/bin[.]sh",
                "hxxp://113[.]231[.]205[.]57:43235/bin[.]sh",
                "hxxp://125[.]40[.]86[.]231:41619/bin[.]sh",
                "hxxp://113[.]231[.]39[.]147:53245/i",
                "hxxp://115[.]57[.]252[.]111:51257/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6025,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6025,
                "newInLastHour": 4826,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://wrm[.]sm188xxzx[.]top\"",
                " \"103[.]212[.]186[.]151:8085\"",
                " \"206[.]119[.]167[.]115:13470\"",
                " \"104[.]233[.]217[.]124:9090\"",
                " \"84[.]32[.]41[.]19:56003\""
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
            "iocCount": 10757,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10757,
                "newInLastHour": 402,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "adcff1c66a3ba1c9446886eb9f6efdbec4f17688",
                "99500e5de097a58d95775e1f9da85597851bdb71",
                "54e1ddda090bff894e88ccc2a784f0e9f4c46d97",
                "9b798f7d87edcf42680454660f593afd696ef8ca",
                "e20ecba521fd923644d154963d32d5cd29f4c0b1"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48573,
            "activeSources": 8,
            "criticalAlerts": 25224,
            "activeCampaigns": 247
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 14884,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10340,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 4275,
                "trend": "stable",
                "percentage": 2
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
                    "1[.]119[.]194[.]253",
                    "1[.]15[.]1[.]125",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 13289,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://125[.]41[.]169[.]115:52942/i",
                    "hxxp://175[.]9[.]152[.]47:60966/i",
                    "hxxp://42[.]86[.]62[.]73:33915/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1600,
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
                "count": 1441,
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
                "count": 1390,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"124[.]223[.]177[.]82:22\"",
                    " \"78[.]17[.]212[.]127:443\"",
                    " \"45[.]227[.]253[.]132:56223\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 1357,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]53[.]134[.]202:5000\"",
                    " \"52[.]47[.]77[.]229:1999\"",
                    " \"52[.]47[.]77[.]229:6000\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 988,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"e5ced85c3d7fd2f78e042dc587d243b99aaac918a44c08352cbac9b248ff8762",
                    " \"1414af67bb30e2c5da4d6de8aa64cafc661c9fff7b7c23fb8750fbfeca08ab0c",
                    " \"41403cab56d69722096be9052c4715c3ff04e631b9c3084e6be62b2f09318611"
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
                "name": "Vidar",
                "count": 700,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0bf61cf448206d51a0b7a0cdece647df3ea1196f",
                    "a7bc5bdb50a33449b1f9c6037a703e58caa406bf",
                    "dec7517543aba8ea73a1b336a0e72230bdfab6cc"
                ]
            },
            {
                "name": "QuasarRAT",
                "count": 682,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9b798f7d87edcf42680454660f593afd696ef8ca",
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40060,
        "lastCalculated": "2026-09-22 01:53 IST"
    }
};
