// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-05T02:27:09.986927+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-05T02:27:09.671942+05:30",
    "lastUpdatedFormatted": "Sep 05, 2026 at 02:27 AM IST",
    "comparisonPeriod": "Sep 04 \u2013 Sep 05, 2026",
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
                "hxxp://www[.]apple-fruit[.]xyz/",
                "hxxps://kxlrq170nhw-fghzdfyn-3y8x0g-wp611a[.]pages[.]dev/welcome_aboard?welcome=1004568689256840&token248=1004568689256840&name_token136=FoodieLand%20-%20Portland",
                "hxxps://sso-trezor-com-start-x-auth[.]typedream[.]app/en-us",
                "hxxp://www[.]mart-homebd[.]com/",
                "hxxps://www[.]roblox[.]ly/games/8737602449/PLS-DONATE?privateServerLinkCode=49536050381234738964619792612634"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 606,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 606,
                "newInLastHour": 8,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fc8e9d8470b6874ff2b7634fec6f488ae84fc64cc6bf8f6dc065d479c2c9d492",
                " \"fcab81e2c0113441109eb1ca852b80105bd18f50b0eb4fb49d79c64b5daed784",
                " \"0c32dd35d5237a3ce2e395bfa5c0fc044dcfd68ae890673faa13a5d1948fe515",
                " \"8c06c07cbafce79d818de96c9c6c63b8b78e2cf1c311a9704f47236aec3230db",
                " \"430e0c625849437a71044869f3a1f9598e07e560698e33e2621e9db5eb7ff501"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1708,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1708,
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
                "1[.]15[.]14[.]29",
                "1[.]181[.]200[.]22",
                "1[.]183[.]148[.]62",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]145"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11097,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11097,
                "newInLastHour": 11097,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]197[.]67",
                "1[.]162[.]237[.]203",
                "1[.]162[.]247[.]182",
                "1[.]174[.]208[.]30"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15238,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15238,
                "newInLastHour": 15238,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://150[.]241[.]65[.]250:889/venv/lib64/python3[.]12/site-packages/cryptography/hazmat/bindings/_rust[.]abi3[.]so",
                "hxxp://182[.]124[.]41[.]251:59176/i",
                "hxxp://182[.]124[.]41[.]251:59176/bin[.]sh",
                "hxxp://42[.]230[.]24[.]16:58927/i",
                "hxxp://125[.]41[.]229[.]38:58416/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5813,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5813,
                "newInLastHour": 5597,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"87[.]120[.]244[.]219:2020\"",
                " \"172[.]245[.]93[.]70:443\"",
                " \"q118vn58[.]hero--up[.]com\"",
                " \"154[.]91[.]58[.]120:8084\"",
                " \"154[.]91[.]58[.]116:8084\""
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
            "iocCount": 10632,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10632,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "755c81877937861388f42dc73d5a6bf24c96e13b",
                "972c98978e420c02a8d8c5f87930dadc70adbbd8",
                "cd4fbb7112546836c61911e6b3a09770b6aebf29",
                "09cc432d307b2b2d67a102c9a579f24b511cfea2",
                "17ee516f7e99548d2b4d735f2100f2754d814288"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49285,
            "activeSources": 8,
            "criticalAlerts": 26536,
            "activeCampaigns": 250
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15926,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10610,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4061,
                "trend": "stable",
                "percentage": -5
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
                "count": 15229,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://124[.]131[.]133[.]51:53693/bin[.]sh",
                    "hxxp://125[.]41[.]229[.]38:58416/bin[.]sh",
                    "hxxp://218[.]29[.]147[.]41:58663/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]253",
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]37[.]207"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1708,
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
                    "8c2a430246ca36ca14885fe1a101c61eaab4a96c",
                    "7f44d36f1f6bd375ba4e4a7866328a76047ce498",
                    "f351f7dbe9c583f75758b39cd307f5359d110c73"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1293,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"223[.]109[.]142[.]7:8443\"",
                    " \"8[.]219[.]134[.]47:443\"",
                    " \"47[.]95[.]201[.]24:443\""
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 920,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"fallow-willow-diogdaiyn[.]xyz\"",
                    " \"immersionzone[.]info\"",
                    " \"85[.]239[.]147[.]30:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 761,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "09cc432d307b2b2d67a102c9a579f24b511cfea2",
                    "1bf12565f5b66f9f938f92411d31aea37d9676e8",
                    "5e9de84aab8968d3a10710904a0844d0c360d2a8"
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
                "count": 701,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "6c6027c8ff18b0f79bd3c40848c2b189a18b49ac",
                    "a6e6aa58bac84e56b868f5f618ef227b75d7208e",
                    "d123d7f43d63545c7a8f643acbe73e81f35c3f14"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 558,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a45080c92a0b2314966517a4643ebf280e88a11b",
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.pure_rat\"",
        "totalAttacksThisHour": 47245,
        "lastCalculated": "2026-09-05 02:27 IST"
    }
};
