// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-02T20:11:38.186333+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-02T20:11:37.793111+05:30",
    "lastUpdatedFormatted": "Oct 02, 2026 at 08:11 PM IST",
    "comparisonPeriod": "Oct 01 \u2013 Oct 02, 2026",
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
                "hxxps://facebook-4[.]blogspot[.]com/",
                "hxxps://auth[.]properties/E[.]BPzGinUzM_SRe5RCWQ?/microsoftonline/mailbox/upgrade&userid=75468973984785978212312307887543",
                "hxxps://mainease[.]com/BP9SGCTK0422-the-evolution-of-empathy/",
                "hxxps://www[.]arizona99[.]co/",
                "hxxp://www[.]my-aol-account[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1183,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1183,
                "newInLastHour": 177,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"a8986d143b465f2c556c69288d118c46255ee45002f8e73fa9d133e121b6425c",
                " \"90d738a8d650e3fefda9d7efa4baa11bd89ab05fcf0eb173e04aa01a52b465e2",
                " \"953dcb1067bf56032158acd2116754d0e0fd76c54ea944d99da211bf996b829a",
                " \"bd3248c0c4fac6181ad03f816d1a7d2effbc65e59e8f97d9300c2ea49a8591e1",
                " \"140a2b7ff0068183429a3e7783623394f82ee2a9d0f725beedce6c54430524a2"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1692,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1692,
                "newInLastHour": 5,
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
                "1[.]117[.]171[.]170",
                "1[.]12[.]229[.]231",
                "1[.]15[.]14[.]29",
                "1[.]193[.]63[.]239",
                "1[.]203[.]186[.]149"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 2115,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 2115,
                "newInLastHour": 2115,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]117[.]72[.]220",
                "1[.]162[.]216[.]37",
                "1[.]222[.]42[.]237",
                "1[.]234[.]28[.]15"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15792,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15792,
                "newInLastHour": 15792,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://223[.]151[.]253[.]6:48039/i",
                "hxxp://60[.]22[.]148[.]175:58364/bin[.]sh",
                "hxxp://180[.]190[.]202[.]146:46282/i",
                "hxxp://180[.]243[.]176[.]58:37998/i",
                "hxxp://61[.]53[.]85[.]131:35555/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6465,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6465,
                "newInLastHour": 5811,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxp://nexssbs[.]sbs:9932/products\"",
                " \"hxxp://glolsbs[.]top:5621/settings\"",
                " \"hxxp://carogra[.]biz:4219\"",
                " \"xadohewe[.]workers[.]dev\"",
                " \"xhsqa39863[.]workers[.]dev\""
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
            "iocCount": 10851,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10851,
                "newInLastHour": 15,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "d89e701e024880cfd5f20e3f6ca748ee002f6bcd",
                "ff21ba4cde93cf84c7160e7bbf2d54a236e3f0ba",
                "5a0eb0b51d758eeb090d150a8664bafbcaa4bc3d",
                "b243f74faeb0e8cf30b79e84c846f40b31ce5f55",
                "d2bf0b9b894431307b05b47812645ef42cf169e6"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 51327,
            "activeSources": 8,
            "criticalAlerts": 27803,
            "activeCampaigns": 265
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16969,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "C2",
                "count": 10834,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 4565,
                "trend": "stable",
                "percentage": -2
            },
            {
                "category": "Phishing",
                "count": 301,
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
                "count": 15591,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://31[.]4[.]254[.]241:49417/bin[.]sh",
                    "hxxp://117[.]131[.]92[.]150:36075/i",
                    "hxxp://42[.]237[.]63[.]135:43965/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]117[.]171[.]170",
                    "1[.]12[.]229[.]231",
                    "1[.]15[.]14[.]29"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1687,
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
                "count": 1457,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "5fe196813d0bf092a5d8f3ef550fe959a86ccf87",
                    "205d49b6c7313e16e931e1b5873cc20be0dee85b",
                    "94c4ec66b6f57c29ac935890d7796decea67af37"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1321,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"82[.]156[.]242[.]28:82\"",
                    " \"154[.]36[.]164[.]137:50050\"",
                    " \"43[.]139[.]239[.]108:443\""
                ]
            },
            {
                "name": "Vidar",
                "count": 805,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "8bc45d63603370c41a2d7d352cdecb01281f5264",
                    "4f2559300051882eff69dc21bc3d27da6f988751",
                    "5e64c59a01d6dbe03bd0b794c1d505663451c393"
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
                "count": 713,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60",
                    "c234496c7b0abcd873bb6bb5a54288b6d340b6ff",
                    "7a215b5a8eaf9b132cf84f22d9ee2202c2a028bf"
                ]
            },
            {
                "name": " \"js.iclickfix\"",
                "count": 679,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"website[.]smaywka[.]sch[.]id\"",
                    " \"williamliggett[.]com\"",
                    " \"zomabeauty[.]com[.]au\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 628,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]92[.]41[.]92:56003\"",
                    " \"45[.]139[.]104[.]232:443\"",
                    " \"45[.]139[.]104[.]199:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 39220,
        "lastCalculated": "2026-10-02 20:11 IST"
    }
};
