// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-14T00:15:00.522691+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-14T00:15:00.178529+05:30",
    "lastUpdatedFormatted": "Sep 14, 2026 at 12:15 AM IST",
    "comparisonPeriod": "Sep 13 \u2013 Sep 14, 2026",
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
                "hxxps://kqid7e1vkh3d0r88k3d[.]vercel[.]app/nsvw35re4hbarefsdbvzxcv",
                "hxxps://kqid7e1vkh3d0r88k3d[.]vercel[.]app/nsvw35re4hbarefsdbvzxcv[.]html",
                "hxxps://www[.]welcome-trezor-bridge[.]godaddysites[.]com/",
                "hxxps://iamivanaalawicash[.]blogspot[.]com/",
                "hxxps://www[.]iamivanaalawicash[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 401,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 401,
                "newInLastHour": 89,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ec9bcf62486a932d1249134543381d21814366e133bb9f0993f9f40e97e3141a",
                " \"55cd3d36fdcc58016a64398357b2c9724a060da9f0d09266e537a61ec9552e4f",
                " \"058bb2d23d4ef8561faa1991315f5726edaee7906bbd818b72ef0ce5582a082d",
                " \"f9ac08dc0d9d265ba44e7b256cc554cd9a741ca2a7e4dc01807376a90f8b1024",
                " \"dab81074ebca6d207fce705490af9afbd5e0ba7d12b7b84603afdb0d17396bc0"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1724,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1724,
                "newInLastHour": 79,
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
                "1[.]192[.]129[.]106",
                "1[.]207[.]32[.]183",
                "1[.]24[.]16[.]104",
                "1[.]24[.]16[.]106",
                "1[.]24[.]16[.]109"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11460,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11460,
                "newInLastHour": 11460,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]59[.]169",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12632,
                "newInLastHour": 12632,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]184[.]11[.]78:56927/bin[.]sh",
                "hxxp://124[.]95[.]45[.]62:51036/i",
                "hxxp://124[.]95[.]45[.]62:51036/bin[.]sh",
                "hxxp://94[.]156[.]166[.]167:50958/bin[.]sh",
                "hxxp://94[.]233[.]15[.]145:59216/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10516,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10516,
                "newInLastHour": 7674,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://steamcommunity[.]com/profiles/76561198641923678\"",
                " \"hxxps://31[.]59[.]44[.]136\"",
                " \"hxxps://telegram[.]me/jj43w\"",
                " \"hxxps://178[.]104[.]123[.]110\"",
                " \"29c7ee41d0cc9e07d981e451df56d0c3d37c41ac4ec10c7b516cc033ee397a63\""
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
            "iocCount": 10695,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10695,
                "newInLastHour": 92,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "db7000ad8c148580941840ce41d8efb95f478854",
                "60d55d4ff506bc654814ba6b26308f999766054a",
                "93edc2f5b2504b5700af766157b2aa96d1edd20f",
                "c78af78d930e82506823c8ececf1140c7035d8ef",
                "74afa65e38769e7e58835fd799e353c2fea3a209"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51375,
            "activeSources": 8,
            "criticalAlerts": 23531,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 12949,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10582,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4401,
                "trend": "stable",
                "percentage": -1
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
                    "1[.]188[.]100[.]134",
                    "1[.]192[.]129[.]106",
                    "1[.]204[.]34[.]47"
                ]
            },
            {
                "name": "malware_download",
                "count": 12551,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://177[.]36[.]24[.]217:58732/bin[.]sh",
                    "hxxp://123[.]12[.]229[.]156:58436/i",
                    "hxxps://raw[.]githubusercontent[.]com/34-19-44r/573-45-43cvi/refs/heads/main/AC-BC-FB-E2-30-46"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 2851,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"84[.]247[.]187[.]47:4546\"",
                    " \"160[.]191[.]88[.]70:443\"",
                    " \"160[.]191[.]88[.]70:80\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1645,
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
                "count": 1443,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "048bd151ab0a9c0add6d5bba9dc73521e42d9a20",
                    "559a55c8c7779e0037429794a8836a1039dbcdc3",
                    "8e492f36b0c1412f2d872dc9d51c974d27733d47"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1438,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"www[.]sioutsider[.]com\"",
                    " \"www[.]sitecnasnc[.]it\"",
                    " \"www[.]teesstation[.]com\""
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1321,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"212[.]87[.]199[.]197:111\"",
                    " \"212[.]87[.]199[.]197:2096\"",
                    " \"209[.]200[.]246[.]80:22\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 1198,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"8aee7a413af09d4409da870471da4f6af7f93cae25e1837f8b34e170b0309cb8\"",
                    " \"b31c56eb8d0f9b3cc952cf7acb06edb9f2ad5def493087f25ce6c3a9c504c208\"",
                    " \"831759a2b305feaaa9faaa6672b0fe45130ad0bd23fe2c0d6f0e063448b83e0e\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 856,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bvr3nwx8[.]kapkan[.]store\"",
                    " \"kapkan[.]store\"",
                    " \"kamaks[.]store\""
                ]
            },
            {
                "name": "Vidar",
                "count": 743,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "60d55d4ff506bc654814ba6b26308f999766054a",
                    "f567b9fc86b00e059bdfea261466360804fbdb38",
                    "00095e3cd5dfc929d16036132665d7e3e9ef7cd6"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 47331,
        "lastCalculated": "2026-09-14 00:14 IST"
    }
};
