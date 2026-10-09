// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-09T11:28:36.664411+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-09T11:28:36.198511+05:30",
    "lastUpdatedFormatted": "Oct 09, 2026 at 11:28 AM IST",
    "comparisonPeriod": "Oct 08 \u2013 Oct 09, 2026",
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
                "hxxp://sp14ct-turex-biz-golvin-rastek[.]pages[.]dev/",
                "hxxps://s[.]team-um[.]com/lp/sst-cgj/ibqkztxe/",
                "hxxps://westbrookapartments[.]s3[.]us-east-2[.]amazonaws[.]com/manager/westbrookapartments[.]html",
                "hxxps://vineeey[.]github[.]io/Netflix-Clone/browse/",
                "hxxps://teams-online[.]com/l/meetup-join/19:meeting_MDRhOTg4ZTAtYTcxOC00OGY5LWI2YmYtNjE4N2U0YjQ2ZWY3@thread[.]v2/0?errorCode=CLIENT_UPDATE_REQUIRED"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 980,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 980,
                "newInLastHour": 76,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2524ca7fb873708b0e994ca5f6f18db95fcd5bc59c7e54eb5426b91658759142",
                " \"ce5e8dde18aef81faf1afb127da44e470d512f5f4f6a0d8d100361ba818fc043",
                " \"cf90ad8eef1b73e674f5dbbc12f8bbc4ee0ebc2b9485ddf5ef3cf5ce863f5333",
                " \"e292d65b134653448ef4bcad23eaae8b08abefcbfcd360c3f0cd74adfee33495",
                " \"84fd7e7de84bf9080ec938f944b81807faa769ab2e27a4d0a5f8596ff6dc0072"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1669,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1669,
                "newInLastHour": 16,
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
                "1[.]10[.]206[.]21",
                "1[.]12[.]229[.]231",
                "1[.]13[.]156[.]8",
                "1[.]15[.]14[.]29",
                "1[.]193[.]58[.]33"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4629,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4629,
                "newInLastHour": 4629,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]192[.]95",
                "1[.]14[.]240[.]247",
                "1[.]145[.]25[.]235",
                "1[.]160[.]214[.]25"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 32721,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 32721,
                "newInLastHour": 32721,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://113[.]230[.]51[.]234:35025/bin[.]sh",
                "hxxp://105[.]225[.]46[.]193:36959/bin[.]sh",
                "hxxp://182[.]123[.]192[.]144:51851/i",
                "hxxp://182[.]120[.]3[.]227:56821/bin[.]sh",
                "hxxp://222[.]141[.]112[.]238:57491/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6449,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6449,
                "newInLastHour": 5768,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"habysilo[.]workers[.]dev\"",
                " \"mariquillalime[.]workers[.]dev\"",
                " \"ski[.]blacklabelfremont[.]com\"",
                " \"hxxps://tg-warnlogs[.]club/\"",
                " \"hxxps://warnlogs-steal[.]club/\""
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
            "iocCount": 10872,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10872,
                "newInLastHour": 154,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "6355bba335e57be21b44a9ed609f549cb1384167",
                "09a025b75e698c89b1731847a757ccbc00244f42",
                "678674d7911f8cbb945607e91f8f05e7353be1d2",
                "7145cd3c537c8b6f07d27038330303754fd086cd",
                "1ccf99a4deb337e800230280e82782da64384694"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68235,
            "activeSources": 8,
            "criticalAlerts": 44720,
            "activeCampaigns": 295
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33966,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10754,
                "trend": "stable",
                "percentage": -1
            },
            {
                "category": "Botnet",
                "count": 4286,
                "trend": "stable",
                "percentage": 0
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
                "count": 32983,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://180[.]191[.]49[.]27:39520/bin[.]sh",
                    "hxxp://108[.]170[.]136[.]155:50255/bin[.]sh",
                    "hxxp://42[.]52[.]20[.]56:49690/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]15[.]14[.]29",
                    "1[.]179[.]41[.]48",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1655,
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
                "count": 1286,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"49[.]235[.]158[.]141:8080\"",
                    " \"49[.]235[.]158[.]141:80\"",
                    " \"49[.]235[.]158[.]141:443\""
                ]
            },
            {
                "name": " \"unknown_loader\"",
                "count": 864,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"coppertrack[.]cfd\"",
                    " \"zuma789-z[.]com\"",
                    " \"zypupmp[.]xyz\""
                ]
            },
            {
                "name": "Vidar",
                "count": 780,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "0f7363fdd9210d5cdcc0c7fa60a88b4a582fef18",
                    "6bfc8dafb875c3e2ae6476df215805eb15298cbb",
                    "7a9913813778b16a5bf57aeb7dea4c93340c79c0"
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
                "count": 712,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b292d5884328be709c0c79ffd7c82c3fe9846417",
                    "eabc77465bebeb1b8b4980dbaa185cfcf64b4f92",
                    "4768d20d3072a30b168c650b11a9e4d3e1a0dc60"
                ]
            },
            {
                "name": " \"win.pure_rat\"",
                "count": 634,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"46[.]151[.]182[.]67:56003\"",
                    " \"45[.]88[.]91[.]164:56002\"",
                    " \"31[.]57[.]147[.]42:443\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": " \"unknown_stealer\"",
        "totalAttacksThisHour": 58669,
        "lastCalculated": "2026-10-09 11:28 IST"
    }
};
