// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-10T20:17:43.574303+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-10T20:17:43.212105+05:30",
    "lastUpdatedFormatted": "Jul 10, 2026 at 08:17 PM IST",
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
                "hxxp://markerlessar[.]com/alldr/2948029480/Y2l0eWNhcmVAY2l0eW5ldC5uZXQ=",
                "hxxps://m[.]365365u[.]app/eng/home/index/",
                "hxxps://www[.]roblox[.]com[.]bi/users/660063149848/profile",
                "hxxp://markerlessar[.]com/alldr/6131161311/bHF1aW50YW5pbGxhQGxhY2FyZS5vcmc=",
                "hxxps://61oursectionalert-4a77a9[.]alpha-ai[.]page/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 573,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 573,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e1a7aead734c79d37f42cbc8fac0f9fddfe6154ad8a892bb679fd9eb0fa49ee7",
                " \"b134976f75a1260a86d00ac5c7b990bf29c2e45daa6e7c320835132b0956ddee",
                " \"28c594c6a9290f6953fdc578618f8f5ee0d96bedec6223f0ddef95beb92f121e",
                " \"1ab810f65b846b0d1aef311bda3d0e96dcc806dd7bdfc7eb414a68d53786a6ad",
                " \"769346ae394c77317f2254e53b376ec2439d26b9fabe637cb2320c7825195103"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1680,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1680,
                "newInLastHour": 80,
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
            "iocCount": 5006,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5006,
                "newInLastHour": 5006,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]203[.]20",
                "1[.]162[.]226[.]31",
                "1[.]163[.]207[.]109",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21740,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21740,
                "newInLastHour": 21740,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]244[.]136[.]230:33171/bin[.]sh",
                "hxxp://112[.]244[.]136[.]230:33171/i",
                "hxxp://59[.]180[.]134[.]44:59174/i",
                "hxxp://123[.]188[.]79[.]78:45414/i",
                "hxxp://115[.]57[.]166[.]32:58178/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4789,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4789,
                "newInLastHour": 4682,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"rsxg[.]app-bet303[.]download\"",
                " \"app-bet303[.]download\"",
                " \"8[.]138[.]33[.]224:8443\"",
                " \"8[.]138[.]97[.]190:8082\"",
                " \"78[.]17[.]212[.]136:80\""
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
            "iocCount": 10153,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10153,
                "newInLastHour": 70,
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
            "totalIndicators": 54083,
            "activeSources": 8,
            "criticalAlerts": 32415,
            "activeCampaigns": 241
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22353,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10062,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3545,
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
                "count": 21708,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://bizec8bu[.]zaribbala[.]bet/?ublib=d55ff9a7-33b6-4853-8483-aac95334d90b",
                    "hxxps://ohnymfxm[.]btyek[.]cloud/3e65b427-fe87-41a8-82dd-be0223028bf9",
                    "hxxps://eosgdskc[.]btyek[.]site/b8deeedb-13e5-44fa-875a-ad24d72d16db"
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
                    "1[.]188[.]100[.]176"
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
                "name": " \"win.cobalt_strike\"",
                "count": 1458,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"59[.]110[.]23[.]216:443\"",
                    " \"101[.]42[.]255[.]92:8081\"",
                    " \"140[.]143[.]239[.]224:8050\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1420,
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
                "count": 687,
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
                "count": 613,
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
        "fastestRisingThreat": "Spamhaus DROP List",
        "totalAttacksThisHour": 46898,
        "lastCalculated": "2026-07-10 20:17 IST"
    }
};
