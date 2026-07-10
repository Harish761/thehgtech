// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-10T16:45:16.664834+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-10T16:45:16.277832+05:30",
    "lastUpdatedFormatted": "Jul 10, 2026 at 04:45 PM IST",
    "comparisonPeriod": "Jul 09 \u2013 Jul 10, 2026",
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
                "hxxps://messenger-clone-taupe[.]vercel[.]app/",
                "hxxps://www[.]messenger-clone-taupe[.]vercel[.]app/",
                "hxxp://zhongshujuan[.]com/",
                "hxxp://chatgpt0005[.]eu[.]org/blog/discord-patch-notes-october-7-2025",
                "hxxps://www[.]roblox[.]com[.]ml/games/15884350761/UPDATE-Bloody-Ragdoll-Engine-Remastered?privateServerLinkCode=145044208057261336158114392125"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 618,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 618,
                "newInLastHour": 52,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"5a2f726ab9db35f6fe00d364f017e09cb0cbd7a13d98e2a9cdbb12cc7676ce51",
                " \"c3742e8050b8664520fc1a00b7c84c2aac7eac7cec6249b7be5468504ce22d7c",
                " \"38b184d316cda0368a6dcead584e84fa7bdc53fd12b117860e16bee849f46963",
                " \"78ebdfb4809d08896e072f3abb9948d1de9f6adc5f70a994b5d7d033f642abca",
                " \"485163c279b9dced626742d7fbb6dc9deb989459ba4781aac1a733c9f9b67596"
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
                "1[.]159[.]146[.]128",
                "1[.]159[.]52[.]66",
                "1[.]188[.]100[.]176",
                "1[.]188[.]16[.]137",
                "1[.]190[.]98[.]234"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5078,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5078,
                "newInLastHour": 5078,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]1[.]220[.]166",
                "1[.]14[.]203[.]20",
                "1[.]162[.]226[.]31",
                "1[.]163[.]207[.]109"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21708,
                "newInLastHour": 21708,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://bizec8bu[.]zaribbala[.]bet/?ublib=d55ff9a7-33b6-4853-8483-aac95334d90b",
                "hxxps://ohnymfxm[.]btyek[.]cloud/3e65b427-fe87-41a8-82dd-be0223028bf9",
                "hxxps://eosgdskc[.]btyek[.]site/b8deeedb-13e5-44fa-875a-ad24d72d16db",
                "hxxp://222[.]137[.]85[.]38:51752/bin[.]sh",
                "hxxp://62[.]60[.]226[.]140/files/7044575709/brti8Vz[.]exe"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4768,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4768,
                "newInLastHour": 4661,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"bizec8bu[.]zaribbala[.]bet\"",
                " \"72[.]11[.]144[.]112:80\"",
                " \"59[.]110[.]23[.]216:443\"",
                " \"47[.]107[.]122[.]241:40008\"",
                " \"o9a66qig[.]zaribbala[.]bet\""
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
            "iocCount": 10084,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10084,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "23267256640f8285cc77767082fe17ac0b8d23b0",
                "790c3281bc5b0087d59aaa1436e7516ca007fc07",
                "55f0fc964675706a15353d56745bb20d95213e53",
                "049209f78aca1e6715a706e00c56283134010135",
                "aaa8cad460677d3312a35ccfcf3235361ab9b7e4"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54842,
            "activeSources": 8,
            "criticalAlerts": 33117,
            "activeCampaigns": 243
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22993,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10124,
                "trend": "up",
                "percentage": 544
            },
            {
                "category": "Botnet",
                "count": 3542,
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
                "count": 22287,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]187[.]33[.]138:33631/i",
                    "hxxp://182[.]123[.]211[.]0:55917/i",
                    "hxxp://105[.]187[.]33[.]138:33631/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]159[.]146[.]128",
                    "1[.]159[.]52[.]66",
                    "1[.]192[.]177[.]87"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1669,
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
                "count": 1467,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"38[.]54[.]61[.]225:80\"",
                    " \"101[.]34[.]235[.]198:8443\"",
                    " \"hxxp://158[.]178[.]230[.]77:7443/3Jms\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1421,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6a338d0e652aeb230f0b42e3916ff0f8b86d7409",
                    "41cbe997a63cc9211fd19593cfcf27602d10bcd8",
                    "526b4a8604d900869439980614e56e4b288fb46d"
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
                "count": 692,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17",
                    "83ff65960d2df4b29e78d6fd0342dcd5f053eb13"
                ]
            },
            {
                "name": "Vidar",
                "count": 634,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "1e9d00de147af3c24b22721d8c18680150dad2d5",
                    "16e2a45afc9c237a463c23e14110aebb700085db",
                    "41fb7a086b442b60106c064b90f453aa98d0056b"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 556,
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
                "name": " \"unknown_stealer\"",
                "count": 493,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"zurawealth[.]co[.]uk\"",
                    " \"waterchemstech[.]com\"",
                    " \"weallth[.]ai\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 46823,
        "lastCalculated": "2026-07-10 16:45 IST"
    }
};
