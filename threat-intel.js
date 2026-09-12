// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-12T23:48:54.748275+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-12T23:48:54.420693+05:30",
    "lastUpdatedFormatted": "Sep 12, 2026 at 11:48 PM IST",
    "comparisonPeriod": "Sep 11 \u2013 Sep 12, 2026",
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
            "iocCount": 464,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 464,
                "newInLastHour": 68,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"149a9a293b908ffaf3adcc7a332f0aa297517dd518ef97463208807605d9c26e",
                " \"6c28934073d8fbdae081d8986ea07bbbca6c845a7935ab3855c6b65626978641",
                " \"94c508398e9caee73bae56b388a966a47ec2616bf9311213fd5d0cf95a11711e",
                " \"14984ca5af0e266497bfce440ab0cea468ef36c9eac4258c41563c0b243196c7",
                " \"25fd0de450dfcefe21d512f84a9da7ad528729b103952e1067179936b3351016"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1712,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1712,
                "newInLastHour": 18,
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
                "1[.]15[.]14[.]29",
                "1[.]159[.]111[.]86",
                "1[.]165[.]229[.]216"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11209,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11209,
                "newInLastHour": 11209,
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
            "iocCount": 12647,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 12647,
                "newInLastHour": 12647,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]121[.]208[.]126:35249/i",
                "hxxp://42[.]231[.]94[.]42:40345/bin[.]sh",
                "hxxp://170[.]238[.]123[.]134:43985/i",
                "hxxp://105[.]186[.]82[.]24:36965/i",
                "hxxp://182[.]121[.]208[.]126:35249/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 11754,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 11754,
                "newInLastHour": 8870,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://arqtsop[.]shop:9932/collections\"",
                " \"hxxp://trwehop[.]shop:5627/notifications\"",
                " \"hxxp://teechop[.]shop:8213/customers\"",
                " \"154[.]91[.]63[.]121:8074\"",
                " \"154[.]91[.]63[.]124:8074\""
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
            "iocCount": 10658,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10658,
                "newInLastHour": 286,
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
            "totalIndicators": 56108,
            "activeSources": 8,
            "criticalAlerts": 23737,
            "activeCampaigns": 260
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 13349,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10388,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Botnet",
                "count": 4449,
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
                    "1[.]12[.]229[.]231"
                ]
            },
            {
                "name": "malware_download",
                "count": 12618,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]116[.]14[.]197:47791/bin[.]sh",
                    "hxxp://62[.]60[.]226[.]140/files/7299809293/yTjGAos[.]exe",
                    "hxxp://123[.]5[.]135[.]197:52455/i"
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 6296,
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
                "count": 1922,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ce9c1422af2c16af682eac479c3f9c57959beb355b22ba72de8c10c4078eb8db\"",
                    " \"7f47e02e297a35fabb1fb2a2e195e3dae5ff8ecfe7b201fed189d14e54124d2e\"",
                    " \"4df050c5944e523ac74ef5176a6100e018ebfc5ea5d0974707f5f92b0706cd74\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1704,
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
                "name": " \"js.iclickfix\"",
                "count": 1470,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"authshipup[.]net\"",
                    " \"runtimerailbit[.]com\"",
                    " \"servicestatlab[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1430,
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
                    " \"213[.]218[.]160[.]253:4444\"",
                    " \"47[.]121[.]130[.]18:8080\"",
                    " \"31[.]70[.]103[.]174:8000\""
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 963,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"flexpaydev2[.]wpengine[.]com\"",
                    " \"6e023wyi[.]bossbey[.]store\"",
                    " \"bossbey[.]store\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "Vidar",
        "totalAttacksThisHour": 48403,
        "lastCalculated": "2026-09-12 23:48 IST"
    }
};
