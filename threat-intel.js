// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-07T02:49:06.078493+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-07T02:49:05.703411+05:30",
    "lastUpdatedFormatted": "May 07, 2026 at 02:49 AM IST",
    "comparisonPeriod": "May 06 \u2013 May 07, 2026",
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
                "hxxp://shopee2349[.]blogspot[.]com/",
                "hxxp://aniketbhujad06[.]github[.]io/netfilx-clone",
                "hxxp://priyanshisingh0210[.]github[.]io/Netflix-Clone",
                "hxxp://sure-chandini[.]github[.]io/sample",
                "hxxp://bafkreicsvwtgwhy5bpcajytwbwkrd23yquvf75un33gdfuq4gkq67uau6u[.]ipfs[.]dweb[.]link/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 671,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 671,
                "newInLastHour": 19,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"eead126f579323883adaee039a9c46ebc855dbd21d399c35ef746266bfecffd8",
                " \"e64d909993647ed17312cea32f60ec65d71dd440ac126d2360aaeeaaf72f7cc1",
                " \"602fb8fcee0f027bf701813de1b9f637c78b5a25c6e2e70a7bc64f558cc712dc",
                " \"7d1aaf2bcfcf46cca7a584c92bc50c56cdd44ca67ee136c1939837ab26369a80",
                " \"ceaf050a4da26a8198198b570407ed8fef46e528f740115faeac45f28e821032"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1626,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1626,
                "newInLastHour": 3,
                "lastUpdate": "just now"
            },
            "types": [
                "ip-range"
            ],
            "sampleIndicators": [
                "1.10.16.0/20",
                "1.19.0.0/16",
                "1.32.128.0/18",
                "2.56.192.0/22",
                "2.57.122.0/24"
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
                "1[.]11[.]228[.]4",
                "1[.]141[.]16[.]115",
                "1[.]177[.]63[.]24",
                "1[.]193[.]63[.]116",
                "1[.]193[.]63[.]197"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3785,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3785,
                "newInLastHour": 3785,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]162[.]247[.]201",
                "1[.]214[.]117[.]218",
                "1[.]214[.]197[.]163"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 28055,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 28055,
                "newInLastHour": 28055,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://apiopss[.]filipen-typograp[.]lat/draw-msft-cl0ud-acc-trust7934/gettwo[.]dll",
                "hxxps://libsyss[.]tavro6xel[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp",
                "hxxps://logbins[.]filipen-typograp[.]lat/draw-msft-cl0ud-acc-trust7934/gettwo[.]dll",
                "hxxp://87[.]121[.]84[.]23///arm5",
                "hxxp://39[.]77[.]69[.]225:35719/bin[.]sh"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1608,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1608,
                "newInLastHour": 1598,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"gitlabh[.]filipen-typograp[.]lat\"",
                " \"ftpsrvs[.]tavro6xel[.]lat\"",
                " \"apiopss[.]filipen-typograp[.]lat\"",
                " \"libsyss[.]tavro6xel[.]lat\"",
                " \"logbins[.]filipen-typograp[.]lat\""
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
            "iocCount": 9663,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9663,
                "newInLastHour": 89,
                "lastUpdate": "just now"
            },
            "types": [
                "ssl-cert"
            ],
            "sampleIndicators": [
                "275d98e8ac40fa51490a1982fd621954d6ffe4c1",
                "642658f7ab86668339d1f98c7fb6a4200589db02",
                "5ee1e0ab5f0782e83d62722e9a7ee91062102652",
                "c56ac80a032ff319463850125369cc514e83ed59",
                "cce12866188dc393f3c4e151caf38e32543a9c65"
            ]
        }
    },
    "overview": [],
    "dailySummary": {
        "stats": {
            "totalIndicators": 56730,
            "activeSources": 8,
            "criticalAlerts": 38135,
            "activeCampaigns": 190
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28583,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9552,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 283,
                "trend": "stable",
                "percentage": 1
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 84
            },
            {
                "name": "Tech",
                "percentage": 15
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
                "count": 27941,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxps://x8jh7qqg[.]die-reformer[.]digital/?ublib=NkpswEsUBXSjjXIp",
                    "hxxp://61[.]53[.]193[.]246:50581/bin[.]sh",
                    "hxxp://tmpdirs[.]qen9varol[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]11[.]228[.]4",
                    "1[.]141[.]16[.]115",
                    "1[.]161[.]57[.]96"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1623,
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
                "count": 1407,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "9833a3a7e27800d994a2924baf7a664dfff96e8c",
                    "eb1d7370d422c478efcaad0a0c7c2a7baacc2455",
                    "5b20fb9d9a21e7a5d4be3b3a83063e9b3172d35d"
                ]
            },
            {
                "name": " \"js.clearfake\"",
                "count": 849,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"cmdsets[.]1zorelin[.]lat\"",
                    " \"optwebs[.]clampe7outback[.]lat\"",
                    " \"x8jh7qqg[.]die-reformer[.]digital\""
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
                "count": 674,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "c47bcbcbe0b1c474542c7fdc233ec68ffb4dcf14",
                    "a08099ae4318bfc81af69fd382081262cc4e9487",
                    "bb085af0610557f877683616d87b7345b59c4f54"
                ]
            },
            {
                "name": "LummaStealer",
                "count": 554,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "ab7f083d77dc2b1b71c0aec9a417e0a5a036a5f9",
                    "7ce02a4df627573696141e40970ef60e246f9f3f"
                ]
            },
            {
                "name": "Vidar",
                "count": 508,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "275d98e8ac40fa51490a1982fd621954d6ffe4c1",
                    "82f19aac31fa0b5c38858af039bc9b0133424046",
                    "fcf4598502929f58a832dd6aa1fba567340e504a"
                ]
            },
            {
                "name": " \"unknown\"",
                "count": 474,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxp://114[.]132[.]190[.]121:8888/supershell/login/\"",
                    " \"hxxps://truitpix9871[.]world/ext[.]f66368c3907c[.]js\"",
                    " \"hxxps://truitpix9871[.]world/ext-b[.]1c60f323a607[.]js\""
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "malware_download",
        "totalAttacksThisHour": 48854,
        "lastCalculated": "2026-05-07 02:49 IST"
    }
};
