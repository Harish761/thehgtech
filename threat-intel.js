// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-21T10:09:23.945751+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-21T10:09:23.576378+05:30",
    "lastUpdatedFormatted": "May 21, 2026 at 10:09 AM IST",
    "comparisonPeriod": "May 20 \u2013 May 21, 2026",
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
                "hxxp://live-join-gooqle-meet[.]4-c4[.]com/",
                "hxxp://ecortbabylon[.]site/gmail/asdasd",
                "hxxp://livemeetcall[.]xyz/",
                "hxxp://ecortbabylon[.]site/login/test",
                "hxxp://ecortbabylon[.]site/duo/test"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 2515,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 2515,
                "newInLastHour": 56,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"ca70bc178c645aa50bb22b4845b552fedeea69d4023922cfbc57d79ce27b31d4",
                " \"3683d673395b2ef445ea80d604af15a7d05c5d21cdcbbb02fc933298ba9b9862",
                " \"87fea5ec96401dd614b9b8cac663292cba330ec4a08fd852ec1f9bc5190c1b03",
                " \"1345f21a54489d342367deff244634710e027677d73452dfa10e132ccf860137",
                " \"bb9ab94531de014f6561768f39cd059c630c5ce07828d124fd5150bcd70d5b90"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1626,
                "newInLastHour": 3,
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
                "1[.]156[.]129[.]70",
                "1[.]176[.]118[.]246",
                "1[.]180[.]148[.]140",
                "1[.]180[.]153[.]254",
                "1[.]181[.]101[.]144"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5738,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5738,
                "newInLastHour": 5738,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]58[.]48",
                "1[.]162[.]225[.]185",
                "1[.]194[.]210[.]131",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 23874,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 23874,
                "newInLastHour": 23874,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://123[.]132[.]166[.]119:45562/i",
                "hxxps://hasmysql[.]christmas/fa603fda-db92-4076-9c6c-a89fa306b822/zone[.]id",
                "hxxp://110[.]36[.]1[.]80:51745/i",
                "hxxp://123[.]132[.]166[.]119:45562/bin[.]sh",
                "hxxp://123[.]14[.]91[.]149:48942/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 3048,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 3048,
                "newInLastHour": 3034,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"slndcdnclaud[.]beer\"",
                " \"hasmysql[.]christmas\"",
                " \"okb0lvez[.]subdermalbiometricchip[.]digital\"",
                " \"gfwcy7xf[.]subdermalbiometricchip[.]digital\"",
                " \"regexcar[.]christmas\""
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
            "iocCount": 9635,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9635,
                "newInLastHour": 6,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "50e95582f4719b4eb6c316e332813b41adf449ed",
                "b58e61aaef8465db4eb766b265504bad4288195f",
                "73aa7640cd4b4b4a1adc4feac2b43c4269a869a0",
                "dc56ac0921f789585377f19e9ef12cfa1bc0d6c2",
                "4f391f6181ed04bbb503adffee6259ed57353749"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56977,
            "activeSources": 8,
            "criticalAlerts": 37016,
            "activeCampaigns": 232
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 27320,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9696,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 2751,
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
                "percentage": 93
            },
            {
                "name": "Tech",
                "percentage": 6
            },
            {
                "name": "Finance",
                "percentage": 0
            }
        ],
        "campaigns": [
            {
                "name": "malware_download",
                "count": 24771,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://bloomdistributioncenter[.]garden/5c6f2d6a-e99f-4df0-b3a5-a5f4bcbb234d/ggl[.]bsc",
                    "hxxp://124[.]94[.]246[.]167:45266/bin[.]sh",
                    "hxxps://bloomdistributioncenter[.]garden/5c3ae8f5-11dc-41f8-a9d0-1f68c169f758/ggl[.]bsc"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]1[.]223[.]16",
                    "1[.]162[.]164[.]41",
                    "1[.]176[.]118[.]246"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1626,
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
                "count": 1413,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b08643668d383e55dd2698e1bcc34571c8dfcc6a",
                    "fa2598910f8313798f8ee2fbfe84668b718442b6",
                    "5bb5b87a8f5d20bf3d5c6d64b3cf71fba84b43fd"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1402,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"1[.]92[.]101[.]103:8088\"",
                    " \"1[.]92[.]101[.]103:443\"",
                    " \"1[.]92[.]101[.]103:80\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 1033,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"c90991055abc5848fe35243c614bbd32c310300fc7ecbb615271d2295c9cc8aa",
                    " \"bb0cfaefc4d1e0461f577c1ef040bd576a9560631f05360c242d7d567b5cca94",
                    " \"cd8ec81fd606ec247099b58e845bb5547ee05a46fd46e732b06397587917e842"
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
                "count": 680,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8a9c74049483847464da1ca3cf6f1f44e17a5f0f",
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 553,
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
                "name": "Vidar",
                "count": 534,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "971333b66a8266c1bf37aba686b9b89fcd9a9e44",
                    "d401a5c721a25dd94d6eb02284f5e7b918c2b5df",
                    "42874ed125e23b73be13b7b8a7b89305ce979661"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"GuLoader",
        "totalAttacksThisHour": 48016,
        "lastCalculated": "2026-05-21 10:09 IST"
    }
};
