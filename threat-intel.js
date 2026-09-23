// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-09-23T10:07:27.514386+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-09-23T10:07:27.200513+05:30",
    "lastUpdatedFormatted": "Sep 23, 2026 at 10:07 AM IST",
    "comparisonPeriod": "Sep 22 \u2013 Sep 23, 2026",
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
                "hxxps://135461223[.]site/pl/1997/4d0edf93-77fc-410f-9146-48767b992a51/758479/x",
                "hxxps://135461223[.]site/1997/4d0edf93-77fc-410f-9146-48767b992a51/758479",
                "hxxps://135461223[.]site/pl/1997/4d0edf93-77fc-410f-9146-48767b992a51/758479",
                "hxxps://www[.]wbeuvvfx[.]com/",
                "hxxps://www[.]wbeuvipfx[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1391,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1391,
                "newInLastHour": 125,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"dcb1c7a3a5ec3692a7db6e4d0d0f83f653ab5440e1510cf2e841fa3a3fcae48e",
                " \"10933cdc279412973d81c953e6d73169e8e79194e400223a64e02a1494b9debc",
                " \"ee799a275576298a32b5a2056072125abb6dece35c029a5780ff0694200d59fc",
                " \"19f0ad8353353007973b04a1f954171d2313ca2873d54559c8a95af0ca693ccc",
                " \"021d8ad84c75a5c678107ab748f15a7e83b03223e91ca253492b0cd1bfb6554b"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1711,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1711,
                "newInLastHour": 35,
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
                "1[.]189[.]89[.]243",
                "1[.]20[.]186[.]172",
                "1[.]24[.]16[.]58",
                "1[.]24[.]16[.]60",
                "1[.]24[.]16[.]95"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 5552,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 5552,
                "newInLastHour": 5552,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]14[.]122[.]79",
                "1[.]15[.]221[.]192",
                "1[.]180[.]246[.]242"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 13866,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 13866,
                "newInLastHour": 13866,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://113[.]238[.]173[.]237:46611/i",
                "hxxp://39[.]40[.]165[.]127:44602/i",
                "hxxp://39[.]40[.]165[.]127:44602/bin[.]sh",
                "hxxp://123[.]5[.]142[.]32:51339/i",
                "hxxp://27[.]18[.]153[.]133:39889/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5710,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5710,
                "newInLastHour": 5464,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://psirosimeirefaria[.]com[.]br/\"",
                " \"csi[.]in[.]net\"",
                " \"barracuda-larne[.]co[.]uk\"",
                " \"bageforr[.]com\"",
                " \"azcollections[.]online\""
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
            "iocCount": 10776,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10776,
                "newInLastHour": 110,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "2e57d619d591a232e8f11d850822531b3bda29a4",
                "e5c15371e2640fdbbed13f9a3d4128f84fe32c9b",
                "deb92b7c7be8b03d76c63ea02419b82e6e573f97",
                "0f3b052836a1071f9f929ad3516358185d5e078e",
                "a88b5b3ce1ac1236c2739396319f187df0f601f3"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 48787,
            "activeSources": 8,
            "criticalAlerts": 26120,
            "activeCampaigns": 283
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 15476,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10644,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4480,
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
                    "1[.]12[.]229[.]231",
                    "1[.]145[.]32[.]156",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "malware_download",
                "count": 14010,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]121[.]234[.]165:42289/bin[.]sh",
                    "hxxp://103[.]18[.]13[.]63:39744/i",
                    "hxxp://124[.]6[.]167[.]113:38678/bin[.]sh"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1676,
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
                "count": 1448,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "99500e5de097a58d95775e1f9da85597851bdb71",
                    "372b91c0d31a75b4e1765af998d984881e34dab1",
                    "9700462dfd419d0295b2753079208e939a853dce"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1406,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]203[.]213[.]168:18443\"",
                    " \"175[.]124[.]145[.]102:8080\"",
                    " \"88[.]119[.]174[.]86:53\""
                ]
            },
            {
                "name": " \"n/a",
                "count": 764,
                "types": [
                    "hash"
                ],
                "sampleIndicators": [
                    " \"70618550f6bffc42399f2e29129410d04a247e24e50783c7098f61d57b9c9a5e",
                    " \"9d11df6d98fa57fb6acea9e4d2894e7ff479932d43e1963ffe6b73251641eba6",
                    " \"f75c33c52d0a3559026c09065d7150441bd004cc8104d7df1122ca2280e0585b"
                ]
            },
            {
                "name": "Vidar",
                "count": 760,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "a88b5b3ce1ac1236c2739396319f187df0f601f3",
                    "cf52101dfe4779d6d145fe111b5bd69043c0a667",
                    "0bf61cf448206d51a0b7a0cdece647df3ea1196f"
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
                    "9b798f7d87edcf42680454660f593afd696ef8ca",
                    "ba3714d484afb75fd03911c59aa096cee9595955",
                    "8cffe4fa8f624cb4c15790c414e04acde61e3651"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 599,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"93[.]152[.]214[.]28:7222\"",
                    " \"45[.]88[.]91[.]54:56002\"",
                    " \"31[.]77[.]220[.]78:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious IPs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"js.clearfake\"",
        "totalAttacksThisHour": 40457,
        "lastCalculated": "2026-09-23 10:07 IST"
    }
};
