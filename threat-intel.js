// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-06T03:32:22.791785+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-06T03:32:22.564308+05:30",
    "lastUpdatedFormatted": "Sep 06, 2026 at 03:32 AM IST",
    "comparisonPeriod": "Sep 05 \u2013 Sep 06, 2026",
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
                "hxxp://roblox[.]com[.]mu/communities/7901998248/LeightXyn",
                "hxxps://s4w[.]in/roblox-com-users-2720767831-profile",
                "hxxps://revenuewise[.]sbs/how-to-file/",
                "hxxps://revenuewise[.]sbs/get-transcript/",
                "hxxps://revenuewise[.]sbs/businesses-1/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 727,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 727,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"3bc182cd50a25ea6c9adceb7f327c11ddbe18c28cf87a7f40c56a1562bea91ea",
                " \"ae2f0e601afed431215b7949143f594d0af98be324475b86c6ab4e7dfa6a0ff4",
                " \"04cf51edb8cfa50aafb64d94dfe132469d0c6b0810074ea121f759d65d97f982",
                " \"ac270f9906aed56329dd280021bd209068a3bc97f3a2c255b3f71d208a7b576c",
                " \"86ae15bc36b14ee214099fa4e3b3fafbfdfff33443c7cd3ce15116b47d15ab92"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1697,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1697,
                "newInLastHour": 49,
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
                "1[.]119[.]194[.]253",
                "1[.]12[.]229[.]231",
                "1[.]145[.]32[.]156",
                "1[.]15[.]14[.]29",
                "1[.]192[.]176[.]104"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11344,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11344,
                "newInLastHour": 11344,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]162[.]197[.]67",
                "1[.]162[.]247[.]182",
                "1[.]174[.]208[.]30"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15065,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15065,
                "newInLastHour": 15065,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://42[.]232[.]237[.]170:52434/i",
                "hxxp://42[.]232[.]237[.]170:52434/bin[.]sh",
                "hxxp://123[.]4[.]136[.]2:48734/i",
                "hxxp://219[.]157[.]161[.]10:60183/i",
                "hxxp://182[.]113[.]199[.]122:58281/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4853,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4853,
                "newInLastHour": 4335,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"poxijave[.]workers[.]dev\"",
                " \"usen-mindvault[.]com\"",
                " \"usen-memorylift[.]com\"",
                " \"111[.]231[.]116[.]164:80\"",
                " \"111[.]231[.]116[.]164:8080\""
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
            "iocCount": 10624,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10624,
                "newInLastHour": 8604,
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
            "totalIndicators": 39657,
            "activeSources": 8,
            "criticalAlerts": 17832,
            "activeCampaigns": 185
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15799,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4085,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 2033,
                "trend": "down",
                "percentage": -80
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
                "count": 15059,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://123[.]4[.]136[.]2:48734/bin[.]sh",
                    "hxxp://220[.]201[.]147[.]91:35994/i",
                    "hxxp://27[.]210[.]37[.]1:42263/i"
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
                    "1[.]177[.]162[.]2"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1659,
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
                "count": 1287,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"210a5380007df4fa49140410938a39f2251d6548\"",
                    " \"d24014049064389357dab970e72e6298\"",
                    " \"f535cdbb32dd25fa7dfbcdbae96eafbd5740882e46355c78c895224de6f22e4e\""
                ]
            },
            {
                "name": "Vidar",
                "count": 555,
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
                "name": " \"win.pure_rat\"",
                "count": 554,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"83[.]136[.]211[.]230:56001\"",
                    " \"45[.]225[.]135[.]90:56003\"",
                    " \"45[.]139[.]104[.]226:443\""
                ]
            },
            {
                "name": " \"win.asyncrat\"",
                "count": 388,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"71656c57dcc146118993b95b7f909acc750ae77b\"",
                    " \"9722555e8540d9654202860707eead13\"",
                    " \"17afd744670767b97cb63ee1490d9160cce77240ea69fd9984f61da67bee6b26\""
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 343,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"15[.]168[.]12[.]234:7443\"",
                    " \"102[.]117[.]165[.]66:7443\"",
                    " \"111[.]170[.]148[.]132:5674\""
                ]
            },
            {
                "name": "Generic Phishing",
                "count": 298,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://roblox[.]com[.]mu/communities/7901998248/LeightXyn",
                    "hxxps://s4w[.]in/roblox-com-users-2720767831-profile",
                    "hxxps://revenuewise[.]sbs/how-to-file/"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 271,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"bb752a96b79494d66002610736fb7777\"",
                    " \"b7f55acbce6cd8fc6402463dcbefc744e88d2827503c8722960b15b507f255c0\"",
                    " \"966b02252a5eb1287b4fe9bcad08acc2e6b9f337\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "AsyncRAT",
        "totalAttacksThisHour": 54712,
        "lastCalculated": "2026-09-06 03:32 IST"
    }
};
