// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-11T01:28:52.105666+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-11T01:28:51.715951+05:30",
    "lastUpdatedFormatted": "Jul 11, 2026 at 01:28 AM IST",
    "comparisonPeriod": "Jul 10 \u2013 Jul 11, 2026",
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
            "iocCount": 559,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 559,
                "newInLastHour": 11,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a76c02a5dc0c2c128e5876f96acf02f63fc1607b9d3a8912d9fd173cc41e65b7",
                " \"31d54f8ca8b8f38857b719f97ad4e88218256bcf2690b3ae876196a4366abf57",
                " \"d623e58c95bfcedd6ad8d02bd4ad7adf98150e8781f37ab9bcd2547b59d5f901",
                " \"056fe98ea74350671b92200b7ec69cb79bf2c389e9a08392b9feaefcd46912da",
                " \"0bfa168904c244a3e126040f7b5c675044f8da1a98e533c71c3f2b7c74922d25"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1679,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1679,
                "newInLastHour": 0,
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
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]159[.]146[.]128",
                "1[.]159[.]52[.]66"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4927,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4927,
                "newInLastHour": 4927,
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
            "iocCount": 21814,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21814,
                "newInLastHour": 21814,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://dkkmrjmb[.]signalfrontier[.]top/c5d8fa07-c85e-46ce-877d-11e16e3166c1",
                "hxxp://110[.]36[.]64[.]245:49947/i",
                "hxxp://221[.]15[.]214[.]106:36783/i",
                "hxxp://200[.]112[.]129[.]135:45948/bin[.]sh",
                "hxxp://42[.]228[.]238[.]42:57406/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4840,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4840,
                "newInLastHour": 4658,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"dkkmrjmb[.]signalfrontier[.]top\"",
                " \"vuxxtdqp[.]signalfrontier[.]top\"",
                " \"rvkf[.]bet1forward[.]com\"",
                " \"93[.]115[.]172[.]235:7579\"",
                " \"87[.]232[.]83[.]18:8080\""
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
            "iocCount": 10154,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10154,
                "newInLastHour": 0,
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
            "totalIndicators": 54392,
            "activeSources": 8,
            "criticalAlerts": 32501,
            "activeCampaigns": 249
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22369,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10132,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3552,
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
                "count": 21777,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://vxfo[.]bahigo[.]casino/54524aab-8509-4eae-addf-a9256cb47944",
                    "hxxp://115[.]194[.]37[.]2:55595/bin[.]sh",
                    "hxxp://79[.]106[.]74[.]167:42214/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29",
                    "1[.]159[.]52[.]66"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1680,
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
                "count": 1460,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fd9284cedf382def729cf6450aec8e54\"",
                    " \"c35055499d7bf39198746a21bac07fb902e6307818898d6f961f3fdddaff5bde\"",
                    " \"9ad4cd770ff008c6368b50661c59a2e436877b52\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1422,
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
                "count": 636,
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
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 46715,
        "lastCalculated": "2026-07-11 01:28 IST"
    }
};
