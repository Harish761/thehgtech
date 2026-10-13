// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-10-13T07:28:34.494588+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-10-13T07:28:34.073941+05:30",
    "lastUpdatedFormatted": "Oct 13, 2026 at 07:28 AM IST",
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
            "iocCount": 1026,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 1026,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"63e1b2124435269b289dc072e620cb53d5102ab9ddf1b1b3da630e95ef5ba298",
                " \"e0aadc60a16bb62a0c6160755b49b6d78e8e2ba3272db79f0dfc55fba729a36d",
                " \"f8510553bec5554f6c23a4bb13b14412adaff83a470b937b5cf92e5f29ac99b4",
                " \"17c43b97786f50839e027fa4aea98ffe176d6af29754f47ebf0b3680331c959f",
                " \"d985a9a30132be160ccca35e97f24c3b6f3829175d9362dc5ab7b53eff95b541"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1672,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1672,
                "newInLastHour": 2,
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
                "1[.]192[.]129[.]106",
                "1[.]193[.]58[.]33",
                "1[.]20[.]173[.]155",
                "1[.]215[.]138[.]43",
                "1[.]24[.]16[.]116"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 4293,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 4293,
                "newInLastHour": 4293,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]14[.]240[.]247",
                "1[.]2[.]225[.]235",
                "1[.]214[.]214[.]114",
                "1[.]238[.]106[.]229"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 33568,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 33568,
                "newInLastHour": 33568,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://1[.]61[.]203[.]231:46379/bin[.]sh",
                "hxxp://60[.]23[.]239[.]109:44110/i",
                "hxxp://222[.]141[.]133[.]234:50577/bin[.]sh",
                "hxxp://27[.]193[.]51[.]129:42610/i",
                "hxxp://182[.]124[.]12[.]142:54495/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 6421,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 6421,
                "newInLastHour": 5684,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"www[.]gtw[.]kiwi[.]nz\"",
                " \"jokekipi[.]workers[.]dev\"",
                " \"hxxps://te[.]666iapk[.]net/gm\"",
                " \"hxxps://te[.]666iapk[.]net/gm/\"",
                " \"hxxps://te[.]666iapk[.]net/rr\""
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
            "iocCount": 10956,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 10956,
                "newInLastHour": 24,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "11cfb1e85c316e9b9785c6778bc077bb04093dfd",
                "c389945d4fc75250b291953e0abad0662dd9ce7d",
                "24ec954313877b212b522682aef606180ff6f343",
                "515574d4dc4957fbd0043d3a4269485384e504e7",
                "51f9d6339bfdb9321630392913941e04d921cf7d"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 68910,
            "activeSources": 8,
            "criticalAlerts": 45536,
            "activeCampaigns": 287
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 34617,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 10919,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 5119,
                "trend": "stable",
                "percentage": 4
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
                "count": 33555,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://42[.]230[.]34[.]249:45500/i",
                    "hxxp://42[.]231[.]174[.]164:60965/i",
                    "hxxp://115[.]56[.]96[.]117:37445/i"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]12[.]229[.]231",
                    "1[.]14[.]149[.]30",
                    "1[.]145[.]29[.]140"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1674,
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
                "count": 1458,
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
                "count": 829,
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
                "count": 719,
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
                "count": 637,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://m[.]6r6r6[.]org/fg\"",
                    " \"hxxps://m[.]6r6r6[.]org/ax\"",
                    " \"hxxps://m[.]6r6r6[.]org/yi/\""
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
        "totalAttacksThisHour": 58900,
        "lastCalculated": "2026-10-13 07:28 IST"
    }
};
