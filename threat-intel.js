// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-07-11T22:39:54.753454+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-07-11T22:39:54.394450+05:30",
    "lastUpdatedFormatted": "Jul 11, 2026 at 10:39 PM IST",
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
                "hxxp://www[.]ledger[.]cn[.]com/",
                "hxxps://www[.]roblox[.]et/games/142823291/Murder-Mystery-2?privateServerLinkCode=47676449776018210449915616121911",
                "hxxps://www[.]misomovi[.]shop/",
                "hxxps://apps38-facebook[.]blogspot[.]com/",
                "hxxp://facebook-system[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 512,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 512,
                "newInLastHour": 62,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a69d189f06bc78e50496b7247deb5cb41569aec1c949481c2ac55a202cb1c947",
                " \"082b1860bb35d7730671367077fc0bc64e9a576b4c08a9a8e1d67b311580ca45",
                " \"f97d41ff38f168ec24969ee0cae1817a8f507bfdc03dec82740b84bfc900ab28",
                " \"b6ceeca61f6b65490b0451e300e8283f99f5c6c00cbe985ed057078b9638670e",
                " \"5eb20bf4b6ff91ac45d4f7632661ff2166c7cf1270022a201a2dab8e600a1817"
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
                "1[.]15[.]14[.]29",
                "1[.]158[.]64[.]230",
                "1[.]175[.]87[.]205",
                "1[.]177[.]63[.]24"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4803,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4803,
                "newInLastHour": 4803,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]14[.]203[.]20",
                "1[.]15[.]221[.]192",
                "1[.]163[.]207[.]109"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 21506,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 21506,
                "newInLastHour": 21506,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://59[.]44[.]133[.]78:57678/bin[.]sh",
                "hxxp://103[.]101[.]102[.]121:54675/i",
                "hxxp://45[.]90[.]163[.]37/GoonGang/XDx86",
                "hxxp://45[.]90[.]163[.]37/GoonGang/XDspc",
                "hxxp://45[.]90[.]163[.]37/GoonGang/XDm68k"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 4436,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 4436,
                "newInLastHour": 4252,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"154[.]88[.]99[.]51:8885\"",
                " \"154[.]88[.]98[.]61:8885\"",
                " \"154[.]88[.]98[.]62:8885\"",
                " \"154[.]88[.]98[.]57:8885\"",
                " \"uyxg[.]behtarin-site-shartbandi-football[.]bet\""
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
            "iocCount": 10162,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10162,
                "newInLastHour": 1,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "a133ce088d9ead15855e1343b8e643736d47d7d9",
                "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7",
                "22cb3cb6d7b5b158d2156b1bd4018db8b5433ea7",
                "1199461c382373b4645960ca6875028d7c96ce16",
                "2516492455c882b6a07fbcb076f31a06b2a71963"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 54070,
            "activeSources": 8,
            "criticalAlerts": 32110,
            "activeCampaigns": 248
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 21970,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10140,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 3577,
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
                "count": 21432,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]127[.]133[.]102:55974/i",
                    "hxxps://zs3z44wh[.]bettilt90[.]com/?ublib=9407a861-4b48-4043-9404-59d2103d7ee1",
                    "hxxp://182[.]127[.]176[.]119:59353/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]119[.]194[.]226",
                    "1[.]15[.]14[.]29",
                    "1[.]158[.]64[.]230"
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
                "count": 1448,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"139[.]155[.]157[.]79:443\"",
                    " \"123[.]58[.]64[.]57:50040\"",
                    " \"115[.]190[.]237[.]175:6677\""
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
                "count": 639,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "dcbc383f1a16d4b8baa7bfca1bb023f7f65c36f7",
                    "22cb3cb6d7b5b158d2156b1bd4018db8b5433ea7",
                    "2516492455c882b6a07fbcb076f31a06b2a71963"
                ]
            },
            {
                "name": " \"unknown_stealer\"",
                "count": 577,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"shift-art[.]com\"",
                    " \"zurawealth[.]co[.]uk\"",
                    " \"waterchemstech[.]com\""
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
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 45929,
        "lastCalculated": "2026-07-11 22:39 IST"
    }
};
