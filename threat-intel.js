// Auto-Generated Threat Intel (Multi-Vendor Dashboard)
// Updated: 2026-05-06T15:56:04.107071+05:30 IST
// Sources: OpenPhish, Malware Bazaar, Spamhaus DROP, CINS Army, Blocklist.de, URLhaus, ThreatFox, Feodo Tracker, SSL Blacklist
// NOTE: Full IOC lists are stored in GitHub Pages (ioc-data/) and loaded on-demand

window.threatIntelData = {
    "lastUpdated": "2026-05-06T15:56:03.786187+05:30",
    "lastUpdatedFormatted": "May 06, 2026 at 03:56 PM IST",
    "comparisonPeriod": "May 05 \u2013 May 06, 2026",
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
                "hxxps://netflix-clone-eta-six[.]vercel[.]app/",
                "hxxps://amazon-clone-ruby-eight[.]vercel[.]app/",
                "hxxps://ketanchaturvedi03[.]github[.]io/Netflix-Clone/",
                "hxxps://raysu929[.]github[.]io/facebook-sign-up-form/",
                "hxxps://emanwebdv[.]github[.]io/EPICODE_M3-W4D4/"
            ]
        },
        "Malware Bazaar": {
            "description": "Recent malware samples with hashes and URLs. Tracks active malware distribution from abuse.ch community.",
            "website": "https://bazaar.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 620,
            "iocDataUrl": "https://thehgtech.com/ioc-data/malware-bazaar.json",
            "stats": {
                "total": 620,
                "newInLastHour": 66,
                "lastUpdate": "just now"
            },
            "types": [
                "hash"
            ],
            "sampleIndicators": [
                " \"89f9f4fac3854cfd0cdec46a5a6b7f605df4a65d7c4745fb7f3dde79cc5c2d35",
                " \"35fc8d052210b699657e5e97fb0063adee49505e33eea5806cb7e142257d0784",
                " \"28f4dd61677c87df05687f9bf0e7323700b4a264ea56af06a74a475bd0c6239f",
                " \"188da2b8c612b99e655d0cacfa8abf8ae9c5c29b050bee869b37b9d3b9d6dbf4",
                " \"ef00da7a789bb7bbb1a8e63aea3476ca8a840c23715678e00ef283c1b4a4cd9a"
            ]
        },
        "Spamhaus DROP": {
            "description": "Don't Route Or Peer - hijacked/leased IP ranges controlled by criminals. Industry-standard malicious IP blocklist.",
            "website": "https://www.spamhaus.org/",
            "updateFrequency": "Daily",
            "iocCount": 1576,
            "iocDataUrl": "https://thehgtech.com/ioc-data/spamhaus-drop.json",
            "stats": {
                "total": 1576,
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
                "1[.]10[.]247[.]225",
                "1[.]11[.]228[.]4",
                "1[.]161[.]57[.]96",
                "1[.]180[.]183[.]158",
                "1[.]183[.]41[.]171"
            ]
        },
        "Blocklist.de": {
            "description": "IPs conducting SSH brute-force attacks. Community-reported attackers targeting SSH services.",
            "website": "https://www.blocklist.de/",
            "updateFrequency": "Hourly",
            "iocCount": 3355,
            "iocDataUrl": "https://thehgtech.com/ioc-data/blocklist-de.json",
            "stats": {
                "total": 3355,
                "newInLastHour": 3355,
                "lastUpdate": "just now"
            },
            "types": [
                "ip"
            ],
            "sampleIndicators": [
                "1[.]0[.]164[.]165",
                "1[.]116[.]61[.]217",
                "1[.]13[.]22[.]203",
                "1[.]162[.]247[.]201",
                "1[.]214[.]117[.]218"
            ]
        },
        "URLhaus": {
            "description": "Malware distribution URLs from URLhaus. Tracks active malware hosting sites and payload delivery infrastructure.",
            "website": "https://urlhaus.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 27631,
            "iocDataUrl": "https://thehgtech.com/ioc-data/urlhaus.json",
            "stats": {
                "total": 27631,
                "newInLastHour": 27631,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                "hxxps://hgt3[.]7toralex[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp",
                "hxxps://cpupros[.]sixunzip[.]surf/draw-msft-cl0ud-acc-trust7934/gettwo[.]dll",
                "hxxps://splitfleet[.]7toralex[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp",
                "hxxps://opsmgrs[.]sixunzip[.]surf/draw-msft-cl0ud-acc-trust7934/gettwo[.]dll",
                "hxxps://vel-nexon[.]7toralex[.]lat/sh1ne-apps-testsh-zec833-lives7z/put34b[.]camp"
            ]
        },
        "ThreatFox": {
            "description": "Multi-type IOC feed from ThreatFox. Includes IPs, domains, URLs, and hashes with malware family attribution.",
            "website": "https://threatfox.abuse.ch/",
            "updateFrequency": "Real-time",
            "iocCount": 1777,
            "iocDataUrl": "https://thehgtech.com/ioc-data/threatfox.json",
            "stats": {
                "total": 1777,
                "newInLastHour": 1766,
                "lastUpdate": "just now"
            },
            "types": [
                "url"
            ],
            "sampleIndicators": [
                " \"hgt3[.]7toralex[.]lat\"",
                " \"cpupros[.]sixunzip[.]surf\"",
                " \"havelbeenpwned[.]net\"",
                " \"hxxps://activebridgehub[.]top/metrics/health-build[.]php\"",
                " \"activebridgehub[.]top\""
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
            "iocCount": 9625,
            "iocDataUrl": "https://thehgtech.com/ioc-data/ssl-blacklist.json",
            "stats": {
                "total": 9625,
                "newInLastHour": 2,
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
            "totalIndicators": 56476,
            "activeSources": 8,
            "criticalAlerts": 37712,
            "activeCampaigns": 188
        },
        "topThreats": [
            {
                "category": "Malware",
                "count": 28073,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "C2",
                "count": 9639,
                "trend": "stable",
                "percentage": 0
            },
            {
                "category": "Botnet",
                "count": 349,
                "trend": "stable",
                "percentage": 9
            },
            {
                "category": "Phishing",
                "count": 339,
                "trend": "stable",
                "percentage": 0
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
                "count": 27497,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    "hxxp://110[.]37[.]27[.]87:60233/bin[.]sh",
                    "hxxps://ftpsrvs[.]infinitynodesys[.]surf/sh5hne-c8b9b4-sskjy-znq2k2of-ybay3z/usr294-verif[.]confirm",
                    "hxxps://ioflows[.]plsqlnew[.]surf/kiss-m0dem-defndr-myrai-sdf934/kwtor[.]dll"
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
                    "1[.]180[.]183[.]158",
                    "1[.]193[.]63[.]246"
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
                "count": 1409,
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
                "count": 874,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"ftpsrvs[.]infinitynodesys[.]surf\"",
                    " \"ioflows[.]plsqlnew[.]surf\"",
                    " \"libsyss[.]infinitynodesys[.]surf\""
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
                "count": 679,
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
                "name": " \"unknown\"",
                "count": 534,
                "types": [
                    "url"
                ],
                "sampleIndicators": [
                    " \"hxxps://www[.]bursanehirteknik[.]com/\"",
                    " \"hxxps://www[.]refinishfirst[.]net/\"",
                    " \"hxxps://caliphlebotomy[.]com/\""
                ]
            },
            {
                "name": "Vidar",
                "count": 521,
                "types": [
                    "ssl-cert"
                ],
                "sampleIndicators": [
                    "82f19aac31fa0b5c38858af039bc9b0133424046",
                    "fcf4598502929f58a832dd6aa1fba567340e504a",
                    "117c5e01959e7e48153743a519723339bd2e0825"
                ]
            }
        ]
    },
    "snapshotMetrics": {
        "topAttackVector": "Malicious URLs",
        "mostTargetedRegion": "North America",
        "fastestRisingThreat": "SSH Attacks",
        "totalAttacksThisHour": 48125,
        "lastCalculated": "2026-05-06 15:56 IST"
    }
};
