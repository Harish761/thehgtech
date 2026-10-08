// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-09T05:00:48.237568+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-09T05:00:47.847630+05:30",
    "lastUpdatedFormatted": "Oct 09, 2026 at 05:00 AM IST",
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
                "hxxps://usps-email[.]com/",
                "hxxp://trusted-connection-anchor-182fu9ada8[.]s3[.]eu-west-1[.]amazonaws[.]com/gbp40plrdgwf5icw9h3z[.]html",
                "hxxps://office[.]biogeen[.]sbs/common/federation/oauth2msa",
                "hxxp://inregisterworkshop[.]com/",
                "hxxp://ebqprupn[.]biogeen[.]sbs/oauth20_authorize[.]srf?scope=openid%20profile%20email%20offline_access"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 957,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 957,
                "newInLastHour": 38,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"7f1db334fd3302cf98dd4afddf6f90e98e2a496fe7e86bf1832b89d02f3d73c3",
                " \"ad7ae1df63dc9f6ee4eabbeb4e9c0f98b2a1b1d69ad8bde9b564e998678310c4",
                " \"13608aa205e934e3e0b3ac504e1589a41285f9197f6f53be01c2bc59f46b6837",
                " \"ef93eae26bdd10fbc5412d5b07706cd91dfe92166cc23cace3901350ac9a92b5",
                " \"3df0cc764976a4ca25b7959d53a0d432d165a57c381d08679357362be006c8f1"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1655,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1655,
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
                "1[.]15[.]14[.]29",
                "1[.]179[.]41[.]48",
                "1[.]192[.]129[.]106",
                "1[.]193[.]63[.]3",
                "1[.]20[.]172[.]88"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4686,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4686,
                "newInLastHour": 4686,
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
            "iocCount": 32983,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 32983,
                "newInLastHour": 32983,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://180[.]191[.]49[.]27:39520/bin[.]sh",
                "hxxp://108[.]170[.]136[.]155:50255/bin[.]sh",
                "hxxp://42[.]52[.]20[.]56:49690/i",
                "hxxp://91[.]92[.]242[.]236/files-129312398/files/file_7d6e0a8ed54f5bd4[.]exe",
                "hxxp://112[.]238[.]27[.]166:50497/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6559,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6559,
                "newInLastHour": 5869,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"qokomuqi[.]workers[.]dev\"",
                " \"ec2-16-146-96-209[.]us-west-2[.]compute[.]amazonaws[.]com\"",
                " \"ec2-44-242-253-11[.]us-west-2[.]compute[.]amazonaws[.]com\"",
                " \"ec2-54-69-124-190[.]us-west-2[.]compute[.]amazonaws[.]com\"",
                " \"ec2-184-33-142-175[.]us-west-2[.]compute[.]amazonaws[.]com\""
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
                "newInLastHour": 9,
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
            "totalIndicators": 68320,
            "activeSources": 8,
            "criticalAlerts": 44830,
            "activeCampaigns": 296
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 33931,
                "trend": "stable",
                "percentage": 1
            },
            {
                "category": "C2",
                "count": 10899,
                "trend": "stable",
                "percentage": 0
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
                "count": 32973,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]229[.]175[.]66:55978/bin[.]sh",
                    "hxxp://115[.]48[.]144[.]79:58929/i",
                    "hxxp://103[.]111[.]23[.]12:49200/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]13[.]156[.]8",
                    "1[.]179[.]41[.]48",
                    "1[.]192[.]129[.]106"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1671,
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
                "count": 934,
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
                "count": 818,
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
                "count": 714,
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
        "fastestRisingThreat": " \"js.iclickfix\"",
        "totalAttacksThisHour": 58890,
        "lastCalculated": "2026-10-09 05:00 IST"
    }
};
