// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-04-12T22:23:32.330332+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-04-12T22:23:32.029417+05:30",
    "lastUpdatedFormatted": "Apr 12, 2026 at 10:23 PM IST",
    "comparisonPeriod": "Apr 11 \u2013 Apr 12, 2026",
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
                "hxxp://pub-1d766f54f60f4b1cb76860717d399ced[.]r2[.]dev/index[.]html",
                "hxxps://www-roblox[.]co/users/828077091/profile",
                "hxxps://rblox[.]me/s/Yzw4ks",
                "hxxp://amazingholidaycoupons[.]com/2513501[.]doc/18a80a/fad0f483-81b2-45c6-ad47-7272058d9cb6",
                "hxxps://gunsandmetallica[.]github[.]io/Robux/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 587,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 587,
                "newInLastHour": 67,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ac97a49e17bf2a315205a30cf39a68c264b1dc4395b88e3997ec506c778159b0",
                " \"5c37b35929dac5c640d1d14e6dc74009c5072536d7fbe0c58822bf2387a8a22d",
                " \"ca3bd6f8f4c8170c60896493b0bbfc4629bf94a3d0c5bd3f32397e869e98fb3d",
                " \"aab1f1bdba7083a25d7c841cd2dc3588cc0f3e28e29260bea5c2fd5b033697fb",
                " \"af7a76820a42c4cadfc7ff5fd372c99e9c5fd96ee9d14e07bde0902fec1881ab"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1588,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1588,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]0[.]141[.]214",
                "1[.]1[.]176[.]58",
                "1[.]123[.]231[.]55",
                "1[.]15[.]51[.]236",
                "1[.]172[.]57[.]195"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 931,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 931,
                "newInLastHour": 931,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]53[.]110[.]158",
                "1[.]94[.]226[.]80",
                "1[.]95[.]195[.]50",
                "101[.]126[.]128[.]223",
                "101[.]237[.]36[.]193"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 22080,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 22080,
                "newInLastHour": 22080,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://27[.]193[.]49[.]1:55034/i",
                "hxxps://clinicfjord[.]recogniz-rural[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxps://royalemb[.]con9uerbunker[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google",
                "hxxp://143[.]20[.]37[.]150/huhu/titanjr[.]arm7",
                "hxxp://143[.]20[.]37[.]150/huhu/titanjr[.]i486"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 933,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 933,
                "newInLastHour": 932,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"royalemb[.]con9uerbunker[.]in[.]net\"",
                " \"b4y-signal[.]con9uerbunker[.]in[.]net\"",
                " \"exposmot[.]con9uerbunker[.]in[.]net\"",
                " \"v1al-sheet[.]con9uerbunker[.]in[.]net\"",
                " \"reso1-cast[.]con9uerbunker[.]in[.]net\""
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
            "iocCount": 9557,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9557,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "f8f2497277c03b96a3b4a8ef77e0a0792478fae5",
                "9adbaea1d6a8bc4c4065569a77ddd9592de54f6e",
                "77ebda500a4e89331291ca82c91d3609d7cd093e",
                "6e76ede9fb607e6701bf05cdf72378a0bd082d0f",
                "4745a0ee817161b42ab57535d0f597b3b3f29826"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49787,
            "activeSources": 8,
            "criticalAlerts": 31999,
            "activeCampaigns": 191
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 22499,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9500,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 301,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 225,
                "trend": "stable",
                "percentage": -4
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 86
            },
            {
                "name": "Tech",
                "percentage": 13
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 21930,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://221[.]15[.]4[.]9:47466/i",
                    "hxxp://221[.]15[.]15[.]16:37694/i",
                    "hxxps://sdasrfj[.]zeq8morin[.]in[.]net/05fe317c-0981-4de2-bc8a-930d369db441/ck-3d80df5d12cdfe6450a782fc87bf66b444[.]google"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]0[.]141[.]214",
                    "1[.]1[.]176[.]58",
                    "1[.]123[.]231[.]55"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1585,
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
                "count": 1401,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "05f047ee67a239b926284ff3cafb7edd8af328e0",
                    "c9efd5520dce50014bcd13b73569034d0e3971f2",
                    "e7decd829f1c348a1d04ac6d5ce1470aa2ef4cea"
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
                "count": 669,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ee4dd385bf849f7621deed67382e64c17b864e20",
                    "3787ee8b1d038bf52620e33956b452f4aa38214f",
                    "f4c8b11947963395a1a1624aa04e8a717693f297"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 551,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 497,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"pjrlyy[.]zeq8morin[.]in[.]net\"",
                    " \"sdasrfj[.]zeq8morin[.]in[.]net\"",
                    " \"irfy5j[.]zeq8morin[.]in[.]net\""
                ]
            },
            {
                "name": "Vidar",
                "count": 482,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "e43ef806fe5a6767cd9fd7391d11e7db88a22efe",
                    "877b74f2ae6c1758dab9b5ef1bb45472b02dbc56",
                    "d2ee9d8768ef00f17a52049a0764939d99a5a308"
                ]
            },
            {
                "name": "OffLoader",
                "count": 393,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "3963ac632a72fd088e1e2089573b8f5c5cf6faa6",
                    "4ed8a8b1f88a9b6d820bc8e9d17a5b074e0e5ee5",
                    "cfcc12d65074e250d9a78b5e3c6f9f8676c32893"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39359,
        "lastCalculated": "2026-04-12 22:23 IST"
    }
};
