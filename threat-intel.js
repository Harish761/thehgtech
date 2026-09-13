// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-13T18:46:44.259885+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-13T18:46:43.925126+05:30",
    "lastUpdatedFormatted": "Sep 13, 2026 at 06:46 PM IST",
    "comparisonPeriod": "Sep 12 \u2013 Sep 13, 2026",
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
            "iocCount": 371,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 371,
                "newInLastHour": 37,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"1d0973029840cdd7a30d3786917b65a896a8ecce78d094e802186328e713414e",
                " \"708a0836a8c20e79f2ae522f097787326a90965e0532f3fd488d8d6e428f77b6",
                " \"b3c05142afc6d7c708c55ba7a97dbb4272f43353205e8cab7b9a8117959cc270",
                " \"beac3bae8f10cbb37ddde43f41dc44c0dd1c19e8e38723700e901751f6bd5072",
                " \"fd4896cf61b676a39918f119247f3f7c746b29645e732ab09b3318f8479da728"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1645,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1645,
                "newInLastHour": 11,
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
                "1[.]188[.]100[.]134",
                "1[.]192[.]129[.]106",
                "1[.]204[.]34[.]47",
                "1[.]24[.]16[.]100",
                "1[.]24[.]16[.]109"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11458,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11458,
                "newInLastHour": 11458,
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
            "iocCount": 12551,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12551,
                "newInLastHour": 12551,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://177[.]36[.]24[.]217:58732/bin[.]sh",
                "hxxp://123[.]12[.]229[.]156:58436/i",
                "hxxps://raw[.]githubusercontent[.]com/34-19-44r/573-45-43cvi/refs/heads/main/AC-BC-FB-E2-30-46",
                "hxxps://raw[.]githubusercontent[.]com/34-19-44r/B8-F6-52-48-95-90203C-B2-29-4A-A9/refs/heads/main/B0-FF-E3-4F-63-6",
                "hxxps://raw[.]githubusercontent[.]com/34-19-44r/B8-F6-52-48-95-90203C-B2-29-4A-A9/refs/heads/main/FC-50-91-D0-A2"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 10899,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 10899,
                "newInLastHour": 8158,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"212[.]87[.]199[.]197:111\"",
                " \"212[.]87[.]199[.]197:2096\"",
                " \"209[.]200[.]246[.]80:22\"",
                " \"212[.]87[.]199[.]197:1234\"",
                " \"tulipstone[.]cc\""
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
            "iocCount": 10604,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10604,
                "newInLastHour": 8,
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
            "totalIndicators": 51579,
            "activeSources": 8,
            "criticalAlerts": 23415,
            "activeCampaigns": 258
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 12749,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10666,
                "trend": "up",
                "percentage": 408
            },
            {
                "category": "Botnet",
                "count": 4482,
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
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]111[.]86",
                    "1[.]207[.]32[.]183"
                ]
            },
            {
                "name": "malware_download",
                "count": 12312,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]141[.]43[.]100:40161/i",
                    "hxxp://217[.]60[.]195[.]239/x86",
                    "hxxp://125[.]47[.]85[.]91:34593/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 2861,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"102[.]220[.]160[.]198:2026\"",
                    " \"ea0ac7277d0fdf801972b56bdc57184fc51ac8be47438873396436736f3694a9\"",
                    " \"ea0c84717977b89e7c7c885c68ac7ab4d8e561044cd93b47f3ddf830f9f688cd\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1712,
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
                "name": " \"unknown_loader\"",
                "count": 1458,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bikecondition[.]cfd\"",
                    " \"ce9c1422af2c16af682eac479c3f9c57959beb355b22ba72de8c10c4078eb8db\"",
                    " \"7f47e02e297a35fabb1fb2a2e195e3dae5ff8ecfe7b201fed189d14e54124d2e\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1446,
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
                "name": " \"win.cobalt_strike\"",
                "count": 1419,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]76[.]190[.]209:8787\"",
                    " \"38[.]76[.]190[.]209:7500\"",
                    " \"38[.]76[.]190[.]209:8080\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1268,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cf-check[.]site\"",
                    " \"authshipup[.]net\"",
                    " \"runtimerailbit[.]com\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 843,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"jtd3m9p0[.]jurni[.]store\"",
                    " \"jurni[.]store\"",
                    " \"7bkjh5ns[.]palso[.]store\""
                ]
            },
            {
                "name": "Vidar",
                "count": 774,
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
        "totalAttacksThisHour": 47528,
        "lastCalculated": "2026-09-13 18:46 IST"
    }
};
