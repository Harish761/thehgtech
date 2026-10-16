// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-17T01:01:17.012389+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-17T01:01:16.515178+05:30",
    "lastUpdatedFormatted": "Oct 17, 2026 at 01:01 AM IST",
    "comparisonPeriod": "Oct 16 \u2013 Oct 17, 2026",
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
                "hxxp://help-contact-757643[.]vercel[.]app/",
                "hxxp://vajrapu-rutvika[.]github[.]io/netflix-ui-clone",
                "hxxp://info-resmiid[.]blogspot[.]com/",
                "hxxps://f005[.]backblazeb2[.]com/file/jugueh/SignintoXfinity[.]html",
                "hxxps://f005[.]backblazeb2[.]com/file/Xfinitytvconnect/SignintoXfinity[.]html"
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
                "newInLastHour": 69,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"4425da7b10aa299aa1ccee6048cacd2719b02f763e31a8e27e9ddc3e2f4a66d4",
                " \"5392c321ee22ffdd454802ab8620e11bcc33d5921217a03d057ba41b27d53ee2",
                " \"65f4813d45b7a5009dc552ea28635da725bd0d50c43dc9ac5fd25aa96fcad196",
                " \"8f73ed7dd151c3855112be7192d6116493171304aa035dd850c9edcba0ce01e4",
                " \"4054396ee1fb4c0e1714eafdf6919cf223cbaa4324a61b51597bc0dca717ffc6"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1678,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1678,
                "newInLastHour": 17,
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
                "1[.]12[.]229[.]231",
                "1[.]14[.]149[.]30",
                "1[.]15[.]14[.]29",
                "1[.]183[.]41[.]170",
                "1[.]183[.]41[.]171"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4257,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4257,
                "newInLastHour": 4257,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]117[.]72[.]220",
                "1[.]14[.]240[.]247",
                "1[.]179[.]232[.]194",
                "1[.]180[.]246[.]242",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33822,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33822,
                "newInLastHour": 33822,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://redxcvfsdgth[.]info/Down/CFETEITServicio[.]apk",
                "hxxps://cdn[.]monther[.]life/DvnX[.]zip",
                "hxxps://nova-75[.]com/f/vrhqljbnscwhbyhltuwmsq/t2990cmj",
                "hxxps://cdn[.]discordapp[.]com/attachments/1070571231054659585/1560705494052765768/bundle[.]zip?ex=6ad3afc2&is=6ad25e42&hm=870a8aaeafde7e3b433332945598920ba72e50370fde43fedad8bd7f88782f0d&",
                "hxxp://61[.]52[.]182[.]76:44809/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8605,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8605,
                "newInLastHour": 7589,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"e86413635d7a0b95a0ae99d8582d6cabe2dd6aa36e3b7b2d47cce966f5ba570b\"",
                " \"56a180bd6a043981a85f357ad989579cc5028139c73d6b698b282f4906061655\"",
                " \"1c2c786fd7328d872035669f97e55e9f11e0235d83cbbec352f1c333cf10466f\"",
                " \"c217cc02dd329a1c71c332f04cd0143298bfbec5ae9a1e4b0c476816a65d65b1\"",
                " \"dbc032fe60b321173186600c4ef7461a0df8f3eb44d6f414c876988d98e9563e\""
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
            "iocCount": 10908,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10908,
                "newInLastHour": 154,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "09545cca9c36c76f4982c4b648041a1606799b53",
                "d333c0b7e380afd2f156555b8110c00177b62e5d",
                "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
                "4664c47d412c00bf067a325ffa9790db75efbe75",
                "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 70901,
            "activeSources": 8,
            "criticalAlerts": 45612,
            "activeCampaigns": 293
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34818,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10794,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 6486,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Phishing",
                "count": 302,
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
                "count": 33748,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://103[.]19[.]49[.]134:37431/bin[.]sh",
                    "hxxp://42[.]235[.]91[.]212:50078/bin[.]sh",
                    "hxxp://42[.]237[.]44[.]123:57470/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]58[.]215",
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30"
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 2053,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://dg[.]888idrcatchy[.]org/q0\"",
                    " \"hxxps://dg[.]888idrcatchy[.]org/w6\"",
                    " \"hxxps://dg[.]888idrcatchy[.]org\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1673,
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
                "count": 1451,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "58b3990b07e9caaa2c504a5b9759d14eefcbc5e5",
                    "64c5f719aa0111be2ac04d785a8904b5baa22a88",
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1273,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"162[.]14[.]122[.]146:8080\"",
                    " \"162[.]14[.]122[.]146:80\"",
                    " \"162[.]14[.]122[.]146:22\""
                ]
            },
            {
                "name": "Vidar",
                "count": 796,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "09545cca9c36c76f4982c4b648041a1606799b53",
                    "d333c0b7e380afd2f156555b8110c00177b62e5d",
                    "c389945d4fc75250b291953e0abad0662dd9ce7d"
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
                "count": 716,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "650f90b14ecb5dc0160ea61d0620402c075c2f3d",
                    "64d01c8e86e0a3b51c270743879a1fe966af0db4",
                    "0f0a58e91f1c0f21ec7934e2f5e6b54187ed54be"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 633,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"94[.]154[.]32[.]27:56003\"",
                    " \"45[.]139[.]104[.]29:49101\"",
                    " \"38[.]127[.]61[.]130:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vshell\"",
        "totalAttacksThisHour": 61213,
        "lastCalculated": "2026-10-17 01:01 IST"
    }
};
