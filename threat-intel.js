// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-08-01T15:37:21.669179+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-08-01T15:37:21.291481+05:30",
    "lastUpdatedFormatted": "Aug 01, 2026 at 03:37 PM IST",
    "comparisonPeriod": "Jul 31 \u2013 Aug 01, 2026",
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
                "hxxps://rr[.]twkohm[.]net/tdwins/tdwins[.]html",
                "hxxps://hammerhead-app-ub55h[.]ondigitalocean[.]app/",
                "hxxps://www[.]trustwallet[.]com-two-factor-authentication07[.]ao[.]yesixrq[.]com/",
                "hxxps://www[.]trustwallet[.]com-two-factor-authentication09[.]ao[.]yesixrq[.]com/",
                "hxxps://www[.]item[.]ehay[.]com[.]login[.]secures-wr8wsvzt[.]construccionesjlfabririssas[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 728,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 728,
                "newInLastHour": 41,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"e2d467633bac8ab3721026e91ba75a3224682a7bcfa66e1107930c85dd489b58",
                " \"cb5d4f001a00b42ff3bd082528c9a2056925191fe47f448cc3b77bcae24f4973",
                " \"e1023bacd4de80d93fe3e2a583c8f220dcdd30d4c88642eac0132e12e68e3c1b",
                " \"d9511387127b4395e716c2bbb6e4baf8b5ed27ea4f557afd1f69174854ba147e",
                " \"1e10951a60bcbfb3fb2cc9656a62d286c80959b6856ea7ef33dd9bf0f9235271"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1663,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1663,
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
                "1[.]10[.]185[.]51",
                "1[.]12[.]229[.]231",
                "1[.]14[.]206[.]120",
                "1[.]15[.]14[.]29",
                "1[.]179[.]41[.]241"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4458,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4458,
                "newInLastHour": 4458,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]12[.]37[.]6",
                "1[.]162[.]18[.]135",
                "1[.]192[.]61[.]70",
                "1[.]204[.]206[.]182"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 15436,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 15436,
                "newInLastHour": 15436,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]121[.]226[.]248:38816/i",
                "hxxp://222[.]241[.]210[.]219:59142/i",
                "hxxp://42[.]235[.]88[.]72:40827/i",
                "hxxp://45[.]196[.]97[.]80:8888/milan[.]x86",
                "hxxp://45[.]196[.]97[.]80:8888/milan[.]armv7l"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 5816,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 5816,
                "newInLastHour": 5448,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"45[.]145[.]228[.]16:7000\"",
                " \"43[.]166[.]246[.]26:7010\"",
                " \"3ezvsan5[.]ferkrueda[.]com\"",
                " \"ewlrqd[.]gnarcoticexoticz[.]com\"",
                " \"registry[.]evercircle[.]click\""
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
            "iocCount": 10273,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10273,
                "newInLastHour": 0,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "014d51d79c5a5c80042abedb35231581ff07c2e7",
                "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
                "7767913e33fac1ed9c448460267ca0e6cbe627b4",
                "fe50e363165e3e8d789daf4dc378f50a70f35a8a",
                "16fbb45457a2d8e67c556db46e051893917e2104"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 49357,
            "activeSources": 8,
            "criticalAlerts": 26384,
            "activeCampaigns": 257
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 16133,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10251,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 3750,
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
                "count": 15372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://mobilab[.]by/wgt[.]bin",
                    "hxxp://94[.]154[.]43[.]12:8080/xmrig_x64",
                    "hxxp://94[.]154[.]43[.]12:8080/xmr_miner_x64"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]10[.]185[.]51",
                    "1[.]12[.]229[.]231",
                    "1[.]140[.]3[.]11"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1664,
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
                "name": " \"js.iclickfix\"",
                "count": 1511,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"jouwonderhoud[.]be\"",
                    " \"www[.]cevrev[.]com\"",
                    " \"www[.]cobelediciones[.]com\""
                ]
            },
            {
                "name": "AsyncRAT",
                "count": 1433,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "67044f9079f804d4a6217093c679897fec1f90e2",
                    "c7ec4c2fa1678702ae684a069cf37a4eef16ef27",
                    "4e5b7b186ad51a93d4e1ba0e2b5ca006b62571be"
                ]
            },
            {
                "name": " \"win.cobalt_strike\"",
                "count": 1372,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"45[.]135[.]180[.]166:443\"",
                    " \"154[.]36[.]167[.]17:80\"",
                    " \"124[.]222[.]145[.]172:9999\""
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
                "count": 693,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "4c67471be88dd63db2466621fe9e2a2d848f5b79",
                    "9cc76149b07c25893611bc8339406a6312ab2053",
                    "1b64957d1d878c0c0b0b346849db2e64d487aa17"
                ]
            },
            {
                "name": "Vidar",
                "count": 660,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "014d51d79c5a5c80042abedb35231581ff07c2e7",
                    "ed0d4b2a9c090b6af6c99fd5b899831da206d835",
                    "7767913e33fac1ed9c448460267ca0e6cbe627b4"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 557,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "501d817bb1780acfe5e47082c43472bda8068e4d",
                    "2beac2ee8b2fe7625d4de9f5381d37f200965f91",
                    "a46841d623a191366909b24375bee0eceea23bbe"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 40688,
        "lastCalculated": "2026-08-01 15:37 IST"
    }
};
