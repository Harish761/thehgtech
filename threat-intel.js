// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-13T02:19:17.062243+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-13T02:19:16.717030+05:30",
    "lastUpdatedFormatted": "Sep 13, 2026 at 02:19 AM IST",
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
                "hxxp://sp32ct-dalrex-biz-vornik-cesla[.]pages[.]dev/",
                "hxxps://vwwv-roblox[.]co/users/1515798849/profile",
                "hxxps://roblox[.]com[.]bo/communities/488688266/",
                "hxxp://intrepid-amused-analysts--vdsbwa[.]replit[.]app/",
                "hxxp://www[.]your-order-logistics-global-tracking[.]vercel[.]app/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 418,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 418,
                "newInLastHour": 29,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ad613fc80699e19ba1c887056153c3f86ba100b6c1cd362635b60e8078da5a16",
                " \"84596497251e3847ce4389cb389a56fe87e08944474ffd4019ec315d306f449e",
                " \"2840fc2abb24a746ea1edd7e828affad3a5a1f92dd91778fe2af7f23ed489f7c",
                " \"3d9a86801bebaf5495e8c024623215ad6984b4b8a0cc1268391d951eeab8c906",
                " \"64f14d7a3266e928f94c682d48a14e8195a4b70ad4a75e1ead25ded18b5dfe81"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1722,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1722,
                "newInLastHour": 10,
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
                "1[.]10[.]172[.]57",
                "1[.]119[.]194[.]253",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]159[.]111[.]86"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11245,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11245,
                "newInLastHour": 11245,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]43[.]49",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]20[.]175[.]122"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 12666,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12666,
                "newInLastHour": 12666,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://88[.]246[.]126[.]132:34502/i",
                "hxxp://124[.]94[.]203[.]196:34272/i",
                "hxxp://42[.]230[.]29[.]94:38010/i",
                "hxxp://27[.]207[.]229[.]137:52064/i",
                "hxxp://88[.]246[.]126[.]132:34502/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11639,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11639,
                "newInLastHour": 8582,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"194[.]116[.]236[.]129:53\"",
                " \"156[.]229[.]165[.]166:53\"",
                " \"107[.]175[.]114[.]96:443\"",
                " \"216[.]9[.]226[.]82:443\"",
                " \"194[.]116[.]236[.]129:443\""
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
            "iocCount": 10696,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10696,
                "newInLastHour": 38,
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
            "totalIndicators": 52540,
            "activeSources": 8,
            "criticalAlerts": 23774,
            "activeCampaigns": 258
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13138,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "C2",
                "count": 10636,
                "trend": "stable",
                "percentage": 2
            },
            {
                "category": "Botnet",
                "count": 4462,
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
                    "1[.]10[.]172[.]57",
                    "1[.]119[.]194[.]253",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 12647,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]121[.]208[.]126:35249/i",
                    "hxxp://42[.]231[.]94[.]42:40345/bin[.]sh",
                    "hxxp://170[.]238[.]123[.]134:43985/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 2862,
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
                "name": " \"unknown_loader\"",
                "count": 1914,
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
                "name": "AsyncRAT",
                "count": 1447,
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
                "count": 1411,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"49[.]51[.]230[.]17:53001\"",
                    " \"38[.]76[.]183[.]197:8806\"",
                    " \"165[.]154[.]68[.]30:4433\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 1345,
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
                "count": 947,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"br7p47p1[.]morgz[.]store\"",
                    " \"morgz[.]store\"",
                    " \"hxxps://cdn[.]jsdelivr[.]net/gh/48-689100-172-171440/FC-83-89-95-23-BA10-E3-94DF98-F/44-077A75-FCE1\""
                ]
            },
            {
                "name": "Vidar",
                "count": 767,
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
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 47875,
        "lastCalculated": "2026-09-13 02:19 IST"
    }
};
