// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-24T03:11:25.900055+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-24T03:11:25.625784+05:30",
    "lastUpdatedFormatted": "Sep 24, 2026 at 03:11 AM IST",
    "comparisonPeriod": "Sep 23 \u2013 Sep 24, 2026",
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
                "hxxps://face-book[.]com[.]vn/mau-anh-mua-he-2026",
                "hxxps://www[.]blockfi-coinage[.]com/",
                "hxxp://xfinityteamsservice[.]weebly[.]com/",
                "hxxp://loginxfinityinfo[.]weebly[.]com/",
                "hxxp://pine-crown-dust[.]pages[.]dev/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1886,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1886,
                "newInLastHour": 65,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"cf0f26f9118eca9ceeda89b8d14471de340ef2b4e51e953cf082745d94435e4a",
                " \"cc91c925ca2f097ffaf01e81ec14b2eb3658f4c84313908f2b0f0b0985a1106e",
                " \"20418f02f538ab4c22904990193a772524cc318cec03397f978dd96418174d49",
                " \"2024aa5e9fd1da58f451547bbcb4989245b85b164e46beeface5bd0167033a21",
                " \"6c3b3931cb190d6340c9de4041e073a42793b15a16120ecbc462318177275ab9"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1710,
                "newInLastHour": 1,
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
                "1[.]145[.]32[.]156",
                "1[.]177[.]162[.]4",
                "1[.]189[.]89[.]243",
                "1[.]193[.]58[.]176"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 11704,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 11704,
                "newInLastHour": 11704,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]122[.]79",
                "1[.]15[.]221[.]192",
                "1[.]161[.]144[.]132",
                "1[.]162[.]197[.]67"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 14327,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 14327,
                "newInLastHour": 14327,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://112[.]198[.]194[.]175:34769/i",
                "hxxp://123[.]5[.]152[.]210:33629/i",
                "hxxp://27[.]215[.]141[.]140:36964/i",
                "hxxp://42[.]224[.]4[.]44:47963/bin[.]sh",
                "hxxp://196[.]191[.]233[.]24:60929/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 8365,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 8365,
                "newInLastHour": 7960,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"qowolyti[.]workers[.]dev\"",
                " \"kuxofeqi[.]workers[.]dev\"",
                " \"dacxyxfc[.]pazarlamasi[.]com\"",
                " \"pazarlamasi[.]com\"",
                " \"evuoos85[.]adabiyat[.]org\""
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
            "iocCount": 10759,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10759,
                "newInLastHour": 10,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "de58e571469c72f26cfb59884e06e2aa5db7d6ff",
                "180512bde178c27cef6b8597f301558d88f853e2",
                "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
                "95688000a5176c85f77eb00ba69faef202ae6c24",
                "2c718d1d6454ad663cf963baecf3a1c81495716a"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 52350,
            "activeSources": 8,
            "criticalAlerts": 26977,
            "activeCampaigns": 276
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16216,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10761,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "Botnet",
                "count": 4363,
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
                    "1[.]117[.]59[.]169",
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]32[.]156"
                ]
            },
            {
                "name": "malware_download",
                "count": 14294,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://222[.]138[.]118[.]172:57431/i",
                    "hxxp://42[.]227[.]130[.]70:49778/bin[.]sh",
                    "hxxp://125[.]47[.]23[.]202:55548/i"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 2128,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ashen-trace-zephyr-draeix[.]life\"",
                    " \"krestmoais-reed[.]life\"",
                    " \"mesa-braior-k3w3b[.]life\""
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1710,
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
                "count": 1452,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "cb7fcaede3c6bb75e73ee72b8de7c23de2953dd4",
                    "990472ad57a4d7dcb13689a21b0c84252f5cf0a5",
                    "99500e5de097a58d95775e1f9da85597851bdb71"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1382,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"23[.]94[.]66[.]124:80\"",
                    " \"3[.]70[.]2[.]18:80\"",
                    " \"3[.]70[.]2[.]18:443\""
                ]
            },
            {
                "name": " \"Mirai",
                "count": 845,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"bbade7df3817220d39c866ca9c168578a90d221f66eebf96cc2dd0617f761053",
                    " \"e99061f44c6df6990e3720cb2c3ab1b645b6634327408b2a189a0310221e1d6d",
                    " \"93fde550b2661ed382f90e20d8d5f6f97f0a382e22f80614ca654162a5b3cf59"
                ]
            },
            {
                "name": "Vidar",
                "count": 795,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "2d55d1a98da553c64dca5168488b90de1ac2b6dc",
                    "8ebcb44e692f32d2a4894ada4a06079a48bdf1a6",
                    "e368d5f28111dd2b577e949c59b254f7de1dae2b"
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
                "count": 708,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "82ad60b5fe3e77f88effbb586db3795a41e5f60b",
                    "b85ab05112c6848ccf2dd6889903e1268cdc6a75",
                    "9b798f7d87edcf42680454660f593afd696ef8ca"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 49372,
        "lastCalculated": "2026-09-24 03:11 IST"
    }
};
