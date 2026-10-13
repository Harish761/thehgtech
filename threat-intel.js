// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-14T00:42:14.198708+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-14T00:42:13.778156+05:30",
    "lastUpdatedFormatted": "Oct 14, 2026 at 12:42 AM IST",
    "comparisonPeriod": "Oct 13 \u2013 Oct 14, 2026",
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
                "hxxps://newapprovedstatementcloud[.]netlify[.]app/",
                "hxxps://tinyurl[.]com/NewApprovedStatement",
                "hxxp://loginservice[.]cloud/E[.]H7cEdefIXyc?/link?url=d42cf86bz535433d4918f6725dca3821r_348756293",
                "hxxps://minas-g5e9b3fdgtgcdhea[.]canadacentral-01[.]azurewebsites[.]net/sign-in",
                "hxxp://minas-g5e9b3fdgtgcdhea[.]canadacentral-01[.]azurewebsites[.]net/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1164,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1164,
                "newInLastHour": 222,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fd855b8dd094a4910631b51b630288d5836023fd7003d9cbaca716823475b86e",
                " \"700f16a8510983959cc2ba47648257427940c5fd7980786a998ff59149219f6e",
                " \"176a88523d078cc09a8d2b060aa51a3e55e3eacb503f9ed802d9b478d9dea179",
                " \"938c2ba161db0bf5f6c4d1bc416c4ae709e4e7b2c75e85566a9a126f4cd97ec0",
                " \"d2142d46a60aa8688695e707569a1ef5ae15cbbb431e5c692c4b7a2831e7259a"
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
                "newInLastHour": 59,
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
                "1[.]14[.]149[.]30",
                "1[.]145[.]29[.]140",
                "1[.]15[.]14[.]29",
                "1[.]193[.]58[.]33",
                "1[.]20[.]173[.]155"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4206,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4206,
                "newInLastHour": 4206,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]15[.]221[.]192",
                "1[.]2[.]225[.]235",
                "1[.]214[.]214[.]114",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34017,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34017,
                "newInLastHour": 34017,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://182[.]122[.]120[.]82:45263/i",
                "hxxp://182[.]121[.]148[.]252:56262/i",
                "hxxp://182[.]116[.]112[.]72:46115/i",
                "hxxp://150[.]251[.]113[.]186/bins/dlr[.]ppc",
                "hxxp://150[.]251[.]113[.]186/bins/dlr[.]m68k"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7049,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7049,
                "newInLastHour": 6383,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://bi[.]73kcom[.]org/x0\"",
                " \"hxxps://witchcandp[.]com/\"",
                " \"hxxps://maryafuller[.]com/\"",
                " \"hxxps://bi[.]73kcom[.]org/gnl\"",
                " \"hxxps://bi[.]73kcom[.]org/gm/\""
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
            "iocCount": 10950,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10950,
                "newInLastHour": 419,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "e6c0468f46efe40f3127d33641bfc3df8b2e5c7d",
                "4664c47d412c00bf067a325ffa9790db75efbe75",
                "b3c1e060a727e4db1cf6131f1eb6e9bcca2ffb5d",
                "11cfb1e85c316e9b9785c6778bc077bb04093dfd",
                "c389945d4fc75250b291953e0abad0662dd9ce7d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68984,
            "activeSources": 8,
            "criticalAlerts": 45411,
            "activeCampaigns": 287
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34884,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10527,
                "trend": "stable",
                "percentage": -3
            },
            {
                "category": "Botnet",
                "count": 5465,
                "trend": "stable",
                "percentage": 6
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
                "percentage": 98
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
                "count": 33767,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://105[.]186[.]199[.]209:52874/i",
                    "hxxp://78[.]160[.]205[.]52:49904/i",
                    "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_4e3366830d6d5b4b[.]exe"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]145[.]29[.]140",
                    "1[.]15[.]14[.]29",
                    "1[.]193[.]58[.]33"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1622,
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
                "count": 1449,
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
                "count": 1319,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"177[.]2[.]184[.]188:80\"",
                    " \"121[.]89[.]83[.]141:7777\"",
                    " \"120[.]76[.]143[.]184:8443\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 993,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://x5u[.]6r6r6[.]org/n2\"",
                    " \"hxxps://x5u[.]6r6r6[.]org/sm\"",
                    " \"hxxps://x5u[.]6r6r6[.]org/xbc/\""
                ]
            },
            {
                "name": "Vidar",
                "count": 744,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c389945d4fc75250b291953e0abad0662dd9ce7d",
                    "515574d4dc4957fbd0043d3a4269485384e504e7",
                    "51f9d6339bfdb9321630392913941e04d921cf7d"
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
                "count": 695,
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
                "count": 628,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"91[.]219[.]236[.]214:56001\"",
                    " \"91[.]219[.]236[.]214:56002\"",
                    " \"78[.]17[.]25[.]46:56003\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 60611,
        "lastCalculated": "2026-10-14 00:42 IST"
    }
};
