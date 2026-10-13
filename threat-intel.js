// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-14T04:31:32.739345+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-14T04:31:32.325547+05:30",
    "lastUpdatedFormatted": "Oct 14, 2026 at 04:31 AM IST",
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
            "iocCount": 1158,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1158,
                "newInLastHour": 76,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"d7e5d1da2d8cd498a57878ce912a098a2397be05ea26e10d83aa096695ce74a7",
                " \"b2171db08675b55225e3436efbb573e94aedfcc3185acac7ec1ed02a03cdb5b9",
                " \"d28ca3a85b535cb6dd70fe2c1d4931c3b74ee06bc4aef03cbd65169e234492d2",
                " \"4bf406172374a1ee8a9b3feb09edabf2e7db056d599c33fbc690eace66f0a9a8",
                " \"7b77fb4e603b09807d59473897d7ca8880697a31bc93b702fae63324077cb798"
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
                "1[.]14[.]149[.]30",
                "1[.]145[.]29[.]140",
                "1[.]15[.]14[.]29",
                "1[.]183[.]41[.]171",
                "1[.]193[.]58[.]33"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4127,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4127,
                "newInLastHour": 4127,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192",
                "1[.]178[.]138[.]99",
                "1[.]2[.]225[.]235"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 34082,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 34082,
                "newInLastHour": 34082,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://120[.]28[.]135[.]254:56342/i",
                "hxxp://42[.]227[.]203[.]38:54878/i",
                "hxxp://42[.]224[.]145[.]69:33047/i",
                "hxxp://124[.]132[.]130[.]96:50755/i",
                "hxxp://115[.]52[.]68[.]113:60095/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 7810,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 7810,
                "newInLastHour": 7039,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://xy[.]73kcom[.]org/vw\"",
                " \"62d01e06630b9829a675e19139a806fcabc1c8d6b616aab8453ccb2edf514a0b\"",
                " \"4c5be7e5b0ef0f7380a3c19cdc60244cef11fa0fa7dad8aa9ac4b0bd4f11c03f\"",
                " \"52ded2b6af6c64932216537a1533a2961f3a621b9ffd51a20b64241f71fff2a8\"",
                " \"490870ee21ccc65a75ee13feb97fce9178911f1d084f468c5e79c6a9f8854643\""
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
            "iocCount": 10965,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10965,
                "newInLastHour": 18,
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
            "totalIndicators": 70165,
            "activeSources": 8,
            "criticalAlerts": 46134,
            "activeCampaigns": 289
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 35206,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10928,
                "trend": "stable",
                "percentage": 3
            },
            {
                "category": "Botnet",
                "count": 5659,
                "trend": "stable",
                "percentage": 3
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
                "count": 34017,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://182[.]122[.]120[.]82:45263/i",
                    "hxxp://182[.]121[.]148[.]252:56262/i",
                    "hxxp://182[.]116[.]112[.]72:46115/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]14[.]149[.]30",
                    "1[.]145[.]29[.]140",
                    "1[.]15[.]14[.]29"
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
                "name": "AsyncRAT",
                "count": 1455,
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
                "count": 1318,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"49[.]233[.]181[.]236:8426\"",
                    " \"47[.]74[.]43[.]122:22\"",
                    " \"47[.]74[.]43[.]122:23817\""
                ]
            },
            {
                "name": " \"win.vidar\"",
                "count": 1241,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://bi[.]73kcom[.]org/x0\"",
                    " \"hxxps://bi[.]73kcom[.]org/gnl\"",
                    " \"hxxps://bi[.]73kcom[.]org/gm/\""
                ]
            },
            {
                "name": "Vidar",
                "count": 837,
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
                "count": 718,
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
                "count": 624,
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
        "fastestRisingThreat": " \"unknown_loader\"",
        "totalAttacksThisHour": 60648,
        "lastCalculated": "2026-10-14 04:31 IST"
    }
};
