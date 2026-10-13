// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-13T17:10:41.584051+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-13T17:10:41.160767+05:30",
    "lastUpdatedFormatted": "Oct 13, 2026 at 05:10 PM IST",
    "comparisonPeriod": "Oct 12 \u2013 Oct 13, 2026",
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
                "hxxps://bit-mart-hub[.]zapier[.]app/",
                "hxxp://cpcontacts[.]52-153-141-124[.]cprapid[.]com/?koncetlah&shem=aimgspe",
                "hxxps://rodrigosilvaanalyst[.]github[.]io/netflix",
                "hxxps://ritikbhanot9999[.]github[.]io/amazon-clone",
                "hxxps://rahil-azam[.]github[.]io/first-website"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1092,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1092,
                "newInLastHour": 172,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"fc2ec0fb4a247677fbea2da2becbc8c29763e68a9bbb51edc6b97d0c9dc1f9bc",
                " \"913792a7cec3a062742f3390d7941a7e95aeeb7e1537e4a52590049d54c5c5e8",
                " \"531540654836a5e5add5fe08432bc17c3582c1b0692b411278b1c96a3e5fe8db",
                " \"d5144d2d7e20b48885c24b42ea5f0250f1b3d89ab00dbcd84782ebde645c5d24",
                " \"fe8174a3605239522f774af91f04b4a9f62cbbff4f72e0756a932e97d9ac3131"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1622,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1622,
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
                "1[.]145[.]29[.]140",
                "1[.]15[.]14[.]29",
                "1[.]193[.]58[.]33",
                "1[.]20[.]173[.]155",
                "1[.]213[.]214[.]233"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4294,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4294,
                "newInLastHour": 4294,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]240[.]247",
                "1[.]15[.]221[.]192",
                "1[.]2[.]225[.]235",
                "1[.]214[.]214[.]114"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33767,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33767,
                "newInLastHour": 33767,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://105[.]186[.]199[.]209:52874/i",
                "hxxp://78[.]160[.]205[.]52:49904/i",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_4e3366830d6d5b4b[.]exe",
                "hxxp://182[.]127[.]64[.]151:40844/i",
                "hxxp://182[.]127[.]0[.]237:56565/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6649,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6649,
                "newInLastHour": 5956,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hxxps://x5u[.]6r6r6[.]org/n2\"",
                " \"hxxps://x5u[.]6r6r6[.]org/sm\"",
                " \"hxxps://x5u[.]6r6r6[.]org/xbc/\"",
                " \"hxxps://x5u[.]6r6r6[.]org/xbc\"",
                " \"majalaganja[.]cc\""
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
            "iocCount": 10549,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10549,
                "newInLastHour": 12,
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
            "totalIndicators": 68948,
            "activeSources": 8,
            "criticalAlerts": 45553,
            "activeCampaigns": 289
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34619,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10934,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5150,
                "trend": "stable",
                "percentage": 0
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
                "count": 33568,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://1[.]61[.]203[.]231:46379/bin[.]sh",
                    "hxxp://60[.]23[.]239[.]109:44110/i",
                    "hxxp://222[.]141[.]133[.]234:50577/bin[.]sh"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]192[.]129[.]106",
                    "1[.]193[.]58[.]33",
                    "1[.]20[.]173[.]155"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1672,
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
                "count": 1459,
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
                "count": 1327,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"52[.]205[.]177[.]11:8080\"",
                    " \"52[.]205[.]177[.]11:443\"",
                    " \"52[.]205[.]177[.]11:80\""
                ]
            },
            {
                "name": "Vidar",
                "count": 835,
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
                "name": " \"win.vidar\"",
                "count": 675,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://te[.]666iapk[.]net/gm\"",
                    " \"hxxps://te[.]666iapk[.]net/gm/\"",
                    " \"hxxps://te[.]666iapk[.]net/rr\""
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 629,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"10c31033ad4bab9b2d065f5a096289fdd80ff7e1547627cdce1ebbc49f2e96ce\"",
                    " \"9db00b88af514684d55f66afabf9d3e71bb248fd\"",
                    " \"bf596ceaa1fa56a7adcda06ed75a0f75\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"win.vidar\"",
        "totalAttacksThisHour": 59511,
        "lastCalculated": "2026-10-13 17:10 IST"
    }
};
