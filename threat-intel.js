// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-07T16:02:28.008914+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-07T16:02:27.640589+05:30",
    "lastUpdatedFormatted": "May 07, 2026 at 04:02 PM IST",
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
                "hxxp://www[.]watrbx[.]wtf/newlogin",
                "hxxp://gemini[.]200399[.]xyz/",
                "hxxps://txdmv[.]uphsx[.]shop/pay/a_index[.]html/",
                "hxxps://ad-account-authentication-office[.]pages[.]dev/e-zpass-us/about-/",
                "hxxps://www[.]whatsapp[.]blogspot[.]com/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 634,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 634,
                "newInLastHour": 23,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"2ae463a0996f7e2cf0a5dc1f80ae99cbaac3ba741b5cd995deb4963e6d601517",
                " \"4f6037c0bb675b6edc1a669ef92b441d338299c7b1ab49eba54620b7237fc3b9",
                " \"7cc6073721530ad94384dfff91946daa0a5fdcc2d2d222bd89445467fdfe1c3e",
                " \"f010bf8b92892e8dee379a34ec1517f041e783af661334805ff15af00b752dc4",
                " \"90a5d22afbc60b23b8e202fe61e8284057850617ab1f6f7eb5298cb05970ec79"
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
                "newInLastHour": 33,
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
                "1[.]192[.]179[.]247",
                "1[.]193[.]63[.]103",
                "1[.]193[.]63[.]116",
                "1[.]193[.]63[.]132",
                "1[.]193[.]63[.]176"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3601,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3601,
                "newInLastHour": 3601,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]162[.]247[.]201",
                "1[.]20[.]186[.]129",
                "1[.]214[.]42[.]172",
                "1[.]222[.]42[.]237"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27911,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27911,
                "newInLastHour": 27911,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxp://115[.]61[.]10[.]252:44778/bin[.]sh",
                "hxxp://110[.]36[.]77[.]35:50284/i",
                "hxxps://syskeys[.]openlinksys[.]lat/draw-msft-cl0ud-acc-trust7934/gettwo[.]dll",
                "hxxp://119[.]115[.]119[.]45:53741/i",
                "hxxp://61[.]137[.]154[.]63:59794/i"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1137,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1137,
                "newInLastHour": 1129,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"syskeys[.]openlinksys[.]lat\"",
                " \"wornod[.]qen2virex[.]lat\"",
                " \"netmans[.]datarunkey[.]lat\"",
                " \"steadymeasure[.]qen2virex[.]lat\"",
                " \"tcpcons[.]datarunkey[.]lat\""
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
            "iocCount": 9662,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9662,
                "newInLastHour": 81,
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
            "totalIndicators": 56159,
            "activeSources": 8,
            "criticalAlerts": 38009,
            "activeCampaigns": 188
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28449,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9560,
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
                "count": 239,
                "trend": "down",
                "percentage": -17
            }
        ],
        "targetedSectors": [
            {
                "name": "General",
                "percentage": 84
            },
            {
                "name": "Tech",
                "percentage": 14
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
                "count": 27799,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://vmlists[.]chemistry5till[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp",
                    "hxxps://vmlists[.]chemistry5till[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp",
                    "hxxps://metalts[.]srvappsite[.]lat/draw-msft-cl0ud-acc-trust7934/gettwo[.]dll"
                ]
            },
            {
                "name": "CINS Threat List",
                "count": 15000,
                "types": [
                    "ip"
                ],
                "sampleIndicators": [
                    "1[.]180[.]183[.]158",
                    "1[.]192[.]179[.]247",
                    "1[.]193[.]63[.]176"
                ]
            },
            {
                "name": "Spamhaus DROP List",
                "count": 1593,
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
                "count": 1408,
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
                "count": 796,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"usrgrps[.]chemistry5till[.]lat\"",
                    " \"apidocs[.]srvappsite[.]lat\"",
                    " \"optwebs[.]chemistry5till[.]lat\""
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
                "count": 552,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "272e76f605bec1da1ea719df8dc0e7269de7d44e",
                    "f58ffe7484653b53cea539b23da25bc8eeeb2c05",
                    "2ebb8f663f93eb9c8f169cc09a86f6dba1c85584"
                ]
            },
            {
                "name": "Vidar",
                "count": 497,
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
                "name": "OffLoader",
                "count": 395,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "b977e869e493f70b3e7914a1eaa6abe2cc1ea04a",
                    "e7af95eaaa4c87398f4c4c80a66972f342bb3328",
                    "037598803e2603499edbf7275e43f7dd82abd8f3"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48083,
        "lastCalculated": "2026-05-07 16:02 IST"
    }
};
